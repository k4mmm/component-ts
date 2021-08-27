// import PropTypes from "prop-types";
import s from "./Statistics.module.css";
import { randomColor } from "../../utils/randomColor";

export const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title ? <h2 className={s.title}>{title}</h2> : null}
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => {
          const rndColor = randomColor();
          return (
            <li
              className={s.item}
              key={id}
              style={{ backgroundColor: `#${rndColor}` }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

// Statistics.PropTypes = {
//     title: PropTypes.string,

// }
