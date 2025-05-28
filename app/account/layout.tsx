import AccountHeader from "@/components/account/account-header";
import AccountSidebar from "@/components/account/account-sidebar";
import Navbar from "@/components/layout/navbar";
import CustomBreadcrumb from "@/components/public/custom-breadcrumb";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="py-4 flex flex-col gap-2">
        <CustomBreadcrumb />
        <AccountHeader />

        <div className="flex gap-8">
          <AccountSidebar />
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
