import React from "react";
import ReactDOM from "react-dom/client";

const heading3 = React.createElement(
  "h1",
  { id: "title1", key: "h1" },
  "Heading1"
);
console.log(heading3);

const head = (
  <h1 id="h11" key="head1">
    Heading by JSX
  </h1>
);

const HeadComp = () => {
  return (
    <div>
      <h1>Head1</h1>
      <h2>Head2</h2>
    </div>
  );
};

const HeadComp2 = () => (
      <div>
        <h1>Head1</h1>
        <h2>Head2</h2>
      </div>
    );

    const HeadComp3 = function() {
        return (
          <div>
            <h1>Head1</h1>
            <h2>Head2</h2>
          </div>
        );
      };


const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading3);
root.render(<HeadComp2/>);
