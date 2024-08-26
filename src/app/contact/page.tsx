import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function contact() {
  return (
    <main className="rounded p-8">
      <AspectRatio
        ratio={16 / 9}
        className="	rounded-md border-2 border-black"
      ></AspectRatio>
    </main>
  );
}
