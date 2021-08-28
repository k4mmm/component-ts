import PropTypes from "prop-types";
import s from "./FriendList.module.css";
export const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={s.item} key={id}>
          {isOnline ? (
            <span className={`${s.status} ${s.active}`}></span>
          ) : (
            <span className={`${s.status} ${s.inactive}`}></span>
          )}
          <img className={s.avatar} src={avatar} alt="" width="48" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
