import React from "react";
import { create } from "react-test-renderer";
import { render, fireEvent } from '@testing-library/react';

import Results from "../components/Results.jsx";

const dummyResults = [{
  id: 111,
  name: 'Code',
  owner: 'Owner',
  description: 'Stuff',
  stars: 4,
  forks: 5,
  issues: 6,
  language: 'English',
  created: '',
  updated: '',
  url: 'https://example.com',
},
{
  id: 222,
  name: 'Code',
  owner: 'Owner',
  description: 'Stuff',
  stars: 4,
  forks: 5,
  issues: 6,
  language: 'English',
  created: '',
  updated: '',
  url: 'https://example.com',
}];

describe("Results component", () => {
  test("Should display error message if present in props", () => {
    const instanceResultsError = create(<Results
      results={[]}
      showDetail={() => {}}
      error="Danger Will Robinson"
    />).root;
    expect(instanceResultsError.findAllByProps(
      {className: "results-error"}
    )).toHaveLength(1);
  });
  test("Should not display error message if absent in props", () => {
    const instanceResultsNoError = create(<Results
      results={dummyResults}
      showDetail={() => {}}
      error=""
    />).root;
    expect(instanceResultsNoError.findAllByProps(
      {className: "results-error"}
    )).toHaveLength(0);
  });
  test("Should display results grid correctly", () => {
    const instanceResultsGrid = create(<Results
      results={dummyResults}
      showDetail={() => {}}
      error=""
    />).root;
    expect(instanceResultsGrid.findAllByProps(
      {className: "results-grid"}
    )).toHaveLength(1);
    expect(instanceResultsGrid.findAllByProps(
      {className: "result"}
    )).toHaveLength(2);
  });
  test("Clicking More Info button should call showDetail", () => {
    const mockShowDetail = jest.fn();
    const { getAllByRole } = render(<Results
      results={dummyResults}
      showDetail={mockShowDetail}
      error=""
    />);
    const button = getAllByRole("button", {className: "more-info"})[0];
    fireEvent.click(button);
    expect(mockShowDetail).toHaveBeenCalledWith(111);
  });
});
