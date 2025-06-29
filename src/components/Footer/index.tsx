import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className='pb-16 text-center'>
      <p className=''>
        <span>Copyright &copy; {new Date().getFullYear()} - </span>
        <Link href='/'>Cheffy</Link>
      </p>
    </footer>
  );
}
