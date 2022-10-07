import { render, screen, fireEvent, } from "@testing-library/react";
import NewUser from "./Components/newUser";
import { userReducer } from "./State/userSlice";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const initialState = { username: "" };

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  initialState
});

const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

test("render error message if input is empty", () => {
  render(<NewUser />, { wrapper: Wrapper });
  const button = screen.getByRole('button')
  fireEvent.click(button)
  expect(screen.getByText('Please enter you name first')).toBeInTheDocument()
});


