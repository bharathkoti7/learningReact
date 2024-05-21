import React from "react";
import ClassState from "./ClassState";
import FuncState from "./FuncState";

class StateConc extends React.Component {

	render(){
		return(
			<div className = "StateConc">
				<ClassState />
				<FuncState />
			</div>
		)
	}
}

export default StateConc