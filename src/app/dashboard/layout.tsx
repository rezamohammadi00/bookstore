import Container from "@/src/components/Container";
import Sidebar from "@/src/components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </Container>
  );
}
