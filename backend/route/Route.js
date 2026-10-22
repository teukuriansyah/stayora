import { getAllDataHotel } from "../controller/Controller.js"
import express from "express"

const route = express.Router()

route.get("/",(req,res) => getAllDataHotel(req,res))

export default route