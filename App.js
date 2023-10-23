const parent = React.createElement(
    "div", { id: "parent", className: "parentborder" },
    React.createElement(
        "div", { id: "child", className: "childborder" }, [React.createElement(
                "h1", { id: "h1", className: "headingborder" },
                "This is heading under child1"),
            React.createElement(
                "h1", { id: "h1", className: "headingborder" },
                "This is heading under child2")
        ]))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);