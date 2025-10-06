import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { DirectionProvider } from './context/direction-provider';
import { FontProvider } from './context/font-provider';
import { LanguageProvider } from './context/language-provider';
import { ThemeProvider } from './context/theme-provider';
// Generated Routes
import { routeTree } from './routeTree.gen';
// Styles
import './styles/index.css';
// i18n
import './lib/i18n';

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('root');
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <LanguageProvider>
        <ThemeProvider>
          <FontProvider>
            <DirectionProvider>
              <RouterProvider router={router} />
            </DirectionProvider>
          </FontProvider>
        </ThemeProvider>
      </LanguageProvider>
    </StrictMode>,
  );
}
