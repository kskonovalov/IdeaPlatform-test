import React, { useEffect, useState } from "react";

import Logo from "@/components/Logo";
import TicketCard from "@/components/TicketCard";
import FilterPanel from "@/components/FilterPanel";

import { fetchTickets } from "./services/api";
import { Ticket, Filters } from "./types";

const App: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [filters, setFilters] = useState<Filters>({});

  useEffect(() => {
    fetchTickets().then(setTickets);
  }, []);

  const filteredTickets = tickets.filter((ticket) =>
    Object.keys(filters).some(
      (key) => filters[Number(key)] && ticket.stops === Number(key),
    ),
  );

  return (
    <div className="min-h-screen bg-background p-6">
      <header className="py-4">
        <Logo />
      </header>
      <main className="flex">
        <div className="w-1/3">
          <FilterPanel filters={filters} setFilters={setFilters} />
        </div>
        <section className="w-2/3">
          {filteredTickets.map((ticket, index) => (
            <TicketCard key={index} ticket={ticket} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
