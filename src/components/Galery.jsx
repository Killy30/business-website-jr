import { useEffect } from "react"


function Galery({ galery }){

    useEffect(()=>{
        const elements = document.querySelectorAll('.card_img')

        const intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry =>{
                // console.log(entry);
                
                if (entry.intersectionRatio > 0){
                    entry.target.classList.add("animatbottom");
                }else{
                    entry.target.classList.remove("animatbottom");
                }
            })
        })

        elements.forEach(element => {
            intersectionObserver.observe(element)
        })
    },[])

    return(
        <div className="container padg_container">
            <div className="box_titles">
                <h2 className="text-center fw-bold">{galery?.title}</h2>
                <div className="card_text_subtitle">
                    <p className="text-center text-secondary fs-5">{galery?.description}</p>
                </div>
            </div>
            <div className="box_galery">
                {
                    galery?.imgs.map((img, i) => {
                        return <CardImg img={img} key={i}/>
                    })
                }
            </div>
        </div>
    )
}

function CardImg({ img }){
    return(
        <div className="card_img">
            <img src={`../../imgs/${img.img}`} alt="" />
        </div>
    )
}

export default Galery