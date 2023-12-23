"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../icons/logo";

const LinkItem = ({ href, isActive, children }) => (
  <Link
    href={href}
    className={`mr-6 hover:text-pink-300 ${isActive ? "text-pink-300" : ""}`}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center m-1">
      <LinkItem href="/" isActive={pathname === "/"}>
        <div className="center cursor-pointer hover:text-pink-300">
          <code className="font-mono font-bold bg-gray-900 rounded p-2 mr-3">
            Algo Mastery
          </code>
          <Logo />
        </div>
      </LinkItem>

      <LinkItem href="/practice" isActive={pathname === "/practice"}>
        Practice
      </LinkItem>
      <LinkItem href="/learn" isActive={pathname === "/learn"}>
        Learn
      </LinkItem>
      <LinkItem href="/blog" isActive={pathname === "/blog"}>
        Blog
      </LinkItem>
    </div>
  );
};
export default Navbar;
