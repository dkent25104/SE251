
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function(){
		
        var d 	= new Date();
        var mth = d.getMonth()+1;
        var yr 	= d.getFullYear();

        $("#month").val(mth);
        $("#year").val(yr);
        showCalendar (mth, yr);

        $("#month,#year").change(function(e) {
            showCalendar ($("#month").val(), $("#year").val());
        });
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth()+1, 0).getDate();
}


function showCalendar (mth, yr) {
		
		
    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date( firstDayOfMonth );
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();

    /* this is where you'll generate the grid, for now I will just show first day of week
    var str = "<ul>";
    str += "<li>Number of days in the month: " + numberOfDaysInMonth + "</li>";
    str += "<li>First day of the week: " + firstDayOfWeek + " (" + daysOfTheWeek[firstDayOfWeek] + ")</li>";

    str += "</ul>";*/

    var str = '<div class="calendar">';

    for (let i = 0; i < firstDayOfWeek; i++)
    {
        str += '<div class="blank"></div>';
    }

    for (let x = 0; x < numberOfDaysInMonth; x++)
    {
        str += '<div class="day">';
        str += x + 1;
        str += '</div>';
    }

    str += '</div>';
    
    $("#results").html(str);
     
    var day = document.getElementsByClassName("day");

    for (let x = 0; x < numberOfDaysInMonth; x++)
    {
        day[x].addEventListener('click', changeAvailability);
    }

    function changeAvailability(e)
    {
        if (this.style.backgroundColor === "rgb(0, 128, 0)")
        {
            this.style.backgroundColor = "rgb(255, 0, 0)";
        }
        else if (this.style.backgroundColor === "rgb(255, 0, 0)")
        {
            this.style.backgroundColor = "rgb(255, 255, 255)";
        }
        else
        {
            this.style.backgroundColor = "rgb(0, 128, 0)";
        }
    }

    var avail = document.querySelector("#yes");
    var unavail = document.querySelector("#no");
    var reset = document.querySelector("#reset");

    avail.addEventListener('click', changeMonth);
    unavail.addEventListener('click', changeMonth);
    reset.addEventListener('click', changeMonth);

    function changeMonth(e)
    {
        if (this.id === "yes")
        {
            for (let x = 0; x < numberOfDaysInMonth; x++)
            {
                day[x].style.backgroundColor = "rgb(0, 128, 0)";
            }
        }
        else if (this.id === "no")
        {
            for (let x = 0; x < numberOfDaysInMonth; x++)
            {
                day[x].style.backgroundColor = "rgb(255, 0, 0)";
            }
        }
        else
        {
            for (let x = 0; x < numberOfDaysInMonth; x++)
            {
                day[x].style.backgroundColor = "rgb(255, 255, 255)";
            }
        }
    }
    
}


