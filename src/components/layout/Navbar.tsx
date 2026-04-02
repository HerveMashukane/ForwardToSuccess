import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Programs", link: "/programs" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="bg-gray-950 text-white shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-xl font-bold text-blue-500">
          ForwardToSuccess
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="hover:text-blue-400 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="block hover:text-blue-400"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <button className="mt-4 w-full bg-blue-600 py-2 rounded-lg">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}