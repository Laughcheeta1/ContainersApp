import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../context/TasksContext";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default function TaskFormPage() {
  const { createTask, getTask, updateTask } = useTasks();

  const navigate = useNavigate();
  const params = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const validData = {
        ...data,
        date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
      };

      if (!params.id) {
        createTask(validData);
        // navigate("/tasks");
        return;
      }

      updateTask(params.id, validData);

      // navigate("/tasks");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs.utc(task.date).format("YYYY-MM-DD"));
      }
    };
    loadTask();
  }, []);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.title && (
            <p className="text-red-500 text-xs italic">Please enter a title.</p>
          )}

          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Title"
            autoFocus
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            {...register("title")}
          />

          <label htmlFor="description">Description</label>
          <textarea
            rows="3"
            placeholder="Description"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            {...register("description")}
          ></textarea>

          <label htmlFor="date">Date</label>
          <input
            type="date"
            {...register("date")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />

          <button className="bg-indigo-500 px-3 py-2 rounded-md">Save</button>
        </form>
      </div>
    </div>
  );
}
