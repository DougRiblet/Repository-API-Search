import React from "react";
import { render, fireEvent, waitFor } from '@testing-library/react';

import App from "../components/App.jsx";

jest.mock('../utils/searchGithubApi.js');

describe("Integration tests from App component", () => {
  test("Submitting search should fill results grid", async () => {
    const { getByRole, getAllByRole } = render(<App />);
    const searchTextInput = getByRole("textbox", {name: "Search Term (required)"});
    const submitButton = getByRole("button", {name: "Search Github"});
    fireEvent.change(searchTextInput, { target: { value: "Discus" } });
    fireEvent.click(submitButton);

    await waitFor(() => getAllByRole("gridcell", { className: "result" }))
    expect(getAllByRole("gridcell", { className: "result" })).toHaveLength(2);
  });
});
