import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const initial = { type: '', dimensions: '', quantity: '', printing: '', description: '', fullName: '', company: '', phone: '', email: '', city: '' };

const types = ['Boîtes à gâteaux', 'Boîtes à pâtisserie', 'Emballages viennoiseries', 'Emballages alimentaires', 'Cartons personnalisés', 'Autre / à définir'];

export default function Customization() {
  const location = useLocation();
  const prefillName = location.state?.productName || '';
  const prefillOptions = location.state?.productOptions || '';

  const [form, setForm] = useState({
    ...initial,
    description: prefillName
      ? `Je souhaite un devis pour : ${prefillName}. ${prefillOptions ? 'Options envisagées : ' + prefillOptions + '.' : ''}`
      : '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.type) e.type = 'Requis';
    if (!form.quantity) e.quantity = 'Requis';
    if (!form.fullName.trim()) e.fullName = 'Requis';
    if (!form.phone.trim()) e.phone = 'Requis';
    else if (!/^[+\d\s().-]{6,}$/.test(form.phone)) e.phone = 'Format invalide';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section">
        <div className="container-x max-w-2xl text-center">
          <div className="w-16 h-16 rounded-full bg-forest/10 text-forest flex items-center justify-center mx-auto mb-6"><Check size={28} /></div>
          <h1 className="font-serif text-3xl text-forest mb-4">Demande de devis enregistrée (démonstration)</h1>
          <p className="text-charcoal/70 mb-8">Merci {form.fullName}. Votre demande a bien été simulée. Aucune transmission réelle n'a lieu dans cette démonstration.</p>
          <button onClick={() => { setSubmitted(false); setForm(initial); }} className="btn-forest">Nouvelle demande</button>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container-x max-w-4xl">
        <div className="text-center mb-12">
          <Sparkles size={28} className="mx-auto text-gold mb-4" />
          <p className="eyebrow mb-3">Personnalisation</p>
          <h1 className="font-serif text-3xl lg:text-4xl text-forest mb-4">Donnons vie à votre projet d'emballage</h1>
          <p className="text-charcoal/70 max-w-2xl mx-auto">Décrivez votre besoin, nous revenons vers vous avec une proposition adaptée à votre activité.</p>
        </div>

        {prefillName && (
          <div className="bg-forest/5 border border-forest/10 rounded-xl p-4 mb-8 text-sm">
            <span className="text-charcoal/60">Produit concerné : </span>
            <strong className="text-forest">{prefillName}</strong>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 lg:p-10 border border-forest/10 space-y-5">
          <div>
            <label className="label">Type d'emballage *</label>
            <select className={`input ${errors.type ? 'border-red-400' : ''}`} value={form.type} onChange={(e) => update('type', e.target.value)}>
              <option value="">— Choisir —</option>
              {types.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            {errors.type && <p className="text-xs text-red-500 mt-1">{errors.type}</p>}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="label">Dimensions souhaitées</label>
              <input className="input" placeholder="ex : 25 × 25 × 10 cm" value={form.dimensions} onChange={(e) => update('dimensions', e.target.value)} />
            </div>
            <div>
              <label className="label">Quantité estimée *</label>
              <input type="number" className={`input ${errors.quantity ? 'border-red-400' : ''}`} placeholder="ex : 500" value={form.quantity} onChange={(e) => update('quantity', e.target.value)} />
              {errors.quantity && <p className="text-xs text-red-500 mt-1">{errors.quantity}</p>}
            </div>
          </div>

          <div>
            <label className="label">Impression souhaitée</label>
            <input className="input" placeholder="Logo, couleurs, texte…" value={form.printing} onChange={(e) => update('printing', e.target.value)} />
          </div>

          <div>
            <label className="label">Description du besoin</label>
            <textarea className="input" rows={4} value={form.description} onChange={(e) => update('description', e.target.value)} placeholder="Décrivez votre projet, votre activité, vos contraintes…" />
          </div>

          <hr className="border-forest/10" />

          <h2 className="font-serif text-lg text-forest">Vos coordonnées</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="label">Nom complet *</label>
              <input className={`input ${errors.fullName ? 'border-red-400' : ''}`} value={form.fullName} onChange={(e) => update('fullName', e.target.value)} />
              {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <label className="label">Entreprise</label>
              <input className="input" value={form.company} onChange={(e) => update('company', e.target.value)} />
            </div>
            <div>
              <label className="label">Téléphone *</label>
              <input className={`input ${errors.phone ? 'border-red-400' : ''}`} value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+229…" />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="label">Email</label>
              <input type="email" className="input" value={form.email} onChange={(e) => update('email', e.target.value)} />
            </div>
            <div className="sm:col-span-2">
              <label className="label">Ville</label>
              <input className="input" value={form.city} onChange={(e) => update('city', e.target.value)} />
            </div>
          </div>

          <button type="submit" className="btn-forest w-full">Envoyer ma demande de devis <ArrowRight size={16} /></button>
          <p className="text-[11px] text-charcoal/40 text-center italic">Démonstration : la soumission est simulée. Aucun envoi réel n'est effectué.</p>
        </form>
      </div>
    </section>
  );
}
