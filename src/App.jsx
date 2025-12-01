import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProductDetails from './pages/ProductDetails'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import SmoothScroll from './components/SmoothScroll'

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}
