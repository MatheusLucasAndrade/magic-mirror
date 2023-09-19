import React from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useFetch<T>(
  url: RequestInfo | URL,
  options?: RequestInit,
  reFetchTime?: number
): FetchState<T> {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const optionsRef = React.useRef(options);
  optionsRef.current = options;

  React.useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      setLoading(true);
      setData(null);
      try {
        const response = await fetch(url, {
          signal,
          ...optionsRef.current,
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = (await response.json()) as T;
        if (!signal.aborted) {
          setData(data);
        }
      } catch (error) {
        if (!signal.aborted && error instanceof Error) {
          setError(error.message);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    if (reFetchTime) {
      const intervalId = setInterval(() => {
        fetchData();
      }, reFetchTime);

      return () => {
        clearInterval(intervalId);
      };
    }

    return () => {
      controller.abort();
    };
  }, [url, reFetchTime]);

  return { data, loading, error };
}

export default useFetch;
