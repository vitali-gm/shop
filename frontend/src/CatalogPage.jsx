import { Link } from 'react-router-dom'
import './CatalogPage.css'

const products = [
  {
    slug: 'allsy-black-ankle-boots',
    title: 'Жіночі демісезонні напівчоботи ALLSY',
    price: '2995 грн',
    sku: 'CD2611-01 black',
    color: 'Black',
    badge: 'Натуральна шкіра',
    image:
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'allsy-daily-leather-boots',
    title: 'Шкіряні чоботи на щодень',
    price: '3290 грн',
    sku: 'AL-101',
    color: 'Black',
    badge: 'New',
    image:
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'allsy-autumn-shoes',
    title: 'Демісезонні черевики ALLSY',
    price: '2790 грн',
    sku: 'AL-203',
    color: 'Brown',
    badge: 'Comfort fit',
    image:
      'https://images.unsplash.com/photo-1506629905607-c41c4c1cbb3b?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function CatalogPage() {
  return (
    <div className="catalog-page">
      <header className="catalog-hero">
        <div>
          <p className="catalog-label">Каталог</p>
          <h1>Жіноче взуття ALLSY</h1>
          <p className="catalog-description">
            Переглядайте моделі, обирайте розмір і залишайте заявку через форму зворотного зв'язку.
          </p>
        </div>
        <div className="catalog-filters">
          <button className="filter-button active">Усі</button>
          <button className="filter-button">Black</button>
          <button className="filter-button">Демісезон</button>
          <button className="filter-button">Натуральна шкіра</button>
        </div>
      </header>

      <section className="catalog-grid">
        {products.map((product) => (
          <article className="product-card" key={product.slug}>
            <div className="product-image-wrap">
              <img src={product.image} alt={product.title} className="product-image" />
              <span className="product-badge">{product.badge}</span>
            </div>
            <div className="product-body">
              <p className="product-sku">{product.sku}</p>
              <h2>{product.title}</h2>
              <p className="product-meta">Колір: {product.color}</p>
              <div className="product-footer">
                <strong>{product.price}</strong>
                <Link className="details-button" to={`/product/${product.slug}`}>
                  Детальніше
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
