import React from 'react'

const ReqForm = () => {
  return (
    <div className='ReqFormStyle'>
        <h1 class="heading">REQUEST FORM</h1>

        <div class="Form-cont">
            <div class="head">
                <h2>Please PRINT LEGIBLY</h2>
                <div class="date">
                    <p class="calendar">mm/dd/yy</p>
                    <p class="date-text">Date of Filing</p>
                </div>
            </div>

            <div class="purpose">
                <div class="docu-req">
                    <h3>I am applying for:</h3>
                    <div class="holder">
                        <input type="checkbox"/>
                        <label for="checkbox">Transcript of Records (TOR)</label>    
                    </div>
                    <div class="holder">
                        <input type="checkbox"/>
                        <label for="checkbox">Diploma</label>    
                    </div>
                    <div class="holder">
                        <input type="checkbox"/>
                        <label for="checkbox">Others: <input class="textbox" type="text"/></label>    
                    </div>
                    <label>Purpose:<input class="textbox" type="text"/></label>
                </div>

                <div class="info-1">
                    <label>Last Attendance: S.Y:<input class="textbox" type="text"/></label>
                    <label>Semester:<input class="textbox" type="text"/></label>

                    <div class="info-1-holder">
                        <input type="checkbox"/>
                        <label for="checkbox">Graduated</label>    
                    </div>

                    <div class="info-1-holder">
                        <input type="checkbox"/>
                        <label>Did not graduate</label>    
                    </div>

                </div>

                <div class="info-2">
                    <label><input class="info-2-1" type="text" placeholder="NAME (LastName, FirstName M.I.)"/></label>
                    <label><input class="info-2-2" type="text" placeholder="BIRTHDATE"/></label>
                    <label><input class="info-2-2" type="text" placeholder="SEX"/></label>
                    <label><input class="info-2-1" type="text" placeholder="COURSE"/></label>
                    <label><input class="info-2-1" type="text" placeholder="EMAIL ADDRESS"/></label>
                    <label><input class="info-2-1" type="text" placeholder="ADDRESS"/></label>
                    <label><input class="info-2-1" type="text" placeholder="CONTACT NUMBER"/></label>
                </div>

                <div class="submit-btn">
                    <p><a class="a-btn" href="#">SUBMIT</a></p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default ReqForm