import axios from "axios";
import { Component, createRef } from "react";

import { Button, Col, Row } from "reactstrap";
import { FILTERS_URL } from "./constants";
import CustomDropdown from "./CustomDropdown";
import ArticleList from "./ArticleList";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: null,
      loadingFilters: true,
      appliedFilters: {},
    };
    this.childrenRef = {};
  }

  componentDidMount = () => this.resetState();

  getFilters = () => {
    axios.get(FILTERS_URL).then((res) => {
      this.childrenRef = {};
      for (let key in res.data) {
        this.childrenRef[key] = createRef();
      }
      this.setState({
        filters: res.data,
        loadingFilters: false,
      });
    });
  };

  clearFilters() {
    for (let key in this.childrenRef) {
      this.childrenRef[key].current.clearSelections();
    }
    this.setState({ appliedFilters: {} });
  }

  applyFilters() {
    const appliedFilters = {};
    for (let key in this.childrenRef) {
      const filters = this.childrenRef[key].current.getFilters();
      if (filters.length > 0) appliedFilters[key] = filters;
    }
    this.setState({ appliedFilters: appliedFilters });
  }

  resetState = () => this.getFilters();

  displayFilters() {
    if (this.state.loadingFilters) return <p>Loading Filters...</p>;

    const filters = this.state.filters;

    const dropdowns = [];
    for (let key in filters) {
      dropdowns.push(
        <Col xs="auto" className="px-2">
          <CustomDropdown
            name={key}
            key={key}
            items={filters[key]}
            ref={this.childrenRef[key]}
          />
        </Col>
      );
    }

    return (
      <Row className="mb-2">
        {dropdowns}
        <Col xs="auto" className="px-2" key="apply-filters">
          <Button outline color="success" onClick={() => this.applyFilters()}>
            Apply Filters
          </Button>
        </Col>
        <Col xs="auto" className="px-2" key="clear-filters">
          <Button outline color="danger" onClick={() => this.clearFilters()}>
            Clear Filters
          </Button>
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <div className="mx-4">
        {this.displayFilters()}
        <ArticleList appliedFilters={this.state.appliedFilters} />
      </div>
    );
  }
}

export default Dashboard;
