import "./../Supports/about.css"

function About(){
    return(
        <>
            <div className="bgAbout textWhite">
                <div className="container">
                    <div className="d-flex flex-column px-5">
                        <div className="headerAbout1 fontPlay">
                            Hi
                        </div>
                        <div className="garisAbout1">
                            
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-end px-5">
                        <div className="headerAbout2 fontKanit">
                            They call me Tommy
                        </div>
                        <div className="garisAbout2">

                        </div>
                    </div>
                    <div className="bodyAbout fontKanit px-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor in 
                        ligula eget placerat. Nunc odio nulla, sollicitudin at diam non, pulvinar 
                        facilisis sapien. Aenean vel porttitor metus. Morbi laoreet turpis sit amet
                        magna varius facilisis. Vivamus euismod dui ac nisi dapibus, 
                        sed malesuada urna tincidunt. Integer suscipit augue neci.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor in 
                        ligula eget placerat. Nunc odio nulla, sollicitudin at diam non, pulvinar 
                        facilisis sapien. Aenean vel porttitor metus. Morbi laoreet turpis sit amet
                        magna varius facilisis. Vivamus euismod dui ac nisi dapibus, 
                        sed malesuada urna tincidunt. Integer suscipit augue neci.
                    </div>

                    <div className="px-5" style={{marginTop:"20px"}}>
                        <input type="button" value="Contact Me" className="btn btn-success" />
                    </div>

                    <div className="bodyAbout fontKanit px-5">
                        HTML, CSS, Javascript, Native, React Js, Docker, MySql, MongoDb 
                    </div>
                </div>
            </div>
        </>
    )
}

export default About