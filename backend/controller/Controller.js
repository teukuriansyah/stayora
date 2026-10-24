import db from "../models/index.js"

const { hotel, roomType } = db

export async function getAllDataHotel(req,res) {
  const data = await hotel.findAll()
  res.status(200).json({ status:200,data:data,message:"Get data successfull" })
}

export async function getDataHotelById(req,res) {
  const id = req.params.id
  const dataHotel = await hotel.findOne({ where:{ idHotel:id }, raw:true })
  const dataRoom = await roomType.findAll({ where:{ idHotel:id }, raw:true })
  res.status(200).json({ status:200,data:{...dataHotel,dataRoom:dataRoom},message:`Get data with id ${id} successfull` })
}