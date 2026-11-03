/** Tours & Travel services. Copy lives in the dictionaries (travel.services.<id>). */

export type TravelIcon = "ticket" | "tour" | "transfer" | "guide";
export type TravelServiceId = "ticket-hotel" | "tour-package" | "airport-transfer" | "travel-guide";

export const travelServices: { id: TravelServiceId; icon: TravelIcon }[] = [
  { id: "ticket-hotel", icon: "ticket" },
  { id: "tour-package", icon: "tour" },
  { id: "airport-transfer", icon: "transfer" },
  { id: "travel-guide", icon: "guide" },
];
