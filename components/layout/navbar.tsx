import NavbarMenu from "@/components/layout/navbar-menu";
import NavbarSearch from "@/components/layout/navbar-search";
import NavbarUser from "@/components/layout/navbar-user";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="z-50">
      <div className="container mx-auto h-16 flex items-center-safe gap-4 justify-between">
        <section className="flex items-center-safe gap-2">
          <Link href="/" className="px-4 py-1 font-heading">
            <h4>Spine & Chill</h4>
          </Link>

          <NavbarMenu />
        </section>

        <section className="flex items-center-safe gap-4">
          <NavbarSearch />
          <NavbarUser />
        </section>
      </div>
    </nav>
  );
}
