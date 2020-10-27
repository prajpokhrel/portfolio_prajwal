import React, {useState} from "react";
import "./Form.css";
import Social from "./Social";

const Form = () => {

    const [showName, setShowName] = useState(true);
    const [showEmail, setShowEmail] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');

    const [nameLabel, setNameLabel] = useState('your name please.');
    const [emailLabel, setEmailLabel] = useState('now your email address.')

    const [submitBtn, setSubmitBtn] = useState(false);
    const [nextBtn, setNextBtn] = useState(true);


    const formSubmitHandler = (event) => {
        event.preventDefault();
        const formData = {
            name: enteredName,
            email: enteredEmail,
            message: enteredMessage
        }
        alert(`Thank you! - ${formData.name}.`);
        // alert("Your name: " + formData.name + " " + "Your email: " + formData.email
        //         + " " + "Your message: " + " " + formData.message);
        setEnteredName('');
        setEnteredEmail('');
        setEnteredMessage('');
        setShowName(true);
        setShowEmail(false);
        setShowMessage(false);
        setNextBtn(true);
        setSubmitBtn(false);
    }

    const formInputHandler = ()  => {
        if (showName && !showEmail && !showMessage) {
            setShowName(false);
            setShowEmail(true);
            setShowMessage(false);
        } else if (!showName && showEmail && !showMessage) {
            setShowName(false);
            setShowEmail(false);
            setShowMessage(true);
            setSubmitBtn(true);
            setNextBtn(false);
        }
    }

    return (
        <div className="container-fluid form__container">
            <div className="row">
                <div className="col-sm form__contents">
                    <div className="submitted__messages">
                        {showEmail || showMessage ?
                        <span className="submitted__messages-animation1">
                            <span className="name__label">Name: </span>
                            <span className="info__edit">{enteredName}</span>
                        </span> : null}&nbsp;

                        {showMessage &&
                        <span className="submitted__messages-animation2">
                            <span className="email__label">E-mail: </span>
                            <span className="info__edit">{enteredEmail}</span>
                        </span>}

                    </div>
                    <div className="inline__form">
                        <form onSubmit={formSubmitHandler}>

                            {showName &&
                            <div className="input-data">
                                <input type="text"
                                       value={enteredName}
                                       onChange={event => {
                                           const newName = event.target.value;
                                           setEnteredName(newName);
                                       }} required />
                                <div className="underline">
                                </div>
                                {/*<label><p className="label__animation">your name please.</p></label>*/}
                                <label><p className="label__animation">{nameLabel}</p></label>
                            </div>
                            }

                            {showEmail &&
                            <div className="input-data">
                                <input type="email"
                                       value={enteredEmail}
                                       onChange={event => {
                                           const newMail = event.target.value;
                                           setEnteredEmail(newMail);
                                       }} required />
                                <div className="underline">
                                </div>
                                <label><p className="label__animation">{emailLabel}</p></label>
                            </div>
                            // <div className="input-data">
                            //     <input type="email"
                            //            value={enteredEmail}
                            //            onChange={event => {
                            //                const newMail = event.target.value;
                            //                setEnteredEmail(newMail);
                            //            }} required />
                            //     <div className="underline">
                            //     </div>
                            //     <label><p className="label__animation">{emailLabel}</p></label>
                            // </div>
                            }
                            {showMessage &&
                            <div className="input-data">
                                <textarea maxLength="500" wrap="soft"
                                       value={enteredMessage}
                                       onChange={event => {
                                           const newMessage = event.target.value;
                                           setEnteredMessage(newMessage);
                                       }} required />
                                <div className="underline">
                                </div>
                                <label><p className="label__animation">now write your awesome message :)</p></label>
                            </div>
                            }
                            <br/>
                            <div className="d-flex flex-row">
                                <button type="button" disabled={!nextBtn} className="btn next__button"
                                        onClick={formInputHandler}><span className="lead"><strong>NEXT</strong></span></button>
                                <button type="submit" disabled={!submitBtn} className="btn submit__button">
                                    <span className="lead">
                                        <strong>SEND</strong>
                                    </span>
                                </button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Form;