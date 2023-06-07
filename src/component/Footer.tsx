import { Dispatch, SetStateAction } from "react";
import type { Todo } from "../App";

type Props = {
  todos: Todo[];
  setActive: Dispatch<SetStateAction<"all" | "active" | "completed">>;
  clearTodo: () => void;
};

const Footer = ({ todos, setActive, clearTodo }: Props) => {
  return (
    <div className=" bg-white font-theme flex gap-2 text-[12px] justify-around border-b border-border-light dark:border-border-gray p-4 font-extralight text-black dark:text-white dark:bg-bg-dark-blue rounded-md ">
      <span className="cursor-pointer">{todos.length} left</span>
      <span className="cursor-pointer" onClick={() => setActive("all")}>
        All
      </span>
      <span className="cursor-pointer" onClick={() => setActive("active")}>
        Active
      </span>
      <span className="cursor-pointer" onClick={() => setActive("completed")}>
        Completed
      </span>
      <span className="cursor-pointer" onClick={clearTodo}>
        Clear Completed
      </span>
    </div>
  );
};
export default Footer;
