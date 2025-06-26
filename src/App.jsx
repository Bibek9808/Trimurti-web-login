import "./App.css";
import LoginSignUpPage from "./ui/LoginSignUpPage";
import { FloatingNav } from "./ui/floating-navbar";
import { Home, Info, Phone } from "lucide-react"; // Or use your own icons

function App() {
  const navItems = [
    { name: "Home", link: "#", icon: <Home size={18} /> },
    { name: "About", link: "#", icon: <Info size={18} /> },
    { name: "Contact", link: "#", icon: <Phone size={18} /> },
  ];

  return (
    <>
      <FloatingNav navItems={navItems} />
      <main className="pt-32"> {/* To avoid overlap with floating nav */}
        <LoginSignUpPage />
      </main>
    </>
  );
}

export default App;
