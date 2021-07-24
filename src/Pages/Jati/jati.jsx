import "./../Jati/jati.css"

// Import Images
import JatiJumbotron from "./../../assets/Jati/JatiJumbotron.png"

function Jati(){
    return(
        <>
            <div className="bgJati">
                <div className="container-fluid px-5">
                    <div className="d-flex">
                        <div className="headerJati d-flex px-0">
                            <div className="col-9 px-0" style={{height:"650px"}}>
                                <img src={JatiJumbotron} alt="" className="imageJumbotron" />
                            </div>
                            <div className="col-3 px-5">
                                <div className="fontHeader1 fontKanit">
                                    Jati Furniture
                                </div>
                                <div style={{marginTop:"80px"}}>
                                    <div className="fontHeader2 fontPlay">
                                        Role
                                    </div>
                                    <div className="fontHeaderBody fontKanit">
                                        UI Designer
                                    </div>
                                    <div className="fontHeaderBody fontKanit">
                                        Developer
                                    </div>
                                </div>

                                <div style={{marginTop:"40px"}}>
                                    <div className="fontHeader2 fontPlay">
                                        Type
                                    </div>
                                    <div  className="fontHeaderBody fontKanit">
                                        Personal Project
                                    </div>
                                </div>

                                <div style={{marginTop:"80px"}}>
                                    <div className="fontHeaderBody fontKanit" style={{color:"white"}}>Link Webstie</div>
                                    <a href="">Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="garisProjectHeader">
                        </div>
                    </div>
                    <div className="fontHeader2 d-flex justify-content-center fontPlay" style={{marginTop:"85px"}}>
                        See More !
                    </div>
                </div>
            </div>

            <div className="bgJatiBody">

            </div>
        </>
        
    )
}

export default Jati