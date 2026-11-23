import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Catalogue() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') || 'all';
  const [activeCat, setActiveCat] = useState(initialCat);
  const [query, setQuery] = useState('');

  useEffect(() => { setActiveCat(searchParams.get('cat') || 'all'); }, [searchParams]);

  const setCategory = (id) => {
    setActiveCat(id);
    if (id === 'all') setSearchParams({});
    else setSearchParams({ cat: id });
  };

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = activeCat === 'all' || p.category === activeCat;
      const q = query.trim().toLowerCase();
      const matchQuery = !q || p.name.toLowerCase().includes(q) || p.short.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [activeCat, query]);

  return (
    <>
      <section className="bg-forest text-cream py-16 lg:py-20">
        <div className="container-x">
          <p className="eyebrow mb-4">Catalogue</p>
          <h1 className="font-serif text-4xl lg:text-5xl text-cream max-w-3xl leading-tight">Nos emballages, pensés pour les professionnels exigeants.</h1>
          <p className="text-cream/70 mt-5 max-w-2xl">Explorez notre gamme par catégorie, recherchez une référence et demandez un devis en quelques clics.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40" />
              <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Rechercher un produit, une dimension…" className="input pl-11 pr-11" />
              {query && (
                <button onClick={() => setQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-charcoal" aria-label="Effacer"><X size={18} /></button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            <button onClick={() => setCategory('all')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCat === 'all' ? 'bg-forest text-cream' : 'bg-white text-charcoal/70 border border-forest/10 hover:border-forest/30'}`}>Tous les produits</button>
            {categories.map((c) => (
              <button key={c.id} onClick={() => setCategory(c.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCat === c.id ? 'bg-forest text-cream' : 'bg-white text-charcoal/70 border border-forest/10 hover:border-forest/30'}`}>{c.name}</button>
            ))}
          </div>

          <p className="text-sm text-charcoal/50 mb-6">{filtered.length} produit{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''}</p>

          {filtered.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-forest/10">
              <p className="font-serif text-xl text-forest mb-2">Aucun produit ne correspond.</p>
              <p className="text-charcoal/60">Essayez un autre mot-clé ou changez de catégorie.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}

          <p className="mt-12 text-xs text-charcoal/40 italic">Les produits, dimensions et descriptions présentés sont des contenus provisoires de démonstration.</p>
        </div>
      </section>
    </>
  );
}
