import { render } from "@testing-library/react"
import Form from "../Form";

it('should render without crashing', () => { 
    render(<Form />);
})

it('should match snapshot', () => { 
    const { asFragment } = render(<Form />);
    expect(asFragment()).toMatchSnapshot();
})

