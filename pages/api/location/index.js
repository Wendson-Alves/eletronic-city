import refatoringArray from '@/helpers/arrayLocation';
import location from '../db/location';

export default function handler(req, res) {
  res.json(refatoringArray(location))
}