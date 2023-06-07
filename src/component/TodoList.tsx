import type { Todo } from "../App";

type TodoListProps = {
  showItems: Todo[];
  toggleComplete: (selectedTodo: string) => void;
  deleteTodo: (selectedTodo: string) => void;
};

const TodoList = ({ showItems, toggleComplete, deleteTodo }: TodoListProps) => {
  return (
    <div className="overflow-y-auto max-h-[400px]">
      {showItems.map((li) => (
        <div
          key={li.id}
          className="text-sm  py-4 bg-white border-b border-border-light dark:bg-bg-dark-blue justify-center flex flex-col gap-2 w-full mx-auto rounded-md p-2 dark:border-border-gray text "
        >
          <div className="flex items-center gap-2">
            <button
              className={`mx-4 p-1 rounded-full border hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${
                li.completed
                  ? "text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
                  : "bg-transparent text-transparent"
              }`}
              onClick={() => toggleComplete(li.id)}
            >
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
            <div className="flex justify-between items-center w-full dark:text-white bg-white dark:bg-bg-dark-blue">
              <p
                className={`font-theme text-xl  font-extralight ${
                  li.completed ? "line-through" : ""
                } `}
              >
                {li.text}
              </p>
              <img
                src="/image/icon-cross.svg"
                alt=""
                className="w-[20px] h-[20px] mx-2 rounded-full cursor-pointer "
                onClick={() => deleteTodo(li.id)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TodoList;
