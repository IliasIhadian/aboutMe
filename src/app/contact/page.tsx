import Hero from "@/components/hero";
import Sidebar from "@/components/sidebar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function contact() {
  return (
    <main className="rounded p-8">
      <AspectRatio ratio={16 / 9} className="	rounded-md border-2 border-black">
        <div className="grid grid-cols-3 gap-4 ">
          <div className="order-first col-span-3 ">
            <Hero></Hero>
          </div>
          <div className="">
            <Sidebar animate={"c"}></Sidebar>
          </div>
          <div className="col-span-2"></div>
        </div>
      </AspectRatio>
    </main>
  );
}
