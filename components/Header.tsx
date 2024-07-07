import Link from "next/link";
import Avatar from "./Avatar";

function Header() {
  return (
    <header>
      <Link href="/">
        {/* Avatar */}
        <Avatar seed="1" className="w-12 h-12 rounded-full" />
        <div>
          <h1>Assistly</h1>
          <h2 className="text-sm">Chat AI Agent</h2>
        </div>{" "}
      </Link>
    </header>
  );
}

export default Header;
