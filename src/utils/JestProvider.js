import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

const JestProvider = ({ children }) => <Router>{children}</Router>;

export default JestProvider;
