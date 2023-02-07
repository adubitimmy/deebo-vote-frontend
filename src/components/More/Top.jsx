import LeftImg from "./Left"
import RightItem1 from "./RightItem1"
import RightItem2 from "./RightItem2"
const Top = () =>{
    return (
        <>
        <div className="row ">
        <div className="col-lg-7 col-md-7 col-12 border shadow bg-primary">
          <LeftImg />
        </div>
        <div className=" col-lg-5 col-md-5 col-12 mr-5 lead">
          <div className="row">
            <div className="col-lg-12 col-12 right-side-items h3 text-bold">
              <span className="d-block text-black mr-3">
                2023 NIGERIAN PEOPLES
              </span>
              <span className="d-block text-black ml-3">
                POLL PRESIDENTIAL{" "}
              </span>
              <span className="d-block text-black">ELECTION</span>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="row">
                <div className="col-lg-6 col-md-6-col-12">
                  <p className="fs-3 fw-bold">How people voted</p>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                  <div className="container d-flex mx-auto d-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      className="img img-fluid mx-2"
                    >
                      <path
                        id="FontAwsome_facebook-square_"
                        data-name="FontAwsome (facebook-square)"
                        d="M35.714,32H4.286A4.286,4.286,0,0,0,0,36.286V67.714A4.286,4.286,0,0,0,4.286,72H16.54V58.4H10.915V52H16.54V47.121c0-5.549,3.3-8.614,8.363-8.614a34.077,34.077,0,0,1,4.957.432v5.446H27.069c-2.751,0-3.609,1.707-3.609,3.458V52H29.6l-.982,6.4H23.46V72H35.714A4.286,4.286,0,0,0,40,67.714V36.286A4.286,4.286,0,0,0,35.714,32Z"
                        transform="translate(0 -32)"
                        fill="#5a5a5a"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      className="img img-fluid mx-2"
                    >
                      <path
                        id="FontAwsome_twitter-square_"
                        data-name="FontAwsome (twitter-square)"
                        d="M35.714,32H4.286A4.287,4.287,0,0,0,0,36.286V67.714A4.287,4.287,0,0,0,4.286,72H35.714A4.287,4.287,0,0,0,40,67.714V36.286A4.287,4.287,0,0,0,35.714,32ZM31.348,46.179c.018.25.018.509.018.759,0,7.741-5.893,16.661-16.661,16.661a16.584,16.584,0,0,1-8.991-2.625,12.338,12.338,0,0,0,1.411.071,11.741,11.741,0,0,0,7.268-2.5A5.864,5.864,0,0,1,8.92,54.482a6.311,6.311,0,0,0,2.643-.107,5.856,5.856,0,0,1-4.687-5.75v-.071a5.852,5.852,0,0,0,2.643.741A5.843,5.843,0,0,1,6.911,44.42a5.783,5.783,0,0,1,.795-2.955,16.627,16.627,0,0,0,12.071,6.125,5.868,5.868,0,0,1,9.991-5.348,11.475,11.475,0,0,0,3.714-1.411,5.841,5.841,0,0,1-2.571,3.223,11.653,11.653,0,0,0,3.375-.911A12.326,12.326,0,0,1,31.348,46.179Z"
                        transform="translate(0 -32)"
                        fill="#5a5a5a"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="39.991"
                      viewBox="0 0 40 39.991"
                      className="img img-fluid mx-2"
                    >
                      <path
                        id="FontAwsome_instagram_"
                        data-name="FontAwsome (instagram)"
                        d="M19.929,41.567A10.253,10.253,0,1,0,30.183,51.821,10.237,10.237,0,0,0,19.929,41.567Zm0,16.919A6.666,6.666,0,1,1,26.6,51.821a6.678,6.678,0,0,1-6.666,6.666ZM32.994,41.148A2.392,2.392,0,1,1,30.6,38.756,2.386,2.386,0,0,1,32.994,41.148Zm6.791,2.427c-.152-3.2-.883-6.041-3.23-8.379s-5.176-3.07-8.379-3.23c-3.3-.187-13.2-.187-16.5,0-3.195.152-6.032.883-8.379,3.221S.226,40.363.066,43.566c-.187,3.3-.187,13.2,0,16.5.152,3.2.883,6.041,3.23,8.379s5.176,3.07,8.379,3.23c3.3.187,13.2.187,16.5,0,3.2-.152,6.041-.883,8.379-3.23s3.07-5.176,3.23-8.379c.187-3.3.187-13.189,0-16.491ZM35.519,63.609a6.749,6.749,0,0,1-3.8,3.8c-2.632,1.044-8.879.8-11.788.8s-9.165.232-11.788-.8a6.749,6.749,0,0,1-3.8-3.8c-1.044-2.632-.8-8.879-.8-11.788s-.232-9.165.8-11.788a6.749,6.749,0,0,1,3.8-3.8c2.632-1.044,8.879-.8,11.788-.8s9.165-.232,11.788.8a6.749,6.749,0,0,1,3.8,3.8c1.044,2.632.8,8.879.8,11.788S36.563,60.985,35.519,63.609Z"
                        transform="translate(0.075 -31.825)"
                        fill="#5a5a5a"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="56.889"
                      height="40"
                      viewBox="0 0 56.889 40"
                      className="img img-fluid mx-2"
                    >
                      <path
                        id="FontAwsome_youtube_"
                        data-name="FontAwsome (youtube)"
                        d="M70.633,70.259A7.148,7.148,0,0,0,65.6,65.2C61.167,64,43.377,64,43.377,64s-17.79,0-22.226,1.2a7.148,7.148,0,0,0-5.03,5.062c-1.189,4.465-1.189,13.782-1.189,13.782s0,9.316,1.189,13.782a7.042,7.042,0,0,0,5.03,4.981c4.437,1.2,22.226,1.2,22.226,1.2s17.79,0,22.226-1.2a7.042,7.042,0,0,0,5.03-4.981c1.189-4.465,1.189-13.782,1.189-13.782S71.822,74.724,70.633,70.259ZM37.559,92.5V75.582l14.869,8.459L37.559,92.5Z"
                        transform="translate(-14.933 -64)"
                        fill="#5a5a5a"
                      />
                    </svg>
                  </div>
                  </div>
                 <RightItem1 />
                 <RightItem2 />
                {/* </div> */}
               
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default Top