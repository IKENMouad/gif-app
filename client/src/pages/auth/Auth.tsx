import Login from "../../component/Login";
import "./auth.style.scss";

const Auth = () => {
  return (
    <div>
      <div className="split left">
        <div className="row mt-5 ">
          <div className="col-md-6 mx-auto">
            <div className="">
              <Login></Login>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
