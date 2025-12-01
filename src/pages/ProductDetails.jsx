import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProduct } from '../lib/store'

export default function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        setProduct(getProduct(id))
    }, [id])

    if (!product) {
        return (
            <div className="container-base py-16 text-center">
                <h2 className="text-2xl font-bold text-white">Product Not Found</h2>
                <Link to="/products" className="btn-primary mt-4 inline-block">
                    Back to Products
                </Link>
            </div>
        )
    }

    return (
        <div className="container-base py-16">
            <Link to="/products" className="text-primary hover:text-primary-400 mb-8 inline-block">
                &larr; Back to Products
            </Link>

            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full rounded-xl shadow-lg mb-8"
                    />

                    <div className="grid grid-cols-2 gap-4">
                        {product.screenshots?.map((shot, i) => (
                            <img
                                key={i}
                                src={shot}
                                alt={`${product.name} screenshot ${i + 1}`}
                                className="w-full rounded-lg shadow-sm"
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
                    <p className="text-xl text-primary font-medium mb-6">{product.tagline}</p>

                    <div className="prose prose-lg text-slate-300 mb-8">
                        <p>{product.description}</p>
                    </div>

                    <div className="bg-space-light/40 backdrop-blur border border-white/10 rounded-xl p-6 mb-8">
                        <h3 className="text-lg font-bold text-white mb-4">Technical Details</h3>
                        <dl className="grid gap-4">
                            <div>
                                <dt className="text-sm font-medium text-slate-400">Platform</dt>
                                <dd className="text-white">{product.platform}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-slate-400">Supported OS</dt>
                                <dd className="text-white">{product.os}</dd>
                            </div>
                        </dl>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a href={product.link} className="btn-primary w-full text-center block">
                            Visit Website
                        </a>
                        <button
                            onClick={() => {
                                alert(`Downloading ${product.name}...`)
                            }}
                            className="btn-secondary w-full text-center block"
                        >
                            Download {product.name}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
