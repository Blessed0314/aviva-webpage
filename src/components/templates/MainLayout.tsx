import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Spacer to push content below the sticky navbar */}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
