import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
    const controller = new AbortController();
    const { signal } = controller.signal;
    useEffect(() => {
        fetch(url, { signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Data could not be fetched.');
                }
                return res.json();
            })
            .then(d => {
                setPending(false);
                setError(null);
                setData(d);
            })
            .catch(err => {
                setError(err.message);
                setPending(false);
            })
        return () => {
            controller.abort();
        }
    }, [url]);
    return { data, error, pending };
};

export default useFetch;