import React, { Component } from "react";
import axios from "axios";
import "./Jobs.css";

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      page: 1,
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchJobs();
  }

  fetchJobs = () => {
    const { page } = this.state;
    this.setState({ loading: true });

    axios
      .get(`https://testapi.getlokalapp.com/common/jobs?page=${page}`)
      .then((response) => {
        this.setState({
          jobs: [...this.state.jobs, ...response.data],
          loading: false,
          page: page + 1,
        });
      })
      .catch((error) => {
        this.setState({ error: "Failed to load jobs", loading: false });
      });
  };

  render() {
    const { jobs, loading, error } = this.state;
    const { onBookmark } = this.props;

    return (
      <div className="jobs-container">
        {jobs.length === 0 && !loading && <p>No jobs available</p>}
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salary}</p>
            <p>Phone: {job.phone}</p>
            <button onClick={() => onBookmark(job)}>Bookmark</button>
          </div>
        ))}
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && <button onClick={this.fetchJobs}>Load More</button>}
      </div>
    );
  }
}

export default Jobs;
