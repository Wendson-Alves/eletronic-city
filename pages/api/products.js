import { formatCurrencyNumber } from '@/helpers/formatNumber';
import formattedURL from '@/helpers/formattedURL';
import { v4 as uuidv4 } from 'uuid';

const dataBase = [
  {
    category: 'smartphones',
    products: [
      {
        id: uuidv4(),
        title: 'Título do smartphone 1',
        slug: formattedURL('Título do smartphone 1'),
        rating: 3.4,
        price: 1000,
        discount: 1300,
        stock: 10,
        image: 'https://i.ibb.co/d4RKjrv/aaaaaaa.png'
      },
      {
        id: uuidv4(),
        title: 'Título do smartphone 2',
        slug: formattedURL('Título do smartphone 2'),
        rating: 4.0,
        price: 1000,
        discount: 1300,
        stock: 10,
        image: 'https://i.ibb.co/d4RKjrv/aaaaaaa.png'
      },
      {
        id: uuidv4(),
        title: 'Título do smartphone 3',
        slug: formattedURL('Título do smartphone 3'),
        rating: 4.8,
        price: 1000,
        discount: 1300,
        stock: 10,
        image: 'https://i.ibb.co/d4RKjrv/aaaaaaa.png'
      },
      {
        id: uuidv4(),
        title: 'Título do smartphone 4',
        slug: formattedURL('Título do smartphone 4'),
        rating: 4.8,
        price: 1000,
        discount: 1300,
        stock: 10,
        image: 'https://i.ibb.co/d4RKjrv/aaaaaaa.png'
      },
      {
        id: uuidv4(),
        title: 'Título do smartphone 5',
        slug: formattedURL('Título do smartphone 5'),
        rating: 4.8,
        price: 1000,
        discount: 1300,
        stock: 10,
        image: 'https://i.ibb.co/d4RKjrv/aaaaaaa.png'
      },
      {
        id: uuidv4(),
        title: 'Título do smartphone 6',
        slug: formattedURL('Título do smartphone 6'),
        rating: 4.8,
        price: 1000,
        discount: 1300,
        stock: 10,
        image: 'https://i.ibb.co/d4RKjrv/aaaaaaa.png'
      },
    ]
  }
]

export default function handler(req, res) {
  res.status(200).json(dataBase)
}