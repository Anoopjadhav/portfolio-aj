import React from 'react'
import './Feedback.css'
import axios from 'axios'


class Feedback extends React.Component {
    state = {
        email: '',
        message: '',
        messageSent: false,
        messageFailure : false
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    sendEmail = (event) => {

        event.preventDefault();
        var { email, message } = this.state;

        if (email !== '' && message !== '') {

            axios({
                method: "post",
                url: "/mail",
                data: {
                    userName: email,
                    userEmail: 'anoopjadhav@gmail.com',
                    userMessage: "User Email ID : " + email + "  Message : " + message
                },
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }

            }).then((response) => {

                this.setState(() => {
                    return {
                        messageSent: true
                    }
                })

                if (response.data.msg === 'success') {
                    setTimeout(() => {
                        this.setState(() => {
                            return {
                                messageSent: false
                            }
                        })
                        this.resetForm()
                        this.setState(()=>{
                            return{
                                email : '',
                                message:''
                            }
                        })
                    }, 3000)

                } else if (response.data.msg === 'fail') {

                    this.setState(()=>{
                        return {
                            messageFailure : true
                        }
                    })

                    setTimeout(() => {
                        this.setState(() => {
                            return {
                                messageFailure: false
                            }
                        })
                    }, 3000)


                    alert("Message failed to send.");
                }
            })
        }
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }
    render() {
        return <div className={"show-on-scroll col-md-7 page-1 text-left section feedback " + this.props.class}>
            <div className="section-title grey4 h2 bold">Feeback</div>

            <form id="contact-form" className="subsection" onSubmit={this.sendEmail.bind(this)} method="POST">
                <div className="subsection-title body-text letterspacing-1">Please provide a constructive feedback.</div>
                <div className="subsection-data">
                {this.state.messageSent && <div class="default-text success-banner mb-2">Thank you for your feedback</div>}
                {this.state.messageFailure && <div class="default-text error-banner mb-2">Sorry Couldn't send your message. Please retry.</div>}

                    <span className="default-text grey1 bold">Email Id</span>
                    <div className="red body-text mt-2">
                        <input className="" type="email" name="email" placeholder={this.state.email} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="subsection-data">
                    <span className="default-text grey1 bold">Message</span>
                    <div className="red body-text mt-2">
                        <textarea className="" type="type" name="message" placeholder={this.state.message} onChange={this.handleChange} />
                    </div>
                    
                    <div className="text-left mt-3"><button type="submit">Send</button></div>
                </div>
            </form>
        </div>
    }

}

export default Feedback;