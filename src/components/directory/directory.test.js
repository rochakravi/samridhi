import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

import Directory from "./directory";
import MenuItem from "./../menu/menu-item";

describe("<Directory />", () => {
  it("Directory compo Should Render 5 collection preview  titles", () => {
    const wrapper = shallow(<Directory />);

    expect(wrapper.find(MenuItem)).toHaveLength(5);
  });
  //   it("Should Render collection preview titles", () => {
  //     const wrapper = shallow(<Directory />);

  //     expect(wrapper.find(MenuItem)).toBeGreaterThan(0);
  //   });
});
