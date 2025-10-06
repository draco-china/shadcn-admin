import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export function MaintenanceError() {
  const { t } = useTranslation('errors');

  return (
    <div className="h-svh bg-background">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] leading-tight font-bold">503</h1>
        <span className="font-medium">
          {t('maintenance.title', 'Website is under maintenance!')}
        </span>
        <p className="text-muted-foreground text-center">
          {t(
            'maintenance.description',
            "The site is not available at the moment. We'll be back online shortly.",
          )}
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="outline">{t('learnMore', 'Learn more')}</Button>
        </div>
      </div>
    </div>
  );
}
