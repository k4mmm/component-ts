import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";
export const TrasactionHistory = ({ transactions }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.columnName}>Type</th>
          <th className={s.columnName}>Amount</th>
          <th className={s.columnName}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id} className={s.tableBody}>
            <td className={s.transactionInfo}>{type}</td>
            <td className={s.transactionInfo}>{amount}</td>
            <td className={s.transactionInfo}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TrasactionHistory.propTypes = {
  transactions: PropTypes.PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
