import React from 'react';
import Link from "next/link";

function Header() {
    return (
        <header className="flex items-center justify-between">
            <Link href={'/'} className="logo text-primary font-semibold text-2xl">
                Ido Pizza
            </Link>
            <nav className="flex items-center gap-8 text-gray-500 font-semibold">
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/products'}>Menu</Link>
                <Link href={'/contact'}>Contact</Link>
            </nav>
            <nav className="flex items-center gap-8">
                <Link href={'/login'} className="bg-primary text-white rounded-full px-8 py-2">Login</Link>
                <Link href={'/register'} className="border-2 border-primary text-primary rounded-full px-8 py-2">Register</Link>
            </nav>
        </header>
    );
}

export default Header;