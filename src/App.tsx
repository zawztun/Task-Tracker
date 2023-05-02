import { useEffect, useState } from "react";
import "./App.css";

import Header from "./component/Header";
import FormInput from "./component/FormInput";
import TodoList from "./component/TodoList";
import Footer from "./component/Footer";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [active, setActive] = useState<"all" | "completed" | "active">("all");
  const [theme, setTheme] = useState("light");

  const [showItems, setShowItems] = useState<Todo[]>([]);

  const toggleComplete = (selectedTodo: string) => {
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
            <Header themeSwitch={themeSwitch} />
            <FormInput todos={todos} setTodos={setTodos} />
            <TodoList
              showItems={showItems}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
            <Footer todos={todos} setActive={setActive} clearTodo={clearTodo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
