import React from "react";
import { create } from "react-test-renderer";
import { render, fireEvent } from '@testing-library/react';

import Search from "../components/Search.jsx";

describe("Search component", () =>{
  test("Submit should call fetchRepos after user inputs search term", () => {
    const mockFetchRepos = jest.fn();
    const { getByRole } = render(<Search
      fetchRepos={mockFetchRepos}
    />);
    const searchTextInput = getByRole("textbox", {name: "Search Term (required)"});
    const submitButton = getByRole("button");
    fireEvent.change(searchTextInput, { target: { value: 'Basketball' } });
    fireEvent.click(submitButton);
    expect(mockFetchRepos).toHaveBeenCalledWith('Basketball', '', 'default');
  });
  test("Submit should call fetchRepos after user inputs search term, language and sort option", () => {
    const mockFetchRepos = jest.fn();
    const { getByRole } = render(<Search
      fetchRepos={mockFetchRepos}
    />);
    const searchTextInput = getByRole("textbox", {name: "Search Term (required)"});
    const filterLangInput = getByRole("textbox", {name: "Filter by Language (optional)"});
    const radioStarsInput = getByRole("radio", {name: "Stars"});
    const radioDefaultInput = getByRole("radio", {name: "Default"});
    const submitButton = getByRole("button");
    fireEvent.change(searchTextInput, { target: { value: 'Hockey' } });
    fireEvent.change(filterLangInput, { target: { value: 'Javascript' } });
    fireEvent.click(radioStarsInput);
    fireEvent.click(radioDefaultInput);
    fireEvent.click(radioStarsInput);
    fireEvent.click(submitButton);
    expect(mockFetchRepos).toHaveBeenCalledWith('Hockey', 'Javascript', 'stars');
  });
  test("Submit should not call fetchRepos if user has not entered search term", () => {
    const mockFetchRepos = jest.fn();
    const { getByRole } = render(<Search
      fetchRepos={mockFetchRepos}
    />);
    const submitButton = getByRole("button");
    fireEvent.click(submitButton);
    expect(mockFetchRepos).not.toHaveBeenCalled();
  });
});
