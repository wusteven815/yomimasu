import Link from "next/link";
import { ReactNode } from "react";
import Icon from "../Icon/Icon";

interface Props {
  href: string;
  selected: boolean;
  title: string;
}

const titleToIconName: Map<string, string> = new Map([
  ["Library", "collections-bookmark"],
  ["Updates", "release-alert"],
  ["History", "history"],
  ["Browse", "explore"],
  ["More", "more-horiz"],
]);

export default function NavDestIcon({ href, selected, title }: Props): ReactNode {
  return (
    <div className="flex justify-center pt-3 pb-4">
      <Link href={href} className="flex flex-col items-center gap-1">
        <div
          className={`h-8 w-14 rounded-full flex items-center justify-center transition-colors ${
            selected ? "bg-accent" : "group-hover:bg-hover"
          }`}
        >
          <Icon
            name={titleToIconName.get(title) ?? ""}
            filled={selected}
            className={selected ? "fill-container" : "fill-surface"}
          />
        </div>
        <p className="font-medium text-xs text-center text-surface">{title}</p>
      </Link>
    </div>
  );
}
