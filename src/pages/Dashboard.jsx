import { useState, useEffect } from 'react'
import { getCurrentUser } from '../lib/auth'
import { getProducts, addProduct, updateProduct, deleteProduct } from '../lib/store'
import ProductCard from '../components/ProductCard'
import ProductForm from '../components/ProductForm'

export default function Dashboard() {
  const user = getCurrentUser()
  const [products, setProducts] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [currentProduct, setCurrentProduct] = useState(null)

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = () => {
    setProducts(getProducts())
  }

  const handleAdd = () => {
    setCurrentProduct(null)
    setIsEditing(true)
  }

  const handleEdit = (product) => {
    setCurrentProduct(product)
    setIsEditing(true)
  }

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id)
      loadProducts()
    }
  }

  const handleSave = (data) => {
    if (currentProduct) {
      updateProduct(currentProduct.id, data)
    } else {
      addProduct(data)
    }
    setIsEditing(false)
    loadProducts()
  }

  return (
    <section className="container-base py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white">Dashboard</h2>
          <p className="text-slate-400">Welcome back, {user?.email}</p>
        </div>
        {!isEditing && (
          <button onClick={handleAdd} className="btn-primary">
            + New Product
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="max-w-2xl mx-auto glass-panel p-8 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-6 text-white">{currentProduct ? 'Edit Product' : 'Add New Product'}</h3>
          <ProductForm
            product={currentProduct}
            onSave={handleSave}
            onCancel={() => setIsEditing(false)}
          />
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </section>
  )
}

