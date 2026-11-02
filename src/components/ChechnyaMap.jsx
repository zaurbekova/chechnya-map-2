import { useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Circle } from 'react-leaflet';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import { locations, CATEGORIES, AREAS, VILLAGES_BY_AREA } from '../data/locations';

// 1. Обычная круглая метка с номером для объектов
const createIcon = (color, number) =>
  L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background-color: ${color};
      width: 26px;
      height: 26px;
      border-radius: 50%;
      border: 2px solid white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      color: white;
      font-size: 12px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
    ">${number ?? ''}</div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    popupAnchor: [0, -13],
  });

const iconFor = (loc, number) =>
  createIcon(CATEGORIES[loc.category].color, number);

// 2. Красивая метка-булавка с гербом района
const createPinGerbIcon = (imageUrl) =>
  L.divIcon({
    className: 'custom-gerb-pin',
    html: `
      <div style="position: relative; width: 60px; height: 75px; display: flex; flex-direction: column; align-items: center;">
        <!-- Белый круг с гербом -->
        <div style="
          width: 56px;
          height: 56px;
          background-color: white;
          border: 3px solid #DC2626;
          border-radius: 50%;
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          z-index: 2;
        ">
          <img src="${imageUrl}" style="width: 85%; height: 85%; object-fit: contain;" alt="Герб" />
        </div>
        <!-- Красный острый хвостик -->
        <div style="
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 22px solid #DC2626;
          margin-top: -2px;
          filter: drop-shadow(0 4px 3px rgba(0,0,0,0.3));
          z-index: 1;
        "></div>
      </div>
    `,
    iconSize: [60, 80],
    iconAnchor: [30, 80], // Низ хвостика указывает ровно на координаты
    popupAnchor: [0, -75],
  });

function MapController({ center, zoom }) {
  const map = useMap();
  if (center && zoom) {
    map.setView(center, zoom);
  }
  return null;
}

