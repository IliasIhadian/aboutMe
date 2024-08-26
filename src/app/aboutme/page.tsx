import Link from "next/link";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Hero from "@/components/hero";
import Sidebar from "@/components/sidebar";

export default function aboutme() {
  return (
    <main className="rounded p-8">
      <AspectRatio ratio={16 / 9} className="	rounded-md border-2 border-black">
        <div className="grid grid-cols-3 gap-4 ">
          <div className="order-first col-span-3 ">
            <Hero></Hero>
          </div>
          <div className="">
            <Sidebar animate={"a"}></Sidebar>
          </div>
          <div className="col-span-2"></div>
        </div>
      </AspectRatio>
    </main>
  );
}
