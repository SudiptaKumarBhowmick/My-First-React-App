import React, { useEffect, useState } from "react";
import "./styles.css";

const App = () => {
// const message = "This is my first variable rendered in JSX!";
// const information = "This is my second variable rendered in JSX!";

// const handleClick = () => {
//   alert("you clicked the information!");
// };

  // return (
  //   <div>
  //     <h1>Hello React World.</h1>
  //     <h2>
  //       This is our first React App - isn't it marvellous?!
  //     </h2>
  //     <p onClick={() => alert("you clicked the message!")}>{message}</p>
  //     <p onClick={handleClick}>{information}</p>
  //   </div>
  // );

//contact list
  // return (
  //   <>
  //     <ContactCard
  //       avatar="https://via.placeholder.com/150"
  //       name="Jenny Han"
  //       email="jenny.han@notreal.com"
  //       age={25}
  //     />

  //     <ContactCard
  //       avatar="https://via.placeholder.com/150"
  //       name="Jason Long"
  //       email="jason.long@notreal.com"
  //       age={45}
  //     />

  //     <ContactCard
  //       avatar="https://via.placeholder.com/150"
  //       name="Peter Pan"
  //       email="peter.pan@neverland.com"
  //       age={100}
  //     />
  //   </>
  // );

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setContacts(data.results);
      });
  }, []);

  return (
    <>
      {contacts.map(contact => (
        <ContactCard
          avatar={contact.picture.large}
          name={contact.name.first + " " + contact.name.last}
          email={contact.email}
          age={contact.dob.age}
        />
      ))}
    </>
  );

}

const ContactCard = props => {
  console.log(props.avatar);
  console.log(props.name);
  console.log(props.email);
  console.log(props.age);
const [showAge, setShowAge] = useState(false);
console.log("This is a showage state variable: "+ showAge);

  return (
    <div className="contact-card">
    <img src={props.avatar} alt="profile" />
    <div className="user-details">
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <button onClick={() => setShowAge(!showAge)}>Toggle Age </button>
      {showAge && <p>Age: {props.age}</p>}
    </div>
  </div>
  );

};

export default App;