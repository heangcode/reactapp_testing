import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("Button", () => {
  it("should call the onClick function when clicked", () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(<Button onClick={onClickMock} text="Click me!" />);
    wrapper.find("button").simulate("click");
    expect(onClickMock).toHaveBeenCalled();
  });

  it("should display the correct text", () => {
    const wrapper = shallow(<Button onClick={() => {}} text="Click me!" />);
    expect(wrapper.text()).toBe("Click me!");
  });
});
