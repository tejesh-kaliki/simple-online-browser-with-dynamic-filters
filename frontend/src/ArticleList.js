import axios from "axios";
import { Component } from "react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
  Spinner,
} from "reactstrap";
import { ARTICLES_URL } from "./constants";

class ArticleList extends Component {
  state = {
    loading: true,
    articles: [],
  };

  getArticles = (appliedFilters) => {
    let URL = ARTICLES_URL;
    let filters = new URLSearchParams(appliedFilters).toString();
    if (filters != "") URL = ARTICLES_URL + "?" + filters;
    axios
      .get(URL)
      .then((res) => this.setState({ articles: res.data, loading: false }));
  };

  resetState = () => this.getArticles(this.props.appliedFilters);

  componentDidMount = () => this.resetState();

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.appliedFilters != this.props.appliedFilters) {
      this.setState({ loading: true });
      this.getArticles(this.props.appliedFilters);
    }
  }

  render() {
    if (this.state.loading) return <Spinner>Loading...</Spinner>;

    let children = [];
    for (let article of this.state.articles) {
      const subtitles = [];
      if (article.end_year != null)
        subtitles.push("End Year: " + article.end_year);
      if (article.source != null) subtitles.push("Source: " + article.source);
      if (article.pestle != null) subtitles.push("Pestle: " + article.pestle);

      let cardFooter = null;
      if (subtitles.length > 0) {
        cardFooter = (
          <CardFooter>
            <CardText style={{ color: "#00000088", fontSize: 12 }}>
              {subtitles.join(", ")}
            </CardText>
          </CardFooter>
        );
      }

      children.push(
        <Col xs="3">
          <Card className="my-2" color="primary" outline>
            <CardBody>
              <CardTitle tag="h4">{article.insight}</CardTitle>
              <CardSubtitle style={{ color: "#00000088", fontSize: 12 }}>
                Topic: {article.topic}, Country: {article.country}
              </CardSubtitle>
              <CardText>{article.title}</CardText>
              <Button href={article.url}>Know More</Button>
            </CardBody>
            {cardFooter}
          </Card>
        </Col>
      );
    }

    return <Row>{children}</Row>;
  }
}

export default ArticleList;
