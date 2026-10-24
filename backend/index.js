import express from "express"
import ngrok from "@ngrok/ngrok"
import cors from "cors"
import "dotenv/config"
import database from "./config/database.js"
import route from "./route/Route.js"

const app = express()

app.use(express.json())
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'ngrok-skip-browser-warning']
}))
app.use(route)

async function connectNgrok() {
	const forwarder = await ngrok.forward({
		addr: 3000,
		authtoken_from_env: true,
	});
  return forwarder.url()
}

app.listen(3000,() => {
  console.log("Server is running on port 3000")
  connectNgrok().then(res => console.log(res))
  database.authenticate().then(res => console.log("Connection has been established successfully.")).catch(err => console.error('Unable to connect to the database:', err))
})