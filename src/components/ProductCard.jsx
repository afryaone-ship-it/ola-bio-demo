import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import ProductImage from './ProductImage';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-2xl transition-all duration-300 flex flex-col">
      <Link to={`/produit/${product.id}`} className="block">
        <ProductImage src={product.image} alt={product.name} className="aspect-[4/3]" iconSize={48} />
      </Link>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-serif text-lg text-forest mb-1 group-hover:text-forest-light transition-colors">{product.name}</h3>
          <p className="text-sm text-charcoal/60 leading-relaxed line-clamp-2">{product.short}</p>
        </div>
        <p className="text-xs text-charcoal/40">{product.dimensions}</p>
        <div className="mt-auto pt-3 flex flex-wrap gap-2">
          <Link to={`/produit/${product.id}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-forest-light transition-colors">
            Voir le produit <ArrowRight size={14} />
          </Link>
          <button onClick={() => navigate('/personnalisation', { state: { productName: product.name } })} className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-charcoal/60 hover:text-gold transition-colors">
            <FileText size={14} /> Devis
          </button>
        </div>
      </div>
    </article>
  );
}
