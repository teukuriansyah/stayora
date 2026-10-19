import { MapPin } from "lucide-react"

export default function ListSearch() {
  return (
    <div className='flex items-stretch bg-white shadow rounded-lg overflow-hidden'>
        <div className='flex gap-4 w-4/5 p-4'>
            <div className='w-2/5'>
                <div className="bg-gray-200 h-48 rounded-md flex items-center justify-center text-gray-500">Image</div>
            </div>
            <div className='w-3/5'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-xl font-semibold'>Title</h3>
                    <div>
                        <span className='text-lg font-medium'>8.4/10</span>
                        <span className='text-sm text-gray-400'> (156 reviews)</span>
                    </div>
                </div>
                <div className="flex gap-2 items-center mt-1">
                    <MapPin />
                    <h3>lokasi</h3>
                </div>
            </div>
        </div>

        <div className='w-1/5 flex flex-col justify-center gap-2 p-4 border-l border-gray-200'>
            <h3 className='font-semibold text-xl'>Rp. 100.000</h3>
            <button className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-2 px-3 transition-colors'>Select Room</button>
        </div>
    </div>
  )
}