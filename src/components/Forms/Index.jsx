import '../Forms/style.css'
const Form = () =>{
    return(
        <>
            <div className="container" >
      
      <div className="d-grid gap-5 justify-content-center align-item-center mx-auto">
       <form className="form-group my-3 py-5 bordered" action="" method="POST">
       <h2 className="h2 text-bolder text-black text-left" style={{fontWeight:600}}>Register Polls</h2>
       <p className="small text-left body">This form is only available to those who would like us to include their polls in deebo!<br/>
       While we are still on beta testing!
       </p>
            <div className="form-group form-inline d-flex gap-3 ">
              <input className="form-text form-control border" name="poll-cat" placeholder="Science Research" className="form-control mr-1 form-lg w-50 form-control-lg" />
              <input className="form-text form-control" name="poll-title" placeholder="Poll Title"  className="form-control form-lg w-50 form-control-lg"/>
            </div>
            <div className="form-group form-inline mt-3">
              <label htmlFor="full-name">Your Full Name</label>
              <input  className="form-text form-control w-100 form-control-lg" id="full-name" type="text" name="email" placeholder="Science Research"/>
            </div>
            <div className="form-group form-inline mt-3">
            <label htmlFor="email">Your Email</label>
              <input  className="form-text form-control w-100 form-control-lg" id='email' type="text" name="username" placeholder="Email"/>
            </div>
            <div className="form-group form-inline mt-3">
            <label htmlFor="email">Additional Information</label>
              <textarea name="email" className="w-100 form-control" id="email" cols="30" rows="5"></textarea>
            </div>
            <button className="btn btn-outline btn-lg btn-black w-100   mt-5">Send Request</button>
            <p className="small">By signing up, you agree to our terms of use.</p>
       </form>
       </div>
       </div>
        </>
    )
}

export default Form