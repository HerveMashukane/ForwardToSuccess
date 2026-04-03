import { useState } from "react";

export default function Navbar() {

  return (
    <nav className="flex justify-between items-center p-8 bg-brand-background font-medium">
      {/* logo */}
      <div>
        <h1 className="text-heading2 text-brand-secondary">LogoHere</h1>
      </div>
      {/* navigation links */}
      <div className="flex space-x-8">
        <ul className="flex space-x-4 text-body1">
          <li>Home</li>
          <li>About</li>
          <li>Our Team</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <div>
          <button className="bg-brand-primary text-white px-btnX py-btnY rounded-btnRadius">Register</button>
          </div>
      </div>
    </nav>
  );
}