import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'ngrok-skip-browser-warning': 'true'
  }
})

export async function getAllData() {
  const { data } = await api.get("/getAllHotel")
  return data
}

export async function getDataById(id) {
  const { data } = await api.get(`/getHotel/${id}`)
  return data
}