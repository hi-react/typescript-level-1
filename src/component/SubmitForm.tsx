import { ChangeEvent, FormEvent, useState } from "react";

type SubmitFormProps = {
  todo: TodoType[];
  setTodo: (todo: TodoType[]) => void;
};

type TodoType = {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
};

const SubmitForm = ({ todo, setTodo }: SubmitFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  // Add 버튼
  const addTodoItemHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // return을 해주지 않으면, 모두 입력해달라는 알람이 뜨고도 빈 카드를 그대로 붙여넣음!
    if (title.trim() === "" || content.trim() === "") {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }
    const setId = todo.length > 0 ? todo[todo.length - 1].id + 1 : 1;
    const newTodo: TodoType = {
      id: setId,
      title,
      content,
      isDone: false,
    };
    setTodo([...todo, newTodo]);
    setTitle("");
    setContent("");
  };

  return (
    <form className="add-form" onSubmit={addTodoItemHandler}>
      <div>
        <label className="add-title">제목: </label>
        <input
          className="input-value"
          value={title}
          placeholder="제목을 입력해주세요."
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
        />
        &nbsp; &nbsp;
        <label className="add-title">내용: </label>
        <input
          className="input-value input-content"
          value={content}
          placeholder="내용을 입력해주세요."
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setContent(event.target.value)
          }
        />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
};

export default SubmitForm;
