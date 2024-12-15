import React, { useEffect, useState } from "react";
import TicketCard from "@/components/TicketCard";
import { Ticket } from "@/types";
import { fetchTickets } from "@/services/api";
import { useStore } from "@/store/useStore";
import Loader from "@/components/Loader";

const Tickets = () => {
  const { transfers, loading, setLoading } = useStore();

  useEffect(() => {
    setLoading(true);
    fetchTickets(transfers)
      .then(setTickets)
      .then(() => setLoading(false));
  }, [transfers]);

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const filteredTickets = tickets.filter(
    (ticket) => !transfers.length || transfers.includes(ticket.stops),
  );

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col gap-8">
      {filteredTickets.map((ticket, index) => (
        <TicketCard key={index} ticket={ticket} />
      ))}
    </div>
  );
};

export default Tickets;
