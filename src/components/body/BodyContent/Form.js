import React, {useEffect, useState} from "react";
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
    const [nextBtn, setNextBtn] = useState(false);


    function checkValidity(value, type) {
        let isValid = true;
        switch (type) {
            case 'input':
                if (isValid) {
                    isValid = value.trim().length >= 3 && isValid;
                }
                return isValid;
            case 'email':
                if (isValid) {
                    const emailCheck = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    isValid = value.match(emailCheck) && isValid;
                }
                return isValid;
            case 'message':
                if(isValid) {
                    isValid = value.length >= 7 && isValid;
                }
                return isValid;
            default:
                return !isValid;
        }
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const formData = {
            name: enteredName,
            email: enteredEmail,
            message: enteredMessage
        }
        alert(`Thank you! - ${formData.name}.`);
        setEnteredName('');
        setEnteredEmail('');
        setEnteredMessage('');
        setShowName(true);
        setShowEmail(false);
        setShowMessage(false);
        setNextBtn(false);
        setSubmitBtn(false);
    }

    const formUpdateHandler = (type) => {
        switch (type) {
            case 'name':
                if (enteredName !== ''){
                    setNextBtn(true);
                }
                setShowName(true);
                setShowEmail(false);
                setShowMessage(false);
                break;
            case 'email':
                if (enteredEmail !== ''){
                    setNextBtn(true);
                }
                setShowName(false);
                setShowEmail(true);
                setShowMessage(false);
                break;
        }
    }

    const formInputHandler = ()  => {

        if (showName && !showEmail && !showMessage) {
            setShowName(false);
            setShowEmail(true);
            setShowMessage(false);
            setNextBtn(false);
        } else if (!showName && showEmail && !showMessage) {
            setShowName(false);
            setShowEmail(false);
            setShowMessage(true);
            setNextBtn(false);
        }
    }


    return (
        <div className="container-fluid form__container">
            <div className="row">
                <div className="col-sm form__contents">
                    <div className="submitted__messages">
                        <div className="row ml-0 pb-1">
                            {enteredName !== '' || showEmail || showMessage ?
                            <span className="submitted__messages-animation1">
                                <span className="name__label"><i className="fas fa-user"></i> </span>
                                <span className="info__edit" onClick={() => formUpdateHandler('name')}>{enteredName}</span>
                            </span> : null}
                        </div>
                        <div className="row ml-0">
                            {enteredEmail !== '' || showMessage ?
                            <span className="submitted__messages-animation2">
                                <span className="email__label"><i className="fas fa-envelope"></i> </span>
                                <span className="info__edit" onClick={() => formUpdateHandler('email')}>{enteredEmail}</span>
                            </span> : null}
                        </div>

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
                                           if (checkValidity(newName, 'input')) {
                                               setNextBtn(true);
                                           } else {
                                               setNextBtn(false);
                                           }
                                       }} required/>
                                <div className="underline">
                                </div>
                                {/*<label><p className="label__animation">your name please.</p></label>*/}
                                <label><p className="label__animation"><i className="fas fa-user"></i> {nameLabel}</p></label>
                            </div>
                            }

                            {showEmail &&
                            <div className="input-data">
                                <input type="email"
                                       value={enteredEmail}
                                       onChange={event => {
                                           const newMail = event.target.value;
                                           setEnteredEmail(newMail);
                                           if (checkValidity(newMail, 'email')) {
                                               setNextBtn(true);
                                           } else {
                                               setNextBtn(false);
                                           }
                                       }} required/>
                                <div className="underline">
                                </div>
                                <label><p className="label__animation"><i className="fas fa-envelope"></i> {emailLabel}</p></label>
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
                                <textarea maxLength="500"
                                       value={enteredMessage}
                                       onChange={event => {
                                           const newMessage = event.target.value;
                                           setEnteredMessage(newMessage);
                                           if (checkValidity(newMessage, 'message')) {
                                               setSubmitBtn(true);
                                           } else {
                                               setSubmitBtn(false);
                                           }
                                       }} required/>
                                <div className="underline">
                                </div>
                                <label><p className="label__animation"><i className="fas fa-edit"></i> now write your awesome message :)</p></label>
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