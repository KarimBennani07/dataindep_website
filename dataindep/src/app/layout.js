import "./globals.css";
import Footer_data_indep from "../components/Footer";
import Navbar_data_indep from "../components/Navbar";
export const metadata = {
  title: "Data Indep",
  description: "Cabinet de conseil Data & IA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        
        <Navbar_data_indep />

        <main className="flex-1"> 
          {children}
        </main>
        
        <Footer_data_indep />
        
      </body>
    </html>
  );
}
