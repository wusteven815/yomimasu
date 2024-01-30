"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components";

export default function Home() {
  return (
    <main className="min-h-[100dvh] flex flex-col items-center justify-center p-8 gap-3">
      <h1 className="text-6xl font-bold text-accent">Yomimasu</h1>
      <p className="text-center max-w-md">
        A multimodal web reader and player based off the popular Android apps - Tachiyomi, Aniyomi,
        and LNReader.
      </p>
      <Button onClick={() => signIn("google")}>Login</Button>
    </main>
  );
}
