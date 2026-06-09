import type { ReactElement } from "react";
import { TableTop } from "./TableTop.tsx";
import { TableLegs } from "./TableLegs.tsx";

const Table = (): ReactElement => (
    <group position={[0, 70, 0]}>
        <TableTop />
        <TableLegs />
    </group>
);

export { Table };
