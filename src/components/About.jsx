

function About({ about }){
    return(
        <div className="container padg_container">
            <div className="box_titles">
                <h2 className="text-center">{about?.welcome}</h2>
                <div className="card_text_subtitle">
                    <p className="text-center text-secondary fs-5">{about?.description}</p>
                </div>
            </div>
            <div className="box_about">
                <div className="card_text_about">
                    <div>
                        <h4>{about?.title}</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, dolor at repudiandae maiores molestias praesentium, non expedita saepe delectus, dolore velit voluptas! Asperiores ipsa quae, dolore eveniet aspernatur ea libero.<br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi nihil quaerat, cumque consectetur, neque, voluptatem sint fugit itaque mollitia repudiandae ratione temporibus! Ducimus voluptatum molestias sunt ea commodi amet?    
                        </p>
                    </div>
                </div>
                <div className="card_img_about">
                    <div className="about_img">
                        <img src={`../../imgs/${about?.img}`} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About