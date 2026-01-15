
import React, { useState } from 'react';
import { Button } from './ui/button';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'VIRTUAL', href: '#virtual-terminal' },
    { name: 'PHYSICAL', href: '#physical-terminal' },
    { name: 'API', href: '#terminal-api' },
    { name: 'PRICING', href: '#pricing' },
    { name: 'FAQS', href: '#faq' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-10">
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="flex flex-col gap-0.5">
                <div className="w-5 h-1 bg-white"></div>
                <div className="w-5 h-1 bg-white/60"></div>
                <div className="w-5 h-1 bg-white/30"></div>
              </div>
              <span className="text-xl font-black tracking-tighter text-white">stack</span>
            </a>
            
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-[10px] font-bold tracking-[0.2em] text-white/40 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <Button size="sm" className="hidden sm:inline-flex rounded-full">Get Terminal</Button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M12 12h8m-12 6h12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-0 z-40 bg-black/95 transition-all duration-500 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col gap-8 items-center justify-center h-full px-12">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-2xl font-black tracking-widest">{link.name}</a>
          ))}
          <Button size="lg" className="w-full mt-10">Get Terminal</Button>
          <button onClick={() => setMobileMenuOpen(false)} className="mt-8 text-white/40 font-bold uppercase tracking-widest text-xs">Close</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
