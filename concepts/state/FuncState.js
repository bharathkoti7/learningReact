import React, { useState } from "react";

const FuncState = () =>{
	const [count, setCount] = useState(0);

	const increment = () =>{
		console.log("function button clicked", count);
		//setCount(count + 1);
		setCount((prevCount)=> prevCount + 1);
	};

	const onclickHandler = () =>{
		increment();
		increment();
		increment();
	};

	return(
		<div>
			<button onClick={onclickHandler}> Func Count</button>
			<div> Function counter: {count}</div>
		</div>
		
	)
};

export default FuncState