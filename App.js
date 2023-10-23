const heading = React.createElement("h1", { id: "heading", abc: "xyz" }, "Hello world by React");
//console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log(root);
root.render(heading);