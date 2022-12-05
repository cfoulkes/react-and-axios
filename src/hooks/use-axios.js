import { useState, useEffect } from 'react'

const useAxios = (config) => {
  const {
    axiosInstance,
    method,
    url,
    requestConfig = {}
  } = config;

  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(true);

  const refetch = () => setReload(prev => prev + 1);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal: controller.signal
        });
        console.log(res);
        setResponse(res.data);
        setError('');
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    //useEffect cleanup function
    return () => controller.abort();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);


  return [response, error, loading, refetch];
}

export default useAxios
