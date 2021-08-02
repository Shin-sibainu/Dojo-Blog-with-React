import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setPending(false);
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
      });
  }, []);

  return { data, isPending, error };
};

export default useFetch;
