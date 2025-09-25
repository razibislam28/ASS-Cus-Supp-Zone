import React, { useContext } from 'react'
import { TicketContext } from '../provider/TicketContext'

const ResolveTask = () => {
  const{resolve}=useContext(TicketContext)
  return (
    <div>
      <h1 className="text-gray-800 font-bold my-2">ResolveTask</h1>
      {resolve?.map((ticket) => (
          <div
            key={ticket.id}
            className="p-4 mb-2 bg-white rounded-lg shadow flex flex-col space-y-2"
          >
            {/* Title and Status */}
            <div className="justify-between items-start">
              <h2 className="text-sm font-semibold text-gray-800">
                {ticket.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
  )
}

export default ResolveTask