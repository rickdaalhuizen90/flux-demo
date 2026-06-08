import type { ReactElement } from "react";
import { Shape, RepeatWrapping } from "three";
import { useTexture } from "@react-three/drei";
import type { Dimensions, TopShape } from "../types.ts";
import { MATERIALS } from "../materials.ts";
import { useTableConfig } from "../context/TableConfigContext.tsx";

const ROTATION: [number, number, number] = [-Math.PI / 2, 0, 0];

const buildShape = (type: TopShape, { length, width }: Dimensions): Shape => {
    const shape = new Shape();

    if (type === "round") {
        const radius = Math.min(length, width) / 2;
        const circle = Math.PI * 2;
        shape.absarc(0, 0, radius, 0, circle);
        return shape;
    }

    const [x, y] = [length / 2, width / 2];
    // Begin links onderaan t/m de klok mee
    shape.moveTo(-x, -y).lineTo(x, -y).lineTo(x, y).lineTo(-x, y).closePath();
    return shape;
};

const TableTop = (): ReactElement => {
    const { config } = useTableConfig();
    const { shape, material, dimensions } = config.top;
    const { color, normalMap, roughnessMap } = MATERIALS[material];

    const textures = useTexture({ map: color, normalMap, roughnessMap }, (loaded) => {
        for (const t of Object.values(loaded)) {
            t.wrapS = t.wrapT = RepeatWrapping;
            t.repeat.set(0.04, 0.04);
            t.anisotropy = 16;
        }
    });

    return (
        <mesh rotation={ROTATION} castShadow receiveShadow>
            <extrudeGeometry args={[buildShape(shape, dimensions), { depth: dimensions.height, curveSegments: 64 }]} />
            <meshStandardMaterial {...textures} normalScale={[1, 1]} />
        </mesh>
    );
};

export { TableTop };