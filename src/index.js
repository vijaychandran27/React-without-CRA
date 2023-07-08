require('file-loader?name=[name][ext]!./index.html')
import React from "react";
import reactDom from "react-dom";
import { APP } from "./App";

const element = document.getElementById('root');

reactDom.render(<APP/>, element);
