import { useState, useEffect } from 'react'
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Booked() {
  const d = new Date()
  const navigate = useNavigate()
  const [datas,setDatas] = useState("")

  const fetching = () => {
    const data = localStorage.getItem("dataBooked")
    if(data !== null) {
      setDatas(JSON.parse(data))
    }
    else{
      navigate("/")
    }
  }

  useEffect(() => {
    fetching()
  },[])
  return (
    <div className='flex'>
      <div className='w-1/2'>
        {/* Card */}
        <div className="p-5 rounded-xl shadow bg-white w-[90%]">
          {/* Image */}
          <div>
            <div className="bg-gray-200 h-48 rounded-md flex items-center justify-center text-gray-500">Image</div>
          </div>
          {/* Description */}
          <div className="mt-5">
            {/* Title hotel */}
            <div>
              <div>
                <h2 className='text-xl font-medium'>{datas?.hotel.name}</h2>
              </div>
              <div className='mt-6 flex gap-8'>
                <div className='flex flex-col gap-1'>
                  <span className='font-medium'>Check-in</span>
                  <span className='font-medium'>Check-out</span>
                </div>
                <div className='flex flex-col gap-1'>
                  <span>{`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`}</span>
                  <span>{`${d.getDate()+1}/${d.getMonth()}/${d.getFullYear()}`}</span>
                </div>
              </div>
            </div>
            {/* Standard double hotel */}
            <div className='mt-6 border-t border-gray-400 pt-3'>
              <div>
                <span className='font-medium'>Standard double room</span>
              </div>
              <div className='w-3/5 flex justify-between'>
                <div>
                  <span>testing</span>
                </div>
                <div>
                  <span>testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Description */}
        <div className='mt-5'>
            <div className='flex items w-[90%] py-5 justify-between border-t border-gray-400'>
                <div className='flex flex-col gap-1'>
                    <span className='font-medium'>Hotel address</span>
                    <span className='font-medium'>Email</span>
                    <span className='font-medium'>Telephone</span>
                </div>
                <div className='flex flex-col gap-1'>
                    <span>{datas?.hotel?.city}</span>
                    <span>Email</span>
                    <span>Telephone</span>
                </div>
            </div>
            <div className='flex justify-between w-[90%] py-5 border-t border-t border-gray-400'>
                <button className='w-[40%] bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-2 px-3 transition-colors'>Contact property</button>
                <button className='w-[40%] border-2 border-blue-500 bg-white text-blue-500 font-semibold rounded-lg py-2 px-3'>Cancel reservation</button>
            </div>
        </div>
      </div>

      {/* Success */}
      <div className='w-1/2 flex flex-col items-center justify-center gap-2'>
        <div className='p-3 aspect-square flex items-center justify-center rounded-full bg-green-200'>
          <Check color="green" strokeWidth={3}/>
        </div>
        <div>
          <span className='text-xl font-medium'>Your booking is now confirmed</span>
        </div>
      </div>
    </div>
  )
}