import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight, Check, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const initialForm = { fullName: '', company: '', phone: '', email: '', city: '', notes: '' };

export default function Cart() {
  const { items, updateQty, removeItem, clear } = useCart();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Nom requis';
    if (!form.phone.trim()) e.phone = 'Téléphone requis';
    else if (!/^[+\d\s().-]{6,}$/.test(form.phone)) e.phone = 'Format invalide';
    if (!form.city.trim()) e.city = 'Ville requise';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section">
        <div className="container-x max-w-2xl text-center">
          <div className="w-16 h-16 rounded-full bg-forest/10 text-forest flex items-center justify-center mx-auto mb-6"><Check size={28} /></div>
          <h1 className="font-serif text-3xl text-forest mb-4">Demande enregistrée (démonstration)</h1>
          <p className="text-charcoal/70 mb-2">Merci {form.fullName}. Votre demande a bien été simulée dans cette démonstration.</p>
          <p className="text-sm text-charcoal/50 mb-8 italic">Aucune commande n'est réellement transmise à Ola BIO. Une connexion backend sera nécessaire pour la mise en production.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => { clear(); setSubmitted(false); setForm(initialForm); navigate('/catalogue'); }} className="btn-forest">Nouvelle demande</button>
            <Link to="/contact" className="btn-outline">Nous contacter</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container-x">
        <p className="eyebrow mb-3">Panier & commande</p>
        <h1 className="font-serif text-3xl lg:text-4xl text-forest mb-10">Votre demande de devis</h1>

        {items.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-forest/10">
            <ShoppingBag size={40} className="mx-auto text-forest/30 mb-4" />
            <p className="font-serif text-xl text-forest mb-2">Votre panier est vide</p>
            <p className="text-charcoal/60 mb-6">Parcourez le catalogue pour sélectionner vos emballages.</p>
            <Link to="/catalogue" className="btn-forest">Explorer le catalogue</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-4">
              {items.map((item) => (
                <div key={item.key} className="bg-white rounded-2xl p-4 border border-forest/10 flex gap-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-forest/5 shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.opacity = 0)} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <Link to={`/produit/${item.id}`} className="font-serif text-lg text-forest hover:text-forest-light">{item.name}</Link>
                      <button onClick={() => removeItem(item.key)} className="text-charcoal/40 hover:text-red-500 transition-colors" aria-label="Supprimer"><Trash2 size={18} /></button>
                    </div>
                    {item.options && <p className="text-xs text-charcoal/60 mt-1">{item.options}</p>}
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-forest/15 rounded-full bg-white">
                        <button onClick={() => updateQty(item.key, item.qty - 10)} className="p-2" aria-label="Moins"><Minus size={14} /></button>
                        <input type="number" value={item.qty} onChange={(e) => updateQty(item.key, Math.max(1, Number(e.target.value) || 1))} className="w-14 text-center py-2 text-sm focus:outline-none bg-transparent" />
                        <button onClick={() => updateQty(item.key, item.qty + 10)} className="p-2" aria-label="Plus"><Plus size={14} /></button>
                      </div>
                      <span className="text-xs text-charcoal/50">Prix sur devis</span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-between items-center pt-2">
                <Link to="/catalogue" className="text-sm text-forest hover:underline">← Continuer mes achats</Link>
                <button onClick={clear} className="text-sm text-charcoal/60 hover:text-red-500 transition-colors">Vider le panier</button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white rounded-2xl p-6 border border-forest/10 h-fit lg:sticky lg:top-24">
              <h2 className="font-serif text-xl text-forest mb-4">Vos coordonnées</h2>
              <div className="space-y-3">
                <div>
                  <label className="label">Nom complet *</label>
                  <input className={`input ${errors.fullName ? 'border-red-400' : ''}`} value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
                  {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="label">Nom de l'entreprise</label>
                  <input className="input" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                </div>
                <div>
                  <label className="label">Téléphone *</label>
                  <input className={`input ${errors.phone ? 'border-red-400' : ''}`} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+229…" />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="label">Email (facultatif)</label>
                  <input className="input" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <label className="label">Ville *</label>
                  <input className={`input ${errors.city ? 'border-red-400' : ''}`} value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                  {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label className="label">Besoins spécifiques</label>
                  <textarea className="input" rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Quantités souhaitées, délais, personnalisation…" />
                </div>
              </div>

              <button type="submit" className="btn-forest w-full mt-5">Envoyer la demande <ArrowRight size={16} /></button>
              <p className="text-[11px] text-charcoal/40 mt-3 italic text-center">Démonstration : la soumission est simulée, aucune commande n'est transmise.</p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
