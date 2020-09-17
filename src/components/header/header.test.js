import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

import Header from "./header";
import { Link } from "react-router-dom";

describe("<Header />", () => {
  it("Header component should be created", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toBeTruthy();
  });
  it("Header component should  render 7 Links", () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find(Link)).toHaveLength(7);
  });
  it("Header component should  render 8 Links when authenticated", () => {
    const wrapper = shallow(<Header profile />);

    expect(wrapper.find(Link)).toHaveLength(8);
  });
});
