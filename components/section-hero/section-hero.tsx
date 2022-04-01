import Link from 'next/link';

export default function SectionHero() {
  return (
    <section aria-labelledby="hero-section-title" className="nv-section-hero">
      <header className="header">
        <h1 className="title" id="hero-section-title">
          Typemaster Keyboard
        </h1>
        <p className="description">
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </p>
        <div className="cta-links">
          <Link href="/">
            <a className="cta-primary">Pre-order now</a>
          </Link>
          <Link href="/">
            <a className="cta-secondary">Release on 5/27</a>
          </Link>
        </div>
      </header>
      <picture className="image-container">
        <source
          media="(min-width: 1200px)"
          srcSet="/assets/desktop/image-keyboard.jpg"
        />
        <source
          media="(min-width: 720px)"
          srcSet="/assets/tablet/image-keyboard.jpg"
        />
        <img className="image" src="/assets/mobile/image-keyboard.jpg" alt="" />
      </picture>
    </section>
  );
}
