"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/sidebar";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="rounded p-8">
      <AspectRatio ratio={16 / 9} className="	rounded-md border-2 border-black">
        <Hero></Hero>
        <Sidebar animate={"h"}></Sidebar>
      </AspectRatio>
    </main>
  );
}
