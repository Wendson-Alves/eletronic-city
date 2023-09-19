import formattedURL from "@/helpers/formattedURL";

const dataBase = [
  {
    category: 'smartphones',
    products: [
      {
        id: 1,
        title: 'Título do smartphone 1',
        slug: formattedURL('Título do smartphone 1'),
        rating: 3.4,
        price: 800,
        discount: 1300,
        stock: 0,
        image: '/imagens/smartphone.png'
      },
      {
        id: 2,
        title: 'Título do smartphone 2',
        slug: formattedURL('Título do smartphone 2'),
        rating: 4.0,
        price: 100,
        discount: 1300,
        stock: 10,
        image: '/imagens/smartphone.png'
      },
      {
        id: 3,
        title: 'Título do smartphone 3',
        slug: formattedURL('Título do smartphone 3'),
        rating: 4.8,
        price: 1000,
        discount: 1300,
        stock: 10,
        image: '/imagens/smartphone.png'
      },
      {
        id: 4,
        title: 'Título do smartphone 4',
        slug: formattedURL('Título do smartphone 4'),
        rating: 4.8,
        price: 2500,
        discount: 4000,
        stock: 10,
        image: '/imagens/smartphone.png'
      },
      {
        id: 5,
        title: 'Título do smartphone 5',
        slug: formattedURL('Título do smartphone 5'),
        rating: 4.8,
        price: 1050,
        discount: 1300,
        stock: 10,
        image: '/imagens/smartphone.png'
      },
      {
        id: 6,
        title: 'Título do smartphone 6',
        slug: formattedURL('Título do smartphone 6'),
        rating: 4.8,
        price: 1080,
        discount: 1300,
        stock: 10,
        image: '/imagens/smartphone.png'
      },
    ]
  },
  {
    category: 'notebooks',
    products: [
      {
        id: 7,
        title: 'Título do notebook 7',
        slug: formattedURL('Título do notebook 7'),
        rating: 3.4,
        price: 2000,
        discount: 1300,
        stock: 10,
        image: '/imagens/notebook.png'
      },
      {
        id: 8,
        title: 'Título do notebook 8',
        slug: formattedURL('Título do notebook 8'),
        rating: 4.0,
        price: 2000,
        discount: 1300,
        stock: 10,
        image: '/imagens/notebook.png'
      },
      {
        id: 9,
        title: 'Título do notebook 9',
        slug: formattedURL('Título do notebook 9'),
        rating: 4.8,
        price: 1000,
        discount: 1300,
        stock: 10,
        image: '/imagens/notebook.png'
      },
      {
        id: 10,
        title: 'Título do notebook 10',
        slug: formattedURL('Título do notebook 10'),
        rating: 4.8,
        price: 1000,
        discount: 1300,
        stock: 10,
        image: '/imagens/notebook.png'
      },
      {
        id: 11,
        title: 'Título do notebook 11',
        slug: formattedURL('Título do notebook 11'),
        rating: 4.8,
        price: 1700,
        discount: 1300,
        stock: 10,
        image: '/imagens/notebook.png'
      },
      {
        id: 12,
        title: 'Título do notebook 12',
        slug: formattedURL('Título do notebook 12'),
        rating: 4.8,
        price: 1500,
        discount: 1300,
        stock: 10,
        image: '/imagens/notebook.png'
      },
    ]
  },
  {
    category: 'hits',
    products: [
      {
        id: 13,
        title: 'Título do hit 7',
        slug: formattedURL('Título do hit 7'),
        rating: 3.4,
        price: 1400,
        discount: 1300,
        stock: 10,
        image: 'https://i.ibb.co/d4RKjrv/aaaaaaa.png'
      },
      {
        id: 14,
        title: 'Título do hit 8',
        slug: formattedURL('Título do hit 8'),
        rating: 4.0,
        price: 1100,
        discount: 1300,
        stock: 10,
        image: 'https://i.ibb.co/d4RKjrv/aaaaaaa.png'
      },
      {
        id: 15,
        title: 'Título do hit 9',
        slug: formattedURL('Título do hit 9'),
        rating: 4.8,
        price: 1100,
        discount: 1300,
        stock: 10,
        image: 'https://i.ibb.co/d4RKjrv/aaaaaaa.png'
      },
      {
        id: 16,
        title: 'Título do hit 10',
        slug: formattedURL('Título do hit 10'),
        rating: 4.8,
        price: 1900,
        discount: 900,
        stock: 10,
        image: 'https://i.ibb.co/d4RKjrv/aaaaaaa.png'
      },
      {
        id: 17,
        title: 'Título do hit 11',
        slug: formattedURL('Título do hit 11'),
        rating: 3.8,
        price: 1000,
        discount: 1300,
        stock: 10,
        image: 'https://i.ibb.co/d4RKjrv/aaaaaaa.png'
      },
      {
        id: 18,
        title: 'Título do hit 12',
        slug: formattedURL('Título do hit 12'),
        rating: 3.8,
        price: 1200,
        discount: 1300,
        stock: 10,
        image: 'https://i.ibb.co/d4RKjrv/aaaaaaa.png'
      },
    ]
  }
]

export default dataBase;