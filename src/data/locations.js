export const CATEGORIES = {
  towers: { label: 'Башни', color: '#8B5A2B' },
  events: { label: 'События', color: '#DC2626' },
  people: { label: 'Личности', color: '#2563EB' },
  sights: { label: 'Достопримечательности', color: '#16A34A' },
};

export const AREAS = [
  { id: 'achkhoy', name: 'Ачхой-Мартановский район', center: [43.18, 45.28], zoom: 10 },
  { id: 'vedeno', name: 'Веденский район', center: [42.96, 46.10], zoom: 10 },
  { id: 'grozny', name: 'Грозненский район', center: [43.31, 45.69], zoom: 10 },
  { id: 'gudermes', name: 'Гудермесский район', center: [43.35, 46.10], zoom: 10 },
  { id: 'itum-kali', name: 'Итум-Калинский район', center: [42.73, 45.57], zoom: 10 },
  { id: 'kurchaloy', name: 'Курчалоевский район', center: [43.20, 46.08], zoom: 10 },
  { id: 'nadterechny', name: 'Надтеречный район', center: [43.68, 45.05], zoom: 10 },
  { id: 'naursky', name: 'Наурский район', center: [43.65, 45.31], zoom: 10 },
  { id: 'nozhay', name: 'Ножай-Юртовский район', center: [43.05, 46.38], zoom: 10 },
  { id: 'sernovodsky', name: 'Серноводский район', center: [43.31, 45.15], zoom: 10 },
  { id: 'urus-martan', name: 'Урус-Мартановский район', center: [43.12, 45.54], zoom: 10 },
  { id: 'shali', name: 'Шалинский район', center: [43.15, 45.90], zoom: 10 },
  { id: 'sharoy', name: 'Шаройский район', center: [42.63, 45.81], zoom: 11 },
  { id: 'shatoy', name: 'Шатойский район', center: [42.87, 45.70], zoom: 10 },
  { id: 'shchelkov', name: 'Шелковской район', center: [43.50, 46.20], zoom: 10 },
];

export const VILLAGES_BY_AREA = {
  'achkhoy': ['Ачхой-Мартан', 'Валерик', 'Давыденко', 'Закан-Юрт', 'Катар-Юрт', 'Кулары', 'Новый Шарой', 'Самашки', 'Старый Ачхой', 'Хамби-Ирзи', 'Шаами-Юрт', 'Янди', 'Галанчож'],
  'vedeno': ['Агишбатой', 'Белгатой', 'Беной', 'Ведено', 'Гуни', 'Дарго', 'Дышне-Ведено', 'Верхние Курчали', 'Нижние Курчали', 'Средние Курчали', 'Макажой', 'Махкеты', 'Сельментаузен', 'Тазен-Кала', 'Тевзана', 'Харачой', 'Хаттунино', 'Хой', 'Ца-Ведено', 'Верхнее Ца-Ведено', 'Элистанжи', 'Эрсеной', 'Кезеной'],
  'grozny': ['Горячеисточненская', 'Ильиновская', 'Первомайская', 'Петропавловская', 'Алхан-Кала', 'Беркат-Юрт', 'Виноградное', 'Гунюшки', 'Долинский', 'Майский', 'Газгородок', 'Дружба', 'Набережный', 'Грозный', 'Алды'],
  'gudermes': ['Гудермес', 'Ойсхара', 'Азамат-Юрт', 'Бильтой-Юрт', 'Брагуны', 'Верхний Нойбер', 'Герзель-Аул', 'Гордали-Юрт', 'Дарбанхи', 'Джалка', 'Ишхой-Юрт', 'Кади-Юрт', 'Комсомольское', 'Кошкельды', 'Мелчхи', 'Нижний Нойбер', 'Новый Беной', 'Новый Энгеной', 'Хангиш-Юрт', 'Шуани', 'Энгель-Юрт'],
  'itum-kali': ['Баулой', 'Бугарой', 'Ведучи', 'Гухой', 'Гучум-Кали', 'Зумсой', 'Итум-Кали', 'Кокадой', 'Моцкарой', 'Тазбичи', 'Тусхарой', 'Ушкалой', 'Хилдехарой', 'Цой-Педе', 'Пхакоч', 'Никарой'],
  'kurchaloy': ['Курчалой', 'Аллерой', 'Ахкинчу-Борзой', 'Ахмат-Юрт', 'Бачи-Юрт', 'Гелдаган', 'Джигурты', 'Иласхан-Юрт', 'Майртуп', 'Регита', 'Хиди-Хутор', 'Цоци-Юрт', 'Эникали', 'Ялхой-Мохк'],
  'nadterechny': ['Знаменское', 'Горагорский', 'Бено-Юрт', 'Братское', 'Верхний Наур', 'Гвардейское', 'Зебир-Юрт', 'Калаус', 'Комарово', 'Мекен-Юрт', 'Надтеречное', 'Подгорное'],
  'naursky': ['Наурская', 'Алпатово', 'Ульяновское', 'Чернокозово', 'Рубежное', 'Левобережное', 'Ново-Солёное'],
  'nozhay': ['Ножай-Юрт', 'Айти-Мохк', 'Беной-Мохк', 'Ведено-Гор', 'Гуршнуй', 'Даттах', 'Ишхой-Хутор', 'Кади-Юрт', 'Мехкечи', 'Садой', 'Турты', 'Хутор-Мохк', 'Центарой', 'Юрт-Ой', 'Беной', 'Симсир'],
  'sernovodsky': ['Серноводское', 'Ассиновская', 'Бамут'],
  'urus-martan': ['Урус-Мартан', 'Краснопартизанский', 'Мичурина', 'Алхазурово', 'Алхан-Юрт', 'Гехи', 'Гехи-Чу', 'Гойты', 'Гой-Чу', 'Мартан-Чу', 'Рошни-Чу', 'Старые Атаги', 'Танги-Чу', 'Шалажи', 'Гойское'],
  'shali': ['Шали', 'Герменчук', 'Мескер-Юрт', 'Чири-Юрт', 'Белгатой', 'Дуц-Хутор'],
  'sharoy': ['Шарой', 'Кенхи', 'Хаккой', 'Химой'],
  'shatoy': ['Шатой', 'Борзой', 'Гуни', 'Нихалой', 'Хаккой', 'Чарой', 'Гуш-Керт'],
  'shchelkov': ['Шелковская', 'Червлённая', 'Старогладовская', 'Курдюковская', 'Дубовская', 'Каргалинская', 'Бороздиновская', 'Коби', 'Сары-Су', 'Дади-Юрт'],
};

export const locations = [
  // ==========================================
  // НОЖАЙ-ЮРТОВСКИЙ РАЙОН (с. Беной)
  // ==========================================
  {
    id: 'person-baysangur', area: 'nozhay', village: 'Беной', category: 'people',
    title: 'Байсангур Беноевский', description: 'Один из самых ярких полководцев Кавказской войны, наиб имама Шамиля.',
    coords: [43.05, 46.40], taip: 'Беной', tukhum: 'Нохчмахкахой',
    details: { image: null, history: 'После пленения имама в 1859 году возглавил сопротивление в Чечне. Даже после тяжёлых ранений (потеря глаза, руки, ноги) продолжал сражаться. В феврале 1861 года попал в плен. Казнён в Хасавюрте.', architecture: null, facts: 'В 2022 году в Грозном открыли памятник Байсангуру Беноевскому.' }
  },
  {
    id: 'person-kadyrov-akhmat', area: 'nozhay', village: 'Беной', category: 'people',
    title: 'Ахмат-Хаджи Кадыров (1951–2004)', description: 'Первый Президент Чеченской Республики, Герой России. Родовое село — Беной.',
    coords: [43.05070, 46.40090], taip: 'Беной', tukhum: 'Нохчмахкахой',
    details: { image: null, history: 'Возглавил республику в сложный период, инициировал мирные процессы.', architecture: null, facts: null }
  },
  {
    id: 'person-chinaev', area: 'nozhay', village: 'Беной', category: 'people',
    title: 'Щида Чинаев', description: 'Полковник Русской Императорской армии, офицер 2-й бригады «Дикой дивизии».',
    coords: [43.05140, 46.40180], taip: 'Беной', tukhum: 'Нохчмахкахой',
    details: { image: null, history: 'Участвовал в Первой мировой войне.', architecture: null, facts: null }
  },
  {
    id: 'tower-benoit', area: 'nozhay', village: 'Беной', category: 'towers',
    title: 'Бенойские башни', description: 'Исторические укрепления на территории родового села Беной.',
    coords: [43.05210, 46.40270], taip: 'Беной', tukhum: 'Нохчмахкахой',
    details: { image: null, history: null, architecture: null, facts: null }
  },
  {
    id: 'event-simsim', area: 'nozhay', village: 'Симсир', category: 'events',
    title: 'Восстание 1877–1878 гг.', description: 'Возглавил Алибек-Хаджи Алдамов. Крупное антиколониальное выступление.',
    coords: [43.07, 46.42], taip: null, tukhum: null,
    details: { image: null, history: null, architecture: null, facts: null }
  },
  {
    id: 'person-alibek', area: 'nozhay', village: 'Симсир', category: 'people',
    title: 'Алибек-Хаджи Алдамов', description: 'Имам Северного Кавказа, руководитель восстания 1877–1878 годов.',
    coords: [43.07070, 46.42090], taip: null, tukhum: null,
    details: { image: null, history: 'Родился в 1850 году в ауле Симсир. Казнён в 1878 году.', architecture: null, facts: null }
  },

  // ==========================================
  // ШАЛИНСКИЙ РАЙОН
  // ==========================================
  {
    id: 'person-buibulat', area: 'shali', village: 'Шали', category: 'people',
    title: 'Бейбулат Таймиев', description: 'Военный и политический лидер. Сочетал военный талант с дипломатией: добивался для Чечни внутреннего самоуправления.',
    coords: [43.15, 45.90], taip: 'Билтой', tukhum: 'Нохчмахкахой',
    details: { image: null, history: 'Проводил русско-чеченские мирные переговоры.', architecture: null, facts: null }
  },
  {
    id: 'person-talkhig', area: 'shali', village: 'Шали', category: 'people',
    title: 'Талхиг Шалинский', description: 'Наиб имама Шамиля, командовал округами Шали и Большая Чечня.',
    coords: [43.15070, 45.90090], taip: 'Курчалой', tukhum: 'Нохчмахкахой',
    details: { image: null, history: null, architecture: null, facts: null }
  },
  {
    id: 'person-zelimkhan', area: 'shali', village: 'Шали', category: 'people',
    title: 'Зелимхан Харачоевский', description: 'Известный абрек. Погиб в 1913 году в неравном бою около села Шали.',
    coords: [43.15140, 45.90180], taip: 'Харачой', tukhum: 'Нохчмахкахой',
    details: { image: null, history: 'Совершил побег из Грозненской тюрьмы в 1901 году и ушёл в горы.', architecture: null, facts: 'Памятник в Харачое и в Шали.' }
  },
  {
    id: 'person-khanpasha', area: 'shali', village: 'Шали', category: 'people',
    title: 'Ханпаша Нурадилов', description: 'Командир пулемётного взвода, Герой Советского Союза (посмертно).',
    coords: [43.15210, 45.90270], taip: null, tukhum: null,
    details: { image: null, history: 'Уничтожил более 920 немецких солдат под Сталинградом.', architecture: null, facts: null }
  },
  {
    id: 'sight-shira-yurt', area: 'shali', village: 'Герменчук', category: 'sights',
    title: 'Музей «Шира-Юрт»', description: 'Восстановленный чеченский аул XVIII–XIX веков. На входе — 25-метровая сторожевая башня.',
    coords: [43.15280, 45.90360], taip: null, tukhum: null,
    details: { image: null, history: 'Включает жилые дома, мечеть, мельницу, кузницу, конюшню.', architecture: 'Традиционная чеченская архитектура.', facts: null }
  },
  {
    id: 'event-germenchuk', area: 'shali', village: 'Герменчук', category: 'events',
    title: 'Сожжение Герменчука (1820)', description: 'Во время карательных экспедиций русские войска сожгли село, хотя жители не оказали сопротивления.',
    coords: [43.15350, 45.90450], taip: null, tukhum: null,
    details: { image: null, history: null, architecture: null, facts: null }
  },

  // ==========================================
  // ВЕДЕНСКИЙ РАЙОН
  // ==========================================
  {
    id: 'sight-khoy', area: 'vedeno', village: 'Хой', category: 'sights',
    title: 'Хойский историко-архитектурный комплекс', description: '«Город стражников». Включает жилые и боевые башни, одну из старейших мечетей Чечни.',
    coords: [42.753, 46.132], taip: 'Хой', tukhum: 'Чеберлой',
    details: { image: null, history: 'В 2017 году комплекс реставрировали, сохранив подлинную кладку.', architecture: 'Кладка без раствора. Планировка улиц и дворов повторяет исторический облик.', facts: 'Название «Хой» переводится как «стража».' }
  },
  {
    id: 'waterfall-kharachoy', area: 'vedeno', village: 'Харачой', category: 'sights',
    title: 'Харачойский водопад', description: 'Источник выходит на поверхность в известняковой пещере. В народе называют «Девичья коса».',
    coords: [42.94, 46.02], taip: 'Харачой', tukhum: 'Нохчмахкахой',
    details: { image: null, history: null, architecture: null, facts: 'Рядом установлен памятник Зелимхану Харачоевскому.' }
  },
  {
    id: 'person-zelimkhan-kharachoy', area: 'vedeno', village: 'Харачой', category: 'people',
    title: 'Зелимхан Харачоевский (родина)', description: 'Родился в селе Харачой. Известный абрек.',
    coords: [42.94070, 46.02090], taip: 'Харачой', tukhum: 'Нохчмахкахой',
    details: { image: null, history: null, architecture: null, facts: 'Здесь установлен памятник у родника «Девичья коса».' }
  },
  {
    id: 'event-vedeno', area: 'vedeno', village: 'Ведено', category: 'events',
    title: 'Столица имамата Шамиля', description: 'В середине XIX века Ведено было столицей имамата Шамиля.',
    coords: [42.96, 46.10], taip: null, tukhum: 'Нохчмахкахой',
    details: { image: null, history: 'Позже шейх Узун-Хаджи объявил Ведено столицей Северо-Кавказского эмиратства.', architecture: null, facts: null }
  },
  {
    id: 'event-makazhoy', area: 'vedeno', village: 'Макажой', category: 'events',
    title: 'Духовный центр Чеберлоя', description: 'Село исторически считалось духовным и культурным центром тукхума Чеберлой.',
    coords: [42.96070, 46.10090], taip: null, tukhum: 'Чеберлой',
    details: { image: null, history: null, architecture: null, facts: null }
  },
  {
    id: 'sight-vedeno-fortress', area: 'vedeno', village: 'Дышне-Ведено', category: 'sights',
    title: 'Крепость Ведено', description: 'Русская крепость 1850 года, одна из сохранившихся в Чечне.',
    coords: [42.955, 46.115], taip: null, tukhum: null,
    details: {
      image: '/images/vedeno-fortress.jpg',
      history: 'Крепость возводилась в период Кавказской войны как опорный пункт царских войск в стратегически важном районе. Ведено в середине XIX века было столицей имамата Шамиля, поэтому контроль над этим местом имел ключевое значение. В начале XX века шейх Узун-Хаджи объявил Ведено столицей Северо-Кавказского эмиратства. Сегодня крепость — объект исторического наследия и точка притяжения исследователей Кавказской войны.',
      architecture: 'Сохранились фрагменты земляных валов и рвов, а также остатки каменных строений.',
      facts: 'Построена в 1850 году. Расположена в окрестностях села Ведено.'
    }
  },

  // ==========================================
  // ИТУМ-КАЛИНСКИЙ РАЙОН
  // ==========================================
  {
    id: 'tower-ushkaloy', area: 'itum-kali', village: 'Ушкалой', category: 'towers',
    title: 'Ушкалойские башни-близнецы', description: 'Сторожевые башни XI–XII вв., встроенные в скалу Селин-Лам.',
    coords: [42.78, 45.55], taip: null, tukhum: null,
    details: { image: null, history: 'Контролировали транскавказский путь.', architecture: 'У башен только три стены, а четвёртой и крышей служит скала.', facts: 'Визитная карточка Аргунского ущелья.' }
  },
  {
    id: 'tower-dere', area: 'itum-kali', village: 'Тазбичи', category: 'towers',
    title: 'Башня Дёре', description: '900-летняя башня замкового типа высотой 23 метра.',
    coords: [42.72, 45.56], taip: 'Чантий', tukhum: 'Чантий',
    details: { image: null, history: 'Реставрировалась в 2010 году.', architecture: 'Толстые стены, узкие бойницы, сухая кладка.', facts: 'Вид на Аргунское ущелье.' }
  },
  {
    id: 'tower-nikaroy', area: 'itum-kali', village: 'Никарой', category: 'towers',
    title: 'Никаройская боевая башня', description: 'Один из наиболее сохранившихся средневековых комплексов.',
    coords: [42.70, 45.40], taip: null, tukhum: 'Терлой',
    details: { image: null, history: null, architecture: 'Пятиэтажная боевая башня с пирамидально-ступенчатой кровлей.', facts: null }
  },
  {
    id: 'sight-phakoch', area: 'itum-kali', village: 'Пхакоч', category: 'sights',
    title: 'Замковый комплекс Пхакоч', description: 'Средневековый замковый комплекс (X–XII века).',
    coords: [42.73, 45.57], taip: null, tukhum: null,
    details: { image: null, history: 'В одной из башен устроен музей.', architecture: 'Жилые и боевые башни, водяная мельница.', facts: null }
  },
  {
    id: 'sight-tsoi-pede', area: 'itum-kali', village: 'Цой-Педе', category: 'sights',
    title: 'Цой-Педе («Город мёртвых»)', description: 'Один из крупнейших средневековых некрополей на Кавказе (V–XVII века).',
    coords: [42.68, 45.30], taip: null, tukhum: null,
    details: { image: null, history: 'Десятки наземных и полуподземных склепов, сторожевые башни.', architecture: 'Склепы разной формы, петроглифы.', facts: 'Труднодоступное место у границы.' }
  },

  // ==========================================
  // УРУС-МАРТАНОВСКИЙ РАЙОН
  // ==========================================
  {
    id: 'person-taimasha', area: 'urus-martan', village: 'Гехи', category: 'people',
    title: 'Таймасха Гехинская', description: 'Женщина-военачальница: возглавила отряд мюридов и около десяти лет противостояла царским войскам.',
    coords: [43.12, 45.54], taip: null, tukhum: null,
    details: { image: null, history: 'В 1842 году после боя близ Большой Яндырки её взяли в плен.', architecture: null, facts: null }
  },
  {
    id: 'person-khavadzhi', area: 'urus-martan', village: 'Алхазурово', category: 'people',
    title: 'Хаваджи Магомед-Мирзоев', description: 'Герой Советского Союза (посмертно, 1944). Пулемётчик.',
    coords: [43.12070, 45.54090], taip: null, tukhum: null,
    details: { image: null, history: 'До войны работал учителем и директором школы в Алхазурово. Форсировал Днепр, уничтожил 144 фашиста.', architecture: null, facts: null }
  },
  {
    id: 'sight-dondi-yurt', area: 'urus-martan', village: 'Урус-Мартан', category: 'sights',
    title: 'Музей «Донди-Юрт»', description: 'Частный музей Адама Сатуева с воссозданным фрагментом древнего поселения.',
    coords: [43.12140, 45.54180], taip: null, tukhum: null,
    details: { image: null, history: 'Обширная коллекция подлинных предметов.', architecture: null, facts: null }
  },
  {
    id: 'person-movladi', area: 'urus-martan', village: 'Урус-Мартан', category: 'people',
    title: 'Мовлди Умаров', description: 'Герой Российской Федерации (посмертно, 1996). Командир стрелковой роты.',
    coords: [43.12210, 45.54270], taip: null, tukhum: null,
    details: { image: null, history: 'Вёл бойцов в рукопашную схватку, будучи раненым.', architecture: null, facts: null }
  },
  {
    id: 'event-goyty', area: 'urus-martan', village: 'Гойты', category: 'events',
    title: 'Гойтинское сражение', description: 'Чеченцы отразили карательный рейд войск Деникина.',
    coords: [43.12280, 45.54360], taip: null, tukhum: null,
    details: { image: null, history: null, architecture: null, facts: null }
  },
  {
    id: 'event-alkhan-yurt', area: 'urus-martan', village: 'Алхан-Юрт', category: 'events',
    title: 'Антиденикинское восстание (1919)', description: 'Село стало центром мощного восстания. В боях с белоказаками погибли сотни алханюртовцев.',
    coords: [43.12350, 45.54450], taip: null, tukhum: null,
    details: { image: null, history: null, architecture: null, facts: null }
  },

  // ==========================================
  // АЧХОЙ-МАРТАНОВСКИЙ РАЙОН
  // ==========================================
  {
    id: 'event-valerik', area: 'achkhoy', village: 'Валерик', category: 'events',
    title: 'Сражение на реке Валерик (1840)', description: 'В этом бою участвовал Михаил Лермонтов.',
    coords: [43.18, 45.28], taip: null, tukhum: null,
    details: { image: null, history: 'Лермонтов наблюдал за действиями передовой штурмовой колонны.', architecture: null, facts: 'Лермонтов посвятил сражению стихотворение.' }
  },
  {
    id: 'person-khasmagomed', area: 'achkhoy', village: 'Закан-Юрт', category: 'people',
    title: 'Хасмагомед Сайгадинов', description: 'Один из пяти чеченцев, командовавших полком в годы ВОВ.',
    coords: [43.18070, 45.28090], taip: null, tukhum: null,
    details: { image: null, history: 'Форсировал Днепр, помог наладить связь. Награждён орденом Красного Знамени.', architecture: null, facts: null }
  },
  {
    id: 'person-alavdi', area: 'achkhoy', village: 'Ачхой-Мартан', category: 'people',
    title: 'Алауди Устарханов', description: 'Кадровый офицер, организовал побег из концлагеря.',
    coords: [43.18140, 45.28180], taip: null, tukhum: null,
    details: { image: null, history: 'Возглавил партизанский отряд во Франции. Награждён высшей военной наградой Франции.', architecture: null, facts: null }
  },
  {
    id: 'person-khamid', area: 'achkhoy', village: 'Ачхой-Мартан', category: 'people',
    title: 'Хамид Мамакаев', description: 'Директор школы, ушёл на фронт, числился пропавшим без вести.',
    coords: [43.18210, 45.28270], taip: null, tukhum: null,
    details: { image: null, history: 'Останки найдены поисковиками в 2014 году в Крыму.', architecture: null, facts: 'СОШ №6 присвоено его имя.' }
  },
  {
    id: 'sight-galanchozh', area: 'achkhoy', village: 'Галанчож', category: 'sights',
    title: 'Озеро Галанчож', description: 'Живописное озеро на высоте 1530 метров. Сравнивают с «голубым глазом».',
    coords: [42.88, 45.36], taip: null, tukhum: null,
    details: { image: null, history: 'Рядом есть природная достопримечательность — Галанчожская каменная арка.', architecture: null, facts: 'В окрестностях встречаются старинные башни и стелы.' }
  },

  // ==========================================
  // ГРОЗНЫЙ И ДРУГИЕ
  // ==========================================
  {
    id: 'person-mariam', area: 'grozny', village: 'Грозный', category: 'people',
    title: 'Марьям Чентиева', description: 'Первая чеченка, получившая степень кандидата наук.',
    coords: [43.31, 45.69], taip: null, tukhum: null,
    details: { image: null, history: 'Работала в Чечено-Ингушском НИИ.', architecture: null, facts: null }
  },
  {
    id: 'person-zulai', area: 'grozny', village: 'Грозный', category: 'people',
    title: 'Зулай Хасбулатова', description: 'Первая чеченская женщина-этнограф, доктор исторических наук.',
    coords: [43.31070, 45.69090], taip: null, tukhum: null,
    details: { image: null, history: 'Издала более 150 научных работ.', architecture: null, facts: null }
  },
  {
    id: 'person-zinaida', area: 'grozny', village: 'Грозный', category: 'people',
    title: 'Зинаида Хасбулатова', description: 'Доктор химических наук, профессор.',
    coords: [43.31140, 45.69180], taip: null, tukhum: null,
    details: { image: null, history: 'Автор более 150 работ, имеет 9 патентов.', architecture: null, facts: null }
  },
  {
    id: 'person-rezeda', area: 'grozny', village: 'Грозный', category: 'people',
    title: 'Резеда Даутова', description: 'Первая женщина-археолог в Чечне.',
    coords: [43.31210, 45.69270], taip: null, tukhum: null,
    details: { image: null, history: 'Исследовала Цой-Педе, Галанчож, Эгичож.', architecture: null, facts: null }
  },
    {
    id: 'event-aldy', area: 'grozny', village: 'Алды', category: 'events',
    title: 'Сожжение Алды (1819)', description: 'Карательная экспедиция генерала Ермолова.',
    coords: [43.28, 45.70], taip: null, tukhum: null,
    details: { image: null, history: 'В 1785 году здесь Ушурма (Шейх Мансур) провозгласил себя имамом.', architecture: null, facts: null }
  },
  {
    id: 'person-mansur', area: 'grozny', village: 'Алды', category: 'people',
    title: 'Шейх Мансур (Ушурма)', description: 'Военный и религиозный лидер, руководитель восстания 1785–1791 годов.',
    coords: [43.28070, 45.70090], taip: 'Элистанжхой', tukhum: null,
    details: { image: null, history: 'Умер в Шлиссельбургской крепости.', architecture: null, facts: null }
  },

  // ==========================================
  // ШАТОЙСКИЙ РАЙОН
  // ==========================================
  {
    id: 'sight-nikhaloy', area: 'shatoy', village: 'Нихалой', category: 'sights',
    title: 'Нихалойские водопады', description: 'Каскад из 12 водопадов (высота до 32 метров).',
    coords: [42.82, 45.73], taip: null, tukhum: null,
    details: { image: null, history: null, architecture: 'Лестницы, мостики, смотровые площадки.', facts: null }
  },
  {
    id: 'person-batuko', area: 'shatoy', village: 'Гуш-Керт', category: 'people',
    title: 'Батуко Шатоевский', description: 'Наиб Шатоевского округа. После ранения в 1858 году попал в плен.',
    coords: [42.87, 45.70], taip: null, tukhum: null,
    details: { image: null, history: null, architecture: null, facts: null }
  },

  // ==========================================
  // ДРУГИЕ РАЙОНЫ
  // ==========================================
  {
    id: 'sight-kezenoyam', area: 'vedeno', village: 'Кезеной', category: 'sights',
    title: 'Озеро Кезеной-Ам', description: 'Самое большое и глубокое высокогорное озеро Чечни (1870 м).',
    coords: [42.77, 46.15], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Образовалось, когда сошедший оползень перегородил русло двух горных рек.',
      architecture: null,
      facts: 'На берегу есть туристическая инфраструктура: можно арендовать лодку, устроить пикник.'
    }
  },
  {
    id: 'tower-sharoy', area: 'sharoy', village: 'Шарой', category: 'towers',
    title: 'Шаройский башенный комплекс', description: 'Крупный комплекс, включающий боевые и жилые башни, мечеть. Самые старые постройки датируются XIII веком.',
    coords: [42.63, 45.81], taip: null, tukhum: null,
    details: { image: null, history: 'Шаройский район иногда называют «чеченской Швейцарией».', architecture: 'Фрагменты кладки XIII–XV веков, петроглифы и тамги.', facts: null }
  },
  {
    id: 'tower-khimoy', area: 'sharoy', village: 'Химой', category: 'towers',
    title: 'Химойский башенный комплекс', description: 'Заметный комплекс, среди построек встречаются жилые башни.',
    coords: [42.63070, 45.81090], taip: null, tukhum: null,
    details: { image: null, history: 'Жилые башни носят имена своих последних хозяев.', architecture: null, facts: null }
  },
  {
    id: 'event-dadi-yurt', area: 'shchelkov', village: 'Дади-Юрт', category: 'events',
    title: 'Бой при Дади-Юрте (1819)', description: '15 сентября 1819 года войска штурмовали аул. Каждый двор приходилось брать после артиллерийского обстрела.',
    coords: [43.50, 46.20], taip: null, tukhum: null,
    details: { image: null, history: 'С этим событием связана трагическая легенда о девушках, бросившихся в Терек.', architecture: null, facts: null }
  },
  {
    id: 'person-aibika', area: 'shchelkov', village: 'Дади-Юрт', category: 'people',
    title: 'Дадин Айбика', description: 'Дочь основателя села, героиня обороны аула в 1819 году.',
    coords: [43.50070, 46.20090], taip: null, tukhum: null,
    details: { image: null, history: 'Вместе с другими девушками помогала раненым и подносила боеприпасы. Погибла с кинжалом в руках.', architecture: null, facts: 'В её честь учреждён День чеченской женщины.' }
  },
   {
    id: 'tower-vaserkeli', area: 'itum-kali', village: 'Васеркели', category: 'towers',
    title: 'Васеркелиский башенный комплекс',
    description: 'Один из древнейших комплексов Чечни (XI век): 12 башен и «город мёртвых» с ~80 склепами.',
    coords: [42.75, 45.55], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Комплекс датируется XI веком и отражает классическую горскую архитектуру: боевые башни служили для обороны, жилые — для проживания больших семей. Склепы рядом свидетельствуют о развитом погребальном культе.',
      architecture: '12 башен: 2 боевых и 10 жилых. Рядом — «город мёртвых» с около 80 наземными склепами.',
      facts: 'Один из древнейших башенных комплексов Чечни.'
    }
  },
  {
    id: 'tower-bekhaila', area: 'itum-kali', village: 'Бекхайла', category: 'towers',
    title: 'Бекхайлский башенный комплекс',
    description: 'Три боевые башни на гребне горы Бекхайла близ Верхнего Кокадоя — один из самых впечатляющих панорамных комплексов Чечни.',
    coords: [42.88, 45.72], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Башни на Бекхайле контролировали горные проходы. Их расположение на гребне делало комплекс практически неприступным. Сегодня это популярный объект исторического туризма.',
      architecture: 'Три боевые башни на гребне горы.',
      facts: 'Один из самых впечатляющих панорамных комплексов Чечни.'
    }
  },
  {
    id: 'tower-gimroy', area: 'itum-kali', village: 'Гимрой', category: 'towers',
    title: 'Гимройский историко-архитектурный комплекс',
    description: 'Комплекс XIV–XVI вв. в Итум-Калинском районе: полубоевые и жилые башни.',
    coords: [42.72, 45.58], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Гимройский комплекс — типичный пример средневекового горского поселения XIV–XVI вв. Полубоевые башни сочетали оборонительные и жилые функции.',
      architecture: 'Как минимум две полубоевые башни и несколько жилых сооружений (по документам Департамента охраны культурного наследия ЧР).',
      facts: 'Классический горский башенный комплекс.'
    }
  },
  {
    id: 'tower-beniyst', area: 'achkhoy', village: 'Бенийст', category: 'towers',
    title: 'Бенийстийский башенный комплекс',
    description: 'Пять жилых и две полубоевые башни в труднодоступном ущелье Малхиста.',
    coords: [42.70, 45.50], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Бенийст (Бенийсти) — бывшее село в ущелье Малхиста. Комплекс датируется XIV–XVI вв. и сохраняет аутентичную горную архитектуру.',
      architecture: 'Пять жилых башен и две полубоевые. Расположен в труднодоступном горном ущелье, что характерно для чеченского башенного зодчества.',
      facts: 'Ущелье Малхиста — одно из самых труднодоступных мест Чечни.'
    }
  },
  {
    id: 'tower-khaybakh', area: 'achkhoy', village: 'Хайбах', category: 'towers',
    title: 'Хайбахский башенный комплекс',
    description: 'Крупный средневековый комплекс с отреставрированной боевой башней (2019).',
    coords: [43.0537, 45.2627], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'В комплексе жили фамилии, относящиеся к чеченскому тейпу «нашхой». Боевая башня была частично разрушена во время второй военной кампании, затем восстановлена в 2019 году.',
      architecture: 'Фортификационные, жилые и культовые сооружения, включая боевые и жилые башни, а также мечеть. Боевая башня №1 — пятиэтажное здание высотой около 20 метров.',
      facts: 'Боевая башня отреставрирована в 2019 году.'
    }
  },
      // ==========================================
  // ДОПОЛНИТЕЛЬНЫЕ БАШНИ (из списка Википедии)
  // ==========================================
  {
    id: 'tower-aldam-gezi', area: 'vedeno', village: 'Кезеной', category: 'towers',
    title: 'Алдам-Гези (замок)',
    description: 'Замковый комплекс, древнейшее ядро селения Кезеной.',
    coords: [42.77070, 46.15090], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Наиболее древнее ядро селения Кезеной представляет собой целый архитектурный ансамбль, который именуется замок Алдам-Гези.',
      architecture: 'Замковый комплекс.',
      facts: 'Датируется примерно XIV веком.'
    }
  },
  {
    id: 'tower-acharoy', area: 'shatoy', village: 'Шатой', category: 'towers',
    title: 'Ачалойская башня',
    description: 'Средневековая башня в Шатойском районе.',
    coords: [42.87070, 45.70090], taip: null, tukhum: null,
    details: {
       image: '/images/Ачало_боевая_башня.jpg', 
      history: 'Упоминается в списке башен Чечни.',
      architecture: null,
      facts: 'Датируется ранее XIV века.'
    }
  },
  {
    id: 'tower-baroy', area: 'itum-kali', village: 'Баулой', category: 'towers',
    title: 'Баройский башенный комплекс',
    description: 'Два раздельно стоящих укрепления — Верхний и Нижний Бара.',
    coords: [42.78070, 45.55090], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'В составе комплекса была боевая башня (ныне разрушенная) и около десятка жилых строений.',
      architecture: 'Два раздельно стоящих укрепления.',
      facts: 'Датируется XIV веком.'
    }
  },
  {
    id: 'tower-bauloy', area: 'itum-kali', village: 'Баулой', category: 'towers',
    title: 'Баулойские башни',
    description: 'Комплекс башен в Итум-Калинском районе, включая одну высотой 16–17 м.',
    coords: [42.75, 45.58], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Одна башня на берегу Тонкой-Ахк имела высоту 16-17 м. Рядом с ней стояла жилая башня. Также близ села была еще одна башня.',
      architecture: 'Башни различной сохранности.',
      facts: 'Датируются XIV—XVI вв.'
    }
  },
  {
    id: 'tower-bashin-kali', area: 'itum-kali', village: 'Итум-Кали', category: 'towers',
    title: 'Башен-Калинская боевая башня',
    description: 'Наскальная башня-убежище.',
    coords: [42.76, 45.60], taip: null, tukhum: null,
    details: {
      image: null,
      history: null,
      architecture: 'Является наскальной башней-убежищем.',
      facts: 'Датируется XIV-XVI вв.'
    }
  },
  {
    id: 'tower-bugary', area: 'itum-kali', village: 'Бугарой', category: 'towers',
    title: 'Бугаройская боевая башня',
    description: 'Боевая башня, от которой сохранились две стены.',
    coords: [42.74, 45.52], taip: null, tukhum: null,
    details: {
      image: null,
      history: null,
      architecture: 'Сохранились две стены.',
      facts: 'Датируется XIII-XVI вв.'
    }
  },
  {
    id: 'tower-pkier', area: 'itum-kali', village: 'Хилдехарой', category: 'towers',
    title: 'Пкиерская башня',
    description: 'Трёхэтажная башня на склоне горы Пкъиер-лам (около 2400 м).',
    coords: [42.70, 45.45], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Находилась на склоне горы Пкъиер-лам на высоте около 2400 метров.',
      architecture: 'Башня была трёхэтажной, верхняя часть разрушена.',
      facts: 'Датируется XIV—XVI вв.'
    }
  },
  {
    id: 'tower-sakankhoy', area: 'itum-kali', village: 'Итум-Кали', category: 'towers',
    title: 'Саканхойская башня',
    description: 'Башня в разрушенном состоянии, утрачены верхние этажи.',
    coords: [42.72, 45.48], taip: null, tukhum: null,
    details: {
      image: null,
      history: null,
      architecture: 'Находится в разрушенном состоянии, отсутствуют последние этажи с машикулями и кровля.',
      facts: 'Датируется XIV—XVI вв.'
    }
  },
  {
    id: 'tower-kirda', area: 'itum-kali', village: 'Итум-Кали', category: 'towers',
    title: 'КIирда-БIаьвнаш (башенный комплекс)',
    description: 'Комплекс из трёх боевых башен у начала Терлойского ущелья.',
    coords: [42.71553, 45.39889], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Комплекс сильно пострадал в 1990-2000-е годы, к настоящему времени от него сохранились развалины лишь одной из башен.',
      architecture: 'Состоял из трёх боевых башен и склеповых могильников.',
      facts: 'Датируется XIV веком. Хорошо виден с автодороги Итум-Кале – Цой-Педе.'
    }
  },
    {
    id: 'person-ibragimov-khamzat', area: 'shali', village: 'Шали', category: 'people',
    title: 'Хамзат Исмаилович Ибрагимов',
    description: 'Первый чеченец — кандидат физико-математических наук (1965), первый президент Академии наук ЧР.',
    coords: [43.15420, 45.90540], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Родился в 1934 году в Шали. В 1944–1957 годах находился в ссылке. Окончил институт с отличием, поступил в аспирантуру МГУ. С 1972 по 1987 год — проректор ЧИГУ. В 1992 году возглавил Совет по организации Академии наук ЧР, был её первым президентом. С 2000 года — директор-организатор Комплексного НИИ РАН в Грозном.',
      architecture: null,
      facts: 'Институт в Грозном носит его имя.'
    }
  },
  {
    id: 'person-tsebiev-akhmed', area: 'grozny', village: 'Грозный', category: 'people',
    title: 'Ахмед Магамедович Цебиев (1935–2000)',
    description: 'Физик, в 1959 году сделал открытие генерации и усиления электромагнитных колебаний.',
    coords: [43.31280, 45.69360], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Открытие нового физического явления оказало революционное влияние на развитие физики и имело огромное прикладное значение.',
      architecture: null,
      facts: 'Диссертацию защитил по техническим наукам.'
    }
  },
  {
    id: 'person-visaitov-movladi', area: 'grozny', village: 'Грозный', category: 'people',
    title: 'Мовлади Алероевич Висаитов (1914–1986)',
    description: 'Герой Советского Союза (1990), командир кавалерийского полка в годы ВОВ.',
    coords: [43.31350, 45.69450], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Был представлен к званию Героя ещё в 1945 году, но удостоен только в 1990-м.',
      architecture: null,
      facts: null
    }
  },
  {
    id: 'person-elmurzaev-yusup', area: 'urus-martan', village: 'Урус-Мартан', category: 'people',
    title: 'Юсуп Эльмурзаев',
    description: 'Герой России (1996, посмертно), глава администрации Урус-Мартановского района.',
    coords: [43.12420, 45.54540], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Убит 8 июня 1996 года. Звание присвоено 11 июня 1996 года.',
      architecture: null,
      facts: null
    }
  },
    // ==========================================
  // ПИСАТЕЛИ И ПОЭТЫ
  // ==========================================
  {
    id: 'person-raisa-akhmatova', area: 'grozny', village: 'Грозный', category: 'people',
    title: 'Раиса Ахматова (1928–1992)',
    description: 'Народная поэтесса Чечено-Ингушетии. Первый сборник «Хьоме республика» вышел в 1958 году.',
    coords: [43.31420, 45.69540], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'С 1961 по 1983 год возглавляла Союз писателей ЧИАССР.',
      architecture: null,
      facts: 'Первый сборник «Хьоме республика» вышел в 1958 году.'
    }
  },
  {
    id: 'person-saidbey-arsanov', area: 'grozny', village: 'Грозный', category: 'people',
    title: 'Саидбей Арсанов',
    description: 'Создатель чеченского исторического романа, руководил секцией чеченских писателей с 1929 года.',
    coords: [43.31490, 45.69630], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'С 1929 года руководил секцией чеченских писателей.',
      architecture: null,
      facts: 'Один из основоположников чеченского исторического романа.'
    }
  },
  {
    id: 'person-magomet-mamakaev', area: 'nozhay', village: 'Ножай-Юрт', category: 'people',
    title: 'Магомет Мамакаев (1910–1973)',
    description: 'Классик чеченской литературы, автор романов «Мюрид революции» и «Зелимхан».',
    coords: [43.05, 46.38], taip: null, tukhum: null,
    details: {
      image: null,
      history: null,
      architecture: null,
      facts: 'Автор романов «Мюрид революции» и «Зелимхан».'
    }
  },
  {
    id: 'person-abuzar-aidamirov', area: 'nozhay', village: 'Ножай-Юрт', category: 'people',
    title: 'Абузар Айдамиров (1933–2005)',
    description: 'Писатель, автор романов «Именем свободы» и «Долгие ночи». Родился в селе Мескеты Ножай-Юртовского района.',
    coords: [43.05070, 46.38090], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Родился в селе Мескеты Ножай-Юртовского района.',
      architecture: null,
      facts: 'Автор романов «Именем свободы» и «Долгие ночи».'
    }
  },

  // ==========================================
  // ХУДОЖНИКИ
  // ==========================================
  {
    id: 'person-said-bitsiraev', area: 'gudermes', village: 'Гудермес', category: 'people',
    title: 'Саид Бицираев (1954)',
    description: 'Народный художник ЧР, заслуженный художник РФ, профессор.',
    coords: [43.35, 46.10], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Родовое село — Нойбера. Работы хранятся в музеях России, Финляндии, Германии, США и др.',
      architecture: null,
      facts: 'Народный художник ЧР, заслуженный художник РФ, профессор.'
    }
  },
  {
    id: 'person-aindi-shamilov', area: 'gudermes', village: 'Гудермес', category: 'people',
    title: 'Айнди Шамилов (1949)',
    description: 'Народный художник ЧР (2016), заслуженный художник ЧР (2008).',
    coords: [43.35070, 46.10090], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Работает в жанрах батальных сцен, исторических сюжетов, пейзажей.',
      architecture: null,
      facts: 'Народный художник ЧР (2016), заслуженный художник ЧР (2008).'
    }
  },

  // ==========================================
  // УЧЁНЫЕ
  // ==========================================
  {
    id: 'person-akhmed-tsebiev', area: 'grozny', village: 'Грозный', category: 'people',
    title: 'Ахмед Цебиев (1935–2000)',
    description: 'Физик, кандидат технических наук, автор открытия и 26 изобретений в области радиоэлектроники и радиосвязи.',
    coords: [43.31560, 45.69720], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Автор открытия и 26 изобретений в области радиоэлектроники и радиосвязи.',
      architecture: null,
      facts: 'Кандидат технических наук.'
    }
  },
  {
    id: 'person-khasan-turkaev', area: 'grozny', village: 'Грозный', category: 'people',
    title: 'Хасан Туркаев (1937)',
    description: 'Доктор филологических наук, профессор, заслуженный деятель науки РФ (2006), член Союза писателей СССР.',
    coords: [43.31630, 45.69810], taip: null, tukhum: null,
    details: {
      image: null,
      history: null,
      architecture: null,
      facts: 'Заслуженный деятель науки РФ (2006), член Союза писателей СССР.'
    }
  },
  {
    id: 'person-aslanbek-khasbulatov', area: 'grozny', village: 'Грозный', category: 'people',
    title: 'Асланбек Хасбулатов (1937–2013)',
    description: 'Доктор исторических наук, профессор ЧГУ, заслуженный деятель науки ЧИАССР.',
    coords: [43.31700, 45.69900], taip: null, tukhum: null,
    details: {
      image: null,
      history: null,
      architecture: null,
      facts: 'Заслуженный деятель науки ЧИАССР.'
    }
  },
  {
    id: 'person-mukhadi-umarov', area: 'grozny', village: 'Грозный', category: 'people',
    title: 'Мухади Умаров (1941)',
    description: 'Доктор биологических наук, профессор, академик АН ЧР, заслуженный деятель науки ЧР.',
    coords: [43.31770, 45.69990], taip: null, tukhum: null,
    details: {
      image: null,
      history: null,
      architecture: null,
      facts: 'Академик АН ЧР, заслуженный деятель науки ЧР.'
    }
  },

  // ==========================================
  // ВОЕННЫЕ И ГЕРОИ
  // ==========================================
  {
    id: 'person-dasha-akaev', area: 'grozny', village: 'Грозный', category: 'people',
    title: 'Даша Акаев (1910–1944)',
    description: 'Первый чеченский лётчик, майор, командир 35 штурмового авиаполка, участник ВОВ.',
    coords: [43.31840, 45.70080], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Командир 35 штурмового авиаполка, участник Великой Отечественной войны.',
      architecture: null,
      facts: 'Первый чеченский лётчик.'
    }
  },
  {
    id: 'person-makhmud-amaev', area: 'grozny', village: 'Грозный', category: 'people',
    title: 'Махмуд Амаев (1916–1943)',
    description: 'Младший сержант, снайпер, уничтожил 186 фашистов.',
    coords: [43.31910, 45.70170], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Снайпер, уничтожил 186 фашистов.',
      architecture: null,
      facts: 'Младший сержант.'
    }
  },
  {
    id: 'person-matash-mazaev', area: 'grozny', village: 'Грозный', category: 'people',
    title: 'Маташ Мазаев (1908–1942)',
    description: 'Советский танкист, капитан, участник Польского похода, Зимней войны и ВОВ.',
    coords: [43.31980, 45.70260], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Участник Польского похода, Зимней войны и Великой Отечественной войны.',
      architecture: null,
      facts: 'Капитан, танкист.'
    }
  },
    // ==========================================
  // ДОПОЛНИТЕЛЬНЫЕ СОБЫТИЯ
  // ==========================================
  {
    id: 'event-mansur-uprising', area: 'grozny', village: 'Алды', category: 'events',
    title: 'Восстание Шейха Мансура (1785–1791)',
    description: 'Первое крупное антиколониальное восстание горцев Северного Кавказа под предводительством Шейха Мансура.',
    coords: [43.28, 45.70], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'В 1785 году Ушурма (Шейх Мансур) провозгласил себя имамом и возглавил движение против российской экспансии. Восстание охватило Чечню, Кабарду и Дагестан. После ряда поражений Мансур был пленён в 1791 году и умер в Шлиссельбургской крепости [citation:3][citation:4].',
      architecture: null,
      facts: 'Считается первым имамом Северного Кавказа.'
    }
  },
  {
    id: 'event-bulgakov-campaign', area: 'grozny', village: 'Грозный', category: 'events',
    title: 'Поход генерала Булгакова (1807)',
    description: 'Карательная экспедиция царских войск в Чечню.',
    coords: [43.31, 45.69], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Поход генерала Булгакова 1807 года стал одним из эпизодов активизации колониальной политики России на Кавказе в начале XIX века [citation:3][citation:5].',
      architecture: null,
      facts: null
    }
  },
  {
    id: 'event-grozny-fortress', area: 'grozny', village: 'Грозный', category: 'events',
    title: 'Основание крепости Грозной (1818)',
    description: 'Строительство крепости Грозной, положившей начало городу Грозному.',
    coords: [43.31, 45.69], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Крепость Грозная была основана в 1818 году в период наместничества генерала Ермолова. Она стала опорным пунктом российской административной власти в равнинной Чечне [citation:1][citation:4].',
      architecture: null,
      facts: 'С крепости началась история города Грозного.'
    }
  },
  {
    id: 'event-ermolov-campaigns', area: 'grozny', village: 'Грозный', category: 'events',
    title: 'Наступление Ермолова (1818–1820)',
    description: 'Серия карательных экспедиций генерала Ермолова против чеченских селений.',
    coords: [43.31, 45.69], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'В 1818–1820 годах царские войска под командованием Ермолова провели ряд наступательных операций в Чечне, сопровождавшихся репрессиями против местного населения [citation:3][citation:5].',
      architecture: null,
      facts: null
    }
  },
  {
    id: 'event-dadi-yurt-battle', area: 'shchelkov', village: 'Дади-Юрт', category: 'events',
    title: 'Бой при Дади-Юрте (1819)',
    description: 'Штурм аула Дади-Юрт царскими войсками, один из трагических эпизодов Кавказской войны.',
    coords: [43.50, 46.20], taip: null, tukhum: null,
    details: {
      image: null,
      history: '15 сентября 1819 года войска штурмовали аул. Каждый двор приходилось брать после артиллерийского обстрела. С событием связана легенда о девушках, бросившихся в Терек, чтобы не попасть в плен. В память о них учреждён День чеченской женщины [citation:6].',
      architecture: null,
      facts: 'В селе Дади-Юрт установлен памятник.'
    }
  },
  {
    id: 'event-alibek-uprising', area: 'nozhay', village: 'Симсир', category: 'events',
    title: 'Восстание Алибек-Хаджи (1877–1878)',
    description: 'Крупное антиколониальное восстание в Чечне и Дагестане.',
    coords: [43.07, 46.42], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Восстание 1877–1878 годов под предводительством Алибек-Хаджи Зандакского стало крупнейшим волнением в Чечне во второй половине XIX века. Причинами были безземелье и тяжёлые условия жизни. Восстание было подавлено, Алибек-Хаджи казнён [citation:6].',
      architecture: null,
      facts: 'Алибек-Хаджи родился в ауле Симсир.'
    }
  },
  {
    id: 'event-kunta-hadji-arrest', area: 'nozhay', village: 'Ножай-Юрт', category: 'events',
    title: 'Арест Кунта-Хаджи (1864)',
    description: 'Арест духовного лидера, основателя зикризма, и ссылка его последователей.',
    coords: [43.05, 46.38], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Кунта-Хаджи призывал к прекращению войны и покорности власти, но его учение объединяло горцев. В 1864 году он был арестован и сослан. Массовое выселение его последователей (зикристов) в Турцию стало трагической страницей истории [citation:2].',
      architecture: null,
      facts: 'Кунта-Хаджи считается одним из самых почитаемых чеченских шейхов.'
    }
  },
  {
    id: 'event-civil-war-grozny', area: 'grozny', village: 'Грозный', category: 'events',
    title: 'Оборона Грозного (1918)',
    description: 'Чеченская Красная армия не допустила захвата Грозного белоказаками.',
    coords: [43.31, 45.69], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'В августе 1918 года в Грозном была сформирована Чеченская Красная армия под командованием Асланбека Шерипова (около 3 тысяч человек). Благодаря её действиям белоказакам не удалось захватить важнейший экономический центр Северного Кавказа — Грозный [citation:6].',
      architecture: null,
      facts: 'Асланбек Шерипов — один из организаторов чеченских советских формирований.'
    }
  },
  // ==========================================
  // ДОПОЛНИТЕЛЬНЫЕ СОБЫТИЯ (ещё)
  // ==========================================
  {
    id: 'event-shalinsky-okol', area: 'shali', village: 'Шали', category: 'events',
    title: 'Шалинский окоп (1851)',
    description: 'Штурм Шалинского окопа — укрепления имама Шамиля у Шали.',
    coords: [43.15, 45.90], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'В 1850–1851 годах отряд генерал-майора В. М. Козловского проложил Шалинскую просеку, а в 1851 году Шалинский окоп был взят штурмом. Шали в 1830–50-е годы неоднократно служил временной резиденцией имама Шамиля .',
      architecture: null,
      facts: 'Шалинский окоп — одно из укреплений периода Кавказской войны.'
    }
  },
  {
    id: 'event-kinzhalny-boy', area: 'shali', village: 'Герменчук', category: 'events',
    title: '«Кинжальный бой» зикристов (1864)',
    description: 'Трагическое столкновение последователей Кунта-Хаджи с царскими войсками под Шалями.',
    coords: [43.15, 45.90], taip: null, tukhum: null,
    details: {
      image: null,
      history: '3 января 1864 года Кунта-Хаджи был схвачен в районе Шали. 18 января 1864 года около 3 тысяч его последователей собрались под Шалями, требуя освобождения наставника. Начальник Чеченского округа генерал-майор Туманов сосредоточил значительные силы и применил оружие. Событие получило название «кинжального боя зикристов» .',
      architecture: null,
      facts: 'Один из трагических эпизодов истории зикризма в Чечне.'
    }
  },
  {
    id: 'event-shatoy-ushchelye-1858', area: 'shatoy', village: 'Шатой', category: 'events',
    title: 'Наступление в Шатойском ущелье (1858)',
    description: 'Царские войска установили контроль над Малой Чечнёй.',
    coords: [42.87, 45.70], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Весной 1858 года в результате широкомасштабного наступления царских войск вся территория Малой Чечни, включая район современного Урус-Мартана и Шатойского района, оказалась под их контролем [citation:5].',
      architecture: null,
      facts: null
    }
  },
  {
    id: 'event-urus-martan-congress-1840', area: 'urus-martan', village: 'Урус-Мартан', category: 'events',
    title: 'Съезд в Урус-Мартане (1840)',
    description: 'Шамиль провозглашён Имамом Чечни и Дагестана.',
    coords: [43.12, 45.54], taip: null, tukhum: null,
    details: {
      image: null,
      history: '7 марта 1840 года в Урус-Мартане прошёл съезд чеченского народа, на котором Шамиль был провозглашён Имамом Чечни и Дагестана. В 1848 году в центре Урус-Мартана была заложена русская крепость, просуществовавшая несколько лет [citation:10].',
      architecture: null,
      facts: 'Урус-Мартан в XIX веке был одним из политических центров Чечни.'
    }
  },
  {
    id: 'event-goyty-battle-1919', area: 'urus-martan', village: 'Гойты', category: 'events',
    title: 'Гойтинское сражение (1919)',
    description: 'Чеченцы нанесли поражение белогвардейской дивизии под командованием Шатилова.',
    coords: [43.12, 45.54], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'В феврале 1919 года чеченские отряды нанесли серьёзное поражение 1-й конной дивизии под командованием Н. П. Шатилова в Гойтинском сражении. Большие потери вынудили Шатилова отступить в Грозный. Вскоре он был ранен под Гойты, а его преемник полковник Пушкин убит в бою [citation:5].',
      architecture: null,
      facts: 'Один из ключевых эпизодов Гражданской войны в Чечне.'
    }
  },
    // ==========================================
  // ДОПОЛНИТЕЛЬНЫЕ ДОСТОПРИМЕЧАТЕЛЬНОСТИ (до 2005)
  // ==========================================
  {
    id: 'sight-kharachoy-waterfall', area: 'vedeno', village: 'Харачой', category: 'sights',
    title: 'Харачойский водопад («Девичья коса»)',
    description: 'Гидрологический памятник природы с 2006 года. Вода выходит из известняковой пещеры, высота 50–60 м.',
    coords: [42.94, 46.02], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'На северо-западной окраине Харачоя. Народное название связано с легендой о девушке, погибшей после попытки сбежать с возлюбленным. Рядом — памятник абреку Зелимхану Харачоевскому [citation:1].',
      architecture: 'Водопад высотой 50–60 м. Рядом оборудована туристическая площадка, две башни и памятник [citation:1].',
      facts: 'Статус памятника природы — с 2006 года. Расстояние от Грозного — около 72 км [citation:1].'
    }
  },
  {
    id: 'sight-vashindaroy-waterfall', area: 'shatoy', village: 'Шатой', category: 'sights',
    title: 'Вашиндаройский водопад',
    description: 'Гидрологический памятник природы с 2006 года. Высота 10,5 м, ширина 2–3 м.',
    coords: [42.87, 45.70], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Расположен в 300 м к юго-западу от окраины села Вашендарой в долине реки Варанды (приток Аргуна). С ноября 2006 года имеет статус особо охраняемой природной территории республиканского значения .',
      architecture: 'Поток воды со слоистой отвесной скалы высотой около 12 м, ширина около 2 м [citation:11].',
      facts: 'Памятник природы регионального значения с 80-х годов XX века [citation:11].'
    }
  },
  {
    id: 'sight-national-museum', area: 'grozny', village: 'Грозный', category: 'sights',
    title: 'Национальный музей Чеченской Республики',
    description: 'Основан в 1924 году как окружной музей по истории культуры и религии.',
    coords: [43.31, 45.69], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Днём основания считается 7 ноября 1924 года. В 1996 году краеведческий музей и Музей изобразительных искусств имени Захарова были объединены в единый Национальный музей ЧР. В 2012 году переехал в новое здание [citation:2].',
      architecture: 'Здание возведено по проекту чеченских архитекторов в национальном стиле .',
      facts: 'Имеет шесть филиалов, включая литературно-мемориальные музеи Айдамирова, Мамакаева, Толстого, Лермонтова, краеведческий музей в Махкетах и Галерею Илеса Татаева .'
    }
  },
  {
    id: 'sight-literary-museum-lermontov', area: 'grozny', village: 'Грозный', category: 'sights',
    title: 'Литературный музей М.Ю. Лермонтова',
    description: 'Основан в 1964 году в селе Парабоч, где Лермонтов бывал в имении Хастатовых.',
    coords: [43.31, 45.69], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'К 150-летию со дня рождения Лермонтова в 1964 году в с. Парабоч установлена мемориальная доска о пребывании поэта в имении Хастатовых в 1818, 1837 и 1840 годах. Музей является филиалом Национального музея ЧР [citation:2].',
      architecture: null,
      facts: 'Один из старейших литературных музеев Чечни.'
    }
  },
  {
    id: 'sight-literary-museum-mamakaev', area: 'grozny', village: 'Грозный', category: 'sights',
    title: 'Литературно-мемориальный музей А. Мамакаева',
    description: 'Основан в 1989 году как народный музей. Посвящён поэту Арби Мамакаеву (1918–1958).',
    coords: [43.31, 45.69], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Арби Шамсудинович Мамакаев — известный чеченский поэт, создатель новой формы стихосложения в вайнахской поэзии. Музей основан в 1989 году [citation:2].',
      architecture: null,
      facts: 'Филиал Национального музея ЧР .'
    }
  },
  {
    id: 'sight-museum-tolstoy', area: 'grozny', village: 'Грозный', category: 'sights',
    title: 'Литературно-этнографический музей Л.Н. Толстого',
    description: 'Учреждён в 1980 году как филиал Чечено-Ингушского музея.',
    coords: [43.31, 45.69], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Учреждён Постановлением Совета министров ЧИАССР 31.12.1980 и приказом министра культуры РСФСР от 12.02.1980 как филиал Чечено-Ингушского музея [citation:2].',
      architecture: null,
      facts: 'Филиал Национального музея ЧР .'
    }
  },
  {
    id: 'sight-makhkety-museum', area: 'vedeno', village: 'Махкеты', category: 'sights',
    title: 'Махкетинский краеведческий музей',
    description: 'Начало музею положил школьный музей села Махкеты, в основе — кольчуга, найденная при пахоте.',
    coords: [42.96, 46.10], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Начало современному музею положил музей школы с. Махкеты. В основу фондов легла кольчуга, найденная школьником Я. Магаметхаджиевым во время пахоты на приусадебном участке [citation:2].',
      architecture: null,
      facts: 'Филиал Национального музея ЧР .'
    }
  },
  {
    id: 'sight-national-library', area: 'grozny', village: 'Грозный', category: 'sights',
    title: 'Национальная библиотека Чеченской Республики им. А.А. Айдамирова',
    description: 'Основана в октябре 1904 года. С 1945 года носила имя А.П. Чехова, затем переименована.',
    coords: [43.31, 45.69], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Основана в октябре 1904 года по инициативе Пушкинского училища. В июле 1945 года получила имя А.П. Чехова. В январе 1966 года переехала в новое типовое здание. К началу первой военной кампании фонд насчитывал 2 млн 642 тыс. экземпляров. Здание сгорело, фонд разворован. Сегодня — современное здание с фондом более 120 000 экземпляров [citation:15].',
      architecture: 'Фасад имеет форму раскрытой книги. Общая площадь — 13 339 кв. м. Читальные залы на трёх этажах, зимний сад, книгохранилища, видеотека .',
      facts: 'Носит имя А.А. Айдамирова. Одна из старейших библиотек Северного Кавказа.'
    }
  },
  {
    id: 'sight-kezenoy-am-lake', area: 'vedeno', village: 'Кезеной', category: 'sights',
    title: 'Озеро Кезеной-Ам',
    description: 'Самое крупное высокогорное озеро Северного Кавказа. Высота 1869 м, глубина до 72 м.',
    coords: [42.77, 46.15], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Запрудное озеро, образовалось в результате огромного обвала с южного склона хребта Кашкер-Лам. Площадь около 2 км². Вода холодная, летом на поверхности не выше 17–18°C. Зимой замерзает, толщина льда до 70–80 см [citation:4][citation:14].',
      architecture: 'Естественная плотина высотой более 100 м. В озере водится форель [citation:4][citation:14].',
      facts: 'По площади превосходит озеро Рица, расположено выше него почти на 1000 м [citation:14].'
    }
  },
  {
    id: 'sight-galanchozh-lake', area: 'achkhoy', village: 'Галанчож', category: 'sights',
    title: 'Галанчожское озеро',
    description: 'Озеро тектонического происхождения на высоте 1533 м. Глубина 31 м.',
    coords: [42.88, 45.36], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Расположено в урочище Галанчож на правом склоне долины реки Осу-Хи. Котловина воронкообразная, почти правильной формы. Питается родниками. Цвет воды ярко-голубой с зеленоватым оттенком [citation:4].',
      architecture: 'Максимальная протяжённость — 450 м, минимальная — 380 м. Летом температура на поверхности до 20°C [citation:4].',
      facts: 'Пример озера с котловиной тектонического происхождения.'
    }
  },
  {
    id: 'sight-terek-river', area: 'grozny', village: 'Грозный', category: 'sights',
    title: 'Река Терек',
    description: 'Одна из главных рек Чечни. Длина 590 км, берёт начало из ледника горы Зильгахох.',
    coords: [43.31, 45.69], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Берёт начало на склоне Главного хребта из ледника г. Зильгахох на высоте 2713 м. Впадает в Каспийское море. Протекает по территориям Грузии, Северной Осетии, Кабардино-Балкарии, Ставропольского края, Чечни и Дагестана. Основные притоки: Ардон, Фиагдон, Малка и Сунжа .',
      architecture: 'Половодье в тёплую часть года с наивысшим подъёмом в июле–августе. Питание ледниковое и дождевое .',
      facts: 'В верховьях реку питают 32 ледника общей площадью 67 км² .'
    }
  },
  {
    id: 'sight-sunzha-river', area: 'grozny', village: 'Грозный', category: 'sights',
    title: 'Река Сунжа',
    description: 'Вторая река Чечни. Длина 220 км, берёт начало из родников на массиве Уш-Корт.',
    coords: [43.31, 45.69], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Берёт начало из родников на массиве Уш-Корт. Небольшой участок верхнего течения — в Северной Осетии. Впадает в Терек. Длина 220 км. Самые большие правые притоки — Аргун и Асса .',
      architecture: 'Левых значительных притоков не имеет, правые многоводны и многочисленны .',
      facts: 'На Сунже стоит Грозный.'
    }
  },
  {
    id: 'sight-argun-river', area: 'shatoy', village: 'Шатой', category: 'sights',
    title: 'Река Аргун',
    description: 'Самый многоводный приток Сунжи. Длина около 150 км. Образуется слиянием Чанты-Аргуна и Шаро-Аргуна.',
    coords: [42.87, 45.70], taip: null, tukhum: null,
    details: {
       image: '/images/Шаро-Аргун_2024_год.jpg', 
      history: 'Образуется от слияния двух рек — Чанты-Аргуна и Шаро-Аргуна. Чанты-Аргун берёт начало на склонах Главного Кавказского хребта в пределах Грузии. Ущелье очень живописно, особенно в верховьях .',
      architecture: 'По многоводности превосходит Сунжу .',
      facts: 'Аргунское ущелье — один из главных туристических маршрутов горной Чечни.'
    }
  },
    // ==========================================
  // МУЗЕИ ЧЕЧЕНСКОЙ РЕСПУБЛИКИ
  // ==========================================
  {
    id: 'museum-national-chechnya', area: 'grozny', village: 'Грозный', category: 'sights',
    title: 'Национальный музей Чеченской Республики',
    description: 'Главный музей региона. Основан 7 ноября 1924 года как окружной музей по истории культуры и религии.',
    coords: [43.31, 45.69], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Днём основания считается 7 ноября 1924 года. В 1996 году краеведческий музей и Музей изобразительных искусств имени Захарова были объединены в единый Национальный музей ЧР. В 2012 году переехал в новое здание. Имеет шесть филиалов в разных сёлах республики.',
      architecture: 'Здание возведено по проекту чеченских архитекторов в национальном стиле. На входе установлены две пушки — участницы обороны Севастополя, подаренные музею в период Великой Отечественной войны.',
      facts: 'Коллекция насчитывает более 30 тысяч экспонатов — одна из самых богатых на Северном Кавказе.'
    }
  },
  {
    id: 'museum-lermontov', area: 'grozny', village: 'Грозный', category: 'sights',
    title: 'Литературный музей М.Ю. Лермонтова',
    description: 'Основан в 1964 году в селе Парабоч, где Лермонтов бывал в имении Хастатовых.',
    coords: [43.31, 45.69], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'К 150-летию со дня рождения Лермонтова в 1964 году в с. Парабоч установлена мемориальная доска о пребывании поэта в имении Хастатовых в 1818, 1837 и 1840 годах. Музей является филиалом Национального музея ЧР.',
      architecture: null,
      facts: 'Один из старейших литературных музеев Чечни. В доме Хастатова Лермонтов впервые услышал историю, легшую в основу повести «Бэла».'
    }
  },
  {
    id: 'museum-mamakaev', area: 'grozny', village: 'Грозный', category: 'sights',
    title: 'Литературно-мемориальный музей А. Мамакаева',
    description: 'Основан в 1989 году как народный музей. Посвящён поэту Арби Мамакаеву (1918–1958).',
    coords: [43.31, 45.69], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Арби Шамсудинович Мамакаев — известный чеченский поэт, создатель новой формы стихосложения в вайнахской поэзии. Музей основан в 1989 году.',
      architecture: 'Комплекс включает жилой дом конца XIX века, мемориальный сад и двор с постройками. Фонд — более двух тысяч экспонатов.',
      facts: 'Филиал Национального музея ЧР.'
    }
  },
  {
    id: 'museum-tolstoy', area: 'grozny', village: 'Грозный', category: 'sights',
    title: 'Литературно-этнографический музей Л.Н. Толстого',
    description: 'Учреждён в 1980 году как филиал Чечено-Ингушского музея.',
    coords: [43.31, 45.69], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Учреждён Постановлением Совета министров ЧИАССР 31.12.1980 и приказом министра культуры РСФСР от 12.02.1980 как филиал Чечено-Ингушского музея.',
      architecture: null,
      facts: 'Филиал Национального музея ЧР.'
    }
  },
  {
    id: 'museum-makhkety', area: 'vedeno', village: 'Махкеты', category: 'sights',
    title: 'Махкетинский краеведческий музей',
    description: 'Начало музею положил школьный музей села Махкеты, в основе — кольчуга, найденная при пахоте.',
    coords: [42.96, 46.10], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Начало современному музею положил музей школы с. Махкеты. В основу фондов легла кольчуга, найденная школьником Я. Магаметхаджиевым во время пахоты на приусадебном участке.',
      architecture: null,
      facts: 'Филиал Национального музея ЧР.'
    }
  },
  {
    id: 'museum-aidamirov', area: 'nozhay', village: 'Ножай-Юрт', category: 'sights',
    title: 'Литературно-мемориальный музей А. Айдамирова',
    description: 'Открыт 2 ноября 2006 года в селе Мескеты. Посвящён классику чеченской литературы Абузару Айдамирову.',
    coords: [43.05, 46.38], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Абузар Айдамиров (1933–2005) — классик чеченской литературы, автор романов «Именем свободы» и «Долгие ночи». Музей создан после его смерти, открыт 2 ноября 2006 года.',
      architecture: 'В экспозицию вошёл интерьер жилой комнаты и кабинета писателя, представлены личные вещи, библиотека, документы.',
      facts: 'Филиал Национального музея ЧР.'
    }
  },
  {
    id: 'museum-kadyrov-alleys', area: 'grozny', village: 'Грозный', category: 'sights',
    title: 'Мемориальный комплекс «Аллея Славы» имени А.Х. Кадырова',
    description: 'Музей в центре Грозного, посвящённый первому президенту ЧР.',
    coords: [43.31, 45.69], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Расположен в самом центре Чеченской столицы, около комплекса правительственных зданий. Представлены фотографии, рассказывающие о жизни и деятельности первого президента ЧР, его личные вещи.',
      architecture: null,
      facts: 'Имеет огромное общественное и политическое значение в деле увековечения памяти Ахмат-Хаджи Кадырова.'
    }
  },
  {
    id: 'museum-kadyrov-kurchaloy', area: 'kurchaloy', village: 'Курчалой', category: 'sights',
    title: 'Государственный мемориальный музей А.А. Кадырова',
    description: 'Создан 1 ноября 2010 года в селе Курчалой в целях увековечения памяти первого президента ЧР.',
    coords: [43.20, 46.08], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Государственное учреждение культуры «Государственный мемориальный музей А.А. Кадырова» создано 1 ноября 2010 года в с. Курчалой Курчалоевского района.',
      architecture: null,
      facts: 'Филиал музея, посвящённый памяти Ахмат-Хаджи Кадырова.'
    }
  },
    // ==========================================
  // РЕАЛЬНЫЕ ОБЪЕКТЫ (ИЗ ОФИЦИАЛЬНЫХ ИСТОЧНИКОВ)
  // ==========================================
  {
    id: 'site-ils khan-yurt-mosque', area: 'kurchaloy', village: 'Иласхан-Юрт', category: 'sights',
    title: 'Джума-мечеть, построенная при участии Кунта-Хаджи Кишиева',
    description: 'Историческая мечеть 1852–1853 годов. Выявленный объект культурного наследия.',
    coords: [43.20, 46.08], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Построена в 1852–1853 годах при участии Кунта-Хаджи Кишиева. Внесена в перечень выявленных объектов культурного наследия Чеченской Республики (Приказ Минкультуры ЧР от 16.09.2025 № 139-ос) [citation:2][citation:7].',
      architecture: 'Рядом находятся зиярт, место для уединения («Халват») Кунта-Хаджи Кишиева (1904 г.) и медресе (бывший родовой дом) [citation:2][citation:7].',
      facts: 'Адрес по документу: Курчалоевский район, с. Илсхан-Юрт, ул. Кадырова, 9 [citation:2].'
    }
  },
  {
    id: 'site-engl-engenoy-ziyarat', area: 'nozhay', village: 'Энгеной', category: 'sights',
    title: 'Зиярт Шейха Селаби',
    description: 'Святыня XIX века в селе Энгеной. Выявленный объект культурного наследия.',
    coords: [43.05, 46.38], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Датируется XIX веком. Внесён в перечень выявленных объектов культурного наследия Чеченской Республики (Приказ Минкультуры ЧР от 16.09.2025 № 139-ос) [citation:2][citation:7].',
      architecture: 'Зиярт (святыня/мавзолей).',
      facts: 'Расположен в Ножай-Юртовском районе, с. Энгеной [citation:2].'
    }
  },
  {
    id: 'site-geldagan-old-cemetery', area: 'kurchaloy', village: 'Гелдаган', category: 'sights',
    title: 'Старое кладбище (Шира кешнаш)',
    description: 'Историческое кладбище XIX века. Выявленный объект культурного наследия.',
    coords: [43.20, 46.08], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Датируется XIX веком. Внесено в перечень выявленных объектов культурного наследия Чеченской Республики (Приказ Минкультуры ЧР от 16.09.2025 № 139-ос) [citation:2][citation:7].',
      architecture: 'Кладбище.',
      facts: 'Расположено в Курчалоевском районе, с. Гелдаган, в 1880 км к юго-востоку от центральной мечети (направление 163,94°). Координаты в документе указаны с ошибкой (1880 км), но сам объект существует [citation:2].'
    }
  },
  {
    id: 'site-tsentaroy-khetashan-kort', area: 'kurchaloy', village: 'Центарой', category: 'sights',
    title: 'Кхеташан корт',
    description: 'Историческое место XIV–XVII веков. Выявленный объект культурного наследия.',
    coords: [43.22, 46.10], taip: null, tukhum: null,
    details: {
      image: null,
      history: 'Датируется XIV–XVII веками. Внесён в перечень выявленных объектов культурного наследия Чеченской Республики (Приказ Минкультуры ЧР от 16.09.2025 № 139-ос) [citation:7].',
      architecture: 'Культовое/историческое место.',
      facts: 'Расположен в Ножай-Юртовском районе, в 1300 м к юго-западу от центральной мечети с. Центарой [citation:7].'
    }
  },

];