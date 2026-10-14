import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SiteHeader from './SiteHeader'
import FeedbackForm from './FeedbackForm'
import SiteFooter from './SiteFooter'
import CatalogPage from './CatalogPage'
import ProductPage from './ProductPage'
import './styles.css'

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div>
          <p className="section-label">Жіноче взуття</p>
          <h1>Стильний каталог взуття для щоденного комфорту</h1>
          <p className="hero-text">
            Преміальний вітринний сайт без кошика — зручний перегляд товарів і швидкий контакт через форму заявки.
          </p>
        </div>
      </section>

      <section className="featured-section" id="catalog">
        <div className="section-heading">
          <p className="section-label">Каталог</p>
          <h2>Рекомендовані моделі</h2>
        </div>
        <CatalogPage />
      </section>

      <section id="about" className="about-section">
        <div>
          <p className="section-label">Про бренд</p>
          <h2>Натуральні матеріали, зручність і сучасний силует</h2>
        </div>
        <p>
          Каталог побудований для продажу взуття через консультацію: користувач переглядає товар, дивиться фото, читає характеристики й залишає заявку.
        </p>
      </section>

      <FeedbackForm />
    </>
  )
}

function AboutPage() {
  return (
    <section className="text-page">
      <p className="section-label">Про бренд</p>
      <h1>ALLSY — жіноче взуття для щоденного комфорту</h1>
      <p>
        Ми будуємо каталог навколо якісної візуальної подачі, натуральних матеріалів та зручної комунікації через форму зворотного зв’язку.
      </p>
    </section>
  )
}

function ContactsPage() {
  return (
    <section className="text-page">
      <p className="section-label">Контакти</p>
      <h1>Зв’яжіться з нами</h1>
      <p>Телефон: +380 00 000 00 00</p>
      <p>Email: hello@allsy.ua</p>
    </section>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <SiteHeader />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </BrowserRouter>
  )
}
