import { Link } from 'react-router-dom';
import { Cake, Croissant, UtensilsCrossed, ChefHat, Factory, Store, ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const segments = [
  { icon: Cake, title: 'Pâtisseries', text: 'Boîtes, coffrets et présentoirs pour vos créations sucrées.' },
  { icon: Croissant, title: 'Boulangeries', text: 'Sachets et emballages pour viennoiseries, pains et pâtisseries.' },
  { icon: UtensilsCrossed, title: 'Restaurants', text: "Boîtes à emporter et barquettes adaptées à votre carte." },
  { icon: ChefHat, title: 'Traiteurs', text: 'Solutions volumétriques pour buffets et événements.' },
  { icon: Factory, title: 'Entreprises alimentaires', text: "Cartons d'expédition et emballages personnalisés." },
  { icon: Store, title: 'Distributeurs', text: 'Volumes importants et gammes complètes pour la revente.' },
];

const advantages = [
  'Volumes adaptés à votre activité',
  'Personnalisation à votre image',
  'Accompagnement dédié',
  'Qualité constante à chaque commande',
];

export default function Pro() {
  return (
    <>
      <section className="bg-forest text-cream py-16 lg:py-20">
        <div className="container-x">
          <p className="eyebrow mb-4">Solutions professionnelles</p>
          <h1 className="font-serif text-4xl lg:text-5xl text-cream max-w-3xl leading-tight">Des emballages pensés pour votre métier, pas l'inverse.</h1>
          <p className="text-cream/70 mt-5 max-w-2xl">Chaque activité a ses contraintes. Nous adaptons nos solutions à votre réalité opérationnelle et à votre image de marque.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Segments" title="À chaque métier, une réponse adaptée" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {segments.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-forest/10 hover:border-forest/25 transition-colors">
                <Icon size={28} className="text-forest mb-4" />
                <h3 className="font-serif text-lg text-forest mb-2">{title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-4">Vos avantages</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-forest leading-tight mb-6">Un partenaire emballage à votre écoute.</h2>
            <ul className="space-y-4">
              {advantages.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-charcoal/80">{a}</span>
                </li>
              ))}
            </ul>
            <Link to="/personnalisation" className="btn-forest mt-8">Discuter de mon projet <ArrowRight size={16} /></Link>
          </div>
          <div className="bg-cream rounded-2xl p-8 border border-forest/5">
            <p className="font-serif text-2xl text-forest leading-snug mb-4">« Chaque emballage doit protéger, présenter et raconter votre marque. »</p>
            <p className="text-sm text-charcoal/50 italic">Vision éditoriale provisoire — à adapter avec Ola BIO.</p>
          </div>
        </div>
      </section>

      <section className="section bg-forest-dark text-cream">
        <div className="container-x text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl text-cream mb-6">Un projet d'emballage professionnel ?</h2>
          <p className="text-cream/70 mb-8">Partagez-nous vos contraintes, nous construirons la solution adaptée.</p>
          <Link to="/personnalisation" className="btn-gold">Demander un devis <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
