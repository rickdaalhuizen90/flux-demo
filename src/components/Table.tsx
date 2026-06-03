import type { ReactElement } from "react";
import { TableTop } from "./TableTop.tsx";
import { TableLegs } from "./TableLegs.tsx";

const Table = (): ReactElement => (
    <group>
        <TableTop />
        <TableLegs />
    </group>
);

export { Table };
