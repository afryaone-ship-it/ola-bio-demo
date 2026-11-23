import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Check, Send } from 'lucide-react';
import { siteConfig, whatsappLink } from '../config';

const initial = { name: '', email: '', phone: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = {};
    if (!form.name.trim()) e.name = 'Requis';
    if (!form.message.trim()) e.message = 'Requis';
    if (!form.phone.trim() && !form.email.trim()) e.phone = 'Téléphone ou email requis';
    setErrors(e);
    if (Object.keys(e).length === 0) setSubmitted(true);
  };

  return (
    <section className="section">
      <div className="container-x">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-3">Contact</p>
          <h1 className="font-serif text-3xl lg:text-4xl text-forest mb-4">Parlons de votre projet d'emballage</h1>
          <p className="text-charcoal/70">Une question, un besoin spécifique, une demande de devis ? Écrivez-nous.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-forest/10">
              <h3 className="font-serif text-lg text-forest mb-4">Nos coordonnées</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3"><MapPin size={18} className="text-gold shrink-0 mt-0.5" /><div><p className="font-medium">Adresse</p><p className="text-charcoal/60">{siteConfig.address}</p></div></li>
                <li className="flex gap-3"><Phone size={18} className="text-gold shrink-0 mt-0.5" /><div><p className="font-medium">Téléphone</p><p className="text-charcoal/60">{siteConfig.phone}</p></div></li>
                <li className="flex gap-3"><Mail size={18} className="text-gold shrink-0 mt-0.5" /><div><p className="font-medium">Email</p><p className="text-charcoal/60">{siteConfig.email}</p></div></li>
                <li className="flex gap-3"><Clock size={18} className="text-gold shrink-0 mt-0.5" /><div><p className="font-medium">Horaires</p><p className="text-charcoal/60">{siteConfig.hours}</p></div></li>
              </ul>
              <p className="text-[11px] text-charcoal/40 italic mt-4">Coordonnées provisoires — à remplacer par les informations officielles.</p>
            </div>

            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="block bg-forest text-cream rounded-2xl p-6 hover:bg-forest-light transition-colors">
              <MessageCircle size={24} className="text-gold mb-3" />
              <p className="font-serif text-lg mb-1">Discuter sur WhatsApp</p>
              <p className="text-sm text-cream/70">Le moyen le plus rapide pour échanger avec nous.</p>
            </a>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 border border-forest/10 text-center">
                <div className="w-14 h-14 rounded-full bg-forest/10 text-forest flex items-center justify-center mx-auto mb-5"><Check size={24} /></div>
                <h2 className="font-serif text-2xl text-forest mb-3">Message envoyé (démonstration)</h2>
                <p className="text-charcoal/70 mb-6">Merci {form.name}. Votre message a été simulé. Aucune transmission réelle n'a lieu dans cette démonstration.</p>
                <button onClick={() => { setForm(initial); setSubmitted(false); }} className="btn-outline">Envoyer un autre message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 lg:p-8 border border-forest/10 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label">Nom complet *</label>
                    <input className={`input ${errors.name ? 'border-red-400' : ''}`} value={form.name} onChange={(e) => update('name', e.target.value)} />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="label">Téléphone</label>
                    <input className={`input ${errors.phone ? 'border-red-400' : ''}`} value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+229…" />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label className="label">Email</label>
                  <input type="email" className="input" value={form.email} onChange={(e) => update('email', e.target.value)} />
                </div>
                <div>
                  <label className="label">Sujet</label>
                  <input className="input" value={form.subject} onChange={(e) => update('subject', e.target.value)} placeholder="Demande de devis, question…" />
                </div>
                <div>
                  <label className="label">Message *</label>
                  <textarea rows={5} className={`input ${errors.message ? 'border-red-400' : ''}`} value={form.message} onChange={(e) => update('message', e.target.value)} />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="btn-forest w-full">Envoyer le message <Send size={16} /></button>
                <p className="text-[11px] text-charcoal/40 text-center italic">Démonstration : la soumission est simulée, aucun envoi réel.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
