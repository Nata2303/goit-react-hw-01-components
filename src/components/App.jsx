import React from "react";
// --style--
//import style from "../components/app.module.css";
// --PROFILE--
import Profile from "./Profile/profile";
import user from "../data/user.json";
// --STATISTIC--
import Statistics from "./Statistics/statistics";
import data from "../data/data.json";
//--FRIEND LIST--
import FriendList from "./FriendList/friendList";
import friends from "../data/friends.json"


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
