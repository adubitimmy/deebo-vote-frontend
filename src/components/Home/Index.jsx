import "../Home/style.css";
import { Link } from "react-router-dom";
import CustomCard from "../customCard/customCard";
import CountDownTimer from "../CountDown/Timer";

const Home = () => {
  return (
    <>
      <div className="row">
        <h3
          className="display-3 fw-bolder text-center"
          style={{ fontFamily: "AS Monaco Diagonale" }}
        >
          WHO WOULD YOU BE VOTING <br /> FOR IN 2023?
        </h3>
        <p
          className="lead fw-bolder text-center"
          style={{ fontFamily: "AS Monaco Diagonale", color:"red" }}
        >
          <CountDownTimer />
        </p>
      </div>
      <CustomCard />
      <section className="bg-img   mask text-white text-center mx-auto h-25">
        <div className="container-fluid ">
          <div className="row ">
            <header className="container mx-auto text-center p-5 my-5">
              <h3 className="display-4  ">SEND US A REQUEST</h3>
              <p>
                Explore the vast range of events and competition happening now!
              </p>
            </header>
            <div className="form-group">
              <button className="btn-vote-white btn btn-lg w-0 btn-light mx-auto mb-3">
                <Link
                  to="forms/"
                  style={{ color: "white", textDecoration: "None" }}
                >
                  Go Now
                </Link>
              </button>
            </div>
            <div className="bt-content">
              <div className="bg-gradient-diagonal"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
