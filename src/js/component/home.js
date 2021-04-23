import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<div id="traficTop"> </div>
			<div id="container">
				<div className="red light"> </div>
				<div className="yellow light"> </div>
				<div className="green light"> </div>
			</div>
		</div>
	);
}
