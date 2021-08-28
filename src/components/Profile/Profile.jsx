import PropTypes from "prop-types";
import {
  Avatar,
  Description,
  Lebel,
  Location,
  ProfileCard,
  Quantity,
  StatItem,
  Stats,
  Tag,
  UserName,
} from "./Profile.styled";
export const Profile = ({
  name,
  tag,
  location,
  avatar,
  likes,
  followers,
  views,
}) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="Аватар пользователя" />
        <UserName>{name}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatItem>
          <Lebel>Followers</Lebel>
          <Quantity>{followers}</Quantity>
        </StatItem>
        <StatItem>
          <Lebel>Views</Lebel>
          <Quantity>{views}</Quantity>
        </StatItem>
        <StatItem>
          <Lebel>Likes</Lebel>
          <Quantity>{likes}</Quantity>
        </StatItem>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
};
