import { Outlet, useLocation } from '@tanstack/react-router';
import { useMemo } from 'react';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { SkipToMain } from '@/components/skip-to-main';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { LayoutProvider } from '@/context/layout-provider';
import { SearchProvider } from '@/context/search-provider';
import { getCookie } from '@/lib/cookies';
import { cn } from '@/lib/utils';
import { ConfigDrawer } from '../config-drawer';
import { LanguageSwitch } from '../language-switch';
import { Search } from '../search';
import { ThemeSwitch } from '../theme-switch';
import { UserDropdown } from '../user-dropdown';
import { useSidebarData } from './data/sidebar-data';
import { Header } from './header';
import { TopNav } from './top-nav';

type AuthenticatedLayoutProps = {
  children?: React.ReactNode;
};

export function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  const defaultOpen = getCookie('sidebar_state') !== 'false';

  const sidebarData = useSidebarData();
  const { pathname } = useLocation();
  const links = useMemo(() => {
    const allItems = sidebarData.navGroups.flatMap((group) => [
      ...group.items,
      ...group.items.flatMap((item) =>
        'items' in item ? item.items || [] : [],
      ),
    ]);

    const currentNavItem = allItems.find(
      (item) =>
        item?.url === pathname ||
        item?.links?.some((link) => link.href === pathname),
    );

    if (!currentNavItem) return [];

    const linksToReturn = currentNavItem.links || [
      { title: currentNavItem.title, href: currentNavItem.url as string },
    ];

    return linksToReturn.map((link) => ({
      disabled: true,
      ...link,
      isActive: link.href === pathname,
    }));
  }, [pathname]);

  return (
    <SearchProvider>
      <LayoutProvider>
        <SidebarProvider defaultOpen={defaultOpen}>
          <SkipToMain />
          <AppSidebar />
          <SidebarInset
            className={cn(
              // Set content container, so we can use container queries
              '@container/content',

              // If layout is fixed, set the height
              // to 100svh to prevent overflow
              'has-[[data-layout=fixed]]:h-svh',

              // If layout is fixed and sidebar is inset,
              // set the height to 100svh - spacing (total margins) to prevent overflow
              'peer-data-[variant=inset]:has-[[data-layout=fixed]]:h-[calc(100svh-(var(--spacing)*4))]',
            )}
          >
            {/* ===== Top Heading ===== */}
            <Header fixed>
              <TopNav links={links} />
              <div className="ms-auto flex items-center space-x-4">
                <Search />
                <LanguageSwitch />
                <ThemeSwitch />
                <ConfigDrawer />
                <UserDropdown variant="header" showShortcuts={true} />
              </div>
            </Header>
            {children ?? <Outlet />}
          </SidebarInset>
        </SidebarProvider>
      </LayoutProvider>
    </SearchProvider>
  );
}
