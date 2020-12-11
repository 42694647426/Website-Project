import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div class="row" style={props}>
            <ScrollToTopOnMount />
            <div class="col-sm-3">
              <div
                class="nav flex-column nav-pills"
                id=""
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  class="nav-link active"
                  id=""
                  data-toggle="pill"
                  href="#News/News"
                  role="tab"
                >
                  News
                </a>
                <a
                  class="nav-link"
                  id=""
                  data-toggle="pill"
                  href="#News/Events"
                  role="tab"
                >
                  Events
                </a>
              </div>
            </div>
            <div class="col-sm-9">
              <Link to={"/News/N1"}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Virtual Open House 2020 | Portes ouvertes virtuelle 2020
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Oct, 25, 2020
                    </Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link to={""}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Concerns related to COVID-19
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Oct, 5, 2020
                    </Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link to={""}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    ></Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Oct, 25, 2020
                    </Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link to={""}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Three SOCS professors are awarded large grants to use AI
                      to understand cancer
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Nov, 5, 2020
                    </Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link to={""}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Assistant Professor Oana Balmau wins CORE John Makepeace
                      Bennett Award
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Oct. 27, 2020
                    </Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link to={""}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Prof. Siva Reddy won the VentureBeat AI Innovation Award
                      2020
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Oct, 25, 2020
                    </Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link to={""}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Three Faculty Members Join the School of Computer Science
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Sept. 1, 2020
                    </Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link to={""}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    ></Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Oct, 25, 2020
                    </Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link to={""}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Prof. Siva Reddy won the VentureBeat AI Innovation Award
                      2020
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Aug. 3, 2020
                    </Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link to={""}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Winter 2020 TA Award Winners Announced
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      June 22, 2020
                    </Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link to={""}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Winter 2020 TA Award Winners Announced
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      June 22, 2020
                    </Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link to={""}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      COVID-19 resources
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      June 1, 2020
                    </Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link to={""}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Information for Incoming Undergraduate Students
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Welcome to the School of Computer Science!
                    </Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link to={""}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Update on Remote Course Delivery in Computer Science
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Dec. 4, 2019
                    </Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link to={""}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Prof. Xue Liu Elevated to IEEE Fellow for Class 2020
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Dec. 4, 2019
                    </Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link to={""}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Introduction to New SOCS Professors
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Sept. 2, 2019
                    </Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link to={""}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Genome Canada grant led by Profs. Waldispühl and
                      Blanchette on crowdsourcing for microbiome research
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Aug. 1, 2019
                    </Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link to={""}>
                <Card>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      The passing of Prof. Laurie Hendren
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Aug. 1, 2019
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default News;

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 600);
  }

  render() {
    return null;
  }
}
