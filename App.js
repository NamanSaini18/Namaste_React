import React from "react";
import ReactDOM from "react-dom/client";

/* Parcel is doing Hot Module Reloading (HMR)
   Parcel uses File Watcher Algorithm and this algo is written in C++ coz it is very fast
   BUNDLING
   MINIFY
   CLEARING AND CLEANING THE CODE
   Dev and Production Build
   Super Fast
   Image Optimization
   CAching while development
   Compression
   Compatible with older version of browser
   HTTPS On dev
   Parcel uses Consistent Hashing Algorithms
   Port Number
   Zero Configuration

   
  Transitive Dependencies
*/
const heading = React.createElement(
  "h1",
  {  
    id: "title",
    key: "h1",
  },"Heading 1 for parcel"); 

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
    key: "h2",
  },"Heading 2");
  
const container = React.createElement(
"div",
{
  id: "container",
},
[heading,heading2]);


const root = ReactDOM.createRoot(document.getElementById("root"));

//async and defer
//passing a react element inside the root


root.render(container);