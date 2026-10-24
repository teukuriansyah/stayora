import { MapPin, Calendar, User } from "lucide-react"
import { useState, useEffect } from "react"
import { getAllData } from "../services/Services.js"
import Card from "../components/Card"

export default function Home() {
  const [datas,setDatas] = useState([])

  const fetchingData = async () => {
    const { data } = await getAllData()
    setDatas(data)
    localStorage.removeItem("dataBooked")
  }

  useEffect(() => {
    fetchingData()
  },[])
  return (
    <div>
      <div>
        <div>
          <h1 className="text-3xl font-medium">Discover Exceptional Sanctuaries</h1>
          <span className="text-sm text-gray-500">Over 480 verified five-star private villas, historic estates, and architectural retreats worldwide.</span>
        </div>
        <div className="mt-6">
          <form>
            <div className="flex justify-between gap-5">
              <div className="w-full">
                <label>City place to go</label>
                <div className="border border-gray-500 rounded px-3 py-1 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <input type="text" placeholder="City place to go" className="outline-0" />
                </div>
              </div>
              <div className="w-full">
                <label>Check-In & Check-out Date</label>
                <div className="border border-gray-500 rounded px-3 py-1 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <input type="text" placeholder="Check-In & Check-out Dates" className="outline-0" />
                </div>
              </div>
              <div className="w-full">
                <label>Guests and Rooms</label>
                <div className="border border-gray-500 rounded px-3 py-1 flex items-center gap-2">
                  <User className="w-5 h-5 text-gray-500" />
                  <input type="text" placeholder="Guests and Rooms" className="outline-0" />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2">Search</button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-[54px]">
        <div>
          <div>
            <h1 className="text-xl font-semibold">Available Stays for Your Dates</h1>
            <span className="text-gray-500 text-sm">Showing verified luxury properties with instant booking confirmation</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-8">
          {datas?.map((d,i) => <Card key={i} image={d.imageUrl} lokasi={d.city} rating={d.avgRating} count={d.reviewCount} name={d.name} price={d.pricePerNight} id={d.idHotel}/>)}
        </div>
      </div>
    </div>
  )
}
