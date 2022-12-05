import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UseEffect() {

	const [quote, setQuote] = useState('');

    useEffect(() => {
        GetData();
    },([]))

	const GetData = async () => {
		console.log(`AsyncAwait GetData`)
		try {
			const response = await axios.get('https://api.quotable.io/random')
			console.log(`response ${JSON.stringify(response)}`)
			setQuote(response.data.content);

		} catch (error) {
			console.log(`response ${JSON.stringify(error)}`)

		} finally {
			console.log(`finally`)
		}
			console.log(`AsyncAwait GetData ends`)
		};

  return (
    <div style={{'border': '1px solid red', 'paddingBottom': '10px', 'minHeight': '40px', 'margin': '5px'}}>
        <h3>Use Effect</h3>
		<div>{quote}</div>
        <button onClick={GetData}>Get Data</button>
    </div>
  )
}

export default UseEffect
