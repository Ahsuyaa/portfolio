"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { links } from '../../lib/data';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='z-[999] relative flex justify-center text-lg'>
      <motion.div
        className='fixed top-0 h-[4.5rem] w-full rounded-none border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav className='fixed'>
          <button
            onClick={toggleMenu}
            className='block text-gray-500 sm:hidden hover:text-gray-950 px-3 py-3'
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
          <ul
            className={`${
              isMenuOpen ? 'block bg-white' : 'hidden'
            } sm:flex text-gray-500 sm:pl-10 `}
          >
            {links.map((link) => (
              <li key={link.hash}>
                <Link href={link.hash}  className='block px-3 py-3 hover:text-gray-950'>
            
                    {link.name}
              
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
