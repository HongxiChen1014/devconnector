import React from 'react';
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <div>
      
    </div>
  )
}

const mapStateToProps = state => ({
    auth: state.auth
  });
  


export default connect(mapStateToProps)(PrivateRoute);
