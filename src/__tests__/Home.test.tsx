import { useRouter } from "next/router";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

// Components
import Home from "@/pages/index";

// Utils
import { fillInForm } from "@/testUtils";

jest.mock("next/router", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

// setup a new mocking function for push method
const pushMock = jest.fn();

(useRouter as jest.Mock).mockReturnValue({
  push: pushMock,
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("Home", () => {
  test("redirect to /orders when submitted", async () => {
    // Arrange
    render(<Home />);

    // Act
    await fillInForm(screen);
    await userEvent.click(screen.getByRole("button"));

    // Assert
    expect(screen.queryByText("Something went wrong")).toBeNull();
    expect(pushMock).toHaveBeenCalledWith("/orders");
  });

  test("handles validation errors", async () => {
    // Arrange
    render(<Home />);

    // Act
    await userEvent.click(screen.getByRole("button"));

    // Assert
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(pushMock).not.toHaveBeenCalled();
  });
});
