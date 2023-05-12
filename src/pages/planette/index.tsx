import { Planette } from '../../components/Planette/planette';

export default function PlanettePage() {
    return (
        <>
            <Planette spaceSize={{ width: 256, height: 256 }} ></Planette>
        </>
    );
}