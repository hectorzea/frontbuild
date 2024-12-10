import { Label } from "@/src/types/api/Api";
import { useState, useEffect } from "react";

export const useFetchLabels = () => {
    const [labels, setLabels] = useState<Label[]>([]);
    const [loadingLabels, setLoadingLabels] = useState<boolean>(true);
    const [errorLabels, setErrorLabels] = useState<string | null>(null);

    useEffect(() => {
        const fetchStatuses = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/labels");
                const data = await response.json();
                setLabels(data);
            } catch (err) {
                setErrorLabels("Failed to fetch labels");
            } finally {
                setLoadingLabels(false);
            }
        };

        fetchStatuses();
        console.log('ejecutado useFetchStatus')
    }, []);

    return { labels, loadingLabels, errorLabels };
};