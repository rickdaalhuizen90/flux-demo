import type { ReactElement } from "react";
import type { Legs } from "../types.ts";
import { useTableConfig } from "../context/TableConfigContext.tsx";

const LEG_ARGS: Record<Legs, [number, number, number, number]> = {
    ankara: [15, 25, 70, 32],
    san_diego: [15, 15, 70, 32],
};

const TableLegs = (): ReactElement => {
    const { config } = useTableConfig();
    const { shape, dimensions } = config.top;
    const args = LEG_ARGS[config.legs];

    const legY = -(args[2] / 2); // poot hoogte=70 → centreert op y=0 (van -35 tot +35)
    const inset = dimensions.length / 2 - 40; // tafel loopt van x=-100 tot x=100, poten 40cm van de rand (x=±60)

    const positions: [number, number, number][] = shape === 'round'
        ? [[0, legY, 0]]
        : [
            [ inset, legY, 0], // rechter poot (x=+60)
            [-inset, legY, 0], // linker poot  (x=-60)
        ];

    return (
        <>
            {positions.map((position: [number, number, number]) => (
                <mesh key={position.join()} position={position} castShadow>
                    <cylinderGeometry args={args}/>
                    <meshStandardMaterial color="#333"/>
                </mesh>
            ))}
        </>
    );
};

export { TableLegs };
