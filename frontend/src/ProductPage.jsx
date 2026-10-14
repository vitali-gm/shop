import './ProductPage.css'

const product = {
  title: 'Жіночі демісезонні напівчоботи ALLSY',
  price: '2995 грн',
  sku: 'CD2611-01 black',
  color: 'Black',
  brand: 'ALLSY',
  materialUpper: 'Натуральна шкіра',
  materialLining: 'Байка',
  materialSole: 'Гума',
  purpose: 'Для повсякденного носіння',
  sizes: ['36', '37', '38', '39', '40', '41'],
  description:
    'Жіночі демісезонні напівчоботи ALLSY створені для щоденного комфорту та стильного образу. Натуральна шкіра, м’яка байкова підкладка й стійка гумова підошва забезпечують зручність у прохолодну пору року.',
  images: [
    'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1506629905607-c41c4c1cbb3b?auto=format&fit=crop&w=1200&q=80',
  ],
}

export default function ProductPage() {
  return (
    <div className="product-page">
      <section className="product-layout">
        <div className="gallery">
          <div className="main-image-wrap">
            <img className="main-image" src={product.images[0]} alt={product.title} />
          </div>

          <div className="thumbnail-row">
            {product.images.map((image, index) => (
              <button key={index} type="button" className="thumbnail-button" aria-label={`Image ${index + 1}`}>
                <img className="thumbnail" src={image} alt={`${product.title} ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="product-info">
          <p className="product-brand">{product.brand}</p>
          <h1>{product.title}</h1>
          <p className="product-price">{product.price}</p>
          <p className="product-description">{product.description}</p>

          <dl className="product-details">
            <div>
              <dt>Артикул</dt>
              <dd>{product.sku}</dd>
            </div>
            <div>
              <dt>Колір</dt>
              <dd>{product.color}</dd>
            </div>
            <div>
              <dt>Верх</dt>
              <dd>{product.materialUpper}</dd>
            </div>
            <div>
              <dt>Підкладка</dt>
              <dd>{product.materialLining}</dd>
            </div>
            <div>
              <dt>Підошва</dt>
              <dd>{product.materialSole}</dd>
            </div>
            <div>
              <dt>Призначення</dt>
              <dd>{product.purpose}</dd>
            </div>
          </dl>

          <div className="size-block">
            <p>Доступні розміри</p>
            <div className="size-list">
              {product.sizes.map((size) => (
                <span key={size} className="size-chip">
                  {size}
                </span>
              ))}
            </div>
          </div>

          <button className="cta-button">Залишити заявку</button>
        </div>
      </section>
    </div>
  )
}
