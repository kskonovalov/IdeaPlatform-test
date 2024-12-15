import React, { useEffect } from "react";
import { Ticket } from "../types";
import { useStore } from "@/store/useStore";
import { Currency, CurrencySymbols } from "@/constants";
import formatDate from "@/helpers/formatDate";

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  const { currencyRates, currency } = useStore();
  // Preload all carrier logos
  const carrierLogos = import.meta.glob("/public/carriers/*.png", {
    eager: true,
  });
  const getCarrierLogo = (carrier: string): string => {
    // Check if the carrier logo exists in the preloaded files
    const logoPath = `/public/carriers/${carrier}.png`;
    if (carrierLogos[logoPath]) {
      return logoPath; // Return the logo path if it exists
    }
    return "/public/carriers/default.png"; // Fallback to default logo
  };

  const ticketPrice = new Intl.NumberFormat("ru-RU", {
    trailingZeroDisplay: "stripIfInteger",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(ticket.price / currencyRates[currency]);
  const ticketPriceSymbol = CurrencySymbols[currency as Currency];

  return (
    <div className="group bg-white shadow rounded-md flex max-lg:flex-wrap transition-shadow duration-300 hover:shadow-xl">
      <div
        className={`flex flex-col items-center justify-center w-4/12 border-r-[1px] border-gray-100 center p-8
      max-lg:w-full
      `}
      >
        <img
          src={getCarrierLogo(ticket.carrier)}
          alt={ticket.carrier}
          className="w-full h-auto max-h-[70px] object-contain mb-4"
        />
        <button
          className={`bg-accent transition-all duration-300 text-xl text-white px-4 py-4 rounded-md mt-4 border-0 hover:bg-primary w-[300px]
        lg:w-full
        `}
        >
          Купить
          <br /> за {ticketPrice}
          {ticketPriceSymbol}
        </button>
      </div>
      <div
        className={`flex justify-between grow text-text p-xl
      max-md:flex-col max-md:gap-4 max-md:items-center max-md:text-center
      `}
      >
        <div
          className={`w-3/12
        max-md:w-full
        `}
        >
          <div
            className={`text-6xl mb-4
          max-lg:text-4xl
          max-md:text-2xl
          `}
          >
            {ticket.departure_time}
          </div>
          <div className="pl-2 mb-1">
            {ticket.origin}, {ticket.origin_name}
          </div>
          <div className="font-100 pl-2 opacity-60">
            {formatDate(ticket.departure_date)}
          </div>
        </div>
        <div
          className={`w-3/12
        max-md:w-full
        `}
        >
          <div
            className="font-100 mt-2 pb-3 opacity-60 text-center uppercase w-full border-b-[1px] border-gray-400 relative
          after:absolute after:block after:w-[20px] after:h-[15px] after:bg-white after:bg-[url('/public/plane.svg')] after:bg-no-repeat after:bg-center after:bg-contain after:right-0 after:-bottom-[7px] after:transition-transform after:duration-300
          group-hover:after:translate-x-2"
          >
            {ticket.stops === 0
              ? "Без пересадок"
              : ticket.stops === 1
                ? "1 пересадка"
                : `${ticket.stops} пересадки`}
          </div>
        </div>
        <div
          className={`w-3/12
        max-md:w-full
        `}
        >
          <div
            className={`text-6xl mb-4
          max-lg:text-4xl
          max-md:text-2xl
          `}
          >
            {ticket.arrival_time}
          </div>
          <div className="pl-2 mb-1">
            {ticket.destination_name}, {ticket.destination}
          </div>
          <div className="font-100 pl-2 opacity-60">
            {formatDate(ticket.arrival_date)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
