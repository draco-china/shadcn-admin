import createClient, { type Middleware } from 'openapi-fetch';
import { toast } from 'sonner';
import i18n from '@/lib/i18n';
import type { paths } from './api/types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://petstore3.swagger.io/api/v3';
const AUTH_TOKEN_KEY = 'Authorization';
const LOGIN_PATH = '/login';

const getErrorMessage = (status: number, defaultMessage?: string): string => {
  const ERROR_MESSAGES: Record<number, string> = {
    400: i18n.t('common:errors.badRequest', 'Bad Request'),
    401: i18n.t('common:errors.unauthorized', 'Unauthorized'),
    403: i18n.t('common:errors.forbidden', 'Forbidden'),
    404: i18n.t('common:errors.notFound', 'Not Found'),
    422: i18n.t('common:errors.validationError', 'Validation Error'),
    500: i18n.t('common:errors.serverError', 'Internal Server Error'),
    502: i18n.t('common:errors.badGateway', 'Bad Gateway'),
    503: i18n.t('common:errors.serviceUnavailable', 'Service Unavailable'),
  };

  return defaultMessage || ERROR_MESSAGES[status] || i18n.t('common:errors.unknownError', 'Unknown Error');
};

const authMiddleware: Middleware = {
  async onRequest({ request }) {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      request.headers.set('Authorization', `Bearer ${token}`);
    }
    return request;
  },
};

const errorMiddleware: Middleware = {
  async onResponse({ response }) {
    if (!response.ok) {
      let errorData: any;
      try {
        errorData = await response.clone().json();
      } catch {
        errorData = await response.clone().text();
      }
      const title = getErrorMessage(response.status);
      const description = errorData?.message || errorData;

      toast.error(title, { description });

      if (response.status === 401) {
        localStorage.removeItem(AUTH_TOKEN_KEY);
        window.location.href = LOGIN_PATH;
      }

      throw new Error(description);
    }
    return response;
  },
};

export const request = createClient<paths>({
  baseUrl: API_BASE_URL,
});

request.use(authMiddleware);
request.use(errorMiddleware);


export default request;