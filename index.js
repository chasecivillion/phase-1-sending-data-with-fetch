// Add your code here

function submitData( name, email) {
    let formData = {
        name: name,
        email: email
    };

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData)
    };
    
    return fetch( "http://localhost:3000/users", configObj )
    .then( r => r.json())
    .then( obj => {
        let p = document.createElement("p")
        p.textContent = obj.id;
        document.body.appendChild(p)
        console.log(obj);
    })
    .catch( err => {
        let errorCode = "Unauthorized Access"
        let h1 = document.createElement("h1")
        h1.textContent = errorCode;
        document.body.appendChild(h1)
        console.log(err.message);
    });

};

submitData();







submitData();