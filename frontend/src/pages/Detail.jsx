import ListDetail from "../components/ListDetail.jsx"

export default function Detail() {
  return (
    <div>
      {/* Image */}
      <div>
        <div className="bg-gray-200 h-48 rounded-md flex items-center justify-center text-gray-500">Image</div>
      </div>
      
      {/* Title */}
      <div className="mt-8 flex justify-between items-start">
        <div className="flex flex-col gap-3">
          <div>
            <h2 className="text-4xl font-semibold">Title Hotel</h2>
          </div>
          <div className="flex gap-3">
            <div>
              <span className="font-medium">4.7</span>
              <span className="text-gray-400 text-sm">/5</span>
              <span> (195 reviews)</span>
            </div>
            <div><span>•</span></div>
            <div>
              lokasi
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-semibold">Rp. 1.000.000</h3>
          <span className="text-sm text-gray-400">/room/night</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2">See rooms</button>
        </div>
      </div>
      
      {/* Description*/ }
      <div className="mt-6">
        <h5 className="font-semibold text-xl">About Hotel</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique tortor in interdum pretium. Suspendisse ultrices gravida bibendum. Etiam luctus lacus purus, sit amet elementum mi lacinia eget. Suspendisse id sem nisl. Ut lectus mi, feugiat ut tristique ut, ultricies luctus mi. Praesent id vehicula ante. Aliquam et nunc nulla.</p>
      </div>

      {/* Fasilities */}
      <div className="mt-6">
        <div>
          <h5 className="font-semibold text-xl">Fasilities</h5>
        </div>
        <div>
          <ul className="grid grid-cols-4 mt-1">
            <li>list</li>
            <li>list</li>
            <li>list</li>
            <li>list</li>
            <li>list</li>
            <li>list</li>
            <li>list</li>
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <div>
          <h2 className="text-xl font-medium">Available Sanctuary</h2>
        </div>
        <div className="mt-2 flex flex-col gap-3">
          <ListDetail />
          <ListDetail />
          <ListDetail />
        </div>
      </div>
    </div>
  )
}