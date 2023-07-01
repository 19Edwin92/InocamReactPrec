import React, { useEffect, useRef, useState } from "react";
import butterfly from "../img/butterfly.gif";
import styled from "styled-components";

function Butterfly() {
	const position = useRef({ x: 0, y: 0 });
	const target = useRef({ x: 0, y: 0 });
	const speed = 0.08;
	const [renderPosition, setRenderPosition] = useState({ x: 0, y: 0 });

	const onMouseMove = (event) => {
		position.current = { x: event.pageX, y: event.pageY };
	};

	useEffect(() => {
		const moveCursor = () => {
			target.current = {
				x: target.current.x + (position.current.x - target.current.x) * speed,
				y: target.current.y + (position.current.y - target.current.y) * speed,
			};
			setRenderPosition({ ...target.current });
			requestAnimationFrame(moveCursor);
		};
		moveCursor();
	}, [speed]);

	useEffect(() => {
		window.addEventListener("mousemove", onMouseMove);
		return () => {
			window.removeEventListener("mousemove", onMouseMove);
		};
	}, []);

	return (
		<div>
			<Box style={{ top: renderPosition.y + 30, left: renderPosition.x + 30 }}>
				<img src={butterfly} alt='' />
			</Box>
		</div>
	);
}

export default Butterfly;

const Box = styled.div`
	width: 100px;
	height: auto;
	position: absolute;
	transform: translate(-50%, -50%);
	pointer-events: none;

	img {
		width: 90px;
		height: auto;
	}
`;
