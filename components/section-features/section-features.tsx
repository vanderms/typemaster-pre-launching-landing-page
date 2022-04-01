import CardFeature from './../card-feature/card-feature';

export default function SectionFeatures() {
  return (
    <ul className="nv-section-features">
      <li>
        <CardFeature
          icon="icon-compatible"
          title="HIGHLY| COMPATIBLE"
          text="Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed."
        />
      </li>
      <li>
        <CardFeature
          icon="icon-bluetooth"
          title="WIRELESS| WITH BLUETOOTH"
          text="Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer."
        />
      </li>
      <li>
        <CardFeature
          icon="icon-battery"
          title="HIGH CAPACITY| BATTERY"
          text="Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges."
        />
      </li>
      <li>
        <CardFeature
          icon="icon-light"
          title="RGB BACKLIT| MODES"
          text="Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions."
        />
      </li>
    </ul>
  );
}
