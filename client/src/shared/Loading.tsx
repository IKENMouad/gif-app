import Spinner from "react-bootstrap/Spinner";
import styles from "./loading.module.scss";
import * as toastr from "toastr";

const Loading = ({ error }: { error: any }) => {
  const displaToastr = (error: any) => {
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

export default Loading;
