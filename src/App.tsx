import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'

const PaanPage = lazy(() => import('@/pages/PaanPage'))
const GiftBoxesPage = lazy(() => import('@/pages/GiftBoxesPage'))
const ShopPage = lazy(() => import('@/pages/ShopPage'))
const CateringPage = lazy(() => import('@/pages/CateringPage'))
const FranchisePage = lazy(() => import('@/pages/FranchisePage'))
const VisitPage = lazy(() => import('@/pages/VisitPage'))

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/the-paan" element={<PaanPage />} />
          <Route path="/gift-boxes" element={<GiftBoxesPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/catering" element={<CateringPage />} />
          <Route path="/franchise" element={<FranchisePage />} />
          <Route path="/visit" element={<VisitPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
