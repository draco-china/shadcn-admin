import { useLocation, useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { ConfirmDialog } from '@/components/confirm-dialog';

interface SignOutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SignOutDialog({ open, onOpenChange }: SignOutDialogProps) {
  const { t } = useTranslation('components');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = () => {
    // Preserve current location for redirect after sign-in
    const currentPath = location.href;
    navigate({
      to: '/sign-in',
      search: { redirect: currentPath },
      replace: true,
    });
  };

  return (
    <ConfirmDialog
      open={open}
      onOpenChange={onOpenChange}
      title={t('signOut.title', 'Sign out')}
      desc={t(
        'signOut.description',
        'Are you sure you want to sign out? You will need to sign in again to access your account.',
      )}
      confirmText={t('signOut.confirm', 'Sign out')}
      handleConfirm={handleSignOut}
      className="sm:max-w-sm"
    />
  );
}
