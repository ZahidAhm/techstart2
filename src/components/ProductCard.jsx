import { Link } from 'react-router-dom'

export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="glass-panel flex flex-col h-full hover:neon-border transition-all duration-300 hover:-translate-y-1">
      <div className="h-48 w-full bg-gray-200 relative overflow-hidden group">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=No+Image' }}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{product.name}</h3>
        </div>
        <p className="text-sm text-primary font-medium mb-3">{product.tagline}</p>
        <p className="text-slate-300 text-sm mb-4 flex-1">{product.description}</p>

        <div className="mt-auto pt-4 flex gap-2">
          {onEdit ? (
            <>
              <button onClick={() => onEdit(product)} className="btn-secondary flex-1 text-xs">
                Edit
              </button>
              <button onClick={() => onDelete(product.id)} className="btn-secondary flex-1 text-xs text-red-600 hover:text-red-700 hover:bg-red-50">
                Delete
              </button>
            </>
          ) : (
            <Link to={`/products/${product.id}`} className="btn-primary w-full text-center">
              View Product
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
