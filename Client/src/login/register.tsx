import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
interface Form {
  name : string,
  email : string,
  password : string
  confirmPassword : string
}
const Register = (props:any) => {

  const { register , handleSubmit } = useForm<Form>();
  const OnhandleSubmit : SubmitHandler<Form> = (data:Form) => {
    props.OnAdd(data)
  }
  return (
    <div>
  <section className="background-radial-gradient overflow-hidden" style={{width : "1519px"}}>
    <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div className="row gx-lg-5 align-items-center mb-5">
        <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex: 10}}>
          <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: 'hsl(218, 81%, 95%)'}}>
            The best offer <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>for your business</span>
          </h1>
          <p className="mb-4 opacity-70" style={{color: 'hsl(218, 81%, 85%)'}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, expedita iusto veniam atque, magni tempora mollitia
            dolorum consequatur nulla, neque debitis eos reprehenderit quasi
            ab ipsum nisi dolorem modi. Quos?
          </p>
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" />
          <div id="radius-shape-2" className="position-absolute shadow-5-strong" />
          <div className="card bg-glass">
            <div className="card-body px-4 py-5 px-md-5">
              <form onSubmit={handleSubmit(OnhandleSubmit)}>
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="row">
                  <div className="col-md-6 mb-4" style={{width: "500px"}}>
                    <div className="form-outline " style={{marginLeft : "150px", fontFamily : 'fantasy'}}>
                      <h1>Sign Up</h1>
                    </div>
                  </div>  
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1" {...register("name", {required : true})} style={{width: "490px"}} className="form-control" />
                      <label className="form-label" htmlFor="form3Example1">Enter name</label>
                    </div>
                  </div>  
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" {...register("email", {required : true})} className="form-control" />
                  <label className="form-label"  htmlFor="form3Example3">Email address</label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" {...register("password", {required : true})} className="form-control" />
                  <label className="form-label"  htmlFor="form3Example4">Password</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" {...register("confirmPassword", {required : true})} className="form-control" />
                  <label className="form-label"  htmlFor="form3Example4">Password</label>
                </div>
                {/* Checkbox */}  
                {/* Submit button */}
                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Sign up
                </button>
                {/* Register buttons */}
                <div className="text-center">
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-facebook-f" />
                  </button>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-google" />
                  </button>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-twitter" />
                  </button>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-github" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Register