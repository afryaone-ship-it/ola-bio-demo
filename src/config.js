export const siteConfig = {
  brand: 'OLA BIO',
  tagline: 'Emballages premium pour les professionnels',
  whatsappNumber: '22900000000',
  whatsappMessage:
    "Bonjour Ola BIO, je souhaite obtenir des informations sur vos solutions d'emballage.",
  phone: '+229 00 00 00 00',
  email: 'contact@olabio.example',
  address: 'Cotonou, Bénin — adresse à préciser',
  hours: 'Lun. – Sam. : 8h – 18h (horaires provisoires)',
  developer: {
    name: 'AFRYA ONE',
    tagline: 'Technology • Innovation • Digital Solutions',
  },
};

export const whatsappLink = () =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;
