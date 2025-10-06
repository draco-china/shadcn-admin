import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { NavigationProgress } from '@/components/navigation-progress';
import { Toaster } from '@/components/ui/sonner';
import { GeneralError } from '@/features/errors/general-error';
import { NotFoundError } from '@/features/errors/not-found-error';
import { useCommonStore } from '@/stores';

export const Route = createRootRouteWithContext()({
  component: () => {
    const { title, description, keywords, url } = useCommonStore();
    return (
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <link rel="canonical" href={url} />
        </Helmet>
        <NavigationProgress />
        <Outlet />
        <Toaster duration={5000} />
        {import.meta.env.MODE === 'development' && (
          <TanStackRouterDevtools position="bottom-right" />
        )}
      </HelmetProvider>
    );
  },
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
});
