import refatoringArray from "@/helpers/constructArrayProducts"
import dataBase from "../db/database"


export default function handler(req, res) {
  const slug = req.query.slug
  res.json(
    refatoringArray(dataBase)
      .find((item) => {
        return item.slug === slug
      })
  )
}