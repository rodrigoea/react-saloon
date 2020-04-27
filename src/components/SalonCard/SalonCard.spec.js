import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import SalonCard from "./SalonCard";

/** JestProvider */
import JestProvider from "../../utils/JestProvider";

describe("[ SalonCard ]", () => {
  let container;
  let componentToRender;
  const config = {
    api_identifier: "123",
    data: {
      photo: "fakemock",
      location_name: "fakemock",
      address_1: "fakemock",
      address_2: "fakemock",
      city: "fakemock",
      state: "fakemock"
    }
  };

  beforeEach(() => {
    container = document.createElement("div");
    componentToRender = (
      <JestProvider>
        <SalonCard {...config} />
      </JestProvider>
    );
  });

  it("Renders Component and it matches snapshot", () => {
    act(() => {
      ReactDOM.render(componentToRender, container);
    });
    expect(container).toMatchSnapshot();
  });
});
