import { Telescope } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Main } from './layout/main';

export function ComingSoon() {
  const { t } = useTranslation('components');

  return (
    <Main fixed>
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <Telescope size={72} />
        <h1 className="text-4xl leading-tight font-bold">
          {t('comingSoon.title', 'Coming Soon!')}
        </h1>
        <p className="text-muted-foreground text-center">
          {t('comingSoon.description', 'This page has not been created yet.')}{' '}
          <br />
          {t('comingSoon.stayTuned', 'Stay tuned though!')}
        </p>
      </div>
    </Main>
  );
}
