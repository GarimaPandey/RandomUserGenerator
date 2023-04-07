import React, { useEffect,useState } from "react";
import { format } from 'date-fns';

export default function UserDetail() {
  
    const [firstName] = useState ( () => {
     const first = localStorage.getItem("first_name");
    return first;
    });

    const [lastName] = useState ( () => {
        const last = localStorage.getItem("last_name");
       return last;
       });

       const [email] = useState ( () => {
        const email = localStorage.getItem("email");
       return email;
       });

       const [phone] = useState ( () => {
        const phone = localStorage.getItem("phone");
       return phone;
       });

       const [formattedDate] = useState ( () => {
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
    <div className="well">
      <h2>User Detail</h2>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <p><strong>First Name: {firstName}</strong> </p>
          <p><strong>Last Name: {lastName}</strong> </p>
          <p><strong>Email: {email}</strong> </p>
          <p><strong>Phone: {phone}</strong></p>
          <p><strong>Date of Birth: {formattedDate}</strong> </p>
        <p><strong>Time remaining until {firstName}'s birthday: {days} Days!!! </strong></p>
        </div>
      </div>
    </div>
  );
};