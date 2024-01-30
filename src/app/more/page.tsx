import { ResponsiveNav } from "@/components";

export default function Page() {
  return (
    <ResponsiveNav currentTitle="More">
      <ResponsiveNav.Body>
        <p>Body</p>
      </ResponsiveNav.Body>
    </ResponsiveNav>
  );
}
