import axios from "axios";
import { Ticket } from "../types";

export const fetchTickets = async (): Promise<Ticket[]> => {
  const response = await axios.get("/tickets.json");
  return response.data.tickets;
};
