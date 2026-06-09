import type { ReactElement } from "react";
import { TableTop } from "./TableTop.tsx";
import { TableLegs } from "./TableLegs.tsx";
import { Suspense } from "react";

const Table = (): ReactElement => (
    <group position={[0, 70, 0]}>
        <Suspense>
            <TableTop />
            <TableLegs />
        </Suspense>
    </group>
);

export { Table };
