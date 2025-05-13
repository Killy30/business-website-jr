import Social from './Social'

function Footer(){
    return(
        <div className="container p-5">
            <div className="box_footer">
                <div className="logo_footer">
                    <img src={'../../imgs/logo_white.png'} alt="" />
                </div>
                <div className="d-flex justify-content-center">
                    <Social/>
                </div>
                <div>
                    <p className='text-white text-center '>© 2025 messess. Designed and Developed by killycenecharles.netlify.app</p>
                </div>
            </div>
        </div>
    )
}

export default Footer