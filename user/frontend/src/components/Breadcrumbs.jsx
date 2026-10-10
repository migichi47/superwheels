import { Link } from "react-router-dom";

export default function Breadcrumbs() {
  return (
    <nav className="flex gap-2 text-sm mt-2">
      <Link to={"/"} className="hover:underline cursor-pointer">
        Home
      </Link>
      / products / item
    </nav>
  );
}
