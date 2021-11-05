import React from "react";

export default function UseStateObject() {
  const [name, setName] = React.useState({
    firstName: "",
    lastName: "",
  });
  const updateFName = (event) => {
    setName({ ...name, firstName: event.target.value });
  };
  const updateLName = (event) => {
    setName({ ...name, lastName: event.target.value });
  };
  return (
    <div>
      <input type="text" value={name.firstName} onChange={updateFName} />
      <input type="text" value={name.secondName} onChange={updateLName} />
      <div>FirstName : {name.firstName} </div>
      <div>LastName : {name.lastName} </div>
    </div>
  );
}
