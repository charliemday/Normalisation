import React, { Component } from "react";
import { connect } from "react-redux";
import ApiActions, { ApiSelectors } from "../Redux/ApiRedux";

class RootContainer extends Component {
  componentDidMount() {
    this.props.apiRequest();
  }

  render() {
    const { normalizedData, originalData } = this.props;
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>
          This is where the API Normalized data should go (check console logs
          for better format)
        </h2>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 20, width: "40%" }}>
            <h3>Original Data</h3>
            <div style={{ border: "solid 2px gray", overflow: "auto" }}>
              <code style={{ fontSize: 8 }}>
                {JSON.stringify(originalData, null, "\t")}
              </code>
            </div>
          </div>
          <div style={{ flex: 1, padding: 20, width: "40%" }}>
            <h3>Normalized Data</h3>
            <div style={{ border: "solid 2px gray", flexWrap: "wrap" }}>
              <code style={{ fontSize: 8 }}>
                {JSON.stringify(normalizedData, undefined, "\t")}
              </code>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    normalizedData: ApiSelectors.getNormalizedData(state),
    originalData: ApiSelectors.getOriginalData(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    apiRequest: () => dispatch(ApiActions.apiRequest()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);
