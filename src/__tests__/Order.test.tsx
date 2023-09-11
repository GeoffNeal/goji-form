import {
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";

// Components
import Orders from "../pages/orders";

afterEach(cleanup);

describe("Table", () => {
  test("renders correct number of rows", async () => {
    // Arrange
    render(<Orders />);

    // Assert
    await waitFor(() => expect(screen.getAllByRole("row")).toHaveLength(3)); // The table header is considered a row, and we have 2 results
  });

  test("data is accurate", async () => {
    // Arrange
    render(<Orders />);

    // Assert
    await waitFor(() => {
      const [name, amount, shareClass, date] = within(
        screen.getAllByRole("row")[1] // Get the first row after the header - probably a better way to do this...
      ).getAllByRole("cell");

      expect(name.textContent).toBe("Testy McTestington");
      expect(amount.textContent).toBe("20000 - EUR");
      expect(shareClass.textContent).toBe("ACME Partners Private Fund");
      expect(date.textContent).toBe("2023-09-28");
    });
  });
});
