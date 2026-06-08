import type { Material } from "./types.ts";

type MaterialProps = { color: string; normalMap: string; roughnessMap: string };

const MATERIALS: Record<Material, MaterialProps> = {
    oak: {
        color:        '/Wood076_1K-JPG_Color.jpg',
        normalMap:    '/Wood076_1K-JPG_NormalGL.jpg',
        roughnessMap: '/Wood076_1K-JPG_Roughness.jpg',
    },
    walnut: {
        color:        '/Wood094_1K-JPG_Color.jpg',
        normalMap:    '/Wood094_1K-JPG_NormalGL.jpg',
        roughnessMap: '/Wood094_1K-JPG_Roughness.jpg',
    },
};

export { MATERIALS };
