import React from "react";
import { Ticket } from "../types";

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <img
            src={`https://via.placeholder.com/40?text=${ticket.carrier}`}
            alt={ticket.carrier}
            className="w-10 h-10 rounded-full"
          />
          <span className="text-sm font-medium text-gray-800">
            {ticket.carrier}
          </span>
        </div>
        <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600">
          Купить за {ticket.price}₽
        </button>
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <div className="text-left">
          <p className="text-lg font-semibold text-gray-800">
            {ticket.departure_time}
          </p>
          <p>
            {ticket.origin_name} ({ticket.origin})
          </p>
          <p className="text-xs">{ticket.departure_date}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xs mb-1">
            {ticket.stops === 0 ? "Без пересадок" : `${ticket.stops} пересадка`}
          </p>
          <div className="w-full h-px bg-gray-300"></div>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-gray-800">
            {ticket.arrival_time}
          </p>
          <p>
            {ticket.destination_name} ({ticket.destination})
          </p>
          <p className="text-xs">{ticket.arrival_date}</p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
