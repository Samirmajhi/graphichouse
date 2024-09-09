import React from 'react';
import { fetchProductCategories } from '../lib/api';
import Link from 'next/link';
import { Printer } from 'lucide-react';
import CategoryCard from '../components/CategoryCard'; // Updated import path

const fetchCategories = async () => {
  try {
    const response = await fetchProductCategories();
    return response.data || [];
  } catch (error) {
    console.error('Error fetching product categories:', error);
    return [];
  }
};

export default async function CategoriesPage() {
  const categories = await fetchCategories();

  return (
    <div className="min-h-screen bg-black">
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-yellow-400">
            Print Solutions for Every Need
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Explore our wide range of high-quality printing products and services.
          </p>
        </div>

        {categories.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400">
            No categories available at the moment. Please check back later.
          </div>
        )}

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-400">Can't find what you're looking for?</h2>
          <p className="text-gray-300 mb-8">Our team is here to help with custom printing solutions.</p>
          <Link href="/contact">
            <span className="inline-flex items-center bg-yellow-500 text-black px-8 py-3 rounded-lg hover:bg-yellow-600 transition duration-300 cursor-pointer">
              <Printer className="mr-2 w-6 h-6" />
              Contact Us
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
