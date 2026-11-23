import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Award, Users } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProductImage from '../components/ProductImage';

export default function About() {
  return (
    <>
      <section className="bg-forest text-cream py-16 lg:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-4">À propos</p>
            <h1 className="font-serif text-4xl lg:text-5xl text-cream leading-tight mb-6">Ola Bio, au service des métiers de bouche.</h1>
            <p className="text-cream/70 leading-relaxed">Ola Bio conçoit et fabrique des emballages destinés aux professionnels de la pâtisserie, de la boulangerie, de la restauration et de l'agroalimentaire.</p>
            <p className="mt-4 text-sm text-cream/50 italic">Contenu éditorial provisoire. L'histoire, l'année de création et les références officielles seront fournies par Ola BIO.</p>
          </div>
          <ProductImage src="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&w=1200&q=80" alt="Atelier Ola Bio" className="aspect-[4/3] rounded-2xl" iconSize={64} />
        </div>
      </section>

      <section className="section">
        <div className="container-x grid sm:grid-cols-3 gap-6">
          {[
            { icon: Leaf, title: 'Responsabilité', text: 'Une démarche attentive aux matières et à leur impact, sans revendication de certification non vérifiée.' },
            { icon: Award, title: 'Exigence', text: 'Des emballages pensés pour protéger, présenter et valoriser vos créations.' },
            { icon: Users, title: 'Proximité', text: 'Un accompagnement dédié aux professionnels, de la première demande au suivi.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-forest/10">
              <Icon size={28} className="text-forest mb-4" />
              <h3 className="font-serif text-lg text-forest mb-2">{title}</h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x max-w-3xl mx-auto text-center">
          <SectionHeading eyebrow="Notre mission" title="Valoriser chaque création, protéger chaque produit." align="center" intro="Nous croyons qu'un emballage réussi prolonge l'expérience du produit. C'est cette conviction qui guide notre travail au quotidien auprès des professionnels." />
          <Link to="/contact" className="btn-forest mt-4">Échanger avec nous <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
