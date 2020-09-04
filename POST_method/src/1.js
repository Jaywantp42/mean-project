 
let registerUsingPost = async () => {
    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const mobile = document.querySelector("#mobile").value;
    const passwd = document.querySelector("#passwd").value;
  
    const input = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      mobile: mobile,
      passwd: passwd,
    };
    const url = "http://localhost:3000/addUser";
  
    // http understands text
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    document.querySelector("#firstname").value = "";
    document.querySelector("#lastname").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#mobile").value = "";
    document.querySelector("#passwd").value = "";
};
  