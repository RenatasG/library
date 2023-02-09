import { Axios } from 'axios';

interface AxiosOptions<T> {
  onStart?: () => void;
  onSuccess: (data: T) => void;
  onError?: (error: unknown) => void;
  onFinish?: () => void;
}

const req = new Axios({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

export function useAxios() {
  return {
    async get<T>(
      url: string,
      { onStart, onSuccess, onError, onFinish }: AxiosOptions<T>,
    ) {
      onStart?.();

      try {
        const { data } = await req.get<T>(url);
        onSuccess(JSON.parse(data as string));
      } catch (error: unknown) {
        onError?.(error);
      }

      onFinish?.();
    },
    // post(url: string) {
    //   req.post(url);
    // },
    // put(url: string) {
    //   req.put(url);
    // },
    // patch(url: string) {
    //   req.patch(url);
    // },
    // delete(url: string) {
    //   req.delete(url);
    // },
  };
}
