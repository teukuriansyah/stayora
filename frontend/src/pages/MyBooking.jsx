import React from 'react'
import Table from "../components/Table"

export default function MyBooking() {
  return (
    <div>
      {/* Title */}
      <div>
        <h2 className="text-2xl">My Bookings</h2>
        <span className="text-sm text-gray-400">Easily manage your past, current, and upcoming hotel reservations in one hotel. Plan your trips seamlessly with just a few clicks</span>
      </div>

      {/* Table */}
      <div className="mt-9">
        <Table />
      </div>
    </div>
  )
}