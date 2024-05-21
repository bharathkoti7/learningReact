import React from "react";
import ClassComp from "./ClassComp";
import FunctionalComp from "./FunctionalComp";

function Comp (){
	return(
		<>
			<ClassComp />
			<FunctionalComp />
		</>
	);
}

export default Comp;