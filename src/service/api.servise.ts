import type { ComentModel } from "../models/ComentModel";

const endpointComents = import.meta.env.VITE_API_BASE_URL + "/comments";

export const loadComent = async (): Promise<ComentModel[]> => {
    const response = await fetch(endpointComents);
    if (!response.ok) {
        throw new Error(`Failed to fetch todos: ${response.status}`);
    }
    return response.json();
};