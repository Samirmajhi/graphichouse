"use client"
import React from 'react';
import Image from 'next/image';
import { Printer, Tag } from 'lucide-react';

interface Pricing {
  attributes: {
    min: number;
    max?: number;
    Price: number;
  };
}

interface Product {
  id: string;
  attributes: {
    Name: string;
    Description: string;
    Price: number;
    Photo?: {
      data?: Array<{
        attributes: {
          url: string;
        };
      }>;
    };
  };
  pricing: Pricing[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const imageUrl = product.attributes.Photo?.data?.[0]?.attributes.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://20.198.254.137:1337'}${product.attributes.Photo.data[0].attributes.url}`
    : '/placeholder-product-image.jpg';

  const basePrice = product.attributes.Price;

  const sortedPricing = product.pricing
    .filter(p => p && p.attributes && typeof p.attributes.min === 'number' && typeof p.attributes.Price === 'number')
    .sort((a, b) => a.attributes.min - b.attributes.min);

  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-yellow-400/50 border border-gray-700 flex flex-col">
      <div className="relative aspect-square">
        <Image
          src={imageUrl}
          alt={product.attributes.Name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          New
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-2 truncate">
            {product.attributes.Name}
          </h2>
          <p className="text-gray-300 mb-4 line-clamp-2">{product.attributes.Description}</p>
        </div>
        
        <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-4 rounded-xl shadow-inner">
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-semibold text-yellow-400">Base Price</span>
            <div className="flex items-center">
              <Tag className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-2xl font-bold text-yellow-400">
                NPR {basePrice.toLocaleString('en-NP')}
              </span>
            </div>
          </div>
          
          {sortedPricing.length > 0 && (
            <div className="mt-3">
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">Quantity Pricing:</h3>
              <ul className="space-y-2">
                {sortedPricing.map((price, index) => (
                  <li key={index} className="flex justify-between text-sm bg-gray-700 p-2 rounded-lg shadow-sm">
                    <span className="text-yellow-200 font-medium">
                      {price.attributes.min}{price.attributes.max ? `-${price.attributes.max}` : '+'}
                    </span>
                    <span className="font-bold text-yellow-300">
                      NPR {price.attributes.Price.toLocaleString('en-NP')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg shadow-md p-12 text-center max-w-md mx-auto">
        <Printer className="w-24 h-24 text-yellow-400 mx-auto mb-6" />
        <p className="text-2xl text-yellow-300 mb-6">No products available in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;