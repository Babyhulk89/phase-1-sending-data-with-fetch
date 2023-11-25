function submitData(name, email) {
    const userData = {
      name: name,
      email: email,
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(userData),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then((response) => response.json())
      .then((data) => {
        // Append the new id to the DOM
        document.body.innerHTML += `<p>ID: ${data.id}</p>`;
      })
      .catch((error) => {
        // Append the error message to the DOM
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
  }
  
  // Example usage:
  submitData("John Doe", "john.doe@example.com");
  