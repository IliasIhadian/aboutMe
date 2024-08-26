import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <aside className="px-8">
        <ul className="py-2 ">
          <li className="hover:text-xl">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-xl">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:text-xl">
            <Link href="/aboutme">About Me</Link>
          </li>
          <li className="hover:text-xl">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