function ChechnyaMap() {
  const [selectedArea, setSelectedArea] = useState(null);
  const [expandedArea, setExpandedArea] = useState(null);
  const [selectedVillage, setSelectedVillage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategories, setActiveCategories] = useState(
    Object.keys(CATEGORIES)
  );

  // Данные для гербов районов. 
  // Названия картинок в точности соответствуют вашему скриншоту!
   const areaGerbs = [
    { id: 'gerb-achkhoy', name: 'Ачхой-Мартановский район', coords: [43.18, 45.28], image: '/images/achkhoy.jpg' },
    { id: 'gerb-vedeno', name: 'Веденский район', coords: [42.96, 46.10], image: '/images/vedeno.jpg' },
    { id: 'gerb-grozny', name: 'Грозненский район', coords: [43.31, 45.69], image: '/images/grozny.jpg' },
    { id: 'gerb-gudermes', name: 'Гудермесский район', coords: [43.35, 46.10], image: '/images/gudermes.jpg' },
    { id: 'gerb-itum-kali', name: 'Итум-Калинский район', coords: [42.73, 45.57], image: '/images/itumkali.gif' },
    { id: 'gerb-kurchaloy', name: 'Курчалоевский район', coords: [43.20, 46.08], image: '/images/kurchaloy.jpg' },
    { id: 'gerb-nadterechny', name: 'Надтеречный район', coords: [43.68, 45.05], image: '/images/nadterechny.jpg' },
    { id: 'gerb-naursky', name: 'Наурский район', coords: [43.65, 45.31], image: '/images/naursky.gif' },
    { id: 'gerb-nozhay', name: 'Ножай-Юртовский район', coords: [43.05, 46.38], image: '/images/nozhay.jpg' },
    { id: 'gerb-sernovodsky', name: 'Серноводский район', coords: [43.31, 45.15], image: '/images/sernovodsky.png' },
    { id: 'gerb-urus-martan', name: 'Урус-Мартановский район', coords: [43.12, 45.54], image: '/images/urusmartan.png' },
    { id: 'gerb-shali', name: 'Шалинский район', coords: [43.15, 45.90], image: '/images/shali.png' },
    { id: 'gerb-sharoy', name: 'Шаройский район', coords: [42.63, 45.81], image: '/images/sharoy.gif' },
    { id: 'gerb-shatoy', name: 'Шатойский район', coords: [42.87, 45.70], image: '/images/gerb-shatoy.png' }, 
    { id: 'gerb-shchelkov', name: 'Шелковской район', coords: [43.50, 46.20], image: '/images/shchelkov.jpg' },
  ];

  const toggleCategory = (key) => {
    setActiveCategories((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim()) {
      setSelectedArea(null);
      setSelectedVillage(null);
    }
  };

  const filteredLocations = useMemo(() => {
    let result = locations;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (loc) =>
          (loc.title || '').toLowerCase().includes(query) ||
          (loc.village || '').toLowerCase().includes(query) ||
          (loc.description || '').toLowerCase().includes(query)
      );
    }

    if (selectedArea) {
      result = result.filter((loc) => loc.area === selectedArea.id);
    }

    if (selectedVillage) {
      result = result.filter(
        (loc) =>
          loc.village &&
          loc.village.toLowerCase().includes(selectedVillage.toLowerCase())
      );
    }

    return result.filter((loc) => activeCategories.includes(loc.category));
  }, [selectedArea, selectedVillage, activeCategories, searchQuery]);

  const numberedLocations = useMemo(() => {
    const orderInSource = new Map(locations.map((l, i) => [l.id, i]));
    const sorted = [...filteredLocations].sort(
      (a, b) => orderInSource.get(a.id) - orderInSource.get(b.id)
    );

    const counters = {};
    return sorted.map((loc) => {
      counters[loc.area] = (counters[loc.area] || 0) + 1;
      return { ...loc, displayNumber: counters[loc.area] };
    });
  }, [filteredLocations]);

  const searchTarget = useMemo(() => {
    if (!searchQuery.trim()) return null;
    return numberedLocations[0] || null;
  }, [searchQuery, numberedLocations]);

  const handleAllAreas = () => {
    setSelectedArea(null);
    setSelectedVillage(null);
    setExpandedArea(null);
    setSearchQuery('');
  };

  const handleAreaClick = (area) => {
    setSelectedArea(area);
    setSelectedVillage(null);
  };

  const handleVillageClick = (area, village) => {
    setSelectedArea(area);
    setSelectedVillage(village);
  };

  return (
    <div className="flex h-screen w-full">
      <aside className="w-80 bg-white border-r border-gray-200 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <h1 className="text-lg font-bold text-gray-800 mb-3">Чечня: Карта памяти</h1>
          <input
            type="text"
            placeholder="Поиск места или личности..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Местности
            </h2>
            <button
              onClick={handleAllAreas}
              className={`w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition ${
                !selectedArea && !searchQuery
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Все районы
            </button>

            {AREAS.map((area) => {
              const villages = VILLAGES_BY_AREA[area.id] || [];
              const isExpanded = expandedArea === area.id;
              return (
                <div key={area.id} className="mb-1">
                  <div className="flex items-center">
                    <button
                      onClick={() => handleAreaClick(area)}
                      className={`flex-1 text-left px-3 py-2 rounded-lg text-sm transition ${
                        selectedArea?.id === area.id
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {area.name}
                    </button>
                    {villages.length > 0 && (
                      <button
                        onClick={() => setExpandedArea(isExpanded ? null : area.id)}
                        className="px-2 py-2 text-gray-400 hover:text-gray-600"
                        title="Показать сёла"
                      >
                        {isExpanded ? '▲' : '▼'}
                      </button>
                    )}
                  </div>
                  {isExpanded && villages.length > 0 && (
                    <div className="ml-4 mt-1 space-y-0.5 max-h-48 overflow-y-auto">
                      {villages.map((village) => (
                        <button
                          key={village}
                          onClick={() => handleVillageClick(area, village)}
                          className={`w-full text-left px-2 py-1 text-xs rounded ${
                            selectedVillage === village
                              ? 'bg-blue-50 text-blue-700 font-medium'
                              : 'text-gray-500 hover:bg-gray-50'
                          }`}
                        >
                          {village}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="p-4 border-t border-gray-200">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Слои
            </h2>
            {Object.entries(CATEGORIES).map(([key, { label, color }]) => (
              <label key={key} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 py-1">
                <input
                  type="checkbox"
                  checked={activeCategories.includes(key)}
                  onChange={() => toggleCategory(key)}
                  className="w-4 h-4 rounded text-blue-600"
                />
                <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: color }}></span>
                {label}
              </label>
            ))}
          </div>
        </div>
      </aside>

      <main className="flex-1 relative">
        <MapContainer center={[43.0, 45.8]} zoom={8} scrollWheelZoom={true} className="h-full w-full">
          <MapController
            center={selectedArea?.center || searchTarget?.coords}
            zoom={selectedArea?.zoom || (searchTarget ? 12 : undefined)}
          />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Красивые булавки с гербами (всегда поверх остальных меток) */}
          {areaGerbs.map((gerb) => (
            <Marker
              key={gerb.id}
              position={gerb.coords}
              icon={createPinGerbIcon(gerb.image)}
              zIndexOffset={1000}
            >
              <Popup>
                <div className="text-center font-bold text-base text-gray-800">
                  {gerb.name}
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Красный круг вокруг найденного объекта */}
          {searchTarget && (
            <Circle
              center={searchTarget.coords}
              radius={1500}
              pathOptions={{ color: '#DC2626', fillColor: '#DC2626', fillOpacity: 0.1, weight: 2 }}
            />
          )}

          {/* Синий круг вокруг объектов выбранного села */}
          {selectedVillage && numberedLocations.length > 0 && (
            <Circle
              center={numberedLocations[0].coords}
              radius={2000}
              pathOptions={{ color: '#2563EB', fillColor: '#2563EB', fillOpacity: 0.1, weight: 2 }}
            />
          )}

          {/* Обычные метки объектов */}
          {numberedLocations.map((loc) => (
            <Marker
              key={loc.id}
              position={loc.coords}
              icon={iconFor(loc, loc.displayNumber)}
            >
              <Popup>
                <div className="max-w-xs">
                  <span
                    className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full text-white mb-1"
                    style={{ backgroundColor: CATEGORIES[loc.category].color }}
                  >
                    {CATEGORIES[loc.category].label}
                  </span>
                  <h3 className="font-bold text-base text-gray-900 mt-1 mb-1">
                    № {loc.displayNumber}. {loc.title}
                  </h3>

                  {loc.village && (
                    <p className="text-xs text-gray-500 mb-1">
                      <span className="font-semibold">Село:</span> {loc.village}
                    </p>
                  )}

                  {(loc.taip || loc.tukhum) && (
                    <div className="text-xs text-gray-500 mb-2 space-y-0.5">
                      {loc.taip && <p><span className="font-semibold">Тайп:</span> {loc.taip}</p>}
                      {loc.tukhum && <p><span className="font-semibold">Тукхум:</span> {loc.tukhum}</p>}
                    </div>
                  )}

                  <p className="text-sm text-gray-600 leading-relaxed mb-2">{loc.description}</p>
                  <Link
                    to={`/location/${loc.id}`}
                    className="inline-block bg-blue-300 text-black text-xs font-medium px-3 py-1.5 rounded hover:bg-blue-400 transition"
                  >
                    Узнать больше →
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </main>
    </div>
  );
}

export default ChechnyaMap;