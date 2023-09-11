import { Screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export const fillInForm = async (screen: Screen) => {
  await userEvent.type(
    screen.getByLabelText("Investor Name"),
    "Testy McTesterson"
  );
  await userEvent.type(screen.getByLabelText("Subscription Amount"), "10000");
  await userEvent.type(screen.getByLabelText("Submission Date"), "2023-09-10");
};
