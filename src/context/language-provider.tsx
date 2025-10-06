import { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'en-US' | 'zh-CN';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lng: Language) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const { i18n } = useTranslation();

  // Initialize with fallback, will be updated when i18n is ready
  const [language, setLanguage] = useState<Language>('en-US');

  const [isLoading, setIsLoading] = useState(false);

  const changeLanguage = async (lng: Language) => {
    setIsLoading(true);
    try {
      // i18n.changeLanguage will automatically handle localStorage caching
      await i18n.changeLanguage(lng);
      setLanguage(lng);
    } catch (error) {
      console.error('Failed to change language:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle i18n initialization and language changes
  useEffect(() => {
    const updateLanguage = () => {
      const currentLang = i18n.language as Language;
      if (currentLang && ['en-US', 'zh-CN'].includes(currentLang)) {
        setLanguage(currentLang);
        // Update HTML lang attribute
        document.documentElement.lang = currentLang;
      }
    };

    const handleLanguageChanged = (lng: string) => {
      const languageCode = lng as Language;
      setLanguage(languageCode);
      // Update HTML lang attribute when language changes
      document.documentElement.lang = languageCode;
    };

    // Set up language change listener
    i18n.on('languageChanged', handleLanguageChanged);

    // Initialize language if i18n is already ready
    if (i18n.isInitialized) {
      updateLanguage();
    } else {
      // Wait for i18n to initialize
      const handleInitialized = () => {
        updateLanguage();
      };
      i18n.on('initialized', handleInitialized);

      return () => {
        i18n.off('languageChanged', handleLanguageChanged);
        i18n.off('initialized', handleInitialized);
      };
    }

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
