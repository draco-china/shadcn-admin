import type { InitOptions } from 'i18next';

/**
 * Centralized i18n configuration
 *
 * This configuration is shared between:
 * - Runtime i18n initialization (src/lib/i18n.ts)
 * - CLI tools for translation extraction (i18next.config.ts)
 *
 * @see https://www.i18next.com/overview/configuration-options
 */
export const i18nConfig: InitOptions = {
  // Language configuration
  fallbackLng: 'en-US', // Default language when detection fails
  supportedLngs: ['en-US', 'zh-CN'], // Available locales
  // Note: lng is not set to allow LanguageDetector to handle detection

  // Interpolation configuration
  interpolation: {
    escapeValue: false, // Disable escaping since React handles XSS protection
  },

  // HTTP backend configuration
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json', // Translation files path template
    crossDomain: false, // Disable cross-domain requests
    withCredentials: false, // Don't send credentials with requests
  },

  // Language detection configuration
  detection: {
    order: ['localStorage', 'navigator', 'htmlTag'], // Detection priority order
    lookupLocalStorage: 'language', // localStorage key for saved language
    caches: ['localStorage'], // Cache detected language in localStorage
  },

  // Namespace configuration
  defaultNS: 'common', // Default namespace for translations
  ns: [
    'common', // General/shared translations (includes layout and user data)
    'components', // Reusable components
    'errors', // All error pages
    'auth', // Authentication pages
    'dashboard', // Dashboard page
    'users', // User management
    'tasks', // Task management
    'settings', // Settings pages
    'apps', // App integrations
  ], // Available namespaces

  // React integration options
  react: {
    useSuspense: true, // Enable React Suspense for async translation loading
  },
};
