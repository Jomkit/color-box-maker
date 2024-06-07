import { render, fireEvent } from "@testing-library/react";
import BoxList from "../BoxList";

// Smoke test
it('should render without crashing', () => { 
    render(<BoxList />);
})

// Snapshot test
it('should match snapshot', () => { 
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

it('should add new box', () => { 
    const { container, getByLabelText, queryByText } = render(<BoxList />);
    
    //check that box doesn't exist yet
    expect(container).not.toContainHTML(`div class="Box" style="width: 50px; height: 50px; background-color: gray;"`)
    
    const colorInput = getByLabelText('Color');
    const heightInput = getByLabelText('Height');
    const widthInput = getByLabelText('Width');
    const submitBtn = queryByText("Add Box");
    
    // fill out the form
    fireEvent.change(colorInput, { target: { value: "gray" } });
    fireEvent.change(heightInput, { target: { value: "50px" } });
    fireEvent.change(widthInput, { target: { value: "50px" } });
    fireEvent.click(submitBtn);
    
    expect(container).toContainHTML(`div class="Box" style="width: 50px; height: 50px; background-color: gray;"`)
})

it('should delete a box', () => { 
    const { container, queryByText } = render(<BoxList />);
    const deleteBtn = container.querySelector(".Box-deleteBtn");
    
    expect(container).toContainHTML(`div class="Box" style="width: 100px; height: 100px; background-color: lightblue;"`);
    
    fireEvent.click(deleteBtn);
    expect(container).not.toContainHTML(`div class="Box" style="width: 100px; height: 100px; background-color: lightblue;"`);
 })