import type { Material } from './types.ts';

export interface MaterialProps {
    texture: string
    roughness: number
    metalness: number
}

export const MATERIALS: Record<Material, MaterialProps> = {
    "oak": { texture: "/oak.jpg", roughness: 0.80, metalness: 0.0 },
    "walnut": { texture: "/walnut.jpg", roughness: 0.75, metalness: 0.0 },
};
