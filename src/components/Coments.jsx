

function Coments({ coments }){
    return(
        <div className="container padg_container">
            <h2 className="text-center mb-5">{coments?.title}</h2>
            <div>
                <div className="box_coments">
                    {
                        coments?.coments.map((coment, i) => {
                            return <CardComent coment={coment} key={i}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function CardComent({ coment }){
    return(
        <div className="card_coment">
            <div className="d-flex justify-content-center mb-2">
                <div>
                    <div className="card_img_coment">
                        <img src={`../../imgs/${coment?.img}`} alt="" />
                    </div>
                    <div>
                        <span>{coment?.name}</span>
                    </div>
                </div>
            </div>
            <div className="card_body_coment">
                <p>{coment?.coment}</p>
            </div>
        </div>
    )
}

export default Coments