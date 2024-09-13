import React, { Component } from "react";
import Jobs from "./components/Jobs/Jobs"; // Adjust the path based on the folder structure
import Bookmarks from "./components/Bookmarks/Bookmarks"; // Import Bookmarks component
import "./App.css";                   // Import App styles

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Jobs",
      bookmarkedJobs: JSON.parse(localStorage.getItem("bookmarkedJobs")) || [],
    };
  }

  switchTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  handleBookmark = (job) => {
    const { bookmarkedJobs } = this.state;
    const updatedBookmarks = [...bookmarkedJobs, job];
    this.setState({ bookmarkedJobs: updatedBookmarks });
    localStorage.setItem("bookmarkedJobs", JSON.stringify(updatedBookmarks));
  };

  render() {
    const { activeTab, bookmarkedJobs } = this.state;
    return (
      <div className="App">
        <div className="content">
          {activeTab === "Jobs" ? (
            <Jobs onBookmark={this.handleBookmark} />
          ) : (
            <Bookmarks bookmarkedJobs={bookmarkedJobs} />
          )}
        </div>
        <div className="bottom-nav">
          <button
            className={activeTab === "Jobs" ? "active" : ""}
            onClick={() => this.switchTab("Jobs")}
          >
            Jobs
          </button>
          <button
            className={activeTab === "Bookmarks" ? "active" : ""}
            onClick={() => this.switchTab("Bookmarks")}
          >
            Bookmarks
          </button>
        </div>
      </div>
    );
  }
}

export default App;
