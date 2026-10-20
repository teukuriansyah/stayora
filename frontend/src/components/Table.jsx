import { MapPin, Calendar, User } from "lucide-react"
import React from 'react'

export default function Table(){
  return (
    <div>
      <div className="relative overflow-x-auto bg-neutral-primary-soft rounded-base border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">Hotels</th>
              <th scope="col" className="px-6 py-3 font-medium">Date & Timings</th>
              <th scope="col" className="px-6 py-3 font-medium">Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-neutral-primary border-b border-gray-400">
              <td scope="row" className="px-6 py-4">
                <div className="flex gap-2">
                  <div>
                    <div className="bg-gray-200 rounded-md flex items-center aspect-square justify-center text-gray-500">Image</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-light">Title hotel</h3>
                    <div className="flex gap-1 items-end">
                      <MapPin color="#a2b0bb" size={22}/>
                      <span className="text-sm text-gray-400">Lokasi</span>
                    </div>
                    <div className="flex gap-1 items-end">
                      <User color="#a2b0bb" size={22}/>
                      <span className="text-sm text-gray-400">Guests: </span>
                    </div>
                    <span>Rp. 100000</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <span className="font-medium">Check-in</span>
                    <span className="text-gray-400">Check-in</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">Check-out</span>
                    <span className="text-gray-400">Check-out</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">Paid</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
