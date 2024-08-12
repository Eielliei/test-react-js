import { Spacer } from "./SampleLayout";
import ClockEffect from "./StateManagement/ClockEffect";
import ClockState from "./StateManagement/ClockState";
import { Context } from "./StateManagement/Context";
import { Reducer } from "./StateManagement/Reduser";

export default function StateManagement() {
	return (
		<div style={{ padding: "10px" }}>
			<Reducer />
			<Context />
			<Spacer width={5} color="blue">
				<ClockState />
				<ClockState />
			</Spacer>
			<Spacer width={5} color="green" >
				<ClockEffect/>
				<ClockEffect />
			</Spacer>
		</div>
	);
}
