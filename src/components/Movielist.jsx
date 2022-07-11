import React from 'react'
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Modal,show, Button } from 'react-bootstrap';
import axios from 'axios';

import { useUserAuth } from '../context/UserAuthContext';

const Movielist = (event) => {
    const [movie, setMovie] = useState([])

  

    const { user, logOut } = useUserAuth();
    console.log(user)

    const handleLogOut = async () => {
        try {
            await logOut();

        } catch (err) {
            console.log(err.message)
        }
    }


    const [text, setText] = useState("")
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    const changeText = (event) => {
        setText(event.target.value)
    }
    //    

    const getMovie = (e) => {
        e.preventDefault();
        axios.get(`https://www.omdbapi.com/?s=${text}&apikey=4343a22`)
            .then((response) => {
                setMovie(response.data.Search)
            })
    }
    // if(handleShow){
    //     return(
    //         <>
    //         <Modal show={show} onHide={handleClose}>
    //                   <Modal.Header closeButton>
    //                     <Modal.Title></Modal.Title>
    //                   </Modal.Header>
    //                   <Modal.Body>
    //                   <img className="card-img-top" style={{width:'14rem'}}src={"hi"} />
    //                   <h3>{":hehuk"}</h3>
    //                   <h4>IMDb:{"ytmgke445"} </h4>
    //                   <h5>Release Date: {2020}</h5>
    //                   <br></br>
    //                   <h6>Overview</h6>
    //                   <p>{" struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego"}</p>
    //                   </Modal.Body>
    //                   <Modal.Footer>
    //                       <Button variant="secondary" onClick={handleClose}></Button>
    //                   </Modal.Footer>
    //               </Modal>
    //         </>
    //     )
    // }
    return (
        <>


            <div className=" bg-dark text-center">


                {/* <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav  m-lg-auto"> */}

                <div className='text-light text-center py-3'>
                    <h2>Welcome</h2>{user && user.email}
                </div>

                <li className="nav-item active">
                    <a className="btn btn-danger" onClick={handleLogOut}>Logout</a>
                </li>
                <br />


                {/* </ul> */}
                <form className="form-inline d-flex justify-content-center py-3 " onSubmit={getMovie}>
                    <input className="form-control w-25  " type="search" placeholder="Search for movies" value={text} onChange={changeText} />
                    <button class="btn btn-outline-success " type="submit">Search</button>
                </form>
            </div>
            {/* </div> */}


            <div className="container  my-3">
                <div className="row ">
                    {movie.map((value) => (
                        
                        <>
                               







                            <div className="col my-3">
                                <div className="card bg-dark" style={{ width: "18rem" }}>
                                    <img src={value.Poster} className="card-img-top" alt="..." />
                                    <div className="card-body">

                                        <h5 className="card-title text-light" >{value.Year}</h5>
                                        <p className="card-text text-light" >{value.Title}</p>
                                        <p className="card-text text-light" >{value.Type}</p>



                                        <button className="btn btn-primary" onClick={handleShow}>View more</button>
                                        </div>
                                        <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title></Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <img className="card-img-top" style={{ width: '14rem' }} src={value.Poster} />
                                            <h3>{value.Title}</h3>
                                            <h4>IMDb:{"ytmgke445"} </h4>
                                            <h5>Release Date: {2020}</h5>
                                            <br></br>
                                            <h6>Overview</h6>
                                            <p>{" struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego"}</p>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}></Button>
                                        </Modal.Footer>
                                    </Modal>
                                        </div>
                                </div>
                                
                            </>
                            
                                        ))}
                                       

                                    {/* <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title></Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <img className="card-img-top" style={{ width: '14rem' }} src={Title} />
                                            <h3>{value.Title}</h3>
                                            <h4>IMDb:{"ytmgke445"} </h4>
                                            <h5>Release Date: {2020}</h5>
                                            <br></br>
                                            <h6>Overview</h6>
                                            <p>{" struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego"}</p>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}></Button>
                                        </Modal.Footer>
                                    </Modal> */}




                                    {/* </div>
                                </div>
                            </div> */}

                          </div>


                            <>
                            </>

                        {/* </> */}
                    {/* // ))} */}

                </div>
            </>

            

        
    )
}

export default Movielist;
