import React, { Component } from "react";
import "./Bookmarks.css";

class Bookmarks extends Component {
  render() {
    const { bookmarkedJobs } = this.props;

    return (
      <div className="bookmarks-container">
        {bookmarkedJobs.length === 0 ? (
          <p>No bookmarked jobs</p>
        ) : (
          bookmarkedJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>Location: {job.location}</p>
              <p>Salary: {job.salary}</p>
              <p>Phone: {job.phone}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Bookmarks;
