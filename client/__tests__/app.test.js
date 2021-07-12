import React from "react";
import { create } from "react-test-renderer";

import App from "../components/App.jsx";

describe("App Snapshot", () => {
  test("App component matches snapshot", () => {
    const appSnapshot = create(<App />);
    expect(appSnapshot.toJSON()).toMatchSnapshot();
  });
});
