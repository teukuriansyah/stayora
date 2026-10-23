import { getAllDataHotel, getDataHotelById } from "../controller/Controller.js"
import express from "express"

const route = express.Router()

route.get("/getAllHotel",(req,res) => getAllDataHotel(req,res))

route.get("/getHotel/:id",(req,res) => getDataHotelById(req,res))

export default route