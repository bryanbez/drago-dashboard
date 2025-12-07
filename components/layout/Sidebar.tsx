"use client";

import Link from "next/link";
import React from "react";
import {
  DashboardIcon,
  DragosIconSidebar,
  AnalyticsIconSidebar,
  SettingIconSidebar,
} from "../partials/svg";

const Sidebar = () => {
  const links = [
    {
      href: "/",
      icon: <DashboardIcon />,
      label: "Dashboard",
    },
    {
      href: "/dragos",
      icon: <DragosIconSidebar />,
      label: "Dragos",
    },
    {
      href: "/analytics",
      icon: <AnalyticsIconSidebar />,
      label: "Analytics",
    },
    {
      href: "/settings",
      icon: <SettingIconSidebar />,
      label: "Settings",
    },
  ];
  return (
    <div className="hidden md:flex flex-col w-64 bg-slate-900 h-screen fixed left-0 top-0 text-white z-50">
      <div className="flex items-center justify-center h-20 border-b border-slate-700">
        <h1 className="text-2xl font-bold tracking-wider text-indigo-400">
          DRAGO
        </h1>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center px-4 py-3 text-gray-300 bg-slate-800 rounded-lg transition-colors hover:text-white hover:bg-slate-700">
            {link.icon}
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-sm font-bold">
            U
          </div>
          <div>
            <p className="text-sm font-medium text-white">User</p>
            <p className="text-xs text-gray-400">View Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
