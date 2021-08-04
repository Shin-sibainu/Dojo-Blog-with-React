import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
          setPending(false); //受け取ったことの確認でfalseにしてる。
        })
        .catch((e) => {
          if (e.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setPending(false);
            setError(e.message);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
