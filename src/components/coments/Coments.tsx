import { useState, useEffect } from "react";
import "./Coments.css";
import type { ComentModel } from "../../models/ComentModel";
import { loadComent } from "../../service/api.service";
import { Coment } from "../coment/Coment";

export const Coments = () => {
    const [coments, setComents] = useState<ComentModel[]>([]);

    useEffect(() => {
        loadComent()
            .then(setComents)
            .catch((err) => console.error("Failed to load comments:", err));
    }, []);

    return (
        <div className="coments-list">
            {coments.map((coment) => (
                <Coment coment={coment} key={coment.id} />
            ))}
        </div>
    );
};
