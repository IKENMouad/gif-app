import styles from './shared.module.scss';

const Alert = ({ status = "status-warning" }) => {
  return (
    <div className={`py-4 ${status} ${styles.alert}`}>
      All the finest Tumblr users verify their email address. Check your inbox
      for the message we just sent.
    </div>
  );
};

export default Alert;
