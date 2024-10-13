let submit = true;

// hero input validation
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

// footer input validation
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

// modal form validation

const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener('click', submitForm);

function submitForm () {

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    const number = document.querySelector("#number").value;

    if (firstName === "") {
        const error1 = document.querySelector("#error1")
        error1.innerHTML = "Please enter your name";
        submit = false;
    } else {
        error1.innerHTML = "";
        submit = true;
    };

    if (lastName === "") {
        const error2 = document.querySelector("#error2")
        error2.innerHTML = "Please enter your name";
        submit = false;
    } else {
        error2.innerHTML = "";
        submit = true;
    };

    if (email === "") {
        const error3 = document.querySelector("#error3")
        error3.innerHTML = "Please enter a valid email";
        submit = false;
    } else {
        error3.innerHTML = "";
        submit = true;
    }; 

    if (number === "") {
        const error4 = document.querySelector("#error4")
        error4.innerHTML = "Please enter your number";
        submit = false;
    } else {
        error4.innerHTML = "";
        submit = true;
    };  
};


// card hover effect

const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
    card.addEventListener('mouseover', function () {
        card.style.transform = 'scale(1.1)'
    });

    card.addEventListener('mouseout', function () {
        card.style.transform = 'scale(1)'
    });
});
