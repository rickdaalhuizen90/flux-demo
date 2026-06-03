import type { ReactElement } from "react";
import { Shape as ThreeShape, MirroredRepeatWrapping } from "three";
import { useTexture } from "@react-three/drei";
import type { Shape, Dimensions } from "../types.ts";
import { MATERIALS } from "../materials.ts";
import { useTableConfig } from "../context/TableConfigContext.tsx";

const ROTATION: [number, number, number] = [-Math.PI / 2, 0, 0];

const buildRoundShape = ({ length, width }: Dimensions) => {
    const shape = new ThreeShape();
    shape.absarc(0, 0, Math.min(length + 5, width + 5) / 2, 0, Math.PI * 2);
    return shape;
};

const buildRectangleShape = ({ length, width }: Dimensions) => {
    const shape = new ThreeShape();
    const x = length / 2;
    const y = width / 2;
    shape.moveTo(-x, -y);
    shape.lineTo(x, -y);
    shape.lineTo(x, y);
    shape.lineTo(-x, y);
    shape.closePath();
    return shape;
};

const SHAPES: Record<Shape, (d: Dimensions) => ThreeShape> = {
    round: buildRoundShape,
    rectangle: buildRectangleShape,
};

const TableTop = (): ReactElement => {
    const { config } = useTableConfig();
    const { shape, material, dimensions } = config.top;
    const { texture, roughness, metalness } = MATERIALS[material];
    const map = useTexture(texture, (t) => {
        t.wrapS = t.wrapT = MirroredRepeatWrapping;
        t.repeat.set(1 / 30, 1 / 30);
    });

    const extrudeOptions = { depth: dimensions.height, bevelEnabled: false, curveSegments: 64 };

    return (
        <mesh rotation={ROTATION}>
            <extrudeGeometry args={[SHAPES[shape](dimensions), extrudeOptions]} />
            <meshStandardMaterial map={map} roughness={roughness} metalness={metalness} />
        </mesh>
    );
};

export { TableTop };
