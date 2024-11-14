import { Link } from 'react-router-dom'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

 
function Register() {
    return (
        <>
        <div >
            <div className="container" style={{marginBottom:"50px"}}>
                <div className="row" style={{ justifyContent: 'center'}}>
                    <div className="col-mg-6 ">
                        {/* <img src="https://i.pinimg.com/originals/9c/83/88/9c838839fcf2197a8d8007b27ba713a3.gif" alt='' style={{height:'270px', width:'250px', marginLeft:'520px'}}/> */}
                        <center><h3 style={{marginTop:"80px", marginBottom:"20px", color:""}}><b>New Student....Join Us Now!</b></h3></center>
                        <center><img src="https://cdn2.iconfinder.com/data/icons/occupations-color-1/150/11-512.png" style={{height:"100px", width:"100px", marginBottom:"20px"}}></img></center>
                    <div className="card bg-secondary bg-gradient" style={{width:'800px' , marginLeft:'250px'}}> <br></br>
                        <center><h4>Enter your details here, to be a Part of our Institute🤝</h4></center>
                            <div className="card-body" >
                                <div className="col-lg-12 mt-3 mb-3">
                                    <input type="text" name="name" className="form-control" placeholder="Enter Your First_Name" />
                                </div>
                                <div className="col-lg-12 mt-3 mb-3">
                                    <input type="text" name="name" className="form-control" placeholder="Enter Your Last_Name" />
                                </div>
                                <div className="col-lg-12 mt-8 mb-3">
                                    <input type="password" name="name" className="form-control" placeholder="Enter Your Password"/>
                                </div>
                                
                                <div className="col-lg-12 mt-3 mb-3">
                                    <input type="number" name="number" className="form-control" placeholder="Enter Your Contact Number" />
                                </div>
                                <div className="col-lg-12 mt-3 mb-3">
                                    <input type="email" name="email" className="form-control" placeholder="Enter Your Email" />
                                </div>
                                <div className="col-lg-12 mt-3 mb-3">
                                    <input type="number" name="number" className="form-control" placeholder="Enter Your Roll No." />
                                </div>
                                <div className="col-lg-12 mt-3 mb-3" style={{backgroundColor:'rgb(171, 164, 168)'}}>
                                    <input type="submit" name="name" className="form-control btn" />
                                </div>
                            
                            <p style={{marginLeft:"550px"}}><b>Already Registered... <Link to='/login' style={{color:'black' , textDecoration:'none'}}>Login</Link></b></p>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
        </>
    )
}

export default Register