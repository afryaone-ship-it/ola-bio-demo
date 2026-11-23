import { Info } from 'lucide-react';

export default function DemoBanner() {
  return (
    <div className="bg-forest-dark text-cream/90 text-[11px] sm:text-xs">
      <div className="container-x py-2 flex items-center justify-center gap-2 text-center">
        <Info size={14} className="text-gold shrink-0 hidden sm:block" />
        <p>
          <span className="text-gold font-semibold">Démonstration interactive</span>
          <span className="hidden sm:inline"> conçue par Afrya One — Proposition de plateforme digitale pour Ola BIO.</span>
          <span className="sm:hidden"> — Afrya One · Ola BIO</span>
        </p>
      </div>
    </div>
  );
}
