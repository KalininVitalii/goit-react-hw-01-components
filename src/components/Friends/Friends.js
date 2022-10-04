import PropTypes from 'prop-types';
import css from './friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className={css.item} key={id}>
          <span
            className={css.status}
            style={{ backgroundColor: isOnline ? 'green' : 'red' }}
          ></span>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="50"
          />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
