import { createContext, useContext, useState, type ReactNode } from "react";
import type { TableConfig, TopShape, Material, Legs, Dimensions } from "../types.ts";

type Context = {
    config: TableConfig;
    setShape: (shape: TopShape) => void;
    setMaterial: (material: Material) => void;
    setLegs: (legs: Legs) => void;
    setDimensions: (dims: Partial<Dimensions>) => void;
};

const DEFAULT_CONFIG: TableConfig = {
    top: { shape: "rectangle", material: "oak", dimensions: { length: 200, width: 100, height: 5 } },
    legs: "ankara",
};

const TableConfigContext = createContext<Context | null>(null);

const TableConfigProvider = ({ children }: { children: ReactNode }) => {
    const [config, setConfig] = useState(DEFAULT_CONFIG);
    return (
        <TableConfigContext value={{
            config,
            setShape: shape => setConfig(prev => ({ ...prev, top: { ...prev.top, shape } })),
            setMaterial: material => setConfig(prev => ({ ...prev, top: { ...prev.top, material } })),
            setLegs: legs => setConfig(prev => ({ ...prev, legs })),
            setDimensions: dims => setConfig(prev => ({
                ...prev,
                top: { ...prev.top, dimensions: { ...prev.top.dimensions, ...dims } },
            })),
        }}>
            {children}
        </TableConfigContext>
    );
};

const useTableConfig = () => useContext(TableConfigContext)!;

export {DEFAULT_CONFIG, TableConfigProvider, useTableConfig};
