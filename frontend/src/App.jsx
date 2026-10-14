import SiteHeader from './SiteHeader'
import FeedbackForm from './FeedbackForm'
import SiteFooter from './SiteFooter'
import './styles.css'

export default function App() {
  return (
    <div id="home">
      <SiteHeader />
      <main>
        <section className="hero-section">
          <div>
            <p className="section-label">Жіноче взуття</p>
            <h1>Стильний каталог взуття для щоденного комфорту</h1>
            <p className="hero-text">
              Преміальний вітринний сайт без кошика — зручний перегляд товарів і швидкий контакт через форму заявки.
            </p>
          </div>
        </section>

        <section id="catalog">
          <div className="section-heading">
            <p className="section-label">Каталог</p>
            <h2>Рекомендовані моделі</h2>
          </div>
          <iframe
            title="Catalog Preview"
            className="page-frame"
            srcDoc={`<!doctype html><html><body style="margin:0;font-family:Arial"><div style="padding:20px">Catalog page preview</div></body></html>`}
          />
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
      </main>
      <SiteFooter />
    </div>
  )
}
