import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <div className='px-8 py-6 border border-gray-300'>

        <div className="flex justify-between">
            {/* Identity */}
            <div className="w-1/4 flex flex-col justify-between">
                <div className="flex gap-3 items-center">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuH87jadxhHkMFFz4ZgCd3biH3iiIxceKvCMgvBWfShGcSzlD9Lv-374me3haP_DJoefxO2WQK-uqqrKDlj3ifi_Dx6W8jQegPm8t8H3GVyZHPPSSqiwE1z_-8YfxTmOQeyqVj-i7RxfLNf6lyxfi0pwr3WwtsLLMpWgeTM0A7XAdgYuqc2f3SNWjihVEdJnEk-QigYcFe8U6pGX6CzFUmxp8QyxEpvzJCkf2qH7YliLTWL9dM1dzS" alt="logo" className="w-[30px]" /> 
                    <h3 className="text-lg">STAYORA</h3>
                </div>
                <div className="mt-4">
                    <p className="text-[12px]">Stayora curates timeless architectural masterpieces and serene sanctuaries across the globe. Seamlessly search, compare, and book the world's most exceptional private stays.</p>
                </div>
                <div className="mt-3 flex gap-3 items-center">
                    <div className='flex gap-1'>
                        <Mail className="h-4 w-4 shrink-0 text-gray-500" />
                        <span className="text-[12px]">stayora@email.com</span>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <Phone className="h-4 w-4 shrink-0 text-gray-500" />
                        <span className="text-[12px]">08888888888</span>
                    </div>
                </div>
            </div>
            <div className='bg-[#fbfaf9] border border-gray-300 rounded-lg w-1/3 p-4 flex flex-col gap-1'>
                <h1>Sanctuary Alerts</h1>
                <span className="text-sm text-gray-500">Get alerted to rare villa cancellations and unpublished seasonal rates.</span>
                <div className='flex gap-1 '>
                    <input type="email" placeholder='Your email address' className='border border-gray-300 rounded text-sm px-2 py-1 w-[85%]' />
                    <button className='bg-black text-white rounded w-[15%]'>Join</button>
                </div>
                <span className='text-sm text-gray-500'>Strict discretion guaranteed. Unsubscribe at any time.</span>
            </div>
        </div>
        <div className='border-t mt-12 pt-5 border-gray-300'>
            <span className='text-[10px] text-gray-600'>© 2025 Stayora Hospitality Inc. All rights reserved. Registered High-Touch Travel Purveyor.   </span>
        </div>
    </div>
  )
}
