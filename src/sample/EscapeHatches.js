import CustomHooks from "./EscapeHatches/CustomHooks";
import Effects from "./EscapeHatches/Effects";
import Ref from "./EscapeHatches/Ref";

export default function EscapeHatches() {
    return (
        <div style={{ padding: '10px' }}>
            <Ref />
            <Effects />
            <CustomHooks />
        </div>
    )
}