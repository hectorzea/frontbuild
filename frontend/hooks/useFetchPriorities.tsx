import { Priority } from "@/src/types/api/Api";
import { useState, useEffect } from "react";

export const useFetchPriorities = () => {
    const [priorities, setPriorities] = useState<Priority[]>([]);
    const [loadingPriorities, setLoadingPriorities] = useState<boolean>(true);
    const [errorPriorities, setErrorPriorities] = useState<string | null>(null);

    useEffect(() => {
        const fetchStatuses = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/priorities");
                const data = await response.json();
                setPriorities(data);
            } catch (err) {
                setErrorPriorities("Failed to fetch labels");
            } finally {
                setLoadingPriorities(false);
            }
        };

        fetchStatuses();
        console.log('ejecutado useFetchStatus')
    }, []);

    return { priorities, loadingPriorities, errorPriorities };
};