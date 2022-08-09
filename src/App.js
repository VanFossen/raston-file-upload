import React, { useState } from "react";

function App() {
  const [data, setData] = useState();

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    if (e.target.files[0]) {
      fileReader.onload = function (event) {
        setData(event.target.result);
      };

      fileReader.readAsText(e.target.files[0]);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>REACTJS CSV IMPORT EXAMPLE </h1>
      <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />
      </form>
      {data}
    </div>
  );
}

export default App;
