import { render, screen } from "@testing-library/react";
import App from "./App.tsx";
import { userEvent } from "@testing-library/user-event";

describe("App", () => {

	it("when the app is open, count 0 is displayed.", () => {
		render(<App/>)

		expect(screen.getByText("count is 0")).toBeInTheDocument()
	})

	it("when the button is pressed, count 1 is displayed.", async () => {
		render(<App/>)

		await userEvent.click(screen.getByText("count is 0"))

		expect(screen.getByText("count is 1")).toBeInTheDocument()
	})

})