import { Status } from "@/src/types/api/Api";
import { useState, useEffect } from "react";

export const useFetchStatus = () => {
    const [statuses, setStatuses] = useState<Status[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStatuses = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/status");
                const data = await response.json();
                setStatuses(data);
            } catch (err) {
                setError("Failed to fetch statuses");
            } finally {
                setLoading(false);
            }
        };

        fetchStatuses();
        console.log('ejecutado useFetchStatus')
    }, []);

    return { statuses, loading, error };
};