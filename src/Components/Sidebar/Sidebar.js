import {
  Chat as ChatIcon,
  EmojiFlags as EmojiFlagsIcon,
  ExpandMoreOutlined as ExpandMoreOutlinedIcon,
  LocalHospital as LocalHospitalIcon,
  People as PeopleIcon,
  Storefront as StorefrontIcon,
  VideoLibrary as VideoLibraryIcon,
} from "@material-ui/icons";
import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="Covid 19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Market Places" />
    </div>
  );
};

export default Sidebar;
