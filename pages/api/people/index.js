import refatoringArray from '@/helpers/arrayPeople';
import people from '../db/people';

export default function handler(req, res) {
  res.json(refatoringArray(people))
}