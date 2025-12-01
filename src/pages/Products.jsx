import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../lib/store'

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(getProducts())
  }, [])

  return (
    <section className="container-base py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Our Products</h2>
        <p className="mt-4 text-lg text-slate-400">Explore our suite of tools designed to help you succeed.</p>
      </div>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  )
}

