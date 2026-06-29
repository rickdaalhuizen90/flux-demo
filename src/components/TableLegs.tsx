import type { ReactElement } from "react";
import type { Legs } from "../types.ts";
import { useTableConfig } from "../context/TableConfigContext.tsx";

const LEG_HEIGHT = 70;
const LEG_INSET = 40;

const CYLINDER_ARGS: Record<Exclude<Legs, 'stockholm'>, [number, number, number, number]> = {
    ankara: [15, 25, LEG_HEIGHT, 32],
    san_diego: [15, 15, LEG_HEIGHT, 32],
};

const TableLegs = (): ReactElement => {
    const { config } = useTableConfig();
    const { shape, dimensions } = config.top;
    const { legs } = config;

    const legY = -(LEG_HEIGHT / 2);
    const insetX = dimensions.length / 2 - LEG_INSET;
    const insetZ = dimensions.width / 2 - LEG_INSET;

    const positions: [number, number, number][] = shape === 'round'
        ? [[0, legY, 0]]
        : legs === 'stockholm'
            ? [
                [insetX, legY, insetZ + 20], // rechts voor
                [-insetX, legY, insetZ + 20], // links voor
                [insetX, legY, -insetZ - 20], // rechts achter
                [-insetX, legY, -insetZ - 20], // links achter
            ]
            : [
                [insetX, legY, 0], // rechter poot
                [-insetX, legY, 0], // linker poot
            ];

    return (
        <>
            {positions.map((position) => (
                <mesh key={position.join()} position={position} castShadow>
                    {legs === 'stockholm'
                        ? <boxGeometry args={[10, LEG_HEIGHT, 10]} />
                        : <cylinderGeometry args={CYLINDER_ARGS[legs]} />
                    }
                    <meshStandardMaterial color="#333" />
                </mesh>
            ))}
        </>
    );
};

export { TableLegs };
