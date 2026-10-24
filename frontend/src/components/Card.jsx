import { MapPin, Star } from 'lucide-react'
import { Link } from "react-router-dom"

export default function Card(props) {
  return (
    <Link to={`/detail/${props.id}`} className="border border-gray-300 bg-white rounded-lg max-w-sm">
      {/* Image */}
      <img src={props.image} alt="Image Hotel" className='h-48 rounded-md mb-4'/>

      {/* Judul & Lokasi */}
      <div className="px-4">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-1 text-gray-600"><MapPin size={16} /><span>{props.lokasi}</span></div>
          <div className="flex items-center gap-1"><Star size={16} className="fill-yellow-400 text-yellow-400" /><span className="font-medium">{props.rating}</span><span className="text-gray-500">({props.count})</span></div>
        </div>
        <div className="mt-1"><h1 className="text-lg font-medium">{props.name}</h1></div>
      </div>

      {/* Reserve */}
      <div className="p-4">
        <div className="border-t border-gray-300 pt-3 mt-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold">${props.price}</span><span className="text-sm text-gray-500">/night</span>
            </div>
            <div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2">Reserve</button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
