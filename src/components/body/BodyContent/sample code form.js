import React from "react";

<form onSubmit={formSubmitHandler}>

    {showInput ? (<div className="form-group one">
        <input type="text" value={enteredName} className="form-control"
               onChange={event => {
                   const newName = event.target.value;
                   setEnteredName(newName);
               }}
               placeholder="your name please"/>
    </div>) : (<div className="form-group one">
        <input type="email" value={enteredEmail}
               onChange={event => {
                   const newEmail = event.target.value;
                   setEnteredEmail(newEmail);
               }}
               className="form-control"
               placeholder="now your email address"/>
    </div>)}


    <button type="submit" className="btn btn-primary">Submit</button>
</form>