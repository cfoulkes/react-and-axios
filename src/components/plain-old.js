import React, { useState } from 'react'
import axios from 'axios'

function PlainOld() {

	const [quote, setQuote] = useState('');

	const GetData = () => {
		console.log(`PlainOld GetData`)
		axios.get('https://api.quotable.io/random')
			.then(response => {
				console.log(`response ${JSON.stringify(response)}`)
				setQuote(response.data.content);
			})
			.catch(error => {
				console.log(`response ${JSON.stringify(error)}`)
			})
			.finally(() => {
				console.log(`finally`)
			});
			console.log(`PlainOld GetData ends`)
		};

  return (
    <div style={{'border': '1px solid red', 'paddingBottom': '10px', 'minHeight': '40px', 'margin': '5px'}}>
        <h3>Plain Old</h3>
		<div>{quote}</div>
        <button onClick={GetData}>Get Data</button>
    </div>
  )
}

export default PlainOld
