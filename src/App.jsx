import { Profile } from "./components/Profile/Profile";
import user from "./components/data/profile.json";
import { Statistics } from "./components/Statistics/Statistics";
import statData from "./components/data/statistical-data.json";

export const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics stats={statData} title="Stats" />
      <Statistics stats={statData} />
    </div>
  );
};
