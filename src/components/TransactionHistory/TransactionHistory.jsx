import PropTypes from "prop-types";
import {
  ColumnName,
  Tabele,
  TableBody,
  TransInfo,
} from "./TransactionHistory.styled";
export const TrasactionHistory = ({ transactions }) => {
  return (
    <Tabele>
      <thead>
        <tr>
          <ColumnName>Type</ColumnName>
          <ColumnName>Amount</ColumnName>
          <ColumnName>Currency</ColumnName>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TableBody key={id}>
            <TransInfo>{type}</TransInfo>
            <TransInfo>{amount}</TransInfo>
            <TransInfo>{currency}</TransInfo>
          </TableBody>
        ))}
      </tbody>
    </Tabele>
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
