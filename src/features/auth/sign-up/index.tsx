import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AuthLayout } from '../auth-layout';
import { SignUpForm } from './components/sign-up-form';

export function SignUp() {
  const { t } = useTranslation('auth');

  return (
    <AuthLayout>
      <Card className="gap-4">
        <CardHeader>
          <CardTitle className="text-lg tracking-tight">
            {t('signUp.title', 'Create an account')}
          </CardTitle>
          <CardDescription>
            {t(
              'signUp.description',
              'Enter your email and password to create an account.',
            )}{' '}
            {t('signUp.alreadyHaveAccount', 'Already have an account?')}{' '}
            <Link
              to="/sign-in"
              className="hover:text-primary underline underline-offset-4"
            >
              {t('signUp.signInLink', 'Sign In')}
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
        <CardFooter>
          <p className="text-muted-foreground px-8 text-center text-sm">
            By creating an account, you agree to our{' '}
            <a
              href="/terms"
              className="hover:text-primary underline underline-offset-4"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="/privacy"
              className="hover:text-primary underline underline-offset-4"
            >
              Privacy Policy
            </a>
            .
          </p>
        </CardFooter>
      </Card>
    </AuthLayout>
  );
}
