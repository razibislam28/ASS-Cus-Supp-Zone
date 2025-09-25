import React, { useContext } from "react";
import { TicketContext } from "../provider/TicketContext";
import { toast } from "react-toastify";

const TaskStatus = () => {
  const { inprogress,setResolve,setInprogress } = useContext(TicketContext);
  const handleClick=(ticket)=>{
    setResolve((prev)=>[...prev,ticket])
    setInprogress((prev) => prev.filter((item) => item.id !== ticket.id));
    toast.success("Task is complete!");
  }
  return (
    <div>
      <h1 className="text-gray-800 font-bold my-2">TaskStatus</h1>
      {inprogress?.map((ticket) => (
          <div
            key={ticket.id}
            className="p-4 mb-2 bg-white rounded-lg shadow flex flex-col space-y-2"
          >
            {/* Title and Status */}
            <div className="justify-between items-start">
              <h2 className="text-sm font-semibold text-gray-800">
                {ticket.title}
              </h2>
              <button onClick={()=>{
                handleClick(ticket);
              }} className=" btn btn-success w-full">Complete</button>
              
            </div>
          </div>
        ))}
    </div>
  );
};

export default TaskStatus;
