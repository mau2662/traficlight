import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState(null);
	console.log(color);
	let redClass = "";
	if (color === "red") {
		redClass = `selected`;
	}
	let yellowClass = "";
	if (color === "yellow") yellowClass = `selected`;
	let greenClass = "";
	if (color === "green") greenClass = `selected`;
	return (
		<div>
			<div id="traficTop"> </div>
			<div id="container">
				<div
					className={"red light " + redClass}
					onClick={() => {
						setColor("red");
					}}>
					{" "}
				</div>
				<div
					className={"yellow light " + yellowClass}
					onClick={() => {
						setColor("yellow");
					}}>
					{" "}
				</div>
				<div
					className={"green light " + greenClass}
					onClick={() => {
						setColor("green");
					}}>
					{" "}
				</div>
			</div>
		</div>
	);
}
