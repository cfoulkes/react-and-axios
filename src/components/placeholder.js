import React from 'react'
import useAxiosFunction from '../hooks/use-axios-function'
import axios from '../apis/jsonPlaceholder'
import { useEffect } from 'react';


const Posts = () => {
  const [posts, error, loading, axiosFetch] = useAxiosFunction();

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'GET',
      url: '/posts'
    });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleSubmit = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'POST',
      url: '/posts',
      config: {
        data: {
          userId: 10,
          title: 'Axios',
          body: 'Axios hook function'
        }
      }
    });
  };


  return (
    <div style={{'border': '1px solid red', 'paddingBottom': '10px', 'minHeight': '40px', 'margin': '5px'}}>
      <h2>Posts</h2>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && posts?.length &&
        <ul>
          {posts.map((post, i) => <li key={i}>{`${post.id}. ${post.title}`}</li>)};
        </ul>
      }
      {!loading && !error && !posts.length && posts?.data &&
        <p>{`userId: ${posts.data?.userId}, title: ${posts.data?.title}, body: ${posts.data?.body} `}</p>
      }

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={getData}>Refetch</button>

    </div>
  )
}

export default Posts

