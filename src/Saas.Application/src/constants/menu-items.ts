import React from "react";
import {
  People,
  Business,
  MonetizationOn,
  AdminPanelSettings,
  Dashboard,
  Draw,
  CalendarMonth,
} from "@styled-icons/material";

const MENU_OPTIONS: MenuOption[] = [
  {
    name: "Resources",
    url: "/",
    subItems: [
      {
        name: "Dashboards",
        icon: Dashboard,
        url: "/dashboard/dashboards",
      },
      {
        name: "Organisations",
        icon: Business,
        url: "/dashboard/organisations",
      },
      {
        name: "Users",
        icon: People,
        url: "/dashboard/users",
      },
    ],
  },
  {
    name: "Billing",
    url: "/",
    subItems: [
      {
        name: "Subscriptions",
        icon: MonetizationOn,
        url: "/dashboard/subscriptions",
      },
    ],
  },
  {
    name: "Management",
    url: "/",
    subItems: [
      {
        name: "Administrators",
        icon: AdminPanelSettings,
        url: "/dashboard/administrators",
      },
    ],
  },
  {
    name: "Tech Demos",
    url: "/",
    subItems: [
      {
        name: "Availability Modeller",
        icon: Draw,
        url: "/dashboard/diagram-demo",
      },
    ],
  },
  {
    name: "Calender View",
    url: "/",
    subItems: [
      {
        name: "Calender",
        icon: CalendarMonth,
        url: "/dashboard/calender",
      },
    ],
  },
];

export type MenuItem = {
  name: string;
  icon?: React.ComponentType;
  url: string;
  id: string;
  depth: number;
  subItems?: MenuItem[];
};

type MenuOption = {
  name: string;
  icon?: React.ComponentType;
  url: string;
  subItems?: MenuOption[];
};

function makeMenuLevel(options: MenuOption[], depth = 0): MenuItem[] {
  return options.map((option, idx) => ({
    ...option,
    id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
    depth,
    subItems:
      option.subItems && option.subItems.length > 0
        ? makeMenuLevel(option.subItems, depth + 1)
        : undefined,
  }));
}

export const MENU_ITEMS: MenuItem[] = makeMenuLevel(MENU_OPTIONS);
