import React from 'react'

export default function Checkout() {
  return (
    <div className="flex">
      {/* Personal data */}
      <div className="w-1/2">
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
      
      <div className="w-1/2 p-7">
        <div className="p-5 rounded-xl shadow bg-white">
          <div>
            <div className="bg-gray-200 h-48 rounded-md flex items-center justify-center text-gray-500">Image</div>
          </div>
          <div className="mt-3">
            <div>
              <h2>Judul hotel</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}