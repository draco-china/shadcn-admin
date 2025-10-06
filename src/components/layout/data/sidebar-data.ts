import {
  AudioWaveform,
  Bell,
  Bug,
  Command,
  Construction,
  FileX,
  GalleryVerticalEnd,
  HelpCircle,
  LayoutDashboard,
  ListTodo,
  Lock,
  MessagesSquare,
  Monitor,
  Package,
  Palette,
  ServerOff,
  Settings,
  ShieldCheck,
  UserCog,
  Users,
  UserX,
  Wrench,
} from 'lucide-react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { SidebarData } from '../types';

export const useSidebarData = (): SidebarData => {
  const { t } = useTranslation('common');
  return useMemo(() => {
    return {
      user: {
        name: 'satnaing',
        email: 'satnaingdev@gmail.com',
        avatar: '/avatars/shadcn.jpg',
      },
      teams: [
        {
          name: 'Shadcn Admin',
          logo: Command,
          plan: 'Vite + ShadcnUI',
        },
        {
          name: 'Acme Inc',
          logo: GalleryVerticalEnd,
          plan: 'Enterprise',
        },
        {
          name: 'Acme Corp.',
          logo: AudioWaveform,
          plan: 'Startup',
        },
      ],
      navGroups: [
        {
          title: t('nav.general', 'General'),
          items: [
            {
              title: t('nav.dashboard', 'Dashboard'),
              url: '/',
              icon: LayoutDashboard,
              links: [
                {
                  title: t('nav.overview', 'Overview'),
                  href: '/',
                },
                {
                  title: t('nav.customers', 'Customers'),
                  href: '/dashboard/customers',
                },
                {
                  title: t('nav.products', 'Products'),
                  href: '/dashboard/products',
                },
                {
                  title: t('nav.settings', 'Settings'),
                  href: '/dashboard/settings',
                },
              ],
            },
            {
              title: t('nav.tasks', 'Tasks'),
              url: '/tasks',
              icon: ListTodo,
            },
            {
              title: t('nav.apps', 'Apps'),
              url: '/apps',
              icon: Package,
            },
            {
              title: t('nav.chats', 'Chats'),
              url: '/chats',
              badge: '3',
              icon: MessagesSquare,
            },
            {
              title: t('nav.users', 'Users'),
              url: '/users',
              icon: Users,
            },
          ],
        },
        {
          title: t('nav.pages', 'Pages'),
          items: [
            {
              title: t('nav.auth', 'Auth'),
              icon: ShieldCheck,
              items: [
                {
                  title: t('nav.signIn', 'Sign In'),
                  url: '/sign-in',
                },
                {
                  title: t('nav.signIn2Col', 'Sign In (2 Col)'),
                  url: '/sign-in-2',
                },
                {
                  title: t('nav.signUp', 'Sign Up'),
                  url: '/sign-up',
                },
                {
                  title: t('nav.forgotPassword', 'Forgot Password'),
                  url: '/forgot-password',
                },
                {
                  title: t('nav.otp', 'OTP'),
                  url: '/otp',
                },
              ],
            },
            {
              title: t('nav.errors', 'Errors'),
              icon: Bug,
              items: [
                {
                  title: t('nav.unauthorized', 'Unauthorized'),
                  url: '/errors/unauthorized',
                  icon: Lock,
                },
                {
                  title: t('nav.forbidden', 'Forbidden'),
                  url: '/errors/forbidden',
                  icon: UserX,
                },
                {
                  title: t('nav.notFound', 'Not Found'),
                  url: '/errors/not-found',
                  icon: FileX,
                },
                {
                  title: t('nav.internalServerError', 'Internal Server Error'),
                  url: '/errors/internal-server-error',
                  icon: ServerOff,
                },
                {
                  title: t('nav.maintenanceError', 'Maintenance Error'),
                  url: '/errors/maintenance-error',
                  icon: Construction,
                },
              ],
            },
          ],
        },
        {
          title: t('nav.other', 'Other'),
          items: [
            {
              title: t('nav.settings', 'Settings'),
              icon: Settings,
              items: [
                {
                  title: t('nav.profile', 'Profile'),
                  url: '/settings',
                  icon: UserCog,
                },
                {
                  title: t('nav.account', 'Account'),
                  url: '/settings/account',
                  icon: Wrench,
                },
                {
                  title: t('nav.appearance', 'Appearance'),
                  url: '/settings/appearance',
                  icon: Palette,
                },
                {
                  title: t('nav.notifications', 'Notifications'),
                  url: '/settings/notifications',
                  icon: Bell,
                },
                {
                  title: t('nav.display', 'Display'),
                  url: '/settings/display',
                  icon: Monitor,
                },
              ],
            },
            {
              title: t('nav.helpCenter', 'Help Center'),
              url: '/help-center',
              icon: HelpCircle,
            },
          ],
        },
      ],
    };
  }, [t]);
};
