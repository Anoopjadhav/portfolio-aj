import React from 'react'
import './Contacts.css'


class Contacts extends React.Component {
    state = {
        email: 'default@gmail.com',
        message: 'Please enter your message here'
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    sendEmail = (event) => {
        debugger;
        event.preventDefault();
        var { email, message } = this.state;

        // axios({
        //     method: "POST",
        //     url: "http://localhost:3000/send",
        //     data: {
        //         name: email,
        //         email: email,
        //         messsage: message
        //     }
        // }).then((response) => {
        //     if (response.data.msg === 'success') {
        //         alert("Message Sent.");
        //         this.resetForm()
        //     } else if (response.data.msg === 'fail') {
        //         alert("Message failed to send.")
        //     }
        // })
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }
    render() {
        return <div className={"show-on-scroll col-md-7 page-1 text-left section contacts " + this.props.class}>
            <div className="section-title grey4 h2 bold">Contacts</div>

            <form id="contact-form" className="subsection" onSubmit={this.sendEmail.bind(this)} method="POST">
                <div className="subsection-title uppercase body-text grey3 letterspacing-1">Feedback/Message</div>
                <div className="subsection-data">
                    <span className="default-text grey1 bold">Email Id</span>
                    <div className="red body-text mt-2">
                        <input className="" type="email" name="email" placeholder={this.state.emailId} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="subsection-data">
                    <span className="default-text grey1 bold">Message</span>
                    <div className="red body-text mt-2">
                        <textarea className="" type="type" name="message" placeholder={this.state.userMessage} onChange={this.handleChange} />
                    </div>
                    <div className="text-right mt-2"><button type="submit">Send</button></div>
                </div>
            </form>


            <div className="subsection">
                <div className="subsection-title uppercase body-text grey3 letterspacing-1">Contact Details</div>
                <div className="subsection-data">
                    <span className="h3 grey1 bold">Email Id</span>
                    <div className="red body-text mt-2"><a href="mailto: anoopjadhav@gmail.com">anoopjadhav@gmail.com</a></div>
                </div>

                <div className="subsection-data">
                    <span className="h3 grey1 bold">Instagram</span>
                    <div className="red body-text mt-2"><a href="https://www.instagram.com/mi_baburao/" target="_blank">mi_baburao</a></div>
                </div>
                <div className="subsection-data">
                    <span className="h3 grey1 bold">Contact Number</span>
                    <div className="body-text mt-2">9028665267</div>
                </div>

            </div>

        </div>
    }

}

export default Contacts
