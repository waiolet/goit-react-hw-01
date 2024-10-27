import PropTypes from 'prop-types';
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  if (!Array.isArray(transactions)) {
    console.error("Prop 'transactions' must be an array.");
    return null;
  }

  return (
    <div className={s.tableContainer}>
      <table className={s.wrapper}>
        <thead>
          <tr className={s.tableNames}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
  ).isRequired,
};

export default TransactionHistory;
