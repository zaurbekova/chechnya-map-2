import { useParams, Link } from 'react-router-dom';
import { locations, CATEGORIES, AREAS } from '../data/locations';

function LocationDetail() {
  const { id } = useParams();
  const loc = locations.find((l) => l.id === id);

  if (!loc) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Объект не найден</h1>
        <Link to="/" className="text-blue-600 hover:underline">
          ← Вернуться на карту
        </Link>
      </div>
    );
  }

  const category = CATEGORIES[loc.category];
  const area = AREAS.find((a) => a.id === loc.area);

  const image = loc.details?.image || loc.image || null;
  const history = loc.details?.history || loc.history || null;
  const architecture = loc.details?.architecture || null;
  const facts = loc.details?.facts || null;
  const fullDescription = loc.fullDescription || loc.description || '';

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Картинка */}
        <div className="relative h-64 md:h-80 bg-gray-200">
          {image ? (
            <img
              src={image}
              alt={loc.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Изображение отсутствует
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span
              className="text-sm font-semibold px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: category.color }}
            >
              {category.label}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <Link
            to="/"
            className="inline-block text-sm text-blue-600 hover:underline mb-4"
          >
            ← Вернуться на карту
          </Link>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {loc.number ? `№ ${loc.number}. ` : ''}{loc.title}
          </h1>
          {area && (
            <p className="text-sm text-gray-500 mb-1">Район: {area.name}</p>
          )}
          {loc.village && (
            <p className="text-sm text-gray-500 mb-4">Село: {loc.village}</p>
          )}

          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Описание</h2>
            <p className="text-gray-700 leading-relaxed">{fullDescription}</p>
          </section>

          {history && (
            <section className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">История</h2>
              <p className="text-gray-700 leading-relaxed">{history}</p>
            </section>
          )}

          {architecture && (
            <section className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Архитектура</h2>
              <p className="text-gray-700 leading-relaxed">{architecture}</p>
            </section>
          )}

          {facts && (
            <section className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Факты</h2>
              <p className="text-gray-700 leading-relaxed">{facts}</p>
            </section>
          )}

          {(loc.taip || loc.tukhum) && (
            <section className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Тайп / тукхум</h2>
              <p className="text-gray-700">
                {loc.taip && <span>Тайп: {loc.taip}. </span>}
                {loc.tukhum && <span>Тукхум: {loc.tukhum}.</span>}
              </p>
            </section>
          )}

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Координаты</h2>
            <p className="text-gray-600">
              {loc.coords[0]}, {loc.coords[1]}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default LocationDetail;