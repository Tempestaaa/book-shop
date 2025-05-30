import Navbar from "@/components/layout/navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="py-4">{children}</div>
    </div>
  );
}
