const VoteNow = () => {
  // const styleSpec = {
  //   fontSize: 10 + "px",
  // };

  return (
    <>
      <div className=" container mx-auto">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 shadow m-auto">
            <div class="card">
              <div className="card-img">
                <img
                  className="img img-fluid"
                  src="assets/Group 500.png"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 shadow m-auto">
            <p>Coming soon</p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 shadow m-auto">
            <p>Coming soon</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoteNow;
