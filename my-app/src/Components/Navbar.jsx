import React from "react";
import Logo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav class="relative container mx-auto p-6 bg-slate-300 max-w-full">
      {/* Flex Container */}
      <div class="flex items-center justify-center">
      <img src={Logo} alt="Logo" />

        <div class="space-x-8 font-bold lg:flex">
          <a href="" class="hover:text-cyan-500">What We Do</a>
          <a href="" class="hover:text-cyan-500">Who We Are</a>
          <a href="" class="hover:text-cyan-500">Get Involved</a>
          <a href="" class="hover:text-cyan-500">Out There</a>
          <a href="" class="hover:text-cyan-500">Donate</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;