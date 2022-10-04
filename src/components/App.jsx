import user from './Profile/user.json'
import  Profile  from './Profile/Profile'
import friends from "./Friends/friends.json"
import { FriendList } from "./Friends/Friends"
import data from './Statistics/data.json'
import { Statistics } from './Statistics/Statistics'
import transactions from "./Transactions/transactions.json"
import { TransactionHistory } from "./Transactions/Transactions"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        key= {user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
