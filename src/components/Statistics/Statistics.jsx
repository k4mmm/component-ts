import PropTypes from "prop-types";
import {
  Label,
  Percentage,
  SectionTitle,
  StatItem,
  StatList,
  StatisticsSection,
} from "./Statistics.styled";
import { randomColor } from "../../utils/randomColor";

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <SectionTitle>{title}</SectionTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          const rndColor = randomColor();
          return (
            <StatItem key={id} style={{ backgroundColor: `#${rndColor}` }}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
