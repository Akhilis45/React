import { useRef } from "react";

// useRef is mostly used to select the html tag just like we do in JS using getElementById
// useRef provides the current property which gives the html tag definition

const RefHook = () => {
  const inputRef = useRef();

  const focusInputField = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={focusInputField}>Focus on Input field</button>
      </div>
    </>
  );
};
export default RefHook;
