export default function ListDetail(props) {
  return (
    <div className="flex gap-4 bg-white rounded-xl">
      <div className="w-1/3">
        <div className="bg-gray-200 h-48 rounded-md flex items-center justify-center text-gray-500">Image</div>
      </div>
      <div className="p-5 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-light">{props.title}</h1>
        </div>
        <div>
          <p className="text-sm">{props.description}</p>
        </div>
        <div className="mt-7 flex flex-col gap-1">
          <div>
            <span className="text-xl font-medium">${props.price}</span>
            <span className="text-gray-500"> /night</span>
          </div>
          <div>
            <button className='w-1/4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-2 px-3 transition-colors' onClick={props.book}>Reserve this</button>
          </div>
        </div>
      </div>
    </div>
  )
}