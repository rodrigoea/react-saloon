import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

/** Component */
import Home from "./Home";

import mockedSalons from "../../mocks/salons.json";
import JestProvider from "../../utils/JestProvider";

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

describe("[ Home ]", () => {
  const initialState = {
    salons: {
      list: mockedSalons
    }
  };

  let store;
  let container;
  let component;
  let props;

  beforeEach(() => {
    props = {
      fetchSalons: jest.fn(() => Promise.resolve())
    };

    store = mockStore(initialState);
    container = document.createElement("div");
    document.body.appendChild(container);

    component = (
      <JestProvider>
        <Home fetchSalons={props.fetchSalons} store={store} />
      </JestProvider>
    );

    act(() => {
      ReactDOM.render(component, container);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("Renders Component and it matches snapshot", () => {
    expect(container).toMatchSnapshot();
  });

  // TODO: Create a test scenario to check if fetchSalons has been called.
});
