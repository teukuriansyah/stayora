import React from 'react'
import { MapPin, Star } from 'lucide-react'

export default function Card() {
  return (
    <div className="border border-gray-300 bg-white rounded-lg max-w-sm">
      {/* Image */}
      <div className="bg-gray-200 h-48 rounded-md mb-4 flex items-center justify-center text-gray-500">Image</div>

      {/* Judul & Lokasi */}
      <div className="px-4">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-1 text-gray-600"><MapPin size={16} /><span>lokasi hotel</span></div>
          <div className="flex items-center gap-1"><Star size={16} className="fill-yellow-400 text-yellow-400" /><span className="font-medium">4.96</span><span className="text-gray-500">(156)</span></div>
        </div>
        <div className="mt-1"><h1 className="text-lg font-medium">Judul hotel</h1></div>
      </div>

      {/* Reserve */}
      <div className="p-4">
        <div className="border-t border-gray-300 pt-3 mt-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold">$680</span><span className="text-sm text-gray-500">/night</span>
            </div>
            <div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2">Reserve</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
