import Link from 'next/link';
import { fetchProductsByCategory, fetchProductCategory, fetchProductPricing } from '../../../lib/api';
import ProductGrid from '../../../components/ProductGrid';

export default async function ProductsPage({ params }) {
  const { categoryId } = params;
  const [products, categoryName] = await Promise.all([
    fetchProducts(categoryId),
    fetchCategoryName(categoryId)
  ]);

  const productsWithPricing = await Promise.all(
    products.map(async (product) => {
      try {
        const pricingData = await fetchProductPricing(product.id);
        return { ...product, pricing: pricingData.data || [] };
      } catch (error) {
        console.error(`Error fetching pricing for product ${product.id}:`, error);
        return { ...product, pricing: [] };
      }
    })
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <main className="container mx-auto px-4 py-24">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">
            {categoryName}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our wide range of high-quality printing products in this category.
          </p>
        </div>
        
        <ProductGrid products={productsWithPricing} />
        
        <div className="mt-16 text-center">
          <Link href="/category">
            <span className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full hover:bg-yellow-300 transition duration-300 text-lg font-semibold">
              Back to Categories
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}

async function fetchProducts(categoryId) {
  try {
    const response = await fetchProductsByCategory(categoryId);
    return response.data || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

async function fetchCategoryName(categoryId) {
  try {
    const response = await fetchProductCategory(categoryId);
    return response.data.attributes.Name || 'Unknown Category';
  } catch (error) {
    console.error('Error fetching category name:', error);
    return 'Unknown Category';
  }
}