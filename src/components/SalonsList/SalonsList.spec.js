import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import SalonsList from "./SalonsList";

/** mock */
import salons from "../../mocks/salons.json";

/** JestProvider */
import JestProvider from "../../utils/JestProvider";

describe("[ SalonsList ]", () => {
  let container;
  let componentToRender;

  beforeEach(() => {
    container = document.createElement("div");
    componentToRender = (
      <JestProvider>
        <SalonsList salons={salons} />
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
