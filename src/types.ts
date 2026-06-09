export type TopShape = "rectangle" | "round";
export type Material  = "oak" | "walnut";
export type Legs      = "ankara" | "san_diego" | "stockholm";

export type Dimensions = { length: number; width: number; height: number };

export interface TableConfig {
    top: {
        shape:      TopShape;
        material:   Material;
        dimensions: Dimensions;
    };
    legs: Legs;
}
