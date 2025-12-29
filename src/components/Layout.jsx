import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-[#0a0a0c] text-[#f0e6d2]">
            <header className="bg-[#111111] border-b border-[#c8aa6e] p-4 sticky top-0 z-50 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-[#c8aa6e] tracking-wider uppercase hover:text-[#f0e6d2] transition-colors">
                        League of Legends
                    </Link>
                    <nav>
                        <Link to="/" className="text-[#f0e6d2] hover:text-[#c8aa6e] transition-colors font-medium">
                            Campeões
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="flex-grow container mx-auto p-4">
                {children}
            </main>
            <footer className="bg-[#111111] border-t border-[#c8aa6e] p-4 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} League of Legends Fan Site. Not affiliated with Riot Games.</p>
            </footer>
        </div>
    );
};

export default Layout;
