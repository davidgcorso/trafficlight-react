import React, { useState } from "react";

//create your first component
function Home() {
	const [SelectedColor, setSelectedColor] = useState("red");
	console.log(SelectedColor);
	return (
		<>
			<div className="pole"></div>
			<div className="traffic-light">
				<div
					onClick={() => {
						setSelectedColor("red");
						console.log(SelectedColor);
					}}
					className={
						"light red" + (SelectedColor === "red" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("yellow")}
					className={
						"light yellow" +
						(SelectedColor === "yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("green")}
					className={
						"light green" +
						(SelectedColor === "green" ? " glow" : "")
					}></div>
			</div>
		</>
	);
}
export default Home;
