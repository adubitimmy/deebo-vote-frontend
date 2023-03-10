import "../Footer/DFooter.css";
import { Link } from "@material-ui/core";
const DFooter = () => {
  const listStyle = {
    "list-style-type": "none",
  };
  return (
    <>
      <footer className="btn-black text-white flex-wrapper ">
      <div className="container-fluid py-0 my-0  h-100 mt-3">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8 col-12">
            <h1 className="footer-heading font-weight-bolder mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="614.498"
                height="132.001"
                viewBox="0 0 614.498 132.001"
                className="img img-fluid"
              >
                <g
                  id="Component_1_2"
                  data-name="Component 1 – 2"
                  transform="translate(0 0.001)"
                >
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M-64.591-6q0,18.328-7.82,32.515A54.851,54.851,0,0,1-94.9,48.636q-14.673,7.931-34.529,7.931H-176.35v-124.6h46.918q20.032,0,34.617,7.754a54.014,54.014,0,0,1,22.4,21.853Q-64.591-24.326-64.591-6Zm-67.477,35.6q17.572,0,27.325-9.34T-94.991-6q0-16.919-9.753-26.259t-27.325-9.34H-146.3V29.6ZM45.586,4.753a41.687,41.687,0,0,1-.879,8.107h-68q.527,11.1,5.623,15.949a18.105,18.105,0,0,0,13,4.846A17.737,17.737,0,0,0,6.4,30.307a15.638,15.638,0,0,0,5.8-8.636H44A41.736,41.736,0,0,1,35.57,40.265,44.973,44.973,0,0,1,19.052,53.13,52.171,52.171,0,0,1-3.264,57.8a52.573,52.573,0,0,1-25.567-6.08A43.381,43.381,0,0,1-46.316,34.185Q-52.642,22.729-52.642,7.4q0-15.509,6.238-26.876A42.813,42.813,0,0,1-28.92-36.926a53.082,53.082,0,0,1,25.655-6.08q14.585,0,25.655,5.992a42.266,42.266,0,0,1,17.133,16.83A50.216,50.216,0,0,1,45.586,4.753ZM15.186.171Q15.362-9.522,10-14.368A19.049,19.049,0,0,0-3.264-19.215,19.643,19.643,0,0,0-16.971-14.28Q-22.418-9.346-23.121.171ZM154.358,4.753a41.686,41.686,0,0,1-.879,8.107h-68Q86,23.963,91.1,28.809a18.105,18.105,0,0,0,13,4.846,17.737,17.737,0,0,0,11.07-3.348,15.638,15.638,0,0,0,5.8-8.636h31.806a41.735,41.735,0,0,1-8.435,18.593A44.973,44.973,0,0,1,127.824,53.13a52.171,52.171,0,0,1-22.317,4.67A52.573,52.573,0,0,1,79.94,51.72,43.381,43.381,0,0,1,62.455,34.185Q56.129,22.729,56.129,7.4q0-15.509,6.238-26.876A42.813,42.813,0,0,1,79.852-36.926a53.082,53.082,0,0,1,25.655-6.08q14.585,0,25.655,5.992A42.266,42.266,0,0,1,148.3-20.184,50.216,50.216,0,0,1,154.358,4.753ZM123.958.171q.176-9.693-5.184-14.539a19.049,19.049,0,0,0-13.267-4.846A19.643,19.643,0,0,0,91.8-14.28Q86.353-9.346,85.651.171ZM244.5-7.583A31.1,31.1,0,0,1,262.338,3.343a29.966,29.966,0,0,1,6.59,19.21q0,16.037-10.631,25.025t-30.488,8.988H170v-124.6H226.4q18.978,0,29.345,8.283t10.368,23.615q0,11.279-5.974,18.769A27.523,27.523,0,0,1,244.5-7.583ZM200.045-17.1h19.681q15.639,0,15.639-13.394T219.375-43.888H200.045Zm21.438,49.17q16.694,0,16.694-13.746,0-6.7-4.393-10.486T221.308,4.048H200.045V32.07ZM330.606-43.006a55.007,55.007,0,0,1,26.095,6.08,44.5,44.5,0,0,1,18.1,17.535Q381.39-7.936,381.39,7.4T374.8,34.185A44.5,44.5,0,0,1,356.7,51.72a55.007,55.007,0,0,1-26.095,6.08,55.53,55.53,0,0,1-26.182-6.08,44.363,44.363,0,0,1-18.187-17.535q-6.59-11.455-6.59-26.788t6.59-26.788a44.363,44.363,0,0,1,18.187-17.535A55.53,55.53,0,0,1,330.606-43.006Zm0,26.083a19.121,19.121,0,0,0-14.5,6.256Q310.223-4.411,310.223,7.4t5.887,17.976a19.25,19.25,0,0,0,14.5,6.168,18.972,18.972,0,0,0,14.409-6.168q5.8-6.168,5.8-17.976t-5.8-18.064A18.847,18.847,0,0,0,330.606-16.924ZM438.148-74.2l-3.69,86.179h-25.48L405.288-74.2Zm-.7,100.63V56.566H406.166V26.43Z"
                    transform="translate(176.35 74.199)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </h1>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 mb-5"></div>
        </div>
<hr />
        <div className="row mt-5">
          <div className="col-lg-7 col-md-7 col-sm-7 col-12">
            <p className="lead font-weight-bold">
              Stay informed about everything new?
            </p>
            <input
              type="text"
              placeholder="Enter your text here"
              className="form-control my-3 bg-dark border-bottom-white font-weight-bolder w-50 form-control-lg"
            />
            <p className="small text-white mt-4">
              We don't like spam either, read our{" "}
              <Link to="#" className="text-white">
                privacy policy
              </Link>
              if you are not convinced
            </p>
            <button className="btn btn-light text-dark btn-lg d-block w-50 d-sm-w-100 p text-center mt-4">
              Subscribe Newsletter
            </button>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 d-flex justify-content-center container">
            <ul className="h5 list-group p-3">
              <h3 className="lead">SOCIALS</h3>
              <li style={{ listStyle }}>Instagram</li>
              <li style={{ listStyle }}>Facebook</li>
              <li style={{ listStyle }}>Twitter</li>
              <li style={{ listStyle }}>Linkedin</li>
              <li style={{ listStyle }}>Snapchat</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row pb-3 d-flex justify-content-center">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="row container text-center">
              <div className="col-sm-12 col-12 ">
                <p className="small">
                  &copy; 2021 DeeBoo! | Site Built by Adubi Timmy |
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="row container text-center">
              <div className="col-sm-6 col-6">
                <p className="text-white fs-2 lead text-white">Contact Us</p>
              </div>
              <div className="col-sm-6 col-6">
                <p className="text-white fs-4 lead text-white">FQS's</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <ul
              className="list-group small "
              style={{ listStyle: "none", fontSize: 12 }}
            >
              <div className="row px-5">
                <div className="col-sm-4 col-4">
                  <li className="navbar-item">Contact</li>
                </div>
                <div className="col-sm-4 col-4">
                  <li className="navbar-item">Privacy</li>
                </div>
                <div className="col-sm-4 col-4">
                  <li className="navbar-item">Terms</li>
                </div>
              </div>
            </ul>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
};

export default DFooter;
