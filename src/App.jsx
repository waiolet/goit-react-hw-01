import Profile from './components/Profile/Profile';
import userData from '../src/userData.json';
import friends from "../src/friends.json";
import FriendList from "../src/components/FriendList/FriendList.jsx";
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';
import transactions from "../src/transactions.json";
import "./App.css";
import "modern-normalize";

const App = () => {
  return (
    <>
      <Profile user={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;


