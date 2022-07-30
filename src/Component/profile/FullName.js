import React from "react";


function FullName() {
  let firstName = "Abdelaziz";
  let lastName = "Boulmal";
  return (
    <div>
      <p className="fullName">
        {firstName} {lastName}
      </p>
    </div>
  );
}

export default FullName;
