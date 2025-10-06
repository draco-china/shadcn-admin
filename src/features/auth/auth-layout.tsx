import { useCommonStore } from '@/stores';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
  const { logo, title } = useCommonStore();
  return (
    <div className="container grid h-svh max-w-none items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-2 py-8 sm:w-[480px] sm:p-8">
        <div className="mb-4 flex items-center justify-center">
          <img
            src={logo}
            alt="logo"
            className="size-6 me-2 bg-foreground rounded"
          />
          <h1 className="text-xl font-medium">{title}</h1>
        </div>
        {children}
      </div>
    </div>
  );
}
