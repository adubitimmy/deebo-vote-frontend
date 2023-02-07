import "./main.css";
import { Link } from "react-router-dom";
import Card from "../customCard/customCard";
import TopRead from "./Top";
const More = () => {
  return (
    <>
      <div className="container">
        <TopRead />
      </div>
      <div className="container">
        <Card />
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-12 col-12">
          <img
            className="shadow img img-fluid"
            src="assets/Bola-Tinubu-large.png"
            alt=""
          />
        </div>
        <div className="col-lg-4 col-md-12 col-12">
          <img
            className="shadow img img-fluid"
            src="assets/atiku Large.png"
            alt=""
          />
        </div>
        <div className="col-lg-4 col-md-12 col-12">
          <img
            className="shadow img img-fluid"
            src="assets/Obi Large.png"
            alt=""
          />
        </div>
      </div>
      <div className="container"></div>
      <table className="table table-hover table-bordered container-fluid d-flex gap-3 mx-auto justify-content-center align-item-center text-center">
        <tbody className="row">
          <tr className="col-lg-12 col-md-6 col-4">
            <td>
              <p>Per Vote</p>
              <h5 className="bold">Free</h5>
            </td>
            <td>
              <p>Vote Type</p>
              <h5 className="bold">One Vote Per Person</h5>
            </td>
            <td>
              <p>Event Ticket</p>
              <h5 className="bold">Unavailable</h5>
            </td>
            <td>
              <p>Refunds</p>
              <h5 className="bold">Unavailable</h5>
            </td>
            <td>
              <p>Category</p>
              <h5 className="bold">Political</h5>
            </td>
            <td>
              <p>Event Date</p>
              <h5 className="bold">23rd February 2023</h5>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="jumbotron container">
        <div className="row container p-3 mx-auto">
          <div className="col-lg-4 col-md-4 col-12 d-flex justify-content-right">
            <p className="text-white text-bold d-block text-dimention">
              <span>You can collect realtime polls</span> <br />
              <span>with us. For free!</span>
            </p>
          </div>
          <div className="col-lg-8 col-md-8 col-12">
            <button className="white-border-button btn btn-lg border border-dark text-white">
              <Link
                to="/forms"
                style={{ color: "white", textDecoration: "None" }}
              >
                Send a Request
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="d-flex align-items-start">
          <div
            className="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="btn btn-primary active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <div
                className="text-white bg-primary p-4"
                style={{ maxWidth: "650px" }}
              >
                <div className="row g-0">
                  <div className="col-lg-3 col-md-3 col-3">
                    <img
                      className="img-fluid"
                      src="../public/assets/Labour_Partylogo.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="../public/assets/Bola-Tinubu-11.png"
                      loading="lazy"
                      alt=""
                    />
                    <p>image</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-6">
                    <div className="card-body">
                      <h5 className="card-title">Bola Ahmed Tinubu</h5>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      width="30"
                    >
                      <path
                        d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                        style={{ color: "white" }}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="btn btn-primary"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              <div
                className="text-white bg-primary p-4"
                style={{ width: "640px" }}
              >
                <div className="row g-0 mx-auto p-3">
                  <div className="col-lg-3 col-md-3 col-3">
                    <img
                      className="img-fluid"
                      src="assets/Labour_Partylogo.png"
                      alt=""
                      loading="lazy"
                    />
                    <img
                      src="assets/Labour_Party_(Nigeria)_logo.png"
                      loading="lazy"
                      alt=""
                    />
                    <p>Abubakar here</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-6">
                    <div className="card-body">
                      <h5 className="card-title">Abubakar Atiku</h5>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-3 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      width="30"
                    >
                      <path
                        d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                        style={{ color: "white" }}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="btn btn-primary"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              <div
                className="text-white bg-primary p-4"
                style={{ width: "640px" }}
              >
                <div className="row g-0">
                  <div className="col-lg-3 col-md-3 col-3">
                    <img
                      className="img-fluid"
                      src="assets/Labour_Partylogo.png"
                      alt=""
                      loading="lazy"
                    />
                    <p>content1</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-6">
                    <div className="card-body">
                      <h5 className="card-title">Peter Obi</h5>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      width="30"
                    >
                      <path
                        d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                        style={{ color: "white" }}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <div className="container p-3">
                <h3 className="bold">Ashiwaju Bola Ahmed Tinubu</h3>
                <div className="leadp">
                  By using our converter you can easily convert YouTube videos
                  to mp3 (audio) or mp4 (video) files and download them for free
                  - this service works for computers, tablets and mobile
                  devices.
                </div>
                <h5 className="bold">Manifesto</h5>
                <div className="lead">
                  By using our converter you can easily convert YouTube videos
                  to mp3 (audio) or mp4 (video) files and download them for free
                  - this service works for computers, tablets and mobile
                  devices.
                </div>
                <h5 className="bold">Brief Portfolio Summary</h5>
                <div className="lead">
                  By using our converter you can easily convert YouTube videos
                  to mp3 (audio) or mp4 (video) files and download them for free
                </div>
                <div className="lead">
                  - this service works for computers, tablets and mobile
                  devices. The videos are always converted in the highest
                  available quality. Please note that we can only convert videos
                  up to a length of 1 hour{" "}
                </div>
                <div className="lead">
                  - the limitation is necessary, so the conversion of any video
                  will not take more than a couple of minutes. Our service is
                  for free and does not require any software or registration. By
                  using our service you are accepting our terms of use. To
                  convert a video, copy the YouTube video URL into our
                  converter, choose a format and click the convert button. As
                  soon as the conversion is finished you can download the file
                  by clicking on the download button. Enjoy! We hope you like
                  our service.By using our converter you can easily convert
                  YouTube videos to mp3 (audio) or mp4 (video) files and
                  download them for free{" "}
                </div>
                <div className="lead">
                  - this service works for computers, tablets and mobile
                  devices. The videos are always converted in the highest
                  available quality. Please note that we can only convert videos
                  up to a length of 1 hour
                </div>
                <div className="lead">
                  - the limitation is necessary, so the conversion of any video
                  will not take more than a couple of minutes. Our service is
                  for free and does not require any software or registration. By
                  using our service you are accepting our terms of use. To
                  convert a video, copy the YouTube video URL into our
                  converter, choose a format and click the convert button. As
                  soon as the conversion is finished you can download the file
                  by clicking on the download button. Enjoy! We hope you like
                  our service.
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <div className="container p-3">
                <h3 className="bold">Abubakar Atiku</h3>
                <div className="lead">
                  By using our converter you can easily convert YouTube videos
                  to mp3 (audio) or mp4 (video) files and download them for free
                  - this service works for computers, tablets and mobile
                  devices.
                </div>
                <h5 className="bold">Manifesto</h5>
                <div className="lead">
                  By using our converter you can easily convert YouTube videos
                  to mp3 (audio) or mp4 (video) files and download them for free
                  - this service works for computers, tablets and mobile
                  devices.
                </div>
                <h5 className="bold">Brief Portfolio Summary</h5>
                <div className="lead">
                  By using our converter you can easily convert YouTube videos
                  to mp3 (audio) or mp4 (video) files and download them for free
                </div>
                <div className="lead">
                  - this service works for computers, tablets and mobile
                  devices. The videos are always converted in the highest
                  available quality. Please note that we can only convert videos
                  up to a length of 1 hour{" "}
                </div>
                <div className="lead">
                  - the limitation is necessary, so the conversion of any video
                  will not take more than a couple of minutes. Our service is
                  for free and does not require any software or registration. By
                  using our service you are accepting our terms of use. To
                  convert a video, copy the YouTube video URL into our
                  converter, choose a format and click the convert button. As
                  soon as the conversion is finished you can download the file
                  by clicking on the download button. Enjoy! We hope you like
                  our service.By using our converter you can easily convert
                  YouTube videos to mp3 (audio) or mp4 (video) files and
                  download them for free{" "}
                </div>
                <div className="lead">
                  - this service works for computers, tablets and mobile
                  devices. The videos are always converted in the highest
                  available quality. Please note that we can only convert videos
                  up to a length of 1 hour
                </div>
                <div className="lead">
                  - the limitation is necessary, so the conversion of any video
                  will not take more than a couple of minutes. Our service is
                  for free and does not require any software or registration. By
                  using our service you are accepting our terms of use. To
                  convert a video, copy the YouTube video URL into our
                  converter, choose a format and click the convert button. As
                  soon as the conversion is finished you can download the file
                  by clicking on the download button. Enjoy! We hope you like
                  our service.
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <div className="container p-3">
                <h3 className="bold">Peter Obi</h3>
                <div className="lead">
                  By using our converter you can easily convert YouTube videos
                  to mp3 (audio) or mp4 (video) files and download them for free
                  - this service works for computers, tablets and mobile
                  devices.
                </div>
                <h5 className="bold">Manifesto</h5>
                <div className="lead">
                  By using our converter you can easily convert YouTube videos
                  to mp3 (audio) or mp4 (video) files and download them for free
                  - this service works for computers, tablets and mobile
                  devices.
                </div>
                <h5 className="bold">Brief Portfolio Summary</h5>
                <div className="lead">
                  By using our converter you can easily convert YouTube videos
                  to mp3 (audio) or mp4 (video) files and download them for free
                </div>
                <div className="lead">
                  - this service works for computers, tablets and mobile
                  devices. The videos are always converted in the highest
                  available quality. Please note that we can only convert videos
                  up to a length of 1 hour{" "}
                </div>
                <div className="lead">
                  - the limitation is necessary, so the conversion of any video
                  will not take more than a couple of minutes. Our service is
                  for free and does not require any software or registration. By
                  using our service you are accepting our terms of use. To
                  convert a video, copy the YouTube video URL into our
                  converter, choose a format and click the convert button. As
                  soon as the conversion is finished you can download the file
                  by clicking on the download button. Enjoy! We hope you like
                  our service.By using our converter you can easily convert
                  YouTube videos to mp3 (audio) or mp4 (video) files and
                  download them for free{" "}
                </div>
                <div className="lead">
                  - this service works for computers, tablets and mobile
                  devices. The videos are always converted in the highest
                  available quality. Please note that we can only convert videos
                  up to a length of 1 hour
                </div>
                <div className="lead">
                  - the limitation is necessary, so the conversion of any video
                  will not take more than a couple of minutes. Our service is
                  for free and does not require any software or registration. By
                  using our service you are accepting our terms of use. To
                  convert a video, copy the YouTube video URL into our
                  converter, choose a format and click the convert button. As
                  soon as the conversion is finished you can download the file
                  by clicking on the download button. Enjoy! We hope you like
                  our service.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 col-md-12 col-12 d-flex"></div>
          <div className="col-lg-7 col-md-12 col-12"></div>
        </div>
      </div>
    </>
  );
};
export default More;
