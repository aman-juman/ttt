import '../styles/globals.css';
import Footer from "../components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head />
      <body>
      {children}
      <Footer />
      </body>
    </html>
  )
}
