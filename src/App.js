import { useToast } from "./toastContext";

const App = () => {
  const { addToast } = useToast();

  return (
    <div>
      <button onClick={() => addToast("Task Completed!", "success")}>
        Success
      </button>
      <br/>
      <button onClick={() => addToast("Something went wrong!", "error")}>
        Error
      </button>
    </div>
  );
};

export default App;
