import { useEffect, useState } from "react";

export default function CalcTime() {
	const [timeIn, setTimeIn] = useState("");
	const [timeOut, setTimeOut] = useState("");
	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");
	const [lunchStart, setLunchStart] = useState("");
	const [lunchEnd, setLunchEnd] = useState("");
	const [totalHours, setTotalHours] = useState("");
    
    useEffect(() => {
        calculateTotalHours();
      }, [timeIn, timeOut, startTime, endTime, lunchStart, lunchEnd]);

	const calculateTotalHours = () => {
		const timeInDate = new Date("2022-01-01 " + timeIn);
		const timeOutDate = new Date("2022-01-01 " + timeOut);
		const startTimeDate = new Date("2022-01-01 " + startTime);
		const endTimeDate = new Date("2022-01-01 " + endTime);
		const lunchStartDate = new Date("2022-01-01 " + lunchStart);
		const lunchEndDate = new Date("2022-01-01 " + lunchEnd);

		let totalHours = 0;

		if (timeInDate < startTimeDate) {
			timeInDate.setHours(startTimeDate.getHours());
			timeInDate.setMinutes(startTimeDate.getMinutes());
		}
		if (timeOutDate > endTimeDate) {
			timeOutDate.setHours(endTimeDate.getHours());
			timeOutDate.setMinutes(endTimeDate.getMinutes());
		}

		if (timeInDate < lunchEndDate && timeOutDate > lunchStartDate) {
			const lunchDuration = (lunchEndDate - lunchStartDate) / (1000 * 60 * 60);
			totalHours = ((timeOutDate - timeInDate) / (1000 * 60 * 60)) - lunchDuration;
		} else {
			totalHours = (timeOutDate - timeInDate) / (1000 * 60 * 60);
		}

		setTotalHours(totalHours);
	};

	return (
		<div>
			<label>
				Timein:
				<input
					type="time"
					value={timeIn}
					onChange={(e) => setTimeIn(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Timeout:
				<input
					type="time"
					value={timeOut}
					onChange={(e) => setTimeOut(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Time Schedule:
				<input
					type="time"
					value={startTime}
					onChange={(e) => setStartTime(e.target.value)}
				/>
				to
				<input
					type="time"
					value={endTime}
					onChange={(e) => setEndTime(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Lunch Break:
				<input
					type="time"
					value={lunchStart}
					onChange={(e) => setLunchStart(e.target.value)}
				/>
				to
				<input
					type="time"
					value={lunchEnd}
					onChange={(e) => setLunchEnd(e.target.value)}
				/>
			</label>
			<br />
			<button onClick={calculateTotalHours}>Calculate</button>
			<br />
			<div>Total Hours: {totalHours}</div>
		</div>
	);
}
