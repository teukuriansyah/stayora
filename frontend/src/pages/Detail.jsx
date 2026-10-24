import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react"
import { getDataById } from "../services/Services.js"
import ListDetail from "../components/ListDetail.jsx"

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [datas, setDatas] = useState([])

  const fetching = async () => {
    const { data } = await getDataById(id)
    setDatas(data)
  }

  const booking = (name,city,price) => {
    const data = {
      name:name,
      city:city,
      price:price
    }
    localStorage.setItem("data",JSON.stringify(data))
    navigate('/checkout')
  }

  useEffect(() => {
    fetching()
  }, [])

  return (
    <div>
      {/* Image */}
      <div>
        <img src={datas?.imageUrl} alt="Image hotel" className="w-full object-cover h-48 rounded-md"/>
      </div>
      
      {/* Title */}
      <div className="mt-8 flex justify-between items-start">
        <div className="flex flex-col gap-3">
          <div>
            <h2 className="text-4xl font-semibold">{datas?.name}</h2>
          </div>
          <div className="flex gap-3">
            <div>
              <span className="font-medium">{datas?.avgRating}</span>
              <span className="text-gray-400 text-sm">/5</span>
              <span> ({datas?.reviewCount} reviews)</span>
            </div>
            <div><span>•</span></div>
            <div>
              {datas?.city}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-semibold">${datas?.pricePerNight}</h3>
          <span className="text-sm text-gray-400">/room/night</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2">See rooms</button>
        </div>
      </div>
      
      {/* Description*/}
      <div className="mt-6">
        <h5 className="font-semibold text-xl">About Hotel</h5>
        <p>{datas?.description}</p>
      </div>

      {/* Fasilities */}
      <div className="mt-6">
        <div>
          <h5 className="font-semibold text-xl">Fasilities</h5>
        </div>
        <div>
          <ul className="grid grid-cols-4 mt-1">
            {Array.isArray(datas?.amenities) 
              ? datas.amenities.map((d, i) => <li key={i}>{d}</li>) 
              : typeof datas?.amenities === 'string'
                ? JSON.parse(datas.amenities).map((d, i) => <li key={i}>{d}</li>)
                : null
            }
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <div>
          <h2 className="text-xl font-medium">Available Sanctuary</h2>
        </div>
        <div className="mt-2 flex flex-col gap-3">
          {datas?.dataRoom?.map((d,i) => <ListDetail key={i} title={d.name} description={d.description} price={d.basePrice} book={() => booking(d.name,datas?.city,d.basePrice)}/>)}
        </div>
      </div>
    </div>
  )
}