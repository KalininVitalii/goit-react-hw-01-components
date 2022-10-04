import PropTypes from 'prop-types';
import css from './transactions.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction}>
      <thead>
        <tr className={css.title}>
          <th className={css.titleText}>Type</th>
          <th className={css.titleText}>Amount</th>
          <th className={css.titleText}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.text}>{type}</td>
            <td className={css.text}>{amount}</td>
            <td className={css.text}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
