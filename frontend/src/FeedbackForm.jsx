import './styles.css'

export default function FeedbackForm() {
  return (
    <section className="feedback-section">
      <div className="feedback-card">
        <p className="section-label">Зворотний зв&apos;язок</p>
        <h2>Залиште заявку — ми зв&apos;яжемось з вами</h2>
        <p className="feedback-text">
          Вкажіть ім&apos;я та номер телефону, і ми допоможемо з підбором моделі, розміру та надамо консультацію.
        </p>

        <form className="feedback-form">
          <label>
            Ім&apos;я
            <input type="text" placeholder="Ваше ім&apos;я" />
          </label>
          <label>
            Телефон
            <input type="tel" placeholder="+380 (__) ___ __ __" />
          </label>
          <label>
            Коментар
            <textarea rows="4" placeholder="Що вас цікавить?" />
          </label>
          <button type="submit">Надіслати заявку</button>
        </form>
      </div>
    </section>
  )
}
