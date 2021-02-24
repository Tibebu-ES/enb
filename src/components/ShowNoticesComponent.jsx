import React, { Component } from "react";
import NoticeService from "../services/NoticeService";
import { Button } from "react-bootstrap";

class ShowNoticesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notices: [],
    };
  }

  componentDidMount() {
    NoticeService.getTodaysNotices().then((res) => {
      this.setState({ notices: res.data });
    });
  }

  render() {
    return (
      <div className="row mt-5">
        {this.state.notices.map((notice) => (
          <div className="col-lg-4 mb-4 grid-margin">
            <div className="card h-100" key={notice.id}>
              <h6 className="card-header">{notice.title}</h6>
              <div className="card-body">
                <p className="card-text"> {notice.message}</p>
              </div>
              <div className="card-footer">
                <Button variant="btn btn-primary">Learn More</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ShowNoticesComponent;
