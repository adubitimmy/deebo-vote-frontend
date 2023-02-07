import "../Card/Card.css";

const Card = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card card-main">
              <img src="assets/Bola-Tinubu-11.png" alt="" />
              <div className="card-text">
                <button className="btn-main btn btn-lg w-50 d-flex mx-auto btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
                >
                  Vote
                </button>
              </div>
            
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card card-main">
              <img src="assets/atiku Large.png" alt="" />
              <div className="card-text">
                <button className="btn-main btn btn-lg w-100 d-flex mx-auto btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
               
                >
                  Vote
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card card-main">
              <img
                src="assets/78f1dc4e-142f-44e4-a328-f15724fe63d4_peter-obi.png"
                alt=""
              />
              <div className="card-text text-center">
                <button className="btn-main btn btn-lg w-50 d-flex mx-auto btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
                >
                  Vote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
