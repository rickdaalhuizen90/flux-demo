export type Shape = "rectangle" | "round";
export type Material = "oak" | "walnut";
export type Legs = "ankara" | "san_diego";
export type Dimensions = { length: number, width: number, height: number};

export interface TableConfig {
    top: {
        shape: Shape
        material: Material
        dimensions: { length: number, width: number, height: number }
    },
    legs: Legs
}
