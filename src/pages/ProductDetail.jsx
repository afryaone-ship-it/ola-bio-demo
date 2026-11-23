import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Check, ShoppingBag, FileText, Minus, Plus } from 'lucide-react';
import { getProduct, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductImage from '../components/ProductImage';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProduct(id);
  const navigate = useNavigate();
  const { addItem } = useCart();

  const [qty, setQty] = useState(50);
  const [activeImg, setActiveImg] = useState(0);
  const [options, setOptions] = useState({ logo: false, colors: false, custom: false, note: '' });
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <section className="section container-x text-center">
        <h1 className="font-serif text-3xl mb-4">Produit introuvable</h1>
        <Link to="/catalogue" className="btn-forest">Retour au catalogue</Link>
      </section>
    );
  }

  const similar = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  const buildOptionsString = () => {
    const list = [];
    if (options.logo) list.push('Impression logo');
    if (options.colors) list.push('Couleurs personnalisées');
    if (options.custom) list.push('Dimensions sur mesure');
    if (options.note.trim()) list.push(`Note: ${options.note.trim()}`);
    return list.join(' · ');
  };

  const handleAdd = () => {
    addItem(product, qty, buildOptionsString());
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const gallery = product.gallery?.length ? product.gallery : [product.image];

  return (
    <>
      <section className="container-x pt-8">
        <Link to="/catalogue" className="inline-flex items-center gap-2 text-sm text-charcoal/60 hover:text-forest transition-colors">
          <ArrowLeft size={16} /> Retour au catalogue
        </Link>
      </section>

      <section className="section pt-8">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <ProductImage src={gallery[activeImg]} alt={product.name} className="aspect-square rounded-2xl mb-4" iconSize={80} />
            {gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {gallery.map((src, i) => (
                  <button key={i} onClick={() => setActiveImg(i)} className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${i === activeImg ? 'border-forest' : 'border-transparent'}`}>
                    <ProductImage src={src} alt="" className="w-full h-full" iconSize={24} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="eyebrow mb-3">Ola Bio · Emballage</p>
            <h1 className="font-serif text-3xl lg:text-4xl text-forest mb-4 leading-tight">{product.name}</h1>
            <p className="text-charcoal/70 leading-relaxed mb-6">{product.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 border border-forest/10">
                <p className="text-xs text-charcoal/50 mb-1">Dimensions</p>
                <p className="text-sm font-medium">{product.dimensions}</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-forest/10">
                <p className="text-xs text-charcoal/50 mb-1">Matière</p>
                <p className="text-sm font-medium">{product.material}</p>
              </div>
            </div>

            <fieldset className="mb-6">
              <legend className="font-semibold mb-3">Options de personnalisation</legend>
              <div className="space-y-2">
                {[{ key: 'logo', label: 'Impression de votre logo' }, { key: 'colors', label: 'Couleurs personnalisées' }, { key: 'custom', label: 'Dimensions sur mesure' }].map(({ key, label }) => (
                  <label key={key} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-forest/10 cursor-pointer hover:border-forest/25 transition-colors">
                    <input type="checkbox" checked={options[key]} onChange={(e) => setOptions((o) => ({ ...o, [key]: e.target.checked }))} className="w-4 h-4 accent-forest" />
                    <span className="text-sm">{label}</span>
                  </label>
                ))}
              </div>
              <textarea value={options.note} onChange={(e) => setOptions((o) => ({ ...o, note: e.target.value }))} placeholder="Précisez votre besoin (facultatif)…" rows={2} className="input mt-3 text-sm" />
            </fieldset>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="flex items-center border border-forest/15 rounded-full bg-white">
                <button onClick={() => setQty((q) => Math.max(1, q - 10))} className="p-3 hover:text-forest" aria-label="Moins"><Minus size={16} /></button>
                <input type="number" value={qty} onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))} className="w-16 text-center py-3 focus:outline-none bg-transparent" />
                <button onClick={() => setQty((q) => q + 10)} className="p-3 hover:text-forest" aria-label="Plus"><Plus size={16} /></button>
              </div>
              <button onClick={handleAdd} className="btn-forest flex-1"><ShoppingBag size={18} /> Ajouter au panier</button>
            </div>

            <button onClick={() => navigate('/personnalisation', { state: { productName: product.name, productOptions: buildOptionsString() } })} className="btn-outline w-full">
              <FileText size={16} /> Demander un devis
            </button>

            {added && (
              <div className="mt-4 flex items-center gap-2 text-sm text-forest bg-forest/5 px-4 py-3 rounded-lg animate-fade-up">
                <Check size={16} /> Produit ajouté au panier.
                <Link to="/panier" className="ml-auto font-semibold underline">Voir le panier</Link>
              </div>
            )}

            <p className="mt-6 text-xs text-charcoal/40 italic">Dimensions et matières données à titre indicatif. À confirmer avec l'équipe Ola BIO.</p>
          </div>
        </div>
      </section>

      {similar.length > 0 && (
        <section className="section bg-white">
          <div className="container-x">
            <h2 className="font-serif text-2xl mb-8">Produits similaires</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similar.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
