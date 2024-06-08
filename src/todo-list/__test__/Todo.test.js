import { render, fireEvent } from "@testing-library/react"
import Todo from "../Todo"

it('should render without crashing', () => { 
    render(<Todo />);
})

it('should match snapshot', () => { 
    const { asFragment } = render(<Todo task="Test Task" />);
    expect(asFragment()).toMatchSnapshot();
})

it('should call delete function when delete button is clicked', () => { 
    const mockDelete = jest.fn();

    const { container, queryByText } = render(<Todo task="Test Task" deleteTodo={mockDelete}/>);
    const deleteBtn = container.querySelector(".Todo-deleteBtn");
    
    fireEvent.click(deleteBtn);
    expect(mockDelete).toHaveBeenCalled();
 })

it('should toggle edit form when edit button is clicked', () => { 
    const mockEdit = jest.fn();
    const { container, queryByText } = render(<Todo task="Test Task" editTodo={mockEdit}/>);
    const editBtn = queryByText("Edit");
    fireEvent.click(editBtn);
    expect(container).toContainHTML('</form>');
 })

it('should call completeTodo function when "Mark as completed" button pressed', () => { 
    const mockComplete = jest.fn();
    const { queryByText } = render(<Todo task={"Test task"} completeTodo={mockComplete} />);
    const completeBtn = queryByText("Mark as completed");
    fireEvent.click(completeBtn);

    expect(mockComplete).toHaveBeenCalled();
 })