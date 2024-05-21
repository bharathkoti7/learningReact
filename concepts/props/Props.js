import React from "react";
import ClassProps from "./ClassProps";
import FuncProps from "./FuncProps";

class Props extends React.Component {
	render(){
		return(
			<>
				<ClassProps name = "Charvi"/>
				<FuncProps name = "Adhya"/>
			</>
		);
	}
}
export default Props