import "./App.css";
import LoginSignUpPage from "./ui/LoginSignUpPage";
import { Navbar, NavBody, NavItems, NavbarLogo, NavbarButton, MobileNav, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "./ui/resizable-navbar";
import React, { useState } from "react";

function App() {
  const navItems = [
    { name: "Login", link: "#login" },
    { name: "Sign Up", link: "#signup" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleItemClick = () => {
    // Close mobile menu when a nav item is clicked
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Navbar className="fixed top-0 left-0 right-0 z-50">
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} onItemClick={handleItemClick} />
          <NavbarButton href="#signup" variant="gradient" className="ml-4">
            Sign Up
          </NavbarButton>
          {/* Mobile Nav Toggle */}
          <div className="lg:hidden ml-auto">
            <MobileNavToggle
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </NavBody>
        <MobileNav visible={mobileMenuOpen}>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(false)}
            />
          </MobileNavHeader>
          <MobileNavMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={() => {
                  handleItemClick();
                }}
                className="block w-full rounded-md px-4 py-2 text-center text-lg font-semibold text-black hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-800"
              >
                {item.name}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <main className="pt-32">
        <LoginSignUpPage />
      </main>
    </>
  );
}

export default App;
