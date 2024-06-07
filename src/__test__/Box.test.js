import { render, fireEvent } from "@testing-library/react";
import Box from "../Box";

const mockDelete = jest.fn();

//Smoke Test
it('should render without crashing', () => { 
    render(<Box key={1} width="200px" height="200px" backgroundColor="blue" deleteBox />);
})

// Snapshot Test
it('should matchshot', () => { 
    const { asFragment } = render(<Box key={1} width="200px" height="200px" backgroundColor="blue" />);

    expect(asFragment()).toMatchSnapshot();
})  

// Test that function is called
// 6/7/24 - Why does this delete the box even if the function isn't passed as prop?
it('should call deleteBox when delete button clicked', () => { 
    const { queryByText } = render(<Box key={1} width="200px" height="200px" backgroundColor="blue" deleteBox={mockDelete} />);

    const deleteBtn = queryByText('X');
    expect(deleteBtn).toBeInTheDocument();
    fireEvent.click(deleteBtn);
    expect(mockDelete).toHaveBeenCalledTimes(1);
})