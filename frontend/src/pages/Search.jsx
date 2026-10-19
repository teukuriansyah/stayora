import { MapPin, Calendar, User } from "lucide-react"
import ListSearch from '../components/ListSearch'

export default function Search() {
  return (
    <div>
      <div>
        <form>
          <div className="flex justify-between gap-5">
            <div className="w-full">
              <label>City place to go</label>
              <div className="border border-gray-500 rounded px-3 py-1 flex items-center gap-2"><MapPin className="w-5 h-5 text-gray-500" /><input type="text" placeholder="City place to go" className="outline-0" /></div>
            </div>
            <div className="w-full">
              <label>Check-In & Check-out Date</label>
              <div className="border border-gray-500 rounded px-3 py-1 flex items-center gap-2"><Calendar className="w-5 h-5 text-gray-500" /><input type="text" placeholder="Check-In & Check-out Dates" className="outline-0" /></div>
            </div>
            <div className="w-full">
              <label>Guests and Rooms</label>
              <div className="border border-gray-500 rounded px-3 py-1 flex items-center gap-2"><User className="w-5 h-5 text-gray-500" /><input type="text" placeholder="Guests and Rooms" className="outline-0" /></div>
            </div>
          </div>
          <div className="mt-4"><button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2">Search</button></div>
        </form>
      </div>
      <div className='flex flex-col gap-4 mt-6'>
        <ListSearch />
        <ListSearch />
      </div>
    </div>
  )
}