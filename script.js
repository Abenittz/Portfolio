const validatingEmail = () => {
  const email = document.getElementById("email-input").value;
  const validator = new RegExp("^.+@.+..+$");

  const isvalid = validator.test(email);
  if (isvalid === true) {
    alert("Email is valid");
  } else {
    alert("Email is not valid");
  }
};


