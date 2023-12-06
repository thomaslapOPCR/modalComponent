import Dropdown from "../lib/DropDown";

const MyComponent = () => {
    const handleDropdownChange = (value) => {
        console.log('Selected value:', value);
    };

    return (
        <Dropdown
            value="Option 1"
            onChange={handleDropdownChange}
            placeholder="Select an option"
            styleProps={{
                dropdownButtonStyle: {
                    // Custom styles for the dropdown button
                    // ...
                },
                arrowIconStyle: {
                    // Custom styles for the arrow icon
                    // ...
                },
                dropdownMenuStyle: {
                    // Custom styles for the dropdown menu
                    // ...
                },
            }}
        >
            <div data-value="Option 1">Option 1</div>
            <div data-value="Option 2">Option 2</div>
            <div data-value="Option 3">Option 3</div>
        </Dropdown>
    );
};

export default MyComponent;
