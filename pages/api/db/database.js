import formattedURL from "@/helpers/formattedURL";

const dataBase = [
  {
    category: 'smartphones',
    products: [
      {
        id: 1,
        title: 'Smartphone 1',
        slug: formattedURL('Smartphone 1'),
        rating: 3.4,
        price: 800,
        discount: 1300,
        stock: 0,
        image: [
          '/imagens/smartphone1.jpg', 
          '/imagens/smartphone2.jpg',
          '/imagens/smartphone.jpg',
        ]
      },
      {
        id: 2,
        title: 'Smartphone 2',
        slug: formattedURL('Smartphone 2'),
        rating: 4.0,
        price: 1300,
        discount: 100,
        stock: 10,
        image: [
          '/imagens/smartphone1.jpg',
          '/imagens/smartphone2.jpg',
          '/imagens/smartphone.jpg',
        ]
      },
      {
        id: 3,
        title: 'Smartphone 3',
        slug: formattedURL('Smartphone 3'),
        rating: 4.8,
        price: 1300,
        discount: 300,
        stock: 10,
        image: [
          '/imagens/smartphone1.jpg',
          '/imagens/smartphone2.jpg',
          '/imagens/smartphone.jpg',
        ]
      },
      {
        id: 4,
        title: 'Smartphone 4',
        slug: formattedURL('Smartphone 4'),
        rating: 4.8,
        price: 2500,
        discount: 500,
        stock: 10,
        image: [
          '/imagens/smartphone1.jpg',
          '/imagens/smartphone2.jpg',
          '/imagens/smartphone.jpg',
        ],
      },
      {
        id: 5,
        title: 'Smartphone 5',
        slug: formattedURL('Smartphone 5'),
        rating: 4.8,
        price: 1050,
        discount: 1300,
        stock: 10,
        image: [
          '/imagens/smartphone1.jpg',
          '/imagens/smartphone2.jpg',
          '/imagens/smartphone.jpg',
        ]
      },
      {
        id: 6,
        title: 'Smartphone 6',
        slug: formattedURL('Smartphone 6'),
        rating: 4.8,
        price: 1380,
        discount: 1300,
        stock: 10,
        image: [
          '/imagens/smartphone1.jpg',
          '/imagens/smartphone2.jpg',
          '/imagens/smartphone.jpg',
        ]
      },
    ]
  },
  {
    category: 'notebooks',
    products: [
      {
        id: 7,
        title: 'Notebook 7',
        slug: formattedURL('Notebook 7'),
        rating: 3.4,
        price: 2000,
        discount: 1300,
        stock: 10,
          image: [
            '/imagens/notebook.jpg',
            '/imagens/notebook1.jpg',
            '/imagens/notebook2.jpg',
          ]
      },
      {
        id: 8,
        title: 'Notebook 8',
        slug: formattedURL('Notebook 8'),
        rating: 4.0,
        price: 2000,
        discount: 1300,
        stock: 10,
          image: [
            '/imagens/notebook.jpg',
            '/imagens/notebook1.jpg',
            '/imagens/notebook2.jpg',
          ]
      },
      {
        id: 9,
        title: 'Notebook 9',
        slug: formattedURL('Notebook 9'),
        rating: 4.8,
        price: 1000,
        discount: 1300,
        stock: 10,
          image: [
            '/imagens/notebook.jpg',
            '/imagens/notebook1.jpg',
            '/imagens/notebook2.jpg',
          ]
      },
      {
        id: 10,
        title: 'Notebook 10',
        slug: formattedURL('Notebook 10'),
        rating: 4.8,
        price: 1500,
        discount: 1300,
        stock: 10,
          image: [
            '/imagens/notebook.jpg',
            '/imagens/notebook1.jpg',
            '/imagens/notebook2.jpg',
          ]
      },
      {
        id: 11,
        title: 'Notebook 11',
        slug: formattedURL('Notebook 11'),
        rating: 4.8,
        price: 1700,
        discount: 1300,
        stock: 10,
          image: [
            '/imagens/notebook.jpg',
            '/imagens/notebook1.jpg',
            '/imagens/notebook2.jpg',
          ]
      },
      {
        id: 12,
        title: 'Notebook 12',
        slug: formattedURL('Notebook 12'),
        rating: 4.8,
        price: 1500,
        discount: 1300,
        stock: 10,
          image: [
            '/imagens/notebook.jpg',
            '/imagens/notebook1.jpg',
            '/imagens/notebook2.jpg',
          ]
      },
    ]
  },
  {
    category: 'hits',
    products: [
      {
        id: 13,
        title: 'Hit 7',
        slug: formattedURL('Hit 7'),
        rating: 3.4,
        price: 1400,
        discount: 1300,
        stock: 10,
        image: [
        '/imagens/xbox.jpg',
        '/imagens/xbox1.jpg',
        '/imagens/xbox2.jpg',
      ]
      },
      {
        id: 14,
        title: 'Hit 8',
        slug: formattedURL('Hit 8'),
        rating: 4.0,
        price: 1100,
        discount: 1300,
        stock: 10,
        image: [
        '/imagens/xbox.jpg',
        '/imagens/xbox1.jpg',
        '/imagens/xbox2.jpg',
      ]
      },
      {
        id: 15,
        title: 'Hit 9',
        slug: formattedURL('Hit 9'),
        rating: 4.8,
        price: 1300,
        discount: 1300,
        stock: 10,
        image: [
        '/imagens/xbox.jpg',
        '/imagens/xbox1.jpg',
        '/imagens/xbox2.jpg',
      ]
      },
      {
        id: 16,
        title: 'Hit 10',
        slug: formattedURL('Hit 10'),
        rating: 4.8,
        price: 1900,
        discount: 900,
        stock: 10,
        image: [
        '/imagens/xbox.jpg',
        '/imagens/xbox1.jpg',
        '/imagens/xbox2.jpg',
      ]
      },
      {
        id: 17,
        title: 'Hit 11',
        slug: formattedURL('Hit 11'),
        rating: 3.8,
        price: 1350,
        discount: 1300,
        stock: 10,
        image: [
        '/imagens/xbox.jpg',
        '/imagens/xbox1.jpg',
        '/imagens/xbox2.jpg',
      ]
      },
      {
        id: 18,
        title: 'Hit 12',
        slug: formattedURL('Hit 12'),
        rating: 3.8,
        price: 1200,
        discount: 1300,
        stock: 10,
        image: [
        '/imagens/xbox.jpg',
        '/imagens/xbox1.jpg',
        '/imagens/xbox2.jpg',
      ]
      },
    ]
  },
]

export default dataBase;