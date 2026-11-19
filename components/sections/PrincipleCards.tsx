import type { LucideIcon } from "lucide-react";
import { EditorialList } from "@/components/ui/EditorialList";

/** `icon` bleibt im Datenmodell, wird im Editorial-Layout aber bewusst nicht mehr gezeigt. */
export type Principle = { title: string; text: string; icon: LucideIcon };

type Props = {
  principles: readonly Principle[];
};

export function PrincipleCards({ principles }: Props) {
  return <EditorialList items={principles} />;
}
