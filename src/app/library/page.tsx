"use client";

import { ResponsiveNav } from "@/components";

export default function Page() {
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
