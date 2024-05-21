import React from "react";
class ClassState extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			count: 0
		};
		// method3 use bind in contructor
		this.onClickHandler = this.onClickHandler.bind(this);
	}
	increment() {
		console.log("class button clicked", this.state.count);
		// this.setState({
		// 	count: this.state.count + 1
		// });
		this.setState((prevState)=> ({count: prevState.count + 1}));
	}
	onClickHandler() {
		this.increment();
		this.increment();
		this.increment();
	}
	render(){
		return(
			<div>
				{/* method1 use arrow function */}
				{/* <button onClick={()=>{this.onClickHandler()}}> classCount</button> */}
				{/* method2 use bind in component */}
				{/* <button onClick={this.onClickHandler.bind(this)}> classCount</button> */}
				<button onClick={this.onClickHandler}> classCount</button>
				<div>Class Count: {this.state.count}</div>
			</div>
		)
	}
}

export default ClassState;