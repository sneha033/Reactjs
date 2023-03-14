import React from 'react';
import ReactDOM from 'react-dom/client';


const heading1 =React.createElement("h1",{id:"title1",
    key:"h1"
},"Heading1");
console.log(heading1);

const heading2 =React.createElement("h2",{id:"title2"
,key:"h2"},"Heading2");
console.log(heading2);

const container = React.createElement("div",{id:"container"},[heading1,heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);