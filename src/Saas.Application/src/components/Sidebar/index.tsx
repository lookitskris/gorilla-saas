import Image from "next/image";
import { SideBarHeader, SidebarContainer, Spacer } from "./Sidebar";
import { IconContainer } from "../Header/HeaderContainer";
import { MENU_ITEMS } from "../../constants/menu-items";
import MenuItemsList from "../MenuItemsList";
import { useState } from "react";

export default function Sidebar() {
  const [isOpened, setOpened] = useState(false);

  const toggleDrawer = () => {
    setOpened((prev) => !prev);
  };

  return (
    <SidebarContainer isOpened={isOpened}>
      <SideBarHeader>
        <Image
          priority
          src="/icons/arms_top.svg"
          width={83}
          height={20}
          alt="Welcome to ARMS"
        />
        <Spacer />
        <IconContainer onClick={toggleDrawer}>
          {isOpened ? (
            <Image
              priority
              src="/icons/expandIcon.svg"
              width={18}
              height={18}
              alt="expand menu"
            />
          ) : (
            <Image
              priority
              src="/icons/expandIcon.svg"
              width={18}
              height={18}
              alt="expand menu"
            />
          )}
        </IconContainer>
      </SideBarHeader>
      <MenuItemsList options={MENU_ITEMS} />
    </SidebarContainer>
  );
}
