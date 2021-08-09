import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import styles from './loading.module.css'
import toastr from "toastr";

const Loading = ({ error }) => {
  const displaToastr = (error) => {
    toastr.error("Somethings happened: " + error, "Opps!");
    return true;
  };

  return (
    <div>
      {error && displaToastr(error) && (
        <div className={styles.loading}>
          <Spinner animation="border" role="status" variant="danger"></Spinner>
        </div>
      )}
    </div>
  );
};

export default Loading
