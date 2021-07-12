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
  test("Submitting search with zero results should show error", async () => {
    const { getByRole, getAllByRole } = render(<App />);
    const searchTextInput = getByRole("textbox", {name: "Search Term (required)"});
    const submitButton = getByRole("button", {name: "Search Github"});
    fireEvent.change(searchTextInput, { target: { value: "Jibberish" } });
    fireEvent.click(submitButton);

    await waitFor(() => getAllByRole("alert", { className: "results-error" }))
    expect(getAllByRole("alert", { className: "results-error" })).toHaveLength(1);
  });
  test("Clicking More Info and Back to Search Results should open and close Detail modal", async () => {
    const { getByRole, getAllByRole } = render(<App />);
    const searchTextInput = getByRole("textbox", {name: "Search Term (required)"});
    const submitButton = getByRole("button", {name: "Search Github"});
    fireEvent.change(searchTextInput, { target: { value: "Discus" } });
    fireEvent.click(submitButton);

    await waitFor(() => getAllByRole("heading", { name: "Selected Repo" }));
    expect(getAllByRole("heading", { name: "Selected Repo" })).toHaveLength(1);

    const firstResultMoreInfo = getAllByRole("button", {"name": "More Info"})[0];
    fireEvent.click(firstResultMoreInfo);

    await waitFor(() => getAllByRole("heading", { name: "Selected Repo" }));
    expect(getAllByRole("heading", { name: "Selected Repo" })).toHaveLength(2);

    const closeButton = getByRole("button", {name: "Back to Search Results"});
    fireEvent.click(closeButton);
    await waitFor(() => getAllByRole("heading", { name: "Selected Repo" }));
    expect(getAllByRole("heading", { name: "Selected Repo" })).toHaveLength(1);
  });
});
