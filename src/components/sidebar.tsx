import Link from "next/link";

export default function Sidebar({ animate }: { animate: any }) {
  return (
    <>
      <aside className="px-8">
        <ul className="py-2 ">
          <li className="hover:text-xl">
            <Link href="/">{animate === "h" ? "➲" : "Home"}</Link>
          </li>
          <li className="hover:text-xl">
            <Link href="/projects">{animate === "p" ? "➲" : "Projects"}</Link>
          </li>
          <li className="hover:text-xl">
            <Link href="/aboutme">{animate === "a" ? "➲" : "About Me"}</Link>
          </li>
          <li className="hover:text-xl">
            <Link href="/contact">{animate === "c" ? "➲" : "Contact"}</Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
