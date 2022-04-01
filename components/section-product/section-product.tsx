export default function SectionProduct() {
  return (
    <article className="nv-section-product">
      <picture className="picture">
        <source
          media="(min-width: 1200px)"
          srcSet="/assets/desktop/image-phone-and-keyboard.jpg"
        />
        <source
          media="(min-width: 720px)"
          srcSet="/assets/tablet/image-phone-and-keyboard.jpg"
        />
        <img
          className="image"
          src="/assets/mobile/image-phone-and-keyboard.jpg"
          alt=""
        />
      </picture>
      <picture className="picture">
        <source
          media="(min-width: 1200px)"
          srcSet="/assets/desktop/image-glass-and-keyboard.jpg"
        />
        <source
          media="(min-width: 720px)"
          srcSet="/assets/tablet/image-glass-and-keyboard.jpg"
        />
        <img
          className="image"
          src="/assets/mobile/image-glass-and-keyboard.jpg"
          alt=""
        />
      </picture>
      <header className="header">
        <h2 className="title">mechanical wireless Keyboard</h2>
        <p className="text">
          The Typemaster keyboard boasts top-notch build and practical design.
          It offers a wide variety of switches and keycaps, along with reliable
          wireless connectivity.
        </p>
      </header>
    </article>
  );
}
