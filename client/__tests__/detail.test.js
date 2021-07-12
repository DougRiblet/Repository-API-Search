import React from "react";
import { create } from "react-test-renderer";
import { render, fireEvent, screen } from '@testing-library/react';

import Detail from "../components/Detail.jsx";

describe("Detail component", () =>{
  test("Renders correctly with showModal false", () => {
    const instanceModalHidden = create(<Detail
      repo={{}}
      handleCloseModal={() => {}}
      showModal={false}
    />).root;
    expect(instanceModalHidden.findAllByProps(
      {className: "modal display-none"}
    )).toHaveLength(1);
    expect(instanceModalHidden.findAllByProps(
      {className: "modal display-block"}
    )).toHaveLength(0);
  });
  test("Renders correctly with showModal true", () => {
    const instanceModalShown = create(<Detail
      repo={{}}
      handleCloseModal={() => {}}
      showModal={true}
    />).root;
    expect(instanceModalShown.findAllByProps(
      {className: "modal display-none"}
    )).toHaveLength(0);
    expect(instanceModalShown.findAllByProps(
      {className: "modal display-block"}
    )).toHaveLength(1);
  });
  test("Clicking close button calls handleCloseModal", () => {
    const mockCloseModal = jest.fn();
    const { getByRole } = render(<Detail
      repo={{}}
      handleCloseModal={mockCloseModal}
      showModal={true}
    />);
    const button = getByRole("button", {id: "close-modal-button"});
    fireEvent.click(button);
    expect(mockCloseModal).toHaveBeenCalled();
  });
});
