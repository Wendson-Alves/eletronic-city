import refatoringArray from '@/helpers/constructArrayProducts';
import dataBase from '../db/database';

export default function handler(req, res) {
  res.json(refatoringArray(dataBase))
}