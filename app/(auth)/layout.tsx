export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto h-dvh *:h-full *:grid *:place-items-center-safe">
      {children}
    </div>
  );
}
