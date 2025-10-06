import { Link } from '@tanstack/react-router';
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SignOutDialog } from '@/components/sign-out-dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import useDialogState from '@/hooks/use-dialog-state';

type UserData = {
  name: string;
  email: string;
  avatar: string;
};

type UserDropdownProps = {
  user?: UserData;
  variant?: 'sidebar' | 'header';
  showShortcuts?: boolean;
};

export function UserDropdown({
  user = {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/01.png',
  },
  variant = 'header',
  showShortcuts = false,
}: UserDropdownProps) {
  const { t } = useTranslation('common');
  const { isMobile } = useSidebar();
  const [open, setOpen] = useDialogState();

  const menuItems = [
    {
      icon: Sparkles,
      label: t('user.upgradeToPro', 'Upgrade to Pro'),
      onClick: () => {},
    },
    {
      icon: BadgeCheck,
      label: t('user.account', 'Account'),
      to: '/settings/account',
      shortcut: showShortcuts ? '⇧⌘P' : undefined,
    },
    {
      icon: CreditCard,
      label: t('user.billing', 'Billing'),
      to: '/settings',
      shortcut: showShortcuts ? '⌘B' : undefined,
    },
    {
      icon: Bell,
      label: t('user.notifications', 'Notifications'),
      to: '/settings/notifications',
      shortcut: showShortcuts ? '⌘S' : undefined,
    },
  ];

  const UserAvatar = () => (
    <Avatar
      className={variant === 'sidebar' ? 'h-8 w-8 rounded-lg' : 'h-8 w-8'}
    >
      <AvatarImage src={user.avatar} alt={user.name} />
      <AvatarFallback className={variant === 'sidebar' ? 'rounded-lg' : ''}>
        SN
      </AvatarFallback>
    </Avatar>
  );

  const UserInfo = ({ showEmail = true }: { showEmail?: boolean }) => (
    <div className="grid flex-1 text-start text-sm leading-tight">
      <span className="truncate font-semibold">{user.name}</span>
      {showEmail && <span className="truncate text-xs">{user.email}</span>}
    </div>
  );

  const renderTrigger = () => {
    if (variant === 'sidebar') {
      return (
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <UserAvatar />
          <UserInfo />
          <ChevronsUpDown className="ms-auto size-4" />
        </SidebarMenuButton>
      );
    }

    return (
      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
        <UserAvatar />
      </Button>
    );
  };

  const renderContent = () => (
    <DropdownMenuContent
      className={
        variant === 'sidebar'
          ? 'w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg'
          : 'w-56'
      }
      side={variant === 'sidebar' ? (isMobile ? 'bottom' : 'right') : undefined}
      align="end"
      sideOffset={variant === 'sidebar' ? 4 : undefined}
      {...(variant === 'header' && { forceMount: true })}
    >
      <DropdownMenuLabel
        className={variant === 'sidebar' ? 'p-0 font-normal' : 'font-normal'}
      >
        {variant === 'sidebar' ? (
          <div className="flex items-center gap-2 px-1 py-1.5 text-start text-sm">
            <UserAvatar />
            <UserInfo />
          </div>
        ) : (
          <div className="flex flex-col gap-1.5">
            <p className="text-sm leading-none font-medium">{user.name}</p>
            <p className="text-muted-foreground text-xs leading-none">
              {user.email}
            </p>
          </div>
        )}
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem onClick={menuItems[0].onClick}>
          {(() => {
            const IconComponent = menuItems[0].icon;
            return <IconComponent />;
          })()}
          {menuItems[0].label}
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        {menuItems.slice(1).map((item, index) => {
          const IconComponent = item.icon;
          return (
            <DropdownMenuItem key={index} asChild>
              <Link to={item.to!}>
                <IconComponent />
                {item.label}
                {item.shortcut && (
                  <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
                )}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => setOpen(true)}>
        <LogOut />
        {t('user.signOut', 'Sign out')}
        {showShortcuts && <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>}
      </DropdownMenuItem>
    </DropdownMenuContent>
  );

  const dropdownMenu = (
    <DropdownMenu modal={variant === 'header'}>
      <DropdownMenuTrigger asChild>{renderTrigger()}</DropdownMenuTrigger>
      {renderContent()}
    </DropdownMenu>
  );

  if (variant === 'sidebar') {
    return (
      <>
        <SidebarMenu>
          <SidebarMenuItem>{dropdownMenu}</SidebarMenuItem>
        </SidebarMenu>
        <SignOutDialog open={!!open} onOpenChange={setOpen} />
      </>
    );
  }

  return (
    <>
      {dropdownMenu}
      <SignOutDialog open={!!open} onOpenChange={setOpen} />
    </>
  );
}
