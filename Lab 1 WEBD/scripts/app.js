console.log("JS is wired up");

function timeRedirect(e){
    let contactEmail = document.getElementById('exampleInputEmail1').value;
    let contactPassword = document.getElementById('exampleInputPassword1').value;
    console.log("Email: " + contactEmail + "Password: " + contactPassword);
    e.preventDefault();
    setTimeout(function () {
        window.location.href = "index.html";
    }, 3000)
}

let submitbtn = document.getElementById('submit-btn');

if (submitbtn)
{submitbtn.addEventListener('click',timeRedirect,false);
}