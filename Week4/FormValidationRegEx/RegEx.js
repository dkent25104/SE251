// JavaScript Document
window.addEventListener('load', init);
function init(e)
{
    var submit = document.querySelector("#submit");
    var p = document.querySelectorAll("p");
    var span = document.querySelectorAll("span");
    var input = document.querySelectorAll("input");
    var div = document.querySelectorAll("div");

    
    for (let x = 0; x < input.length-1; x++)
    {
        input[x].addEventListener('keyup', regExCheck);
    }

    function regExCheck(e)
    {
        if (this.id === "first-name")
        {
            var fPatt = /^[a-z-]{1,}$/gi;
            if (fPatt.test(this.value) === true)
            {
                p[0].className = "";
                span[0].innerHTML = "";
            }
            else if (this.value === "")
            {
                p[0].className = "red";
                span[0].innerHTML = "*";
            }
            else
            {
                p[0].className = "red";
                span[0].innerHTML = "Please use only letters or a dash";
            }
        }
        else if (this.id === "last-name")
        {
            var lPatt = /^[a-z-]{1,}$/gi;
            if (lPatt.test(this.value) === true)
            {
                p[1].className = "";
                span[1].innerHTML = "";
            }
            else if (this.value === "")
            {
                p[1].className = "red";
                span[1].innerHTML = "*";
            }
            else
            {
                p[1].className = "red";
                span[1].innerHTML = "Please use only letters or a dash";
            }
        }
        else if (this.id === "email")
        {
            var ePatt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
            if (ePatt.test(this.value) === true)
            {
                p[2].className = "";
                span[2].innerHTML = "";
            }
            else if (this.value === "")
            {
                p[2].className = "red";
                span[2].innerHTML = "*";
            }
            else
            {
                p[2].className = "red";
                span[2].innerHTML = "Please enter a valid email address";
            }
        }
        else if (this.id === "confirm-email")
        {
            var cPatt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
            if (cPatt.test(this.value) === true)
            {
                p[3].className = "";
                span[3].innerHTML = "";
            }
            else if (this.value === "")
            {
                p[3].className = "red";
                span[3].innerHTML = "*";
            }
            else
            {
                p[3].className = "red";
                span[3].innerHTML = "Please enter a valid email address";
            }
        }
        else if (this.id === "phone")
        {
            var pPatt = /^\d{10}$/g;
            if (pPatt.test(this.value) === true)
            {
                p[4].className = "";
                span[4].innerHTML = "";
            }
            else if (this.value === "")
            {
                p[4].className = "red";
                span[4].innerHTML = "*";
            }
            else
            {
                p[4].className = "red";
                span[4].innerHTML = "Please use 10 numbers only";
            }
        }
    }
    
    
    
    
    submit.addEventListener('click', validate);

    function validate(e)
    {
        for (let i=0; i<input.length-1; i++)
        {
            if (input[i].value === "")
            {
                p[i].className = "red";
                span[i].innerHTML = "*";
            }
        }

        if (input[2].value !== "" && input[2].value !== input[3].value)
        {
            p[3].className = "red";
            span[3].innerHTML = "Email addresses do not match";
        }
        else
        {
            if (input[0].value != "" && input[1].value != "" && input[2].value != "" && input[3].value != "" && input[4].value != "")
            {
                var person = {
                    fName: input[0].value,
                    lName: input[1].value,
                    email: input[2].value,
                    phone: input[4].value
                }

                div[0].style.display = "none";
                div[1].style.display = "block";

                div[1].innerHTML += person.fName + " ";
                div[1].innerHTML += person.lName + "<br>";
                div[1].innerHTML += person.email + "<br>";
                div[1].innerHTML += person.phone + "<br>";
            }
        }
    }
}