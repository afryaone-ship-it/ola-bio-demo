import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const nav = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/catalogue', label: 'Nos produits' },
  { to: '/solutions-professionnelles', label: 'Solutions pro' },
  { to: '/personnalisation', label: 'Personnalisation' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count } = useCart();
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cream/95 backdrop-blur border-b border-forest/10 shadow-sm' : 'bg-cream'}`}>
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="w-10 h-10 rounded-full bg-forest text-cream flex items-center justify-center font-serif text-lg group-hover:bg-forest-light transition-colors">O</span>
          <span className="font-serif text-xl text-forest tracking-tight">OLA <span className="text-gold">BIO</span></span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-forest' : 'text-charcoal/70 hover:text-forest'}`}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/panier" className="relative p-2 rounded-full hover:bg-forest/5 transition-colors" aria-label="Panier">
            <ShoppingBag size={20} className="text-forest" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-gold text-forest-dark text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">{count}</span>
            )}
          </Link>
          <Link to="/personnalisation" className="hidden md:inline-flex btn-forest !px-5 !py-2.5 text-sm">Demander un devis</Link>
          <button className="lg:hidden p-2 text-forest" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-forest/10 bg-cream">
          <nav className="container-x py-4 flex flex-col gap-1">
            {nav.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={({ isActive }) => `px-3 py-2.5 rounded-lg text-sm font-medium ${isActive ? 'bg-forest/5 text-forest' : 'text-charcoal/80 hover:bg-forest/5'}`}>
                {label}
              </NavLink>
            ))}
            <Link to="/personnalisation" className="btn-forest mt-3 text-sm">Demander un devis</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
