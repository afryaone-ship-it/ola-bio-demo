import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Palette, Truck, CheckCircle2, Cake, Croissant, Package, Box, Briefcase, Layers } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import ProductImage from '../components/ProductImage';
import { products } from '../data/products';

const categories = [
  { id: 'boites-gateaux', name: 'Boîtes à gâteaux', icon: Cake },
  { id: 'boites-patisserie', name: 'Boîtes à pâtisserie', icon: Layers },
  { id: 'viennoiseries', name: 'Viennoiseries', icon: Croissant },
  { id: 'alimentaires', name: 'Emballages alimentaires', icon: Package },
  { id: 'cartons-personnalises', name: 'Cartons personnalisés', icon: Box },
  { id: 'professionnels', name: 'Emballages pro', icon: Briefcase },
];

const steps = [
  { n: '01', title: 'Explorez le catalogue', text: "Parcourez nos catégories d'emballages pensées pour les métiers de bouche." },
  { n: '02', title: 'Sélectionnez vos produits', text: 'Ajoutez les références et quantités souhaitées à votre demande.' },
  { n: '03', title: 'Demandez un devis', text: 'Décrivez vos besoins, dimensions et options de personnalisation.' },
  { n: '04', title: 'Recevez votre proposition', text: "Notre équipe revient vers vous avec une proposition adaptée." },
];

export default function Home() {
  const popular = products.filter((p) => p.popular).slice(0, 4);
  return (
    <>
      <section className="relative bg-forest text-cream overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-forest-light/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="container-x relative py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <p className="eyebrow mb-6">Ola Bio · Emballages premium</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6 text-cream">
              L'emballage qui donne une <span className="text-gold italic">nouvelle dimension</span> à vos créations.
            </h1>
            <p className="text-cream/75 text-lg mb-10 max-w-xl leading-relaxed">
              Découvrez des solutions d'emballage pensées pour valoriser vos produits, protéger vos créations et accompagner votre activité.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/catalogue" className="btn-gold">Explorer nos produits <ArrowRight size={18} /></Link>
              <Link to="/personnalisation" className="btn-cream">Demander un devis</Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-cream/70">
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-gold" /> Solutions professionnelles</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-gold" /> Personnalisation</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-gold" /> Fabrication locale</span>
            </div>
          </div>
          <div className="relative animate-fade-up delay-2">
            <ProductImage src="https://images.unsplash.com/photo-1607478900766-efe13248b125?auto=format&fit=crop&w=1200&q=80" alt="Emballages de pâtisserie Ola Bio" className="aspect-[4/5] rounded-2xl shadow-2xl" iconSize={80} />
            <div className="absolute -bottom-6 -left-6 bg-cream text-forest rounded-2xl p-5 shadow-2xl max-w-[220px] hidden md:block">
              <Sparkles size={20} className="text-gold mb-2" />
              <p className="font-serif text-lg leading-tight">Des emballages pensés pour sublimer vos produits.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <p className="eyebrow mb-4">Notre savoir-faire</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-forest leading-tight">L'exigence d'un emballage à la hauteur de vos créations.</h2>
          </div>
          <div className="lg:col-span-2 space-y-4 text-charcoal/70 leading-relaxed">
            <p>Ola Bio conçoit des emballages destinés aux professionnels de la pâtisserie, de la boulangerie, de la restauration et de l'agroalimentaire. Chaque produit est pensé pour conjuguer protection, élégance et praticité.</p>
            <p className="text-sm text-charcoal/50 italic">Contenu éditorial provisoire — à remplacer par la présentation officielle de l'entreprise.</p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Catalogue" title="Une gamme complète d'emballages" intro="Des solutions adaptées à chaque métier, chaque produit, chaque moment." />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {categories.map(({ id, name, icon: Icon }) => (
              <Link key={id} to={`/catalogue?cat=${id}`} className="group relative overflow-hidden rounded-2xl bg-cream p-6 lg:p-8 border border-forest/5 hover:border-forest/15 transition-all duration-300">
                <Icon size={28} className="text-forest mb-6 group-hover:text-gold transition-colors" />
                <h3 className="font-serif text-lg text-forest mb-1">{name}</h3>
                <p className="text-xs text-charcoal/50 inline-flex items-center gap-1">Découvrir <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" /></p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <SectionHeading eyebrow="Sélection" title="Produits populaires" intro="Une sélection de références appréciées des professionnels." />
            <Link to="/catalogue" className="btn-outline mb-12">Voir tout le catalogue <ArrowRight size={16} /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popular.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      <section className="section bg-forest text-cream">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-4">Solutions professionnelles</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-cream leading-tight mb-6">Un accompagnement dédié aux exigences de votre métier.</h2>
            <p className="text-cream/70 mb-8 leading-relaxed">Pâtisseries, boulangeries, restaurants, traiteurs ou distributeurs : nous adaptons nos emballages à vos volumes, vos contraintes et votre image de marque.</p>
            <Link to="/solutions-professionnelles" className="btn-gold">Découvrir nos solutions <ArrowRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Pâtisseries', 'Boulangeries', 'Restaurants', 'Traiteurs'].map((t) => (
              <div key={t} className="rounded-2xl border border-cream/15 p-6 backdrop-blur-sm bg-cream/5">
                <CheckCircle2 size={20} className="text-gold mb-4" />
                <p className="font-serif text-lg">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <ProductImage src="https://images.unsplash.com/photo-1533910534207-90f31029a78e?auto=format&fit=crop&w=1200&q=80" alt="Personnalisation d'emballages" className="aspect-[4/5] rounded-2xl" iconSize={64} />
          <div>
            <p className="eyebrow mb-4">Personnalisation</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-forest leading-tight mb-6">Votre marque, jusque dans l'emballage.</h2>
            <p className="text-charcoal/70 mb-6 leading-relaxed">Impression de votre logo, choix des couleurs, dimensions sur mesure : nous concevons des emballages qui prolongent l'expérience de vos produits.</p>
            <ul className="space-y-3 mb-8 text-charcoal/80">
              {['Impression logo et marque', 'Dimensions sur mesure', 'Choix de matières et finitions', 'Accompagnement de A à Z'].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Palette size={18} className="text-gold shrink-0 mt-0.5" /><span>{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/personnalisation" className="btn-forest">Lancer mon projet</Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Comment ça marche" title="Quatre étapes simples pour commander" align="center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative p-6 rounded-2xl bg-cream border border-forest/5">
                <p className="font-serif text-4xl text-gold/50 mb-4">{s.n}</p>
                <h3 className="font-serif text-lg text-forest mb-2">{s.title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-forest-dark text-cream">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Truck size={32} className="mx-auto text-gold mb-6" />
          <h2 className="font-serif text-3xl lg:text-4xl text-cream mb-6">Prêt à valoriser vos créations avec un emballage à la hauteur ?</h2>
          <p className="text-cream/70 mb-10 text-lg">Demandez un devis personnalisé, notre équipe revient vers vous rapidement.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/personnalisation" className="btn-gold">Demander un devis <ArrowRight size={16} /></Link>
            <Link to="/catalogue" className="btn-cream">Parcourir le catalogue</Link>
          </div>
        </div>
      </section>
    </>
  );
}
