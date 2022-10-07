import NewChat from "./Components/newChat";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./State/userSlice";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const initialState = { username: "" };
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

test("User shoud be able to enter message", () => {
  render(<NewChat />, { wrapper: Wrapper });
  userEvent.type(screen.getByPlaceholderText(/Message/i), "testing message");
  expect(screen.getByDisplayValue("testing message")).toBeInTheDocument();
});

