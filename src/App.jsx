import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [text, setText] = useState("");

  function submitList() {
    if (text) {
      // list.push(text);
      setList([...list, text]);
      setText("");
    }
  }

  function completeItem(index) {
    let x = list.splice(index, 1);
    setCompletedList([...completedList, ...x]);
    setList([...list]);
  }

  function takeBack(index) {
    let x = completedList.splice(index, 1);
    setList([...list, ...x]);
    setCompletedList([...completedList]);
  }

  function deleteListItem(index) {
    list.splice(index, 1);
    setList([...list]);
  }

  function deleteCompletedItem(index) {
    completedList.splice(index, 1);
    setCompletedList([...completedList]);
  }

  return (
    <>
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {list.map((element, index) => {
          return (
            <li key={index} className="py-3 sm:py-4 flex justify-between">
              <span>{element}</span>
              <div>
                <button
                  className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 hover:bg-gray-300  rounded dark:bg-gray-700 dark:text-gray-400"
                  onClick={() => completeItem(index)}
                >
                  Complete
                </button>
                <button
                  className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 hover:bg-gray-300  rounded dark:bg-gray-700 dark:text-gray-400"
                  onClick={() => deleteListItem(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {completedList.length > 0 ? (
        <div>
          <h1>Completed Items: </h1>
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            {completedList.map((element, index) => {
              return (
                <li key={index} className="py-3 sm:py-4 flex justify-between">
                  <span className="line-through">{element}</span>
                  <div>
                  <button
                    className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 hover:bg-gray-300  rounded dark:bg-gray-700 dark:text-gray-400"
                    onClick={() => takeBack(index)}
                  >
                    Take back
                  </button>
                  <button
                  className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 hover:bg-gray-300  rounded dark:bg-gray-700 dark:text-gray-400"
                  onClick={() => deleteCompletedItem(index)}
                >
                  Delete
                </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
      <form>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          className="p-2 rounded-lg border-2 border-b-slate-500"
          value={text}
          required
        />
        <button
          className="p-2 text-blue-500 border-2 border-b-slate-500"
          onClick={submitList}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
