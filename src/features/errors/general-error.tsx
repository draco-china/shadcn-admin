import { useNavigate, useRouter } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type GeneralErrorProps = React.HTMLAttributes<HTMLDivElement> & {
  minimal?: boolean;
};

export function GeneralError({
  className,
  minimal = false,
}: GeneralErrorProps) {
  const navigate = useNavigate();
  const { history } = useRouter();
  const { t } = useTranslation('errors');

  return (
    <div className={cn('h-svh', className)}>
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        {!minimal && (
          <h1 className="text-[7rem] leading-tight font-bold">500</h1>
        )}
        <span className="font-medium">
          {t('general.title', 'Oops! Something went wrong :)')}
        </span>
        <p className="text-muted-foreground text-center">
          {t(
            'general.description',
            'We apologize for the inconvenience. Please try again later.',
          )}
        </p>
        {!minimal && (
          <div className="mt-6 flex gap-4">
            <Button variant="outline" onClick={() => history.go(-1)}>
              {t('goBack', 'Go Back')}
            </Button>
            <Button onClick={() => navigate({ to: '/' })}>
              {t('backToHome', 'Back to Home')}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
