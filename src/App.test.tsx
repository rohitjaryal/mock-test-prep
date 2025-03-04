import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Todo App", () => {
  test("renders Todo List heading", () => {
    render(<App />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("prevents adding an empty todo", () => {
    render(<App />);
    const addButton = screen.getByText("Add");

    window.alert = jest.fn();
    fireEvent.click(addButton);

    expect(window.alert).toHaveBeenCalledWith("Input should not be empty!");
  });

  test("toggles todo completion", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Task to Toggle" } });
    fireEvent.click(addButton);

    const toggleButton = screen.getByText("In-completed");
    fireEvent.click(toggleButton);

    expect(screen.getByText("Completed")).toBeInTheDocument();
  });

  test("deletes a todo", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Task to Delete" } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Task to Delete")).not.toBeInTheDocument();
  });
});
