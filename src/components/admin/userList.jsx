import React from "react";

let database  = {
    name: [],
    email: ["tg@gmail.com", "gt@gmail.com"],
    password: ["12345", "45678"]
}; //We can extract the data from database here

const AccessEachElement = () => {
    const userElements = []; // Array to store JSX elements for each user

    for (let i = 0; i < database.name.length; i++) {
        const name = database.name[i];
        const email = database.email[i];
        const password = database.password[i];
        userElements.push(<h1 key={i}/*this is the props*/>{`${name}-${email}-${password}`}</h1>);
    }

    return (
        <div>
            {userElements} {/* Render all user elements */}
        </div>
    );
};

const UserList = () => {
    return (
        <div>
            <AccessEachElement />
        </div>
    );
};

export default UserList;
