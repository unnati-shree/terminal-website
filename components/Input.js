import { useEffect, useState, useRef } from "react";
import styles from "./Input.module.css";

export default function Input({ command, onSubmit }) {
  const [_command, setCommand] = useState(command ? command : "");
  const index = useRef(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("commands"));
    if (storedList) {
      setList(storedList);
      console.log(storedList)
    } else {
      localStorage.setItem("commands", JSON.stringify([]));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCommand("");
    return onSubmit(_command);
  };

  function handleKeyDown(e) {
    if (e.key === "ArrowUp") {
      console.log(index.current)

      if (list.length > 0 && index.current < list.length) {
        console.log("Index : ", list.length - index.current)
        const command = list[list.length - index.current - 1]
        console.log(command)
        setCommand(command);
        index.current = index.current + 1;
      }
    }

    if (e.key === "ArrowDown") {
      console.log(index.current)

      if (list.length > 0 && index.current > 0) {
        const command = list[list.length - index.current]
        console.log(command)
        setCommand(command);
        index.current = index.current - 1;
      }


    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="command">
        <span style={{ color: "#ff9e64" }}>λ</span> ::{" "}
        <span style={{ color: "var(--primary)" }}>~</span>{" "}
        <span style={{ color: "var(--secondary)" }}>&gt;&gt;</span>
      </label>

      <input
        type="text"
        className={styles.input}
        value={_command}
        onChange={(e) => setCommand(e.target.value)}
        disabled={command ? true : false}
        ref={(input) => input && !command && input.focus()}
        onKeyDown={handleKeyDown}
        autoFocus={command === ""}
      />
    </form>
  );
}
