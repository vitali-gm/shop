import './styles.css'

export default function SiteHeader() {
  return (
    <header className="site-topbar">
      <div className="brand-block">
        <span className="brand-name">ALLSY</span>
        <span className="brand-subtitle">catalog</span>
      </div>
      <nav className="site-nav">
        <a href="#home">Головна</a>
        <a href="#catalog">Каталог</a>
        <a href="#about">Про бренд</a>
        <a href="#contacts">Контакти</a>
      </nav>
    </header>
  )
}
