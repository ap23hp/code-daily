function render(reactElement, containerDOMElement) {
  /* Your code here! */
let domElement=document.createElement(reactElement.type)
domElement.textContent=reactElement.children
for (const key in reactElement.props){
const value=reactElement.props[key]
domElement.setAttribute(key,value)
}
  containerDOMElement.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://wikipedia.org/',
  },
  children: 'Read more on Wikipedia',
};

const containerDOMElement =
  document.querySelector('#root');

render(reactElement, containerDOMElement);