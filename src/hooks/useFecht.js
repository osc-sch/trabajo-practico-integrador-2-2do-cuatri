import { useEffect, useState } from "react";

export const useFecht = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setIsLoaded(true);

      const respose = await fetch(url, {
        method: "GET",
        credentials: "include",
      });

      if (!respose.ok) {
        throw new Error(`Error ${respose.status}: ${respose.statusText}`);
      }

      const result = await respose.json();

      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, isLoading, error };
};
