import React, { useEffect, useState } from "react";
import TicketCard from "@/components/TicketCard";
import { Ticket } from "@/types";
import { fetchTickets } from "@/services/api";
import { useStore } from "@/store/useStore";
import Loader from "@/components/Loader";

const Tickets = () => {
  const { transfers, loading, setLoading } = useStore();

  const sortTickets = (tickets: Ticket[]): Ticket[] => {
    return [...tickets].sort((a, b) => {
      return a.price - b.price; // Sort by price (ascending)
    });
  };

  useEffect(() => {
    setLoading(true);
    fetchTickets(transfers)
      .then((fetchedTickets) => {
        const sortedTickets = sortTickets(fetchedTickets);
        setTickets(sortedTickets);
      })
      .then(() => setLoading(false));
  }, [transfers]);

  const [tickets, setTickets] = useState<Ticket[]>([]);

  if (loading) return <Loader />;
  return (
    <div className="flex flex-col gap-8">
      {tickets.map((ticket, index) => (
        <TicketCard key={index} ticket={ticket} />
      ))}
    </div>
  );
};

export default Tickets;
