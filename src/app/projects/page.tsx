import Link from "next/link";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

export default function projects() {
  return (
    <main className="rounded p-8">
      <AspectRatio
        ratio={16 / 9}
        className="	rounded-md border-2 border-black"
      ></AspectRatio>
    </main>
  );
}
