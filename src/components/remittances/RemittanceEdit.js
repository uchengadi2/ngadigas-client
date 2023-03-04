import React from "react";
import { connect } from "react-redux";
import { fetchRemittance, editRemittance } from "../../actions";
import RemittanceEditForm from "./RemittanceEditForm";

class RemittanceEdit extends React.Component {
  componentDidMount() {
    //this.props.fetchCategory(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editRemittance(
      this.props.params.id,
      formValues,
      this.props.token
    );
    this.props.handleEditDialogOpenStatus();

    //console.log("the form values areeeee:", formValues);
  };

  render() {
    return (
      <>
        <RemittanceEditForm
          token={this.props.token}
          params={this.props.params}
          handleEditDialogOpenStatus={this.props.handleEditDialogOpenStatus}
          onSubmit={this.onSubmit}
        />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { remittance: state.remittance[ownProps.match.params.id] };
};

export default connect(null, { fetchRemittance, editRemittance })(
  RemittanceEdit
);
