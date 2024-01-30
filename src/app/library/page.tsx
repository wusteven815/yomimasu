"use client";

// import { useSession } from "next-auth/react";
import { ResponsiveNav } from "@/components";

export default function Page() {
  // const session = useSession();
  // console.log(session);

  return (
    <ResponsiveNav currentTitle="Library">
      <ResponsiveNav.Header>
        <h1>Header</h1>
      </ResponsiveNav.Header>
      <ResponsiveNav.Body>
        <p>Body</p>
      </ResponsiveNav.Body>
    </ResponsiveNav>
  );
}
