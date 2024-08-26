import Link from "next/link";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import Sidebar from "@/components/sidebar";

export default function projects() {
  return (
    <main className="rounded p-8">
      <AspectRatio ratio={16 / 9} className="	rounded-md border-2 border-black">
        <Hero></Hero>
        <Sidebar animate={"p"}></Sidebar>
      </AspectRatio>
    </main>
  );
}
