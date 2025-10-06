import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { useLayout } from '@/context/layout-provider';
import { UserDropdown } from '../user-dropdown';
import { AppTitle } from './app-title';
import { useSidebarData } from './data/sidebar-data';
import { NavGroup } from './nav-group';
import { TeamSwitcher } from './team-switcher';

export function AppSidebar() {
  const { collapsible, variant } = useLayout();
  const sidebarData = useSidebarData();
  return (
    <Sidebar collapsible={collapsible} variant={variant}>
      <SidebarHeader>
        {sidebarData.teams ? (
          <TeamSwitcher teams={sidebarData.teams} />
        ) : (
          <AppTitle />
        )}
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.navGroups.map((props) => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <UserDropdown user={sidebarData.user} variant="sidebar" />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
