import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Todo } from "../App";

type Props = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const FormInput = ({ todos, setTodos }: Props) => {
  const [input, setInput] = useState("");
  //   const [todos, setTodos] = useState<Todo[]>([]);

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      const data = [...todos];
      data.push({
        id: uuidv4(),
        text: input,
        completed: false,
      });

      setTodos(data);
      setInput("");
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-2 py-8 border-red-400">
        <div className=" text-sm h-16 min-h-full bg-white dark:bg-bg-dark-blue justify-center flex flex-col gap-2 w-full mx-auto rounded-md p-2 shadow-md text">
          <div className="flex items-center gap-2">
            <button className=" mx-4 p-1 rounded-full border ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </button>
            <div className="flex justify-between items-center w-full text-black dark:text-white bg-white dark:bg-bg-dark-blue">
              <input
                onKeyDown={handleKeyPress}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your Todo"
                className=" w-full outline-none dark:outline-none font-theme text-xl dark:bg-bg-dark-blue dark:text-white "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
