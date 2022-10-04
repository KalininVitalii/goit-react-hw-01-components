import PropTypes from 'prop-types';
import styled from 'styled-components';
import css from './statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const StyleLi = styled.li`
  background-color: ${getRandomHexColor};
`;
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.section}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statisticsList}>
        {stats.map(({ id, label, percentage }) => (
          <StyleLi className={css.statisticsElement} key={id}>
            <span className={css.statisticsItem}>{label}</span>
            <span className={css.statisticsItem}>{percentage}%</span>
          </StyleLi>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
