import hotel from "../models/hotel.js"
import roomType from "../models/roomType.js"

export async function getAllDataHotel(req,res) {
  const data = await hotel.findAll()
  res.status(200).json({ status:200,data:data,message:"Get data successfull" })
}

export async function getDataHotelById(req,res) {
  const id = req.params.id
  const data = await roomType.findOne({ where:{ hotelId:id } })
  res.status(200).json({ status:200,data:data,message:`Get data with id ${id} successfull` })
}