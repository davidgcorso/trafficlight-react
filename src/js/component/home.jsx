import React, { useState } from "react";

//create your first component
function Home() {
	const [SelectedColor, setSelectedColor] = useState("red");
	return (
		<div className="traffic-light">
			<div
				OnClick={() => setSelectedColor("red")} 
				className={
					"light red" + (SelectedColor === "red" ? " glow" : "")
				}></div>
			<div
				OnClick={() => setSelectedColor("yellow")}
				className={
					"light yellow" + (SelectedColor === "yellow" ? " glow" : "")
				}></div>
			<div
				OnClick={() => setSelectedColor("green")}
				className={
					"light green" + (SelectedColor === "green" ? " glow" : "")
				}></div>
		</div>
	);
}
export default Home;
