import type { ReactElement } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Table } from "./Table.tsx";
import { Environment } from "@react-three/drei";

const Scene = (): ReactElement => (
    <Canvas camera={{ position: [200, 150, 250], fov: 45 }} shadows>
        <Environment preset="apartment" />
        <ambientLight intensity={0.4} />
        <directionalLight position={[100, 200, 100]} intensity={1.2} castShadow />
        <Table />
        <OrbitControls target={[0, 75, 0]} />
    </Canvas>
);

export { Scene };
