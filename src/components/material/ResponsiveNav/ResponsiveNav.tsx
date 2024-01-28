import { ReactNode, isValidElement } from "react";
import NavDestIcon from "./NavDestIcon";
import ResponseNavBody from "./ResponsiveNavBody";
import ResponseNavHeader from "./ResponsiveNavHeader";

interface Props {
  children: ReactNode[] | ReactNode;
  currentTitle: "Library" | "Updates" | "History" | "Browse" | "More";
}

export default function ResponseNav({ children, currentTitle }: Props): ReactNode {
  const navChildren = Array.isArray(children) ? children : [children];
  let body: ReactNode | null = null;
  let header: ReactNode | null = null;

  navChildren.forEach((child) => {
    if (isValidElement(child) && typeof child.type === "function") {
      if (child.type.name === "ResponseNavBody") {
        body = child;
      } else if (child.type.name === "ResponseNavHeader") {
        header = child;
      }
    }
  });

  return (
    <main className="h-dvh max-h-dvh grid grid-cols-1 grid-rows-[1fr_80px] md:grid-cols-[80px_1fr] md:grid-rows-1">
      <div
        className="order-2 md:order-1 border-t-2 md:border-t-0 md:border-r border-outline flex flex-row 
                   md:flex-col justify-evenly md:justify-normal bg-container"
      >
        {["Library", "Updates", "History", "Browse", "More"].map((title) => (
          <NavDestIcon
            href={`/${title.toLowerCase()}`}
            selected={currentTitle === title}
            title={title}
            key={title}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 grid-rows-[72px_1fr] order-1 md:order-2">
        {header && <div className="border-outline border-b">{header}</div>}
        <div className="max-h-[calc(100dvh-152px)] md:max-h-full overflow-auto">{body}</div>
      </div>
    </main>
  );
}

ResponseNav.Body = ResponseNavBody;
ResponseNav.Header = ResponseNavHeader;
