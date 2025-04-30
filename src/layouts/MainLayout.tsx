
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ScrollArea className="flex-1 z-10">
        <main className="pt-4">{children}</main>
      </ScrollArea>
      <Footer />
    </div>
  );
};

export default MainLayout;
