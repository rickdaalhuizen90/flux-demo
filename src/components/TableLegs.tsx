import type { ReactElement } from "react";
import type { Shape, Legs } from "../types.ts";

const LEG_ARGS: Record<Legs, [number, number, number, number]> = {
    ankara: [15, 25, 70, 32],
    san_diego: [15, 15, 70, 32],
};

const LEG_POSITIONS: Record<Shape, [number, number, number][]> = {
    rectangle: [[0, -35, -60], [0, -35, 60]],
    round: [[0, -35, 0]],
};

const TableLegs = (): ReactElement => {
    const positions = LEG_POSITIONS["rectangle"];
    const args = LEG_ARGS["ankara"];

    return (
        <>
            {positions.map((position) => (
                <mesh key={position.join()} position={position}>
                    <cylinderGeometry args={args} />
                    <meshStandardMaterial color="#444" />
                </mesh>
            ))}
        </>
    );
};

export { TableLegs };
