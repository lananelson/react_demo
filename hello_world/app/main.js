'use strict';
var component = require('./header.js');
var React = require('react');
var Footer = require('./footer.js');

document.body.appendChild(component());

var footerContainer = document.createElement('footer');
footerContainer.setAttribute("id", "footer");
document.body.appendChild(footerContainer);

React.render(React.createElement(Footer, {}), document.getElementById('footer'));
