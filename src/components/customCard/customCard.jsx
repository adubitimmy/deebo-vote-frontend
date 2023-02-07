import "../customCard/main.css";
import { Link } from "react-router-dom";
const CustomCard = () => {
  return (
    <>
      <div className="row mb-5">
        <div className="col-lg-4 col-md-6 col-12 ">
          <div className="card d-flex gap-2">
            <img
              className="img img-fluid border"
              src="assets/card/Tinubu.png"
              alt="image"
            />

            <div className="buttons">
              <button
                className="btn btn-lg w-100 btn-vote-white"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                Vote
              </button>

              <button className="btn btn-lg w-100 btn-vote-black mt-3">
                <Link
                  to="more/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>
        
        <div
          className="modal fade p-5"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-xl custom-modal modal-dialog">
            <div className="modal-content">
              <div className="modal-header custom-modal">
                <div className="row ">
                  <div className="col-12  ">
                    <img
                      className="img img-fluid w-25 d-flex mx-auto justify-content-center align-items-center"
                      src="assets/Obi_vote_badge.png"
                      alt=""
                    />
                  </div>
                  <div className="col-12 mt-3">
                    <button
                      type="button"
                      className="btn-close d-flex mx-auto justify-content-center align-items-center"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
              </div>
              <div className="modal-xl custom-modal modal-body modal-xl p-5">
                <div className="row">
                  <div className="col-12 modal-title p w-100 fw-bold d-flex mx-auto justify-content-center align-items-center">
                    JUST A MOMENT. LET'S GET TO KNOW YOU
                  </div>
                </div>
                <form>
                  <div className="row p-5">
                    <div className="col-lg-4 col-md-4 col-12 ">
                      <div className="row">
                        <div className="col-12 m-3">
                        <label htmlFor="country">Nationality</label>
                        <div className="col-12 bg-primary rounded text-white p-3">
                          <input
                            type="radio"
                            className="btn btn-lg w-25 "
                            id="country"
                            value="nigeria"
                          />
                          Nigerian only
                        </div>
                        </div>
                     
                      </div>
                     
                    </div>
                    <div className="col-lg-7 col-md-7 col-12 mx-2">
                      <div className="row">
                      <div className="col-12">
                          <label htmlFor="location" className="col-form-label">
                            Location
                          </label>
                        </div>
                        <div className="col-12 ">
                          <div className="row " >
                            <div className="col-5 location-bg rounded mx-2 active p-2">
                              <input
                                type="radio"
                                className=" w-50 active"
                                name="location"
                                id="location"
                                value="nigeria"
                              />
                              in-Nigeria
                            </div>
                            <div className="col-6 location-bg rounded mx-2 p-2">
                              <input
                                type="radio"
                                className="w-50"
                                name="location"
                                id="location"
                                value="nigeria-diaspora"
                              />
                              Nigerian-diaspora
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    
                    </div>
                  </div>
              
                 
                  <div className="row">
                   
                    <div className="col-lg-5 col-md-5 col-12 mb-3">
                      <div className="row">
                        <div className="col-6 m-2">
                        <div className="col-lg-12 col-md-12 12 mb-3 m-3">
                      <label htmlFor="state">State of origin</label>
                      <select htmlFor="state" className="col-form-label">
                        <option value="lagos">Lagos State</option>
                        <option value="osogbo">Osun State</option>
                        <option value="fct">Federal capial teritory</option>
                      </select>
                    </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-12">
                    <div className="row">
                        <div className="row">
                            <div className="col-12">
                              <label htmlFor="pvc" className="col-form-label">
                                PVC Collected
                              </label>
                            </div>
                            <div className="col-3 pvc-bg rounded m-2 p-2">
                              <input
                                type="radio"
                                className="btn bg-primary btn-lg w-50"
                                name="pvc"
                                id="pvc"
                                value="yes"
                              />
                              YES
                            </div>
                            <div className="col-3 pvc-bg rounded m-2 p-2">
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
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card d-flex gap-2">
            <img src="assets/card/Atiku.png" alt="image" />

            <div className="buttons">
              <button
                className="btn btn-lg w-100 btn-vote-white"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
                color={{ color: "#070707" }}
              >
                Vote
              </button>
              <button className="btn btn-lg w-100 btn-vote-black mt-3">
                <Link
                  to="more/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card d-flex gap-2">
            <img src="assets/card/obki.png" alt="image" />

            <div className="buttons">
              <button
                className="btn btn-lg w-100 btn-vote-white"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                Vote
              </button>
              <button className="btn btn-lg w-100 btn-vote-black mt-3">
                <Link
                  to="more/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default CustomCard;
