import CardHeader from "../../component/CardHeader";
import Alert from "../../shared/Alert";
import styles from "./sticher.module.scss";

const SticherList = () => {

    return (
      <div className={styles.sticherBody}>
        <div className={styles.sticherLeft}>
          <div>
            <CardHeader></CardHeader>
          </div>
          <div>
            <Alert status="status-primary" ></Alert>
          </div>
        </div>
        <div className={styles.sticherRight}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, a!
        </div>
      </div>
    );

}

export default SticherList;