import React from "react";

class BackButton extends React.Component {
   render() {
      return (
         <button className="backBtn" onClick={this.props.toggleOff}>
            Back
         </button>
      );
   }
}

export default BackButton;
