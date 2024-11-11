import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItem as MenuItemType } from "../../constants/menu-items";
import MenuItemsList from "../MenuItemsList";
import ExpandIcon from "../ExpandIcon";
import { useState } from "react";
import MenuItemContainer from "./MenuItemContainer";
import { Typography } from "@mui/material";

type MenuItemProps = {
  menuItem: MenuItemType;
};

export default function MenuItem({
  menuItem: { name, icon: Icon, url, depth, subItems },
}: MenuItemProps) {
  const [isExpanded, toggleExpanded] = useState(true);

  const pathname = usePathname();

  const selected = pathname === url;
  const isNested = subItems && subItems?.length > 0;

  const onClick = () => {
    toggleExpanded((prev) => !prev);
  };

  return (
    <>
      <MenuItemContainer
        depth={depth || 0}
        className={selected && !isNested ? "selected" : ""}
      >
        <Link href={url} passHref>
          <div className="menu-item">
            {Icon ? <Icon /> : null}
            <Typography
              component="span"
              fontSize={14}
              fontStyle="normal"
              fontWeight={isNested ? "500" : "400"}
              lineHeight="150%"
              letterSpacing="0.14px"
            >
              {name}
            </Typography>
          </div>
        </Link>
        {isNested ? (
          <ExpandIcon isExpanded={isExpanded} handleClick={onClick} />
        ) : null}
      </MenuItemContainer>
      {isExpanded && isNested ? <MenuItemsList options={subItems} /> : null}
    </>
  );
}
