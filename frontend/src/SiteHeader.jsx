import { Link, NavLink } from 'react-router-dom'
import './styles.css'

export default function SiteHeader() {
  return (
    <header className="site-topbar">
      <Link to="/" className="brand-block">
        <span className="brand-name">ALLSY</span>
        <span className="brand-subtitle">catalog</span>
      </Link>
      <nav className="site-nav">
        <NavLink to="/">Головна</NavLink>
        <NavLink to="/catalog">Каталог</NavLink>
        <NavLink to="/about">Про бренд</NavLink>
        <NavLink to="/contacts">Контакти</NavLink>
      </nav>
    </header>
  )
}
