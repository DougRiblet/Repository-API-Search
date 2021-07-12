import React from "react";
import { create } from "react-test-renderer";

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
    const instanceModalHidden = create(<Detail
      repo={{}}
      handleCloseModal={() => {}}
      showModal={true}
    />).root;
    expect(instanceModalHidden.findAllByProps(
      {className: "modal display-none"}
    )).toHaveLength(0);
    expect(instanceModalHidden.findAllByProps(
      {className: "modal display-block"}
    )).toHaveLength(1);
  });
})