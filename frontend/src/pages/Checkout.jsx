import React from 'react'

export default function Checkout() {
  return (
    <div className="flex">
      {/* Personal data */}
      <div className="w-1/2 flex flex-col justify-between">
        <div></div>
        <div>
          <div>
            <h3 className="text-2xl font-medium">Personal Data</h3>
          </div>
          <div className="mt-2 flex flex-col gap-3">
            <div className="flex flex-col">
              <label>First and Last name</label>
              <input type="text" className="outline-0 border border-gray-500 rounded-xl px-4 py-1"/>
            </div>
            <div className="flex flex-col">
              <label>Email address</label>
              <input type="email" className="outline-0 border border-gray-500 rounded-xl px-4 py-1"/>
            </div>
            <div className="flex flex-col">
              <label>Phone number</label>
              <input type="tel" className="outline-0 border border-gray-500 rounded-xl px-4 py-1"/>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3">
          <div>
            <h3 className="text-2xl font-medium">Payment Details</h3>
          </div>
          <div className="mt-2 flex flex-col gap-3">
            <div className="flex flex-col">
              <label>Name on card</label>
              <input type="text" className="outline-0 border border-gray-500 rounded-xl px-4 py-1"/>
            </div>
            <div className="flex flex-col">
              <label>Card number</label>
              <input type="number" className="outline-0 border border-gray-500 rounded-xl px-4 py-1"/>
            </div>
            <div className="flex flex-col">
              <label>Valid until</label>
              <div className="flex gap-3 items-center">
                <input type="number" className="outline-0 border border-gray-500 rounded-xl w-1/2 px-4 py-1"/>
                <input type="number" className="outline-0 border border-gray-500 rounded-xl w-1/2 px-4 py-1"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Card */}
      <div className="w-1/2 px-7 pt-7 flex flex-col justify-between items-center">
        <div className="p-5 rounded-xl shadow bg-white w-[90%] h-[90%]">
          {/* Image */}
          <div>
            <div className="bg-gray-200 h-48 rounded-md flex items-center justify-center text-gray-500">Image</div>
          </div>
          {/* Description */}
          <div className="mt-5">
            {/* Title hotel */}
            <div>
              <div>
                <h2 className='text-xl font-medium'>Judul hotel</h2>
              </div>
              <div className='mt-6 flex gap-8'>
                <div className='flex flex-col gap-1'>
                  <span className='font-medium'>Check-in</span>
                  <span className='font-medium'>Check-out</span>
                </div>
                <div className='flex flex-col gap-1'>
                  <span>Check-in</span>
                  <span>Check-out</span>
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
            {/* Total */}
            <div className='flex w-3/5 justify-between mt-4 border-t border-gray-400'>
              <span className='font-medium'>Total</span>
              <span className='font-medium'>Rp. 000</span>
            </div>
          </div>
        </div>

        <div className='w-[90%]'>
          <button className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-2 px-3 transition-colors'>Book now</button>
        </div>
      </div>

    </div>
  )
}