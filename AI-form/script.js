const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
        object[key] = value
    });
    var json = JSON.stringify(object);

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                console.log("YAY");
            } else {
                console.log(response);
            }
            setTimeout(() => {
                console.log("waiting..") 
            }, 3000);
            window.location.href="index.html"
        })
        .catch(error => {
            console.log(error);
            setTimeout(() => {
                console.log("waiting..") 
            }, 3000);
            window.location.href="index.html"
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none"; 
            }, 5000);
        });
        
})