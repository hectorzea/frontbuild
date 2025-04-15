import { Task } from "@/app/types/api/Api";
import axios from "axios";

export const addTaskApi = async (taskData: Omit<Task, '_id'>): Promise<Task> => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_FRONTBUILD_API_URL}/api/tasks/add`, taskData);
    return response.data?.task;
};

export const updateTaskApi = async (taskData: Task): Promise<Task> => {
    const response = await axios.put(`${process.env.NEXT_PUBLIC_FRONTBUILD_API_URL}/api/tasks/${taskData._id}`, taskData);
    return response.data?.task;
};

export const deleteTaskApi = async (taskId: string): Promise<void> => {
    await axios.delete(
        `${process.env.NEXT_PUBLIC_FRONTBUILD_API_URL}/api/tasks/${taskId}`
    );
};
