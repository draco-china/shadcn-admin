import { proxy, useSnapshot } from 'valtio';
export interface CommonStore {
  title: string;
  logo: string;
  description: string;
  keywords: string;
  url: string;
}

const commonStore = proxy<CommonStore>({
  title: 'Shadcn Admin',
  logo: '/favicon.svg',
  description:
    'A modern and responsive admin dashboard built with React, TypeScript, Tailwind CSS, and shadcn/ui components.',
  keywords:
    'admin dashboard, react, typescript, tailwind css, shadcn/ui, vite, tanstack router, modern ui, responsive design',
  url: 'https://shadcn-admin.netlify.app',
});

export const useCommonStore = () => useSnapshot(commonStore);
