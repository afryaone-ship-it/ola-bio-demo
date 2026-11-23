import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { siteConfig, whatsappLink } from '../config';

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-cream/80">
      <div className="container-x py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-full bg-gold text-forest-dark flex items-center justify-center font-serif">O</span>
            <span className="font-serif text-lg text-cream">OLA <span className="text-gold">BIO</span></span>
          </div>
          <p className="text-sm leading-relaxed text-cream/60">Emballages premium pour pâtisseries, boulangeries, restaurants et professionnels de l'agroalimentaire.</p>
        </div>

        <div>
          <h4 className="text-cream text-sm uppercase tracking-widest mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/catalogue" className="hover:text-gold transition-colors">Catalogue</Link></li>
            <li><Link to="/solutions-professionnelles" className="hover:text-gold transition-colors">Solutions pro</Link></li>
            <li><Link to="/personnalisation" className="hover:text-gold transition-colors">Personnalisation</Link></li>
            <li><Link to="/a-propos" className="hover:text-gold transition-colors">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-cream text-sm uppercase tracking-widest mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5 items-start"><MapPin size={16} className="text-gold shrink-0 mt-0.5" /><span>{siteConfig.address}</span></li>
            <li className="flex gap-2.5 items-start"><Phone size={16} className="text-gold shrink-0 mt-0.5" /><span>{siteConfig.phone}</span></li>
            <li className="flex gap-2.5 items-start"><Mail size={16} className="text-gold shrink-0 mt-0.5" /><span>{siteConfig.email}</span></li>
            <li className="flex gap-2.5 items-start"><Clock size={16} className="text-gold shrink-0 mt-0.5" /><span>{siteConfig.hours}</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-cream text-sm uppercase tracking-widest mb-4">Discutons de votre projet</h4>
          <p className="text-sm text-cream/60 mb-4">Un besoin d'emballage sur mesure ? Notre équipe vous accompagne.</p>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gold text-forest-dark text-sm font-semibold hover:bg-gold/90 transition-colors">
            <MessageCircle size={16} /> Écrire sur WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Ola BIO — Prototype de démonstration. Informations provisoires.</p>
          <p className="text-center sm:text-right">
            Une solution digitale conçue par <span className="text-gold font-semibold">{siteConfig.developer.name}</span>
            <span className="block text-[10px] text-cream/40 tracking-widest mt-0.5">{siteConfig.developer.tagline}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
