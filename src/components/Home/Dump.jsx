import { Link } from "react-router-dom";
const Dump = () => {
  return (
    <>
      <div className=" row p-2 container-fluid d-flex mx-auto gap-5">
        <div className="card card-main col-lg-4 col-md-6 col-12   container-fluid img-container">
          <div className="mt-5 bold card-body text-center ">
            <h5 className="h4 fw-bolder">Bola Ahmed</h5>
            <h3 className="display-1">TINUBU</h3>
          </div>
          <div className="card-body d-block row">
            <div className="card-text1 col-12">
              <button
                className="btn-vote-white btn-main btn btn-lg w-50 d-flex mx-auto   mb-3 text-center"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                Vote
              </button>
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className="row">
                      <div className="col-12 mx-auto">
                        <img
                          className="img img-fluid w-50 "
                          src="assets/Obi_vote_badge.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-12 modal-title h6 w-100 fw-bold">
                        JUST A MOMENT. LET'S GET TO KNOW YOU
                      </div>
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-lg-4 col-md-4 12 mb-3">
                          <label htmlFor="country" className="col-form-label">
                            Nationality
                          </label>
                          <input
                            type="radio"
                            className="btn bg-primary btn-lg w-50"
                            id="country"
                            value="nigeria"
                          />
                          Nigerian only
                        </div>
                        <div className="col-lg-8 col-md-8 col-12 mb-3">
                          <label htmlFor="location" className="col-form-label">
                            Location
                          </label>
                          <div className="row">
                            <div className="col-6">
                              <input
                                type="radio"
                                className="btn bg-primary btn-lg w-50"
                                name="location"
                                id="location"
                                value="nigeria"
                              />
                              In-Nigeria
                            </div>
                            <div className="col-6">
                              <input
                                type="radio"
                                className="btn bg-primary btn-lg w-50"
                                name="location"
                                id="location"
                                value="nigeria-diaspora"
                              />
                              Nigerian-diaspora
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4 col-md-4 12 mb-3">
                          <label htmlFor="state">State of origin</label>
                          <select htmlFor="state" className="col-form-label">
                            <option value="lagos">Lagos State</option>
                            <option value="osogbo">Osun State</option>
                            <option value="fct">Federal capial teritory</option>
                          </select>
                        </div>
                        <div className="col-lg-8 col-md-8 col-12 mb-3">
                          <label htmlFor="pvc" className="col-form-label">
                            PVC Collected
                          </label>
                          <div className="row">
                            <div className="col-6">
                              <input
                                type="radio"
                                className="btn bg-primary btn-lg w-50"
                                name="pvc"
                                id="pvc"
                                value="yes"
                              />
                              YES
                            </div>
                            <div className="col-6">
                              <input
                                type="radio"
                                className="btn bg-primary btn-lg w-50"
                                name="pvc"
                                id="pvc"
                                value="no"
                              />
                              NO
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row d-flex mx-auto">
                        <div className="col-lg-6 col-md-6 col-12">
                          <button className="btn btn-dark  w-100">
                            Submit Vote
                          </button>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <button
                            className="btn btn-light  w-100"
                            type="button"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-text2 card-text2 col-12">
              <button className="btn-vote-black btn btn-lg btn-dark w-50 mx-auto">
                <Link
                  to="readmore/"
                  style={{ color: "white", textDecoration: "None" }}
                >
                  Readmore
                </Link>
              </button>
            </div>
          </div>
          <div className="row d-flex w-100 justify-content-center align-item-center ">
            <div className="col-7 zoom">
              <img
                className="tinubu img img-fluid w-100 p-0"
                src="assets/Bola-Tinubu.png"
                alt="Tinubu"
                height="1000px"
              />
            </div>
            <div className="col-4 zoom d-grid pull-right">
              <img
                className="img img-fluid w-100 p-0"
                src="assets/apc_logo.png"
                alt="apc logo"
              />
            </div>
            <Link to="/"></Link>
          </div>
        </div>
        <div className="card card-main col-lg-4 col-md-6 col-12  container-fluid img-container">
          <div className="mt-5 bold card-body text-center">
            <h5 className="h4 fw-bolder">Abubakar</h5>
            <h3 className="display-1">ATIKU</h3>
          </div>
          <div className="card-body d-block row">
            <div className="card-text1 col-12">
              <button
                className="btn-main btn btn-lg w-50 d-flex mx-auto btn-vote-white  mb-3"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                Vote
              </button>
            </div>
            <div className="card-text2 col-12">
              <button className="btn-vote-black btn btn-lg btn-dark w-50 mx-auto">
                <Link
                  to="readmore/"
                  style={{ color: "white", textDecoration: "None" }}
                >
                  Readmore
                </Link>
              </button>
            </div>
          </div>
          <div className="row d-flex w-100 justify-content-center align-item-center ">
            <div className="col-7 zoom">
              <img
                className=" img img-fluid w-100"
                src="assets/Atiku.png"
                alt="Atiku Abubakar"
              />
            </div>
            <div className="col-4 zoom d-grid pull-right">
              <img
                className="img img-fluid w-100 p-0"
                src="assets/pdp_logo.png"
                alt="apc logo"
              />
            </div>
          </div>
        </div>
        <div className="card card-main col-lg-4 col-md-6 col-12  container-fluid img-container">
          <div className="mt-5 bold card-body text-center">
            <h5 className="h4 fw-bolder">Peter</h5>
            <h3 className="display-1">OBI</h3>
          </div>
          <div className="card-body d-block row">
            <div className="card-text1 col-12">
              <button
                className="btn-main btn btn-lg w-50 d-flex mx-auto btn-vote-white  mb-3"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                Vote
              </button>
            </div>
            <div className="card-text2 col-12">
              <button className="btn-vote-black btn btn-lg btn-dark w-50 mx-auto">
                <Link
                  to="readmore/"
                  style={{ color: "white", textDecoration: "None" }}
                >
                  Readmore
                </Link>
              </button>
            </div>
          </div>
          <div className="row d-flex w-100 justify-content-center align-item-center ">
            <div className="col-7 zoom">
              <img
                className=" img img-fluid w-100"
                src="assets/obi.png"
                alt="Peter Obi"
              />
            </div>
            <div className="col-4 zoom d-grid pull-right">
              <img
                className="img img-fluid w-100 p-0"
                src="assets/Labour_Partylogo.png"
                alt="labour party"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dump