// This file simulates what your backend/GraphQL will eventually return.
// In later steps, this data will be served by a mock GraphQL server,
// then swapped for the real backend — the component code won't change.

export const heroSlide = {
  image: 'https://picsum.photos/seed/crea-hero/1200/500',
  subtitle: 'Hand Crafted Bronze and Marble God Statues',
  title: 'Divine Craftsmanship, Delivered to your Door',
  buttons: [
    { label: 'Shop Now', variant: 'primary', href: '/shop' },
    { label: 'Subscriptions', variant: 'secondary', href: '/subscriptions' },
  ],
};

export const bestSellers = [
  { id: '1', image: 'https://picsum.photos/seed/idol1/300/300', title: 'Lakshmi Brass Idol', price: 6499, mrp: 7499, discountPercent: 13, rating: 4, reviewCount: 536, deliveryDate: 'TODAY' },
  { id: '2', image: 'https://picsum.photos/seed/idol2/300/300', title: 'Varahi Amman Brass Idol', price: 6499, mrp: 7499, rating: 5, reviewCount: 340, deliveryDate: 'Wed, 12/05/2026' },
  { id: '3', image: 'https://picsum.photos/seed/idol3/300/300', title: 'Gold Plated Vinayagar Idol', price: 6499, mrp: 7499, rating: 5, reviewCount: 536, deliveryDate: 'Wed, 12/05/2026' },
  { id: '4', image: 'https://picsum.photos/seed/idol4/300/300', title: 'Hanuman Brass Idol', price: 6499, mrp: 7499, rating: 5, reviewCount: 536, deliveryDate: 'Wed, 12/05/2026' },
];

export const poojaEssentials = [
  { id: 'pe1', image: 'https://picsum.photos/seed/pe1/300/300', title: 'Incense Sticks - Rose Flavour', price: 6499, mrp: 7499, rating: 4, reviewCount: 586, deliveryDate: 'Wed, 12/05/2026' },
  { id: 'pe2', image: 'https://picsum.photos/seed/pe2/300/300', title: 'Incense Cones', price: 6499, mrp: 7499, discountPercent: 28, rating: 4, reviewCount: 586, deliveryDate: 'Wed, 12/05/2026' },
  { id: 'pe3', image: 'https://picsum.photos/seed/pe3/300/300', title: 'Divine Lamps', price: 6499, mrp: 7499, rating: 5, reviewCount: 586, deliveryDate: 'Wed, 12/05/2026' },
  { id: 'pe4', image: 'https://picsum.photos/seed/pe4/300/300', title: 'Kumkum and Turmeric', price: 6499, mrp: 7499, discountPercent: 12, rating: 5, reviewCount: 586, deliveryDate: 'Wed, 12/05/2026' },
];

export const promoBanner = {
  title: 'Express Delivery Now Available!',
  subtitle: 'Get your favourite limited pre-orders delivered fresh, safe and on time.',
};
