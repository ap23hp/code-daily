# Day1
## we created a simple render function which takes react element and a container. Recat element is normal javascript object with type(which HTML Tag to create), props(contains HTML attributes) and children(text inside element)
## React elements are just JavaScript objects.
## Rendering means converting those objects into real DOM nodes.
## JSX and React APIs are abstractions over normal DOM operations.

## Instead of writing React.createElement, we use an HTML-like syntax to create React elements - JSX coz it is easier to read.
## React elements can form a tree structure, just like HTML elements This happens when we set the “children” parameter of a React element to another React element. In practice, we often wind up with pretty significant tree structures in our React code. Hence we use JSX coz HTML-like syntax is easier for our brains to process

## If we try to run this JSX code in the browser, we'll get an error. JavaScript engines don't understand JSX, they only understand JavaScript. And so we need to "compile" our code into plain JS.This is most commonly done as part of a build step, using a tool like BabelThe JSX we write gets converted into React.createElement. By the time our code is running in the user's browser, all of the JSX has been zapped out, and we're left with a JS file full of nested React.createElement calls.

## statements is action and expression produces a value. We can create expression slots with curly brackets ({}). Anything placed in-between curly brackets will be treated as pure JavaScript, instead of a string.
## use the multi-line comment syntax (/* */)

## htmlFor, className, JSX is case-sensitive,Our tags must all be lowercase. In JSX, our attributes need to be “camelCase.   data-test-id and aria-label are not camel case-exceptions.We can introduce white space in react using   {' '}
## We write React using JSX and imports because tools like Vite bundle and compile the code into browser-understandable JavaScript.

##  the browser cannot execute ES module imports without type="module", so React never runs.
## When we pass something between the open and close tags, React will automatically supply that value to us under children.It appears that React chooses to prioritize the children passed in-between the open/close tags

### The <dl> HTML tag is fairly obscure, but a super worthwhile tag!It stands for “Description List”, and it's intended to be used to display key/value pairs. For example, many e-commerce platforms will display product details in this format: