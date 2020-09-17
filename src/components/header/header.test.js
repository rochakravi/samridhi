import React from "react";

import {configure, shallow } from "enzyme";
import Adaptor from 'enzyme-adapter-react-16;

 configure({ adaptor : new Adaptor()});





import Header from "./header";

describe("<Header />", () => {
  it("Should render only one link/ Home Link when user is not autherized", () => {

    const wrapper = shallow(<Header />);

    expect(wrapper.find(Link)).toBeTruthy()


  });
});
