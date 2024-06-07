import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "../NewBoxForm";

// smoke test
it('should render without crashing', () => { 
    render(<NewBoxForm />);
})

// snapshot test
it('should match snapshot', () => { 
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
})
