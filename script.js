let submit = true;

// hero button
const button = document.querySelector("#info-btn");

button.addEventListener('click', emailId)

function emailId () {

    const input = document.querySelector("#info-input").value;
    const feedback = document.querySelector("#feedback")

    if (input === "") {
        feedback.innerHTML = "Please enter a valid email";
        submit = false;
    } else {
        feedback.innerHTML = " ";
        submit = true;      
    }
};

// footer button
const button2 = document.querySelector("#info-btn-2");

button2.addEventListener('click', emailId2)

function emailId2 () {

    const input2 = document.querySelector("#info-input-2").value;
    const feedback2 = document.querySelector("#feedback2")

    if (input2 === "") {
        feedback2.innerHTML = "Please enter a valid email";
        submit = false;
    } else {
        feedback2.innerHTML = " ";
        submit = true;
    }
};