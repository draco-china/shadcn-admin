import { Link } from '@tanstack/react-router';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { useCommonStore } from '@/stores';

export function AppTitle() {
  const { setOpenMobile } = useSidebar();
  const { logo, title, description } = useCommonStore();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="gap-0 py-0 hover:bg-transparent active:bg-transparent"
          asChild
        >
          <Link
            to="/"
            onClick={() => setOpenMobile(false)}
            className="flex-1 text-start text-sm leading-tight flex items-center gap-2"
          >
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <img src={logo} alt={title} className="" />
            </div>
            <div className="grid flex-1">
              <span className="truncate font-bold">{title}</span>
              <span className="truncate text-xs">{description}</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
