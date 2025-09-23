import type { ComentModel } from "../models/ComentModel";

const endpointComents = import.meta.env.VITE_API_BASE_URL + "/comments";

type ComentsResponse = {
    comments: ComentModel[];
    total: number;
    skip: number;
    limit: number;
};

export const loadComent = async (): Promise<ComentModel[]> => {
    const response = await fetch(endpointComents);
    if (!response.ok) {
        throw new Error(`Failed to fetch coments: ${response.status}`);
    }
    const data: ComentsResponse = await response.json();
    return data.comments;
};