import PropTypes from "prop-types";
import { List, Item, Status, Avatar, FriendName } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Item key={id}>
          <Status status={isOnline}></Status>
          <Avatar adr="lox" src={avatar} alt="" width="48"></Avatar>
          <FriendName>{name}</FriendName>
        </Item>
      ))}
    </List>
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
