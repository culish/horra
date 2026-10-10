import {
  BriefcaseBusiness,
  Building2,
  CarFront,
  Coffee,
  Compass,
  Droplets,
  FlaskConical,
  Fish,
  Gem,
  Leaf,
  Map,
  Mountain,
  Plane,
  Ship,
  Stamp,
  TreePalm,
  type LucideIcon,
} from "lucide-react";
import type { CategoryIcon } from "@/content/trading";
import type { TravelIcon } from "@/content/travel";

export const categoryIcons: Record<CategoryIcon, LucideIcon> = {
  spices: Leaf,
  palm: Droplets,
  coffee: Coffee,
  coconut: TreePalm,
  petrochemical: FlaskConical,
  coal: Mountain,
  seafood: Fish,
  minerals: Gem,
};

export const travelIcons: Record<TravelIcon, LucideIcon> = {
  ticket: Plane,
  tour: Map,
  transfer: CarFront,
  guide: Compass,
};

export const serviceIcons: Record<string, LucideIcon> = {
  visa: Stamp,
  setup: Building2,
  trading: Ship,
  travel: Plane,
  consulting: BriefcaseBusiness,
};
