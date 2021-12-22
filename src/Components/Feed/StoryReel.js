import React from "react";
import Story from "./Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        profileSrc="https://media-exp1.licdn.com/dms/image/C4D03AQGONxq-OKW7fg/profile-displayphoto-shrink_400_400/0/1605745786501?e=1642636800&v=beta&t=yRtSrRZydeHuEJxT5NqsWSuFfBh1hEtnqoV7VtPadtM"
        title="John Mbir"
      />
      <Story
        image="https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        profileSrc="https://media-exp1.licdn.com/dms/image/C4E03AQHkMjBDAhk9DA/profile-displayphoto-shrink_100_100/0/1626978019948?e=1642636800&v=beta&t=2TQONebwuITcvU67eLHZ4jJgWWFmwvq1IIkyuZoWo1w"
        title="Nancy Lamptey"
      />
      <Story
        image="https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        profileSrc="https://media-exp1.licdn.com/dms/image/C4D03AQGJWppJ_wq7-g/profile-displayphoto-shrink_100_100/0/1549112922821?e=1642636800&v=beta&t=PiYsLYYBNyGt7vJIvMrkJLHucnluq_q7HsImVrlJktY"
        title="Geroge Ampadu"
      />
      <Story
        image="https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        profileSrc="https://media-exp1.licdn.com/dms/image/C4D03AQFLIiEDK4rJ4g/profile-displayphoto-shrink_100_100/0/1590482326194?e=1642636800&v=beta&t=Geas6ufjNzj2kjAOVqhSHEymICOtnz2h_hxUXXhjKLU"
        title="Eric Adu"
      />
      <Story
        image="https://images.pexels.com/photos/3280216/pexels-photo-3280216.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        profileSrc="https://media-exp1.licdn.com/dms/image/C4D03AQHupTqcdYSqrQ/profile-displayphoto-shrink_100_100/0/1568731300083?e=1642636800&v=beta&t=9pTUyXqahW8_ik6H4EVVF15zsmZB3n4OAtJM9Df-fIU"
        title="Asantewaa Asanti"
      />
    </div>
  );
};

export default StoryReel;
