type ButtonProps = {
  id: number;
  stateChangeButtonHandler: (id: number) => void;
  deleteButtonHandler: (id: number) => void;
  todoItemState: string;
};

const Button = ({
  id,
  stateChangeButtonHandler,
  deleteButtonHandler,
  todoItemState,
}: ButtonProps) => {
  return (
    <div className="button-set">
      <button
        className="button complete-button"
        onClick={() => {
          stateChangeButtonHandler(id);
        }}
      >
        {todoItemState}
      </button>
      <button
        className="button delete-button"
        onClick={() => {
          deleteButtonHandler(id);
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default Button;
