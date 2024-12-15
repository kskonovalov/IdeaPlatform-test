import axios from "axios";
import { Ticket } from "@/types";

export const fetchTickets = async (transfers: number[]): Promise<Ticket[]> => {
  const response = await axios.get("/tickets.json");
  // TODO: remove in production
  await new Promise((resolve) => setTimeout(resolve, 500)); // delay to imitate API request
  return response.data.tickets.filter(
    (ticket: Ticket) => !transfers.length || transfers.includes(ticket.stops),
  );
};
