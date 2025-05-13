

function Message({ contacts }) {

    const handleMail = (e) => {
        e.preventDefault()
        const formdata = new FormData(e.target)
        const data = Object.fromEntries(formdata.entries())

        console.log(data);
        
    } 


    return (
        <div className="container padg_container">
            <div className="card_titles">
                <h2 className="text-center">Contactez-nous</h2>
            </div>
            
            <div className="box_contact">
                <div className="info">
                    <div className="d-flex mb-5">
                        <div className="me-3">
                            <span class="material-symbols-outlined fs-1">pin_drop</span>
                        </div>
                        <div>
                            <div>
                                <strong>Address</strong>
                            </div>
                            {
                                contacts?.address.map((address, i) => {
                                    return (
                                        <div className="" key={i}>
                                            <p>{address?.address}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="d-flex mb-5">
                        <div className="me-3">
                            <span class="material-symbols-outlined fs-1">mail</span>
                        </div>
                        <div>
                            <div>
                                <strong>Mail</strong>
                            </div>
                            {
                                contacts?.emails.map((email, i) => {
                                    return (
                                        <div className="" key={i}>
                                            <p>{email?.email}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="me-3">
                            <span class="material-symbols-outlined fs-1">call</span>
                        </div>
                        <div>
                            <div>
                                <strong>Tell</strong>
                            </div>
                            {
                                contacts?.phones.map((phone, i) => {
                                    return (
                                        <div className="" key={i}>
                                            <p>{phone?.phone}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="message">
                    <form onSubmit={handleMail} action="">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">You name</label>
                            <input type="text" class="form-control" name="name" id="exampleFormControlInput1" placeholder="Name"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone</label>
                            <input type="number" class="form-control" name="phone" id="exampleFormControlInput1" placeholder="390 281 7832"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" name="email" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">You message</label>
                            <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="4"></textarea>
                        </div>
                        <div>
                            <button className="btn btn-danger p-2 px-3">Envoyer Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Message