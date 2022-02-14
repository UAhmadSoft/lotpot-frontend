import watchImg from 'assets/watchImg.png';
import car from 'assets/car.jpg';
import jewelery from 'assets/c.png';
import art from 'assets/art.jpg';
import faker from 'faker';
export const auctions = [
  {
    id: 122,
    title: 'Siko',
    img: [watchImg],
    description: faker.lorem.paragraph(10),

    price: '$440',
    location: 'Fine Art Gallery, Islamabad',
    startedby: 'Ali Hamza',
    createdAt: '12/2/2022',
    timeLeft: '12/2/2022',
    video: 'rokGy0huYEA',
    categories: ['experience'],
    totalBids: 8,
    finalPrice: '$1200',
  },
  {
    id: 123,
    title: 'Red Mercedes AMG',
    img: [car],
    description: faker.lorem.paragraph(10),
    price: '$20000',
    location: 'Fine Art Gallery, Islamabad',
    startedby: 'Ali Hamza',
    createdAt: '12/2/2022',
    timeLeft: '12/2/2022',
    video: 'rokGy0huYEA',
    categories: ['brand', 'business'],
    totalBids: 13,
    finalPrice: '$55000',
  },
  {
    id: 124,
    title: 'Onyx Black Pearl',
    img: [jewelery],
    description: faker.lorem.paragraph(10),
    price: '$440',
    location: 'Manchester',
    startedby: 'James Colins',
    createdAt: new Date().toLocaleDateString(),
    timeLeft: '12/2/2022',
    video: 'rokGy0huYEA',
    categories: ['item'],
    totalBids: 10,
    finalPrice: '$900',
  },
  {
    id: 125,
    title: 'Bosque Nevado',
    img: [art],
    description: faker.lorem.paragraph(10),
    price: '$1400',
    location: 'Indonesia',
    startedby: 'James Colins',
    createdAt: new Date().toLocaleDateString(),
    timeLeft: '12/2/2022',
    video: 'rokGy0huYEA',
    categories: ['business'],
    totalBids: 5,
    finalPrice: '$2200',
  },
  {
    id: 126,
    title: 'Bosque Nevado',
    img: [art],
    description: faker.lorem.paragraph(10),
    price: '$1400',
    location: 'Indonesia',
    startedby: 'James Colins',
    createdAt: new Date().toLocaleDateString(),
    timeLeft: '12/2/2022',
    video: 'rokGy0huYEA',
    categories: ['business'],
    totalBids: 5,
    finalPrice: '$2200',
  },
  {
    id: 127,
    title: 'Bosque Nevado',
    img: [art],
    description: faker.lorem.paragraph(10),
    price: '$1400',
    location: 'Indonesia',
    startedby: 'James Colins',
    createdAt: new Date().toLocaleDateString(),
    timeLeft: '12/2/2022',
    video: 'rokGy0huYEA',
    categories: ['business'],
    totalBids: 5,
    finalPrice: '$2200',
  },
  {
    id: 128,
    title: 'Bosque Nevado',
    img: [art],
    description: faker.lorem.paragraph(10),
    price: '$1400',
    location: 'Indonesia',
    startedby: 'James Colins',
    createdAt: new Date().toLocaleDateString(),
    timeLeft: '12/2/2022',
    video: 'rokGy0huYEA',
    categories: ['business'],
    totalBids: 5,
    finalPrice: '$2200',
  },
  {
    id: 130,
    title: 'Bosque Nevado',
    img: [art],
    description: faker.lorem.paragraph(10),
    price: '$1400',
    location: 'Indonesia',
    startedby: 'James Colins',
    createdAt: new Date().toLocaleDateString(),
    timeLeft: '12/2/2022',
    video: 'rokGy0huYEA',
    categories: ['business'],
    totalBids: 5,
    finalPrice: '$2200',
  },
];

export const footerInfo = {
  decription1:
    'All LotPot auctions are purely hypothetical until they are claimed by an individual and auctions in no way represents intent or knowledge on the part of the third party in question and LotPot. Therefore,  LotPot is in no way responsible for the content, pricing or financial disputes that may arise after the point of sale on agreed upon terms on the platform.',
  decription2:
    'All names, logos, and brands of third parties and individuals (e.g., TikTok, Instagram, and their respective logos) displayed on our site aretrademarks of their respective owners. LotPot and its products and services are not endorsed by, sponsored by, or affiliated with these third parties. Our use of these names, logos, and brands is for identification purposes only, and does not imply any endorsement, sponsorship, or affiliation or even direct knowledge of individual auction’s material and contents.',
  contactUs: {
    pressEmail: 'info@lotpot.io',
    helpEmail: 'info@lotpot.io',
  },
};

export const categories = [
  'item (10)',
  'experience (20)',
  'food (5)',
  'influencer focused (1)',
  'location based (4)',
  'brand (15)',
  'business (3)',
  'celebrity (1)',
  'random (0)',
  'risky (8)',
  'luxury (2)',
];

export const allcategories = [
  'All Categories',
  'item',
  'experience',
  'food',
  'influencer focused',
  'location based ',
  'brand',
  'business',
  'celebrity',
  'random',
  'risky',
  'luxury',
];

export const locations = [
  'Asia',
  'UK',
  'Europe',
  'North America',
  'South America',
];

export const user = {
  fname: 'Ali',
  lname: 'Hamza',
  email: 'alihamza@gmail.com',
  phone: '041231231',
};

// export const bidddingInfo = [
//   {
//     id: faker.datatype.uuid(),
//     user: user,
//     biddingPrice: '',
//   },
// ];

export const bidddingInfo = [...Array(15)].map((_, index) => ({
  id: faker.datatype.uuid(),
  createdAt: faker.date.past().toLocaleDateString(),
  price: `$${faker.datatype.number({
    min: 4,
    max: 99,
    precision: 0.01,
  })}`,
  user: {
    name: faker.name.findName(),
    email: `${faker.name.findName()}@gmail.com`,
    avatarUrl: `/assets/avatars/avatar_${index + 1}.jpg`,
  },
}));
