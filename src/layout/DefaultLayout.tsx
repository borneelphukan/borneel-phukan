import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/layout/NavBar";
import ThemeSwitch from "@/components/layout/ThemeSwitch";
import CircularProgressBar from "@/components/layout/CircularProgressBar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div>
      <Head>
        <title>Welcome | Borneel Bikash Phukan</title>
      </Head>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="min-h-screen">
          <Navbar />
          {/* Main content */}
          <main>
            {children}
            <CircularProgressBar />
            <ThemeSwitch />
          </main>

          <footer>
            {/* Footer will go here */}
            <Footer />
          </footer>
        </div>
      )}
    </div>
  );
};

export default DefaultLayout;
