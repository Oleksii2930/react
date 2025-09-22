import { useState, useEffect } from "react";
import "./Coments.css";
import type { ComentModel } from "../../models/ComentModel";
import { loadComent } from "../../service/api.servise.ts";
import { Coment } from "../coment/Coment.tsx";

export const Coments = () => {
    const [coments, setComents] = useState<ComentModel[]>([]);

    useEffect(() => {
        loadComent().then(setComents); // коротший запис
    }, []);

    return (
        <div>
            {coments.map((coment) => (
                <Coment coment={coment} key={coment.id} />
            ))}
        </div>
    );
};