import { render, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";
import Todo from "../Todo";

it('should render without crashing', () => { 
    render(<TodoList />);
})

it('should match snapshot', () => { 
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
})

it('should add new todo', () => { 
    const { queryByText, getByLabelText } = render(<TodoList />);

    // No new todo
    expect(queryByText("Test add todo", {exact: false})).not.toBeInTheDocument();
    
    const taskInput = getByLabelText("Description:");
    const addTaskBtn = queryByText("Add Task");
    
    //Fill out the form
    fireEvent.change(taskInput, {target: {value: "Test add todo"}});
    fireEvent.click(addTaskBtn);
    
    expect(queryByText("Test add todo", {exact: false})).toBeInTheDocument();
 })

it('should delete a todo item', () => { 
    const { queryByText, debug } = render(<TodoList />);

    //Check that item to delete exists
    const task = queryByText("Water flowers", {exact: false});
    expect(task).toBeInTheDocument();
    
    const deleteBtn = task.querySelector(".Todo-deleteBtn");
    expect(deleteBtn).toBeInTheDocument();
    fireEvent.click(deleteBtn);
    expect(task).not.toBeInTheDocument();
})

it('should strikethrough an item when "Mark as complete" is pressed', () => { 
    const { queryByText } = render(<TodoList />);

    //Check that item to mark as complete exists
    const task = queryByText("Water flowers", {exact: false});
    expect(task).toBeInTheDocument();
    expect(task).not.toHaveStyle({textDecoration: "line-through"});

    const completeBtn = task.querySelector(".Todo-completeBtn");
    fireEvent.click(completeBtn);
    expect(task).toHaveStyle({textDecoration: "line-through"});
})

it('should edit a task', () => { 
    const { container, queryByText, queryByLabelText, debug } = render(<TodoList />);

    expect(container.querySelectorAll(".Todo-editBtn").length).toEqual(3);
    
    //check that the item to edit exists
    const task = queryByText("Water flowers", {exact: false});
    expect(task).toBeInTheDocument();
    
    //Check that edit task form appears
    expect(queryByLabelText("Edit Task:", {exact: false})).not.toBeInTheDocument();
    
    const toggleEditBtn = task.querySelector(".Todo-editBtn");
    fireEvent.click(toggleEditBtn);
    const editInput = queryByLabelText("Edit Task:", {exact: false});
    expect(editInput).toBeInTheDocument();
    
    const submitEditBtn = queryByText("Submit");
    expect(submitEditBtn).toBeInTheDocument();
    
    fireEvent.change(editInput, {target: {value: "Testing edit task"}});
    fireEvent.click(submitEditBtn);
    expect(queryByText("Testing edit task", {exact: false})).toBeInTheDocument();
    
    // number of tasks hasn't changed
    expect(container.querySelectorAll(".Todo-editBtn").length).toEqual(3);
})

afterEach(() => {
    localStorage.clear();
})

