import * as React from "react";

import { SearchForm } from "@/components/search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Accessibility,
  BriefcaseMedical,
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Users,
} from "lucide-react";

// This is sample data.
const data = {
  versions: ["GYM", "Nasr"],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
    },
    {
      title: "Appointments",
      url: "/appointments",
      icon: Calendar,
    },
    {
      title: "Patients",
      url: "/patients",
      icon: Accessibility,
    },
    {
      title: "Doctors",
      url: "/doctors",
      icon: BriefcaseMedical,
    },
    {
      title: "Users",
      url: "/users",
      icon: Users,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}

        <SidebarMenu className="ps-4">
          {data.navMain.map((item) => (
            <SidebarMenuItem key={item.title} className="py-2">
              <SidebarMenuButton asChild>
                <a href={"/dashboard" + item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
