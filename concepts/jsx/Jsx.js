import React from "react";
import WithJSX from "./WithJSX";
import WithoutJSX from "./WithoutJSX";

export default class JSX extends React.Component {
	render(){
		return (
		<>
			<WithJSX />
			<WithoutJSX />
		</>
		)
	}
}