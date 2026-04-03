import { useState } from "react";

export default function Navbar() {

  return (
    <nav>
      <div className="bg-brand-background text-brand-primary font-base">
  Hello
</div>

<button className="bg-brand-primary hover:bg-brand-primary-hover text-white py-btn-y px-btn-x rounded-btn">
  Primary Button
</button>

<button className="bg-brand-secondary hover:bg-brand-secondary-hover text-white py-btn-y px-btn-x rounded-btn">
  Secondary Button
</button>
    </nav>
  );
}