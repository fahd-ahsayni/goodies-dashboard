import Sidebar from "./global/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-screen h-screen relative pl-16">
      <Sidebar />
      <div className="w-full h-full lg:p-20 md:p-10 p-2.5 bg-gray-50">
        <div className="h-full w-full">
          {children}
        </div>
      </div>
    </section>
  );
}
