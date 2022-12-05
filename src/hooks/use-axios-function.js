import { useState, useEffect } from 'react'

const useAxiosFunction = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState();

	const axiosFetch = async (config) => {
		const {
			axiosInstance,
			method,
			url,
			requestConfig = {}
		} = config;

		try {
			setLoading(true);
			const abortController = new AbortController();
			setController(abortController);

			const res = await axiosInstance[method.toLowerCase()](url, {
				...requestConfig,
				signal: abortController.signal
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

	}

  useEffect(() => {

		//useEffect cleanup function
    return () => controller && controller.abort();
  }, [controller]);


  return [response, error, loading, axiosFetch];
}

export default useAxiosFunction
