import { render, fireEvent } from "@testing-library/react"
import Todo from "../Todo"

const mockDelete = jest.fn();

it('should render without crashing', () => { 
    render(<Todo />);
})

it('should match snapshot', () => { 
    const { asFragment } = render(<Todo task="Test Task" />);
    expect(asFragment()).toMatchSnapshot();
})

it('should call delete function when delete button is clicked', () => { 
    const { container, queryByText } = render(<Todo task="Test Task" deleteTodo={mockDelete}/>);
    const deleteBtn = container.querySelector("button");
    
    fireEvent.click(deleteBtn);
    expect(mockDelete).toHaveBeenCalled();
 })

