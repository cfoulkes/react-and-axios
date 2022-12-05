import React from 'react'
import useAxios from '../hooks/use-axios'
import axios from '../apis/dadJokes'

const DadJokes = () => {
  const [joke, error, loading, refetch] = useAxios({
    axiosInstance: axios,
    method: 'GET',
    url: '/'
  });

  return (
    <div style={{'border': '1px solid red', 'paddingBottom': '10px', 'minHeight': '40px', 'margin': '5px'}}>
      <h2>Random Dad Joke</h2>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && joke && <p>{joke?.joke}</p>}
      {!loading && !error && !joke && <p>No joke!</p>}

      <button onClick={refetch}>Get Data</button>

    </div>
  )
}

export default DadJokes

