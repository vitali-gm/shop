export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div>
          <p className="eyebrow">ALLSY footwear catalog</p>
          <h1>Жіноче взуття з акцентом на стиль, комфорт і якість</h1>
          <p className="lead">
            Каталог без кошика — зручно переглядайте моделі та залишайте заявку через форму зворотного зв&apos;язку.
          </p>
        </div>
        <div className="hero-card">
          <span className="badge">New collection</span>
          <h2>2995 грн</h2>
          <p>Жіночі демісезонні напівчоботи ALLSY</p>
        </div>
      </header>

      <main className="content-grid">
        <section className="panel">
          <h3>Переваги</h3>
          <ul>
            <li>Натуральна шкіра</li>
            <li>Байкова підкладка</li>
            <li>Гумова підошва</li>
            <li>Розміри 36–41</li>
          </ul>
        </section>

        <section className="panel">
          <h3>Наступні сторінки</h3>
          <ul>
            <li>Головна</li>
            <li>Каталог</li>
            <li>Сторінка товару</li>
            <li>Форма зворотного зв&apos;язку</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
