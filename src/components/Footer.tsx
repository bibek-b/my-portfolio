'use-client';

export default function Footer () {

    return (
        <footer className="flex items-center justify-center border-t border-white/10 mt-10 p-10 tracking-wide font-light text-white/40 text-center text-sm sm:text-[17px]">
            <p>&copy; {new Date().getFullYear()} Bibek Gd. Building the future with secure, scalable solutions.</p>
        </footer>
    )
}