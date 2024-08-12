import { useState, useRef, useEffect } from "react";
import { Spacer } from "../SampleLayout";

function VideoPlayer({ src, isPlaying }) {
	const ref = useRef(null);

	useEffect(() => {
		if (isPlaying) {
			ref.current.play();
		} else {
			ref.current.pause();
		}
	}, [isPlaying]);

	return <video ref={ref} src={src} loop playsInline />;
}

function SynchronizingEffects() {
	const [isPlaying, setIsPlaying] = useState(false);
	return (
		<Spacer>
			<button onClick={() => setIsPlaying(!isPlaying)}>
				{isPlaying ? "Pause" : "Play"}
			</button>
			<VideoPlayer
				isPlaying={isPlaying}
				src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
			/>
		</Spacer>
	);
}

export default function Effects() {
	return (
		<div style={{ border: "1px solid black", padding: "5px", margin: "5px" }}>
			<h3>Using effects</h3>
			<SynchronizingEffects />
		</div>
	);
}
