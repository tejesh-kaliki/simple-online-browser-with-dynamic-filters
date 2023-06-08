import { Component } from "react";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Label,
} from "reactstrap";

class CustomDropdown extends Component {
  constructor(props) {
    super(props);
    this.items = props.items;
    this.name = props.name;
    this.state = { isOpen: false, selectedItems: [] };
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  formatItem(item) {
    if (item == null) return item;
    if (item.length > 30) return item.slice(0, 30) + "...";
    return item;
  }

  clearSelections() {
    this.setState({ selectedItems: [] });
  }

  getFilters = () => this.state.selectedItems;

  handleSelect(item) {
    const selectedItems = this.state.selectedItems;
    const index = selectedItems.indexOf(item);
    if (index == -1) selectedItems.push(item);
    else selectedItems.splice(index, 1);

    this.setState({ selectedItems: selectedItems });
  }

  render() {
    const sCount = this.state.selectedItems.length;
    const name = this.name + (sCount > 0 ? " (" + sCount + " selected)" : "");
    const dropdownItems = this.items.map((item) => (
      <DropdownItem
        key={item}
        toggle={false}
        onClick={() => this.handleSelect(item)}
      >
        <Input
          type="checkbox"
          checked={this.state.selectedItems.includes(item)}
          readOnly
        />
        <Label check className="ps-2">
          {this.formatItem(item)}
        </Label>
      </DropdownItem>
    ));

    return (
      <Dropdown isOpen={this.state.isOpen} toggle={this.toggleOpen}>
        <DropdownToggle caret color={sCount > 0 ? "success" : "primary"}>
          {name}
        </DropdownToggle>
        <DropdownMenu style={{ maxHeight: "50vh", overflowY: "auto" }}>
          {dropdownItems}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default CustomDropdown;
