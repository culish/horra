/**
 * Tours & Travel services, as listed in the company profile.
 * No itineraries, prices, partner hotels, fleet details or availability are stated.
 */

export type TravelIcon = "ticket" | "tour" | "transfer" | "guide";

export const travelServices: {
  id: string;
  name: string;
  icon: TravelIcon;
  description: string;
  details: string[];
}[] = [
  {
    id: "ticket-hotel",
    name: "Ticket & Hotel",
    icon: "ticket",
    description: "Flight tickets and hotel bookings arranged around your dates, budget and preferences.",
    details: ["Domestic and international flights", "Hotels for leisure or business stays"],
  },
  {
    id: "tour-package",
    name: "Tour Package",
    icon: "tour",
    description: "Tour packages for destinations in Indonesia, planned around your interests and pace.",
    details: ["Leisure trips and short getaways", "Plans shaped by your interests"],
  },
  {
    id: "airport-transfer",
    name: "Airport Drop & Pick Up",
    icon: "transfer",
    description: "Transfers between the airport and your hotel or meeting venue, booked in advance.",
    details: ["Arrival and departure transfers", "Coordination with your flight times"],
  },
  {
    id: "travel-guide",
    name: "Travel Guide",
    icon: "guide",
    description: "Guide arrangements and practical travel guidance for the places you plan to visit.",
    details: ["Help getting around", "Local know-how for your destination"],
  },
];

export const travelProcess = [
  { title: "Share your plans", text: "Dates, destinations, number of travellers and what matters to you." },
  { title: "Receive options", text: "We come back with suggestions and what is available for your dates." },
  { title: "Confirm bookings", text: "Prices and conditions are confirmed before anything is booked." },
  { title: "Travel with support", text: "You have a contact for questions before and during your trip." },
];
