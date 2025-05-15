import { useEffect, useState } from "react";


function Services({ services }){
    const [view, setView] = useState(false)
    const [_style_, setStyle] = useState("")

    useEffect(()=>{
        const elements = document.querySelectorAll('.cards_services')

        const intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry =>{
                // console.log(entry);
                if (entry.intersectionRatio > 0){
                    // entry.target.classList.add(_style_);
                }else{
                    // entry.target.classList.remove(_style_);
                }
            })
            
        })

        elements.forEach(element => {
            intersectionObserver.observe(element)
        })
    },[])

    return(
        <div className="container padg_container">
            <div className="mb-5 header_services box_titles">
                <h2 className="text-center fw-bold">{services?.title}</h2>
                <div className="card_text_subtitle">
                    <p className="text-center fs-5">{services?.description}</p>
                </div>
            </div>
            <div>
                <div className="box_services">
                    <div className="cards_services">
                        <div className="cards_title">
                            <div className="icon_cards">
                                <span className="material-symbols-outlined">description</span>
                            </div>
                            <h5 className="">{services?.service1.subtitle}</h5>
                        </div>
                        <div className="cards_body">
                            {
                                services?.service1.data_services.map((service) =>{
                                    return <CardServices service={service} key={service.service} />
                                })
                            }
                        </div>
                    </div>
                    <div className="cards_services">
                        <div className="cards_title">
                            <div className="icon_cards">
                                <span className="material-symbols-outlined">history_edu</span>
                            </div>
                            <h5>{services?.service2.subtitle}</h5>
                        </div>
                        <div className="cards_body">
                            {
                                services?.service2.data_services.map((service) =>{
                                    return <CardServices service={service} key={service.service} />
                                })
                            }
                        </div>
                    </div>
                    <div className="cards_services">
                        <div className="cards_title">
                            <div className="icon_cards">
                                <span class="material-symbols-outlined">id_card</span>
                            </div>
                            <h5>{services?.service3.subtitle}</h5>
                        </div>
                        <div className="cards_body">
                            {
                                services?.service3.data_services.map((service) =>{
                                    return <CardServices service={service} key={service.service} />
                                })
                            }
                        </div>
                    </div>
                    <div className="cards_services">
                        <div className="cards_title">
                            <div className="icon_cards">
                                <span class="material-symbols-outlined">flight_takeoff</span>
                            </div>
                            <h5>{services?.service4.subtitle}</h5>
                        </div>
                        <div className="cards_body">
                            {
                                services?.service4.data_services.map((service) =>{
                                    return <CardServices service={service} key={service.service} />
                                })
                            }
                        </div>
                    </div>
                    <div className="cards_services">
                        <div className="cards_title">
                            <div className="icon_cards">
                                <span class="material-symbols-outlined">check_box</span>
                            </div>
                            <h5>{services?.service5.subtitle}</h5>
                        </div>
                        <div className="cards_body">
                            {
                                services?.service5.data_services.map((service) =>{
                                    return <CardServices service={service} key={service.service} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CardServices({ service }){
    return(
        <div className="card_service">
            <span class="material-symbols-outlined">check</span>
            <p>{service.service.toLowerCase()}</p>
        </div>
    )
}

export default Services