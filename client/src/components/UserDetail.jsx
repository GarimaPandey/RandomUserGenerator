import React, { useEffect, useState } from "react";

export default function UserDetail() {

  const [firstName] = useState(() => {
    const first = localStorage.getItem("first_name");
    return first;
  });

  const [lastName] = useState(() => {
    const last = localStorage.getItem("last_name");
    return last;
  });

  const [email] = useState(() => {
    const email = localStorage.getItem("email");
    return email;
  });

  const [phone] = useState(() => {
    const phone = localStorage.getItem("phone");
    return phone;
  });

  const [formattedDate] = useState(() => {
    const dob = localStorage.getItem("birthdate")
    const date = new Date(dob);
    const options = { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate;
  });

  const dob = localStorage.getItem("birthdate");
  const birthdate = new Date(dob);
  const currentYear = new Date().getFullYear();
  const nextBirthday = new Date(`${birthdate.getMonth() + 1}/${birthdate.getDate()}/${currentYear}`);

  if (nextBirthday.getTime() < Date.now()) {
    nextBirthday.setFullYear(currentYear + 1);
  }

  const timeDiff = nextBirthday.getTime() - Date.now();
  const days = Math.ceil(timeDiff / 1000 / 60 / 60 / 24);

  console.log(`${days} days remaining until the next birthday`);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="container">
        <div className="card my-4">
          <div className="card-header text-center" style={{background: "#FFFFFF"}}>
            <h2 className="card-title"><b>User Detail</b></h2>
          </div>
          <div className="card-body" style={{
background: "linear-gradient(to bottom, #2c3e50, #9b59b6)",
color: "#000"
          }}>
            <div className="row">
              <div className="col-md-6">
                <p><strong>First Name:</strong> {firstName} </p>
                <p><strong>Last Name:</strong> {lastName} </p>
                <p><strong>Email:</strong> {email} </p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Date of Birth:</strong> {formattedDate} </p>
                <p><strong>Time remaining until {firstName}'s birthday:</strong> {days} Days!!! </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
