import { useNavigate, useRouter } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export function NotFoundError() {
  const navigate = useNavigate();
  const { history } = useRouter();
  const { t } = useTranslation('errors');

  return (
    <div className="h-svh bg-background">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] leading-tight font-bold">404</h1>
        <span className="font-medium">
          {t('notFound.title', 'Oops! Page Not Found!')}
        </span>
        <p className="text-muted-foreground text-center">
          {t(
            'notFound.description',
            "It seems like the page you're looking for does not exist or might have been removed.",
          )}
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="outline" onClick={() => history.go(-1)}>
            {t('goBack', 'Go Back')}
          </Button>
          <Button onClick={() => navigate({ to: '/' })}>
            {t('backToHome', 'Back to Home')}
          </Button>
        </div>
      </div>
    </div>
  );
}
