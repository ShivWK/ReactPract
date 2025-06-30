// This is a simple React application that renders a heading element using React and ReactDOM libraries.

{
  /* <div id="parent">
  <div id="child">
    <h1 id="heading">Hello World! from JavaScript</h1>
  </div>
</div>; */
}

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World! from React"
);

const parentDiv = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement(
      "h1",
      { id: "heading", key: "heading1" },
      "Hello World! from React"
    ),
    React.createElement("h2", { id: "heading", key: "heading2" }, "Heading 2"),
    React.createElement(
      "p",
      { id: "paragraph", key: "paragraph1" },
      "This is a paragraph."
    ),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement(
      "h1",
      { id: "heading", key: "heading3" },
      "Hello World! from React"
    ),
    React.createElement("h2", { id: "heading", key: "heading4" }, "Heading 2"),
    React.createElement(
      "p",
      { id: "paragraph", key: "paragraph2" },
      "This is a paragraph."
    ),
  ])
]);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(parentDiv);

console.log(parentDiv);
