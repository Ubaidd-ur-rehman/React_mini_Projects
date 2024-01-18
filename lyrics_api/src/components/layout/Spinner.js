import React from "react";
import { ScaleLoader } from "react-spinners";

class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <ScaleLoader
          
          size={150}
          color={"#123abc"}
          loading={this.state.loading}
          speedMultiplier={1.5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
}

export default AwesomeComponent;
