import React from 'react';
import ProductCard from './ProductCard';

const productCards = [
  {
    title: 'Auto',
    text: 'Asegurá tu auto y manejá tranquilo',
    imgSrc: 'https://content.gruposancristobal.com/marketing-digital/images/landing-products/cards/card-auto-landing-151x202.webp',
  },
  {
    title: 'Hogar',
    text: 'Tu casa siempre protegida con San Cristóbal Seguros',
    imgSrc: 'https://content.gruposancristobal.com/marketing-digital/images/landing-products/cards/card-hogar-landing-151x202.webp',
  },
  {
    title: 'Motos',
    text: 'Protégete a vos y a tu moto en todo momento',
    imgSrc: 'https://content.gruposancristobal.com/marketing-digital/images/landing-products/cards/card-moto-landing-151x202.webp',
  },
  {
    title: 'Bici',
    text: 'Asegurá tu bici y pedaleá tranquilo',
    imgSrc: 'https://content.gruposancristobal.com/marketing-digital/images/landing-products/cards/card-bici-landing-151x202.webp',
  },
  {
    title: 'Integral de Comercio',
    text: 'Asegurá tu mercadería y tu lugar de trabajo',
    imgSrc: 'https://content.gruposancristobal.com/marketing-digital/images/landing-products/cards/card-iicc-landing-151x202.webp',
  },
  {
    title: 'Préstamos Prendarios',
    text: 'Ahora tu vehículo es la garantía para hacer realidad tus sueños',
    imgSrc: 'https://content.gruposancristobal.com/marketing-digital/images/landing-products/cards/card-ssff-landing-151x202.png',
  },
  {
    title: 'Monopatín',
    text: 'Protegé tu Monopatín eléctrico con la mejor cobertura',
    imgSrc: 'https://content.gruposancristobal.com/marketing-digital/images/landing-products/cards/card-monopatin-landing-151x202.png',
  },
  {
    title: 'Notebook',
    text: 'Tu notebook asegurada, estés dentro o fuera de tu casa',
    imgSrc: 'https://content.gruposancristobal.com/marketing-digital/images/landing-products/cards/card-notebook-landing-151x202.png',
  },
  {
    title: 'Instrumentos musicales',
    text: 'Obtené el mejor seguro para tus instrumentos',
    imgSrc: 'https://content.gruposancristobal.com/marketing-digital/images/landing-products/cards/card-IM-landing-151x202.png',
  },
  {
    title: 'Retiro',
    text: 'Planificá tus ahorros e inversiones y concretá tus sueños',
    imgSrc: 'https://content.gruposancristobal.com/marketing-digital/images/landing-products/cards/card-retiro-landing-152x202.png',
  },
  {
    title: 'Caución',
    text: 'La garantía para alquilar tu vivienda o comercio',
    imgSrc: 'https://content.gruposancristobal.com/marketing-digital/images/landing-products/cards/card-caucion-landing-151x202.png',
  },
  {
    title: 'Caución temporario',
    text: 'Tu garantía de alquiler temporal con San Cristobal',
    imgSrc: 'https://content.gruposancristobal.com/marketing-digital/images/landing-products/cards/card-caucionTemporal-landing-151x202.png',
  },
];

const Products = () => {
  return (
    <div className="container max-w-[70%] mx-auto px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {productCards.map((card, index) => (
          <ProductCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Products;
