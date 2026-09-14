import {
  Building2,
  HardHat,
  DraftingCompass,
  Route,
  ClipboardList,
  PencilRuler,
  Hammer,
  Building,
  Wrench,
  Layers,
  ClipboardCheck,
  PenTool,
  Landmark,
} from "lucide-react";

export const iconRegistry: Record<string, React.ElementType> = {
  Building2,
  HardHat,
  DraftingCompass,
  Route,
  ClipboardList,
  PencilRuler,
  Hammer,
  Building,
  Wrench,
  Layers,
  ClipboardCheck,
  PenTool,
  Landmark,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconRegistry[name] ?? Building2;
  return <Icon className={className} aria-hidden="true" />;
}