/*
Global Variables
----------------
Global variables are in fact properties of the global object. 
In web pages the global object is window, so you can set and access 
global variables using the window.variable syntax.

window object 
------------
The window object represents a window containing a DOM document; the document property 
points to the DOM document loaded in that window. A window for a given document 
can be obtained using the document.defaultView property.
In a tabbed browser, such as Firefox, each tab contains its own window object

Constants
---------
-cannot redeclare or change the value
-cannot declare a variable or a function with the same name of const
*/

const PI = 3.14;

this will cause an error
function f(){};
const f = 4;

/*
Exception: SyntaxError: redeclaration of function f
@Scratchpad/1:25
*/

//this will not work as well
function h(){
  const g = 5;
  var g;
}

const MY_OBJECT = { 'key' : 'value'};
MY_OBJECT.key = 'other value';

/*
Exception: SyntaxError: redeclaration of const MY_OBJECT
@Scratchpad/1:1:1
*/
