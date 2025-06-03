import {
  MapPin,
  Trash2,
  Boxes,
  ShieldCheck,
  CalendarDays,
  CreditCard,
} from "lucide-react";

export const STEPS = [
  { label: "Postcode", path: "/", icon: MapPin },
  { label: "Waste Type", path: "/", icon: Trash2 },
  { label: "Select Skip", path: "/", icon: Boxes },
  { label: "Permit Check", path: "/404", icon: ShieldCheck },
  { label: "Choose Date", path: null, icon: CalendarDays },
  { label: "Payment", path: null, icon: CreditCard },
];