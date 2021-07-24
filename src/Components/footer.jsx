// import CSS
import "./../Components/footer.css"

function Footer (){
    return(
        <div className="bgFooter">
            <div className="container-fluid  d-flex" style={{color:"white", paddingLeft:"100px", paddingRight:"100px"}}>
                <div className="footerLeft col px-0">
                    <div className="footerHeader fontPlay">
                        Tommyboentoro@gmail.com
                    </div>
                    <div className="footerBody fontKanit  col-6 px-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor in ligula eget placerat. 
                    Nunc odio nulla, sollicitudin at diam non, pulvinar facilisis sapien. 
                    Aenean vel porttitor metus. Morbi laoreet turpis sit amet magna varius facilisis. 
                    Vivamus euismod dui ac nisi dapibus, sed malesuada urna tincidunt. 
                    Integer suscipit augue neci.
                    </div>
                </div>
                <div className="footerRight d-flex flex-column align-items-end col  px-0">
                    <div>
                        <div className="footerHeader fontPlay">
                            Contact Me
                        </div>
                        <div className="footerBody fontKanit">
                            Instagram
                        </div>
                        <div className="footerBody fontKanit">
                            Email
                        </div>
                        <div className="footerBody fontKanit">
                            Upwork
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer