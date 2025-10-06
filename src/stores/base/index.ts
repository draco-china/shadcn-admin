import { proxy } from 'valtio';

interface BaseStore {
  loading: boolean;
  loaded: boolean;
}

type Store<T = object> = BaseStore & T;

export const createFetchStore = <T extends object>(config: T) => {
  return proxy({
    loading: false,
    loaded: false,
    ...config,
  }) as Store<T>;
};

type FetcherOptions<
  S extends Store<{ data: any }>,
  F extends (...args: any[]) => Promise<any>,
> = {
  once?: boolean;
  preclean?: boolean;
  data?: S['data'];
  fetcher: F;
  onSuccess?: (result: Awaited<ReturnType<F>>, store: S) => void;
};

export function createFetcher<
  S extends Store<{ data: any }>,
  F extends (...args: any[]) => Promise<any>,
>(store: S, options: FetcherOptions<S, F>) {
  type Params = Parameters<F>;
  type Result = Awaited<ReturnType<F>>;

  return async (...args: Params): Promise<Result | undefined> => {
    if (store.loading) return;
    if (options.once && store.loaded) return;

    store.loading = true;

    if (options.preclean) {
      store.data = options.data;
    }

    try {
      const result = (await options.fetcher(...args)) as Result;
      if (options.onSuccess) {
        options.onSuccess(result, store);
      } else {
        store.data = result.data;
      }
      store.loaded = true;
      return result;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    } finally {
      store.loading = false;
    }
  };
}
