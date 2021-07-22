import "./../Supports/utils.css"
import "./../Supports/home.css"

// Images
import gambarHome from "./../assets/Home/gambarHome.png"

function Home(){
    return(
        <div className="bg">
            <div className="container">
                <div className="navbar px-0 fontKanit">
                    <div>
                        Tommy Boentoro
                    </div>
                    <div>
                        About.
                    </div>
                </div>

                <div className="hello fontPlay">
                    Hello !
                </div>

                <div className="d-flex">
                    <div className="col px-0">
                        
                    </div>
                    <div className="col px-0">
                        <div className="full-stack fontkanit">
                            <div>
                                Full-stack Developer
                            </div>
                            <div className="garisPertama"></div>
                        </div>
                    </div>
                </div>
                
                <div className="d-flex fontKanit" style={{color:"white"}}>
                    <div className="col-1 px-0">
                        
                    </div>
                    <div className="col-2 px-0">
                        <div className="textTahun">
                            2020-2021
                        </div>
                        <div className="garisKedua">

                        </div>
                    </div>
                    <div className="col-9 px-0 fontPlay">
                        <div className="web">
                            Web / Mobile App
                        </div>
                    </div>
                </div>

                <div className="gambarHome">
                    <img src={gambarHome} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home