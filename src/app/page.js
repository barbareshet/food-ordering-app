import Link from "next/link";


export default function Home() {
  return (
    <>
        <header className="flex items-center justify-between">
            <a href="#" className="logo text-primary font-semibold text-2xl">
                FOA
            </a>
            <nav className="flex items-center gap-8 text-gray-500 font-semibold">
                <Link href={''}>Home</Link>
                <Link href={''}>About</Link>
                <Link href={''}>Menu</Link>
                <Link href={''}>Contact</Link>
                <Link href={''} className="bg-primary text-white rounded-full px-8 py-2">Login</Link>
            </nav>
        </header>
    </>
  );
}
