interface Props {
  icon: string;
  title: string;
  text: string;
}

export default function CardFeature({ icon, title, text }: Props) {

  const [firstLine, secondLine] = title.split('|');

  return (
    <article className="nv-card-feature">
      <div className="icon-container">
        <img src={`/assets/shared/${icon}.svg`} alt="" className="icon" />
      </div>
      <h2 className="title">{firstLine}<br/>{secondLine}</h2>
      <p className="text">{text}</p>
    </article>
  );
}
