import { lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'

const PaanPage = lazy(() => import('@/pages/PaanPage'))
const ShopPage = lazy(() => import('@/pages/ShopPage'))
const CateringPage = lazy(() => import('@/pages/CateringPage'))
const FranchisePage = lazy(() => import('@/pages/FranchisePage'))

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/the-paan" element={<PaanPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/catering" element={<CateringPage />} />
          <Route path="/franchise" element={<FranchisePage />} />
          {/* merged / retired routes */}
          <Route path="/gift-boxes" element={<Navigate to="/shop" replace />} />
          <Route path="/visit" element={<Navigate to="/shop" replace />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
