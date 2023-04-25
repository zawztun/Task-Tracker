import { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

// const lists = [];

//  function add todo
//  bind with input
//  must add new item when Enter pressed onKeyPress

// filter by completed
// getCompleted()
// getActive()
// getAll()

// toggleComplete()
// changed selected one to completed
// find by id and change the completed

// delete()
// delete by ID

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [active, setActive] = useState<"all" | "completed" | "active">("all");
  const [theme, setTheme] = useState("light");

  const [showItems, setShowItems] = useState<Todo[]>([]);

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      const data = todos;
      data.push({
        id: uuidv4(),
        text: input,
        completed: false,
      });

      setTodos(data);
      setInput("");
    }
  };

  // [ { id : },{ id : },{ id : },{ id : },{ id : } ]
  const toggleComplete = (selectedTodo: string) => {
    // const data = [...todos];
    // for (let i = 0; i < data.length; i++) {
    //   const current = data[i];
    //   if (current.id === selectedTodo) {
    //     const updatedTodo = {
    //       ...current,
    //       completed: !current.completed,
    //     };
    //     data[i] = updatedTodo;
    //   }
    // }
    // setTodos(data);
    const newTodo: Todo[] = todos.map((todo) => {
      if (selectedTodo === todo.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodo);
  };

  const deleteTodo = (selectedTodo: string) => {
    setTodos(todos.filter((el) => el.id !== selectedTodo));
  };

  const toggleTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme && theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const clearTodo = () => {
    setTodos([]);
  };

  const showTodo = () => {
    switch (active) {
      case "all":
        return setShowItems(todos);
      case "active":
        return setShowItems(todos.filter((todo) => !todo.completed));
      case "completed":
        return setShowItems(todos.filter((todo) => todo.completed === true));
    }
  };

  useEffect(() => {
    showTodo();
  }, [active, todos]);

  useEffect(() => {
    toggleTheme();
  }, [theme]);
  const themeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="grid place-items-center dark:bg-bg-blue w-full h-screen relative">
        <div className="w-full bg-[url('/image/bg-mobile-light.jpg')] dark:bg-[url('/image/bg-mobile-dark.jpg')] bg-no-repeat bg-cover h-[350px] absolute top-0 left-0">
          <div className=" lg:w-2/5 mx-auto p-2 pt-24 ">
            <div className="flex items-center justify-between">
              <h2 className="text-white text-3xl tracking-[20px] font-semibold">
                TODO
              </h2>
              <div className="w-[30px] h-[30px]" onClick={themeSwitch}>
                {localStorage.theme === "dark" ? (
                  <img src="/image/icon-moon.svg" alt="test" />
                ) : (
                  <img src="/image/icon-sun.svg" alt="test" />
                )}
              </div>
            </div>

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
                      className=" w-full outline-none dark:outline-none font-theme text-xl dark:bg-bg-dark-blue dark:text-white"
                    />
                  </div>
                </div>
              </div>
            </div>

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
            <div className=" bg-white font-theme flex gap-2 text-[12px] justify-around border-b border-border-light dark:border-border-gray p-4 font-extralight text-black dark:text-white dark:bg-bg-dark-blue rounded-md ">
              <span className="cursor-pointer">{todos.length} left</span>
              <span className="cursor-pointer" onClick={() => setActive("all")}>
                All
              </span>
              <span
                className="cursor-pointer"
                onClick={() => setActive("active")}
              >
                Active
              </span>
              <span
                className="cursor-pointer"
                onClick={() => setActive("completed")}
              >
                Completed
              </span>
              <span className="cursor-pointer" onClick={clearTodo}>
                Clear Completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
