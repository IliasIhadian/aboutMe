import Link from "next/link";

export default function Navbar({ animate }: { animate: any }) {
  return (
    <>
      <div className="sticky top-0 px-8 pt-2 rounded-md border-2 border-white bg-white">
        <div className=" grid grid-flow-col gap-2">
          <div className="hover:text-xl">
            <Link href="/">{animate === "h" ? "➲" : "Home"}</Link>
          </div>
          <div className="hover:text-xl">
            <Link href="/projects">{animate === "p" ? "➲" : "Projects"}</Link>
          </div>
          <div className="hover:text-xl">
            <Link href="/aboutme">{animate === "a" ? "➲" : "About Me"}</Link>
          </div>
          <div className="hover:text-xl">
            <Link href="/contact">{animate === "c" ? "➲" : "Contact"}</Link>
          </div>
        </div>
      </div>
    </>
  );
}
