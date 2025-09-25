import { Calendar } from "lucide-react";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { TicketContext } from "../provider/TicketContext";
import { toast } from "react-toastify";

const getPriorityColor = (priority) => {
  switch (priority.toLowerCase()) {
    case "critical":
      return "text-red-600 font-bold";
    case "high":
      return "text-red-500 font-semibold";
    case "medium":
      return "text-yellow-600 font-semibold";
    case "low":
      return "text-green-600 font-semibold";
    default:
      return "text-gray-600";
  }
};

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "open":
      return "bg-green-100 text-green-600";
    case "in progress":
      return "bg-yellow-100 text-yellow-600";
    case "resolved":
      return "bg-blue-100 text-blue-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const CustomerTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  const { setInprogress,inprogress } = useContext(TicketContext);
  const handleClick = (ticket) => {
    const alreadyAdded = inprogress.find((t) => t.id === ticket.id);

    if (!alreadyAdded) {
      setInprogress((prev) => [...prev, ticket]);
      toast.success("Task is added!");
    } else {
      toast.error("Already added");
    }
  };

  return (
    <div className="pb-4">
      <h1 className="text-gray-800 font-bold my-2 ">Customer Tickets</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {tickets.map((ticket) => (
          <div
            onClick={() => handleClick(ticket)}
            key={ticket.id}
            className="p-4 bg-white rounded-lg shadow flex flex-col space-y-2"
          >
            {/* Title and Status */}
            <div className="flex justify-between items-start">
              <h2 className="text-sm font-semibold text-gray-800">
                {ticket.title}
              </h2>
              <span
                className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${getStatusColor(
                  ticket.status
                )}`}
              >
                <span className="w-2 h-2 bg-current rounded-full"></span>
                {ticket.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-600 line-clamp-2">
              {ticket.description}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center text-xs text-gray-500">
              <div className="flex gap-4">
                <span className="text-gray-400">#{ticket.id}</span>
                <span className={getPriorityColor(ticket.priority)}>
                  {ticket.priority.toUpperCase()} PRIORITY
                </span>
              </div>
              <div className="flex gap-4 items-center">
                <span>{ticket.customer}</span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {ticket.createdAt}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTickets;
