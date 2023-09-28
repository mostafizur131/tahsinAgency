import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";

export async function generateMetadata() {
  const res = await fetch(process.env.BASE_URL + "api/SiteMeta/home");
  const JSON = await res.json();
  return {
    title: JSON[0]["title"],
    description: JSON[0]["description"],
    keywords: JSON[0]["keywords"],
    openGraph: {
      images: JSON[0]["image"],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
