
import { useState, useEffect } from 'react'

export default function ProductForm({ product, onSave, onCancel }) {
    const [formData, setFormData] = useState({
        name: '',
        tagline: '',
        description: '',
        imageUrl: '',
        link: ''
    })

    useEffect(() => {
        if (product) {
            setFormData(product)
        }
    }, [product])

    const handleSubmit = (e) => {
        e.preventDefault()
        onSave(formData)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-slate-300">Name</label>
                <input
                    type="text"
                    required
                    className="input-field"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-300">Tagline</label>
                <input
                    type="text"
                    required
                    className="input-field"
                    value={formData.tagline}
                    onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-300">Description</label>
                <textarea
                    required
                    rows={3}
                    className="input-field"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-300">Image URL</label>
                <input
                    type="url"
                    required
                    className="input-field"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-300">Product Link</label>
                <input
                    type="text"
                    className="input-field"
                    value={formData.link}
                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                />
            </div>
            <div className="flex justify-end gap-2 pt-4">
                <button type="button" onClick={onCancel} className="btn-secondary">
                    Cancel
                </button>
                <button type="submit" className="btn-primary">
                    {product ? 'Update Product' : 'Add Product'}
                </button>
            </div>
        </form>
    )
}
