/*Author: Joel Conley
Last updated: October 12, 2020 */

/* Original code for Unit 4 from W3schools, author unknown,
copied for modification July 27, 2020
https://www.w3schools.com/howto/howto_js_collapsible.asp 

    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
*/

// var exp = document.getElementsByClassName("expand");
// //Collect the relevant activating elements into an array
// //Modification: adjusted variable name and class to apply to my HTML
// var i;
// //initialize loop counter

// for (i = 0; i < exp.length; i++) {
//     /*Create loop based on number of expand buttons on page. 
//     Set i to 0, run while i is less than the amount of expand buttons, 
//     increment one after every cycle*/
//     exp[i].addEventListener("click", function() {
//         /*create event listener for each expand button and bind 
//         the "click" action to each one, where the result of being clicked 
//         is the following anonymous function */

//         /*Removed
//          this.classList.toggle("active");
//          as it was only being used for aesthetic reasons swhich did not 
//          suit my purposes.It was being used to add a new class identifier 
//          to the button such that it could be styled differently after being clicked*/

//         var content = this.nextElementSibling;
//         //Sets the element to be acted on as a variable
//         /*Had to refactor my HTML and CSS to make the 
//         responding element be the next sibling of the button*/

//         if (content.style.display === "block") {
//             content.style.display = "none";
//         } else {
//             content.style.display = "block";
//         }
//         /*Since the needs for the state of the element are binary in nature, 
//         the solution is a simple read of its current state and subsequently
//         flipping to its opposite state, i.e. visible or not visible, 
//         in plain english*/

//         if (this.innerHTML == "Expand") {
//             this.innerHTML = "Collapse";
//         } else {
//             this.innerHTML = "Expand";
//         }
//         /*Modification: Same binary concept as above 
//         but applied to the text of the button*/
//     });


// } //End Unit 4 content

//Unit 4 content replaced by jQuery

//start course info divs from collapsed state
$(".course_info").hide();
//set expand button to intitiate slide down/up of sibling div 
$(".expand").click(function() {
        $(this.nextElementSibling).slideToggle();
        //adjust button text accordingly
        if (this.innerHTML == "Expand") {
            this.innerHTML = "Collapse";
        } else {
            this.innerHTML = "Expand";
        }
    })
    //end Unit 4 content replaced by jQuery


//Begin Unit 5 content
if (sessionStorage.getItem("studentDatabase")) {
    var studentDatabase = JSON.parse(sessionStorage.getItem("studentDatabase"));
} else {
    var studentDatabase = {
        studentId: ["3494789", "0000000"],
        studentName: ["Joel Conley", "Jessica Fakename"],
        password: ["athabasca", "password"],
        registeredCourses: {
            subject: [
                ["COMP", "COMP", "PHIL", "COMP"],
                ["GNED"]
            ],
            courseNumber: [
                ["1501", "3309", "2221", "2511"],
                ["1301"]
            ],
            courseName: [
                ["Programming I: Introduction to Problem Solving", "Information Technology & Society", "Metaphysics", "Web I: Client Development"],
                ["Citizenship Without Borders"]
            ],
            prerequisites: [
                ["none", "GNED 1301", "Any Philosophy Course", "COMP 1501"],
                ["none"]
            ],
            status: [
                ["completed", "registered", "registered", "registered"],
                ["registered"]
            ],
            sectionNumber: [
                [null, 1, 2, 1],
                [3]
            ],
            daysOfWeek: [
                [
                    null, ["Tu", "Th"],
                    ["Tu", "Th"],
                    ["M", "W", "F"]
                ],
                [
                    ["Tu", "Th"]
                ]
            ],
            lectureTime: [
                [null, 1300, 1000, 1200],
                [1400]
            ]
        }
    };
}

var courseList = {
    courseNumber: ["COMP1501", "COMP1502", "COMP2503", "COMP2511", "COMP2521", "COMP3309", "COMP3504", "PHIL2221", "PHIL2281"],
    courseName: ["Programming I: Introduction to Problem Solving",
        "Programming II: Object-Oriented Programming",
        "Programming III: Data Structures",
        "Web I: Client Development",
        "Databases I: Data Modeling & Query Languages",
        "Information Technology & Society",
        "Programming IV: Software Engineering",
        "Metaphysics",
        "Philosophy of Mind"
    ],
    prerequisites: ["none",
        "COMP1501",
        "COMP1502",
        "COMP1501",
        "COMP1502 or COMP2511",
        "GNED1301",
        "COMP2504 and COMP2541",
        "Any Philosophy Course",
        "Any Philosophy Course"
    ],
    sectionNumber: [{

            Section1: {
                daysOfWeek: ["M", "Tu", "W", "Th", "F"],
                lectureTime: "12:00"
            },
            Section2: {
                daysOfWeek: ["M", "Tu", "W", "Th", "F"],
                lectureTime: "9:00"
            },
            Section3: {
                daysOfWeek: ["M", "Tu", "W", "Th", "F"],
                lectureTime: "2:00"
            }
        },
        {

            Section1: {
                daysOfWeek: ["M", "W", "F"],
                lectureTime: "3:00"
            },
            Section2: {
                daysOfWeek: ["Tu", "Th", "F"],
                lectureTime: "10:00"
            }
        },
        {

            Section1: {
                daysOfWeek: ["Tu", "Th", "F"],
                lectureTime: "11:00"
            }
        },
        {

            Section1: {
                daysOfWeek: ["M", "W", "F"],
                lectureTime: "9:00"
            },
            Section2: {
                daysOfWeek: ["M", "W", "F"],
                lectureTime: "3:00"
            }
        },
        {

            Section1: {
                daysOfWeek: ["M", "W", "F"],
                lectureTime: "10:00"
            }
        },
        {
            Section1: {
                daysOfWeek: ["Tu", "Th"],
                lectureTime: "1:00"
            },
            Section2: {
                daysOfWeek: ["M", "W"],
                lectureTime: "4:00"
            }
        },
        {
            Section1: {
                daysOfWeek: ["M", "W", "F"],
                lectureTime: "11:00"
            }
        },
        {
            Section1: {
                daysOfWeek: ["Tu", "Th"],
                lectureTime: "9:00"
            },
            Section2: {
                daysOfWeek: ["W", "F"],
                lectureTime: "4:00"
            }
        },
        {
            Section1: {
                daysOfWeek: ["Tu", "Th"],
                lectureTime: "12:00"
            },
            Section2: {
                daysOfWeek: ["W", "F"],
                lectureTime: "2:00"
            }
        }
    ]
};

//set logged in token to false if it doesn't already exists
if (!sessionStorage.getItem("loggedIn")) {
    sessionStorage.setItem("loggedIn", "false");
}

function loginCheck(loggedIn) {
    //check if user is logged in
    if (loggedIn == "true") {
        //change login button to logout button
        document.getElementById("login_btn").value = "Logout";
        //remove login forms
        if (document.getElementById("student_id")) {
            document.getElementById("student_id").remove();
            document.getElementById("student_password").remove();
        }
        //create new header list item to house login confirmation
        confirmLogin = document.createElement("li");

        if (!window.jsonId) {
            //allows persistence of HTML state on browser refresh
            jsonId = sessionStorage.getItem("jsonId");
        }

        //insert user name and id to page as login confirmation
        confirmLogin.innerText = studentDatabase.studentName[jsonId] +
            "\nID: " + studentDatabase.studentId[jsonId];
        confirmLogin.id = "confirm_login";
        document.getElementById("navlist").appendChild(confirmLogin);
    }
    /*if user was already logged in then the button click was to logout 
    and HTML content must be reset to initial state*/
    else {
        document.getElementById("login_btn").value = "Login";
        //check if element exists before attenmpting to remove
        if (window.confirmLogin) {
            confirmLogin.remove();
            const resetForm = '<input id="student_id" name="Student ID" type="text" placeholder="Student ID" /><input id="student_password" type="password" name="Student Password" placeholder="Password" />';
            document.getElementById("login_btn").insertAdjacentHTML("beforebegin", resetForm);
            //re-bind the enter key to the reset forms
            bindEnterKey();
            //remove all user content from calendar
            removeFromSchedule("course_data");

            location.reload();
        }
    }
}


function login() {
    //check whether a user is currently logged in
    if (sessionStorage.getItem("loggedIn") == "false") {
        //extract user input for id number and password
        var studentId = document.getElementById("student_id").value;
        var password = document.getElementById("student_password").value;

        //loop through student accounts in JSON database
        for (jsonId = 0; jsonId <= studentDatabase.studentId.length - 1; jsonId++) {
            //check each student entry for a matching id number and password
            if (studentId == studentDatabase.studentId[jsonId] && password == studentDatabase.password[jsonId]) {
                //if a match is found store a "logged in" token for session and set to true
                sessionStorage.setItem("loggedIn", "true");
                /*set the position of the student account in the JSON database 
                for future session lookups of user data*/
                sessionStorage.setItem("jsonId", jsonId);
                //call logincheck() to confirm login to user
                loginCheck(sessionStorage.getItem("loggedIn"));
                //call function to fill student calendar with respective user data
                if (window.location.pathname.slice(-15) == "my_courses.html" ||
                    window.location.pathname.slice(-13) == "register.html") {
                    fillSchedule(sessionStorage.getItem("loggedIn"));
                }

                location.reload();

                //end loop when user match is found
                break;
                //inform user if no match is found
            } else if (jsonId == studentDatabase.studentId.length - 1 &&
                sessionStorage.getItem("loggedIn") == "false") {
                alert("No user found. Please check your login info.");
                //clear bad password input
                document.getElementById("student_password").value = null;
            }
        }
    }
    /*if user was logged in then set the logged in token to 
    false and call the function to reset the HTML*/
    else {
        sessionStorage.setItem("loggedIn", false);
        loginCheck(sessionStorage.getItem("loggedIn"));
    }
}

function bindEnterKey() {
    /*the code and comments for this function is from 
    https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp*/

    var formId = document.getElementById("student_id");
    var formPw = document.getElementById("student_password");

    // Execute a function when the user releases a key on the keyboard
    formId.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Trigger the button element with a click
            document.getElementById("login_btn").click();
        }
    });

    formPw.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            document.getElementById("login_btn").click();
        }
    });
}

function fillSchedule(loggedIn) {
    //check stored logged in token
    if (loggedIn == "true") {
        //get an array of the logged in student's course statuses
        var courseStatusList = studentDatabase.registeredCourses.status[jsonId];
        //declare variable to differentiate between different courses
        var background = 0;
        //loop through array of course statuses
        for (var coursePositionId in courseStatusList) {
            //get the value (i.e. status) at each position in array
            var courseStatus = courseStatusList[coursePositionId];

            //only use if the course is a currently registered one (as opposed to completed)
            if (courseStatus == "registered") {
                //extract the subject, course number, lecture time and days
                var courseTime = studentDatabase.registeredCourses.lectureTime[jsonId][coursePositionId];
                var daysList = studentDatabase.registeredCourses.daysOfWeek[jsonId][coursePositionId];
                var subject = studentDatabase.registeredCourses.subject[jsonId][coursePositionId];
                var courseNumber = studentDatabase.registeredCourses.courseNumber[jsonId][coursePositionId];
                //assign the course a number based on how many the student it registered in
                background += 1;
                var backgroundClass = " course" + background;

                //loop through the array of days the course runs on 
                for (var dayPositionId in daysList) {
                    /*extract each day and combine with course time to match to 
                    a corresponding HTML classed table cell*/
                    var day = daysList[dayPositionId];
                    var scheduleCell = day + courseTime;
                    //insert course subject and course number into appropriate cell 
                    document.getElementById(scheduleCell).textContent = subject + courseNumber;
                    //add an HTML class name to each modified cell
                    document.getElementById(scheduleCell).className += backgroundClass;
                    /*create clickable text in each modified cell to allow 
                    removal of individual courses from the calendar*/
                    const dropCourse = '<div class="drop_course" onclick="getCourse(this)">Drop Course</div>';
                    document.getElementById(scheduleCell).insertAdjacentHTML("beforeend", dropCourse);
                }
            }
        }
    }
}

function getCourse(classList) {
    //get class name of the parent of the clicked text and 
    //split the multiple classes into an array
    var toRemove = classList.parentNode.className.split(" ");
    var droppedCourseName = $("." + toRemove[1])[0].textContent.substring(0, 8);
    //send dropped course name to database updater
    updateStudentDatabase(droppedCourseName, "drop");
    //send the second class name to the removeFromSchedule() function
    removeFromSchedule(toRemove[1]);
}

function removeFromSchedule(htmlClass) {
    /*collect relevant table cells into an array based on 
    the class name sent by the getCourse() function*/
    var courseData = document.getElementsByClassName(htmlClass);
    //loop through array, resetting content of each element
    for (var i = 0; i < courseData.length; i++) {
        courseData[i].textContent = "";
        //clear courses from schedule
        courseData[i].style.backgroundColor = "rgb(255, 250, 240, 0.1)";
        //reset background formatting of table cells
    }
}

//collect register buttons into array
var registerBtns = document.getElementsByClassName("register");
//loop over each button and bind the click function
for (var registerBtn of registerBtns) {
    registerBtn.addEventListener("click", function() {
            //get name of the course from corresponding register button
            courseText = this.parentNode.parentNode.firstChild.textContent;
            //trim leading and trailing whitespace
            courseText = courseText.trim();
            //split text into array to remove space
            courseText = courseText.split(" ");
            //recombine text without space
            courseText = courseText[0] + courseText[1];
            //set the course to a session token
            sessionStorage.setItem("preloadCourse", courseText);
        },
        //override bubbling so javascript activates before href link
        true)
}

//onload check for a course of interesting having been set
if (sessionStorage.getItem("preloadCourse")) {
    //load course name as default value for search box
    document.getElementById("course_search_box").value = sessionStorage.getItem("preloadCourse");
    //reset course token to blank so nothing is preloaded on future page visit without user intent
    sessionStorage.setItem("preloadCourse", "");
}

$(document).ready(function() {
        /*once default HTML is loaded, check value of stored login token and 
        call functions to adjust HTML accordingly with logged in user content*/
        bindEnterKey();
        loggedIn = sessionStorage.getItem("loggedIn");
        loginCheck(loggedIn);

        /*only call fillSchedule() if the user is on either of the pages 
        that display the user's course schedule*/
        if (window.location.pathname.slice(-15) == "my_courses.html" ||
            window.location.pathname.slice(-13) == "register.html") {
            fillSchedule(loggedIn);
        }
        //check for preloaded value in course search box
        $("#course_search_box").trigger("input");

        //load google chart API package if user is on the prgram tree page
        if (window.location.pathname.slice(-17) == "program_tree.html") {
            google.charts.load("current", { packages: ["orgchart"] });
            google.charts.setOnLoadCallback(createChart);
        }
    })
    //end Unit 5 content

//begin Unit 6 content
//set courseSearch function to fire everytime the input value changes
$("#course_search_box").on("input", function courseSearch() {
        //remove all results from previous search cycle
        $("td").remove(".search_result");
        //take in user input and set to a regex object
        userSearch = $("#course_search_box").val();
        var regex = new RegExp(userSearch, "i");
        //break courseList JSON object into individual objects
        $.each(courseList, function(key, val) {

                switch (key) {
                    case "courseNumber":
                        courseNumbers = val;
                        break;

                    case "courseName":
                        courseNames = val;
                        break;

                    case "prerequisites":
                        prereqs = val;
                        break;

                    case "sectionNumber":
                        sectionNumbers = val;

                }
            })
            //declare counter for setting row number for each search result
        var newRow = 0;
        //loop through courseNumbers object looking for matches to the regex object
        for (var courseNumber of courseNumbers) {
            //execute when any match is found
            if (courseNumber.search(regex) != -1) {
                //get position number of match from its array
                var coursePos = courseNumbers.indexOf(courseNumber);
                //declare counter for number of sections per match found
                var sectionCount = 0;
                //loop through sections of matched course
                for (section in sectionNumbers[coursePos]) {
                    //increment section counter at beginning of loop since there is no "Section 0"
                    sectionCount += 1;
                    //increment row number
                    newRow += 1;
                    //add html for new results row
                    $("#resultsTable").append('<tr><td class="search_result" id="courseResult' + newRow + '"></td><td class="search_result" id="nameResult' + newRow + '"></td><td class="search_result" id="prereqResult' + newRow + '"></td><td class="search_result" id="sectionResult' + newRow + '"></td><td class="search_result" id="daysResult' + newRow + '"></td><td class="search_result" id="timeResult' + newRow + '"></td><td class="search_result add" id="addResult' + newRow + '"></td></tr>');
                    //add content to results row based on coursePos and section
                    $("#courseResult" + newRow).text(courseNumbers[coursePos]);
                    $("#nameResult" + newRow).text(courseNames[coursePos]);
                    $("#prereqResult" + newRow).text(prereqs[coursePos]);
                    $("#sectionResult" + newRow).text("Section " + sectionCount);

                    //get lecture days for this section of matching course and combine into one string
                    function sectionDays() {
                        dayString = "";
                        for (var day of sectionNumbers[coursePos]["Section" + sectionCount].daysOfWeek) {
                            dayString += day;
                        }
                        return dayString;
                    }
                    //add dayString to results row
                    $("#daysResult" + newRow).text(sectionDays());
                    //get section time for matching course result and add to results row
                    var sectionTime = sectionNumbers[coursePos]["Section" + sectionCount].lectureTime;
                    $("#timeResult" + newRow).text(sectionTime);

                    //pull logged-in user's existing course schedule IDs into an array 
                    var existingCourses = new Array;
                    for (var i = 1; i <= 5; i++)
                        $(".course" + i).each(function(key, val) {
                            existingCourses.push($(val).attr("id"));
                        });

                    //the following four blocks form the "Schedule Conflict" check for the search results

                    //pull lecture days of current result into an array
                    var daysArray = sectionNumbers[coursePos]["Section" + sectionCount].daysOfWeek;
                    //convert section time from 12-hour to 24-hour clock
                    sectionTime = sectionTime.split(":");
                    sectionTime = sectionTime[0] + sectionTime[1];
                    sectionTime = Number(sectionTime)
                    if ((sectionTime >= 100) && (sectionTime <= 400)) {
                        sectionTime += 1200;
                    }
                    //combine days with time to for the scheduleCell ids
                    var scheduleCellsArray = new Array;
                    for (day of daysArray) {
                        var scheduleCell = day + sectionTime;
                        scheduleCellsArray.push(scheduleCell);
                    }

                    //perform check for schedule cells that already contain a course 
                    for (var cell of scheduleCellsArray) {
                        if (existingCourses.includes(cell)) {
                            /*set text where schedule conflicts are found in the 
                            search results for that logged in user*/
                            $("#addResult" + newRow).text("Schedule Conflict");
                            $("#addResult" + newRow).removeClass("add");
                            $("#addResult" + newRow).toggleClass("conflict");
                            break;
                        } else {
                            //when no conflict is found, allow user to add search result to their schedule
                            $("#addResult" + newRow).text("Add");
                            $(".add").attr("onclick", "location.replace('#confirm_div')");
                        }
                    }
                }
            }
        }
        //collect all "add to schedule" buttons
        $(".add").each(function(key, val) {
            //bind click function to each add button
            $(val).click(function() {
                //extract information from each column of the given row
                var rowId = this.id.substring(9);
                var addCourse = $("#courseResult" + rowId)[0].textContent;
                var addName = $("#nameResult" + rowId)[0].textContent;
                var addPrereq = $("#prereqResult" + rowId)[0].textContent;
                var addSection = $("#sectionResult" + rowId)[0].textContent;
                var addDays = $("#daysResult" + rowId)[0].textContent;
                var addTime = $("#timeResult" + rowId)[0].textContent;

                var daysArray = new Array;
                //convert dayString back to array of separate days
                for (letter of addDays) {
                    var day = letter;
                    if (letter == letter.toLowerCase()) {
                        daysArray.pop();
                        daysArray.push("T" + letter);
                    } else {
                        daysArray.push(day);
                    }
                }
                //convert section time from 12-hour to 24-hour clock
                addTime = addTime.split(":");
                addTime = addTime[0] + addTime[1];
                addTime = Number(addTime)
                if ((addTime >= 100) && (addTime <= 400)) {
                    addTime += 1200;
                }
                //add course and "drop course" buttong to relevant schedule cell
                for (day of daysArray) {
                    var scheduleCell = day + addTime;
                    $("#" + scheduleCell).text(addCourse);
                    $("#" + scheduleCell).addClass("addedCourse");
                    const dropCourse = '<div class="drop_course" onclick="getCourse(this)">Drop Course</div>';
                    $("#" + scheduleCell).append(dropCourse);
                }
                //send clicked row details to the update function
                updateStudentDatabase(addCourse, "add", addSection, daysArray, addTime);
            })
        })
    })
    //readies a modified database when user adds or drops a course
function updateStudentDatabase(course, caller, section, lectureDays, lectureTime) {
    var userUpdate = studentDatabase.registeredCourses;
    var subject = course.substring(0, 4);
    var courseNumber = course.substring(4);
    var jsonId = Number(sessionStorage.getItem("jsonId"));
    //update settings if function was called from a course being added
    if (caller == "add") {
        var coursePos = courseList.courseNumber.indexOf(course);
        var courseName = courseList.courseName[coursePos];
        var coursePrereqs = courseList.prerequisites[coursePos];
        var status = "registered";
        var sectionNumber = Number(section.substring(8));
        //add course details to new version of student database
        userUpdate.subject[jsonId].push(subject);
        userUpdate.courseNumber[jsonId].push(courseNumber);
        userUpdate.courseName[jsonId].push(courseName);
        userUpdate.prerequisites[jsonId].push(coursePrereqs);
        userUpdate.status[jsonId].push(status);
        userUpdate.sectionNumber[jsonId].push(sectionNumber);
        userUpdate.daysOfWeek[jsonId].push(lectureDays);
        userUpdate.lectureTime[jsonId].push(lectureTime);

        //update settings if function was called from a course being dropped
    } else if (caller == "drop") {
        var registeredSubjects = studentDatabase.registeredCourses.subject[jsonId];
        var registeredCourseNumbers = studentDatabase.registeredCourses.courseNumber[jsonId];
        var posCounter = 0;

        //remove course that was dropped from schedule from student database as well
        for (var registeredCourseNumber of registeredCourseNumbers) {

            if (registeredCourseNumber == courseNumber) {

                userUpdate.subject[jsonId].splice(posCounter, 1);
                userUpdate.courseNumber[jsonId].splice(posCounter, 1);
                userUpdate.courseName[jsonId].splice(posCounter, 1);
                userUpdate.prerequisites[jsonId].splice(posCounter, 1);
                userUpdate.status[jsonId].splice(posCounter, 1);
                userUpdate.sectionNumber[jsonId].splice(posCounter, 1);
                userUpdate.daysOfWeek[jsonId].splice(posCounter, 1);
                userUpdate.lectureTime[jsonId].splice(posCounter, 1);
                break;
            }
            posCounter += 1;
        }
    }
    //set update object to full version of copied database
    newStudentDatabase = studentDatabase;
    newStudentDatabase.registeredCourses = userUpdate;
}
//bind function to "confirm changes" button
$("#confirm").click(function() {
    if (!window.newStudentDatabase) {
        alert("No schedule changes to confirm.")
    } else {
        //if a modified schedule exists, set it to the official schedule and reload page
        sessionStorage.setItem("studentDatabase", JSON.stringify(newStudentDatabase));
        location.reload();
    }
}); //end unit 6 content

//begin unit 7 content

/*this function creates the degree program chart and color codes it 
based on the logged in user's data*/
function createChart() {
    //instantiate chart datatype from Google's API
    var nodeData = new google.visualization.DataTable();
    //define text components of chart nodes
    nodeData.addColumn("string", "Course");
    nodeData.addColumn("string", "Title");
    //build chart structure (which is static), where the second value of each is its parent
    nodeData.addRows([
        [{ "v": "COMP 1501", "f": "COMP 1501<div class=chart_node font-style:italic'>Programming I</div>" }, ""],
        [{ "v": "COMP 3309", "f": "COMP 3309<div class=chart_node font-style:italic'>Technology & Society</div>" }, ""],
        [{ "v": "COMP 1502", "f": "COMP 1502<div class=chart_node font-style:italic'>Programming II</div>" }, "COMP 1501"],
        [{ "v": "COMP 2511", "f": "COMP 2511<div class=chart_node font-style:italic'>Web Dev I</div>" }, "COMP 1501"],
        [{ "v": "COMP 2521", "f": "COMP 2521<div class=chart_node font-style:italic'>Databases I</div>" }, "COMP 1501"],
        [{ "v": "COMP 2531", "f": "COMP 2531<div class=chart_node font-style:italic'>Operating Systems</div>" }, "COMP 1501"],
        [{ "v": "COMP 2503", "f": "COMP 2503<div class=chart_node font-style:italic'>Programming III</div>" }, "COMP 1502"],
        [{ "v": "COMP 2541", "f": "COMP 2541<div class=chart_node font-style:italic'>Systems Analysis</div>" }, "COMP 1502"],
        [{ "v": "COMP 3532", "f": "COMP 3532<div class=chart_node font-style:italic'>System Administration</div>" }, "COMP 2531"],
        [{ "v": "COMP 3512", "f": "COMP 3512<div class=chart_node font-style:italic'>Web Dev II</div>" }, "COMP 2511"]

    ]);
    try {
        //pull logged in user's registered and completed courses and loop over them
        var studentCourses = studentDatabase.registeredCourses.subject[jsonId];
        for (var entry in studentCourses) {
            //combine course subject and number into one string
            var courseNumber = studentDatabase.registeredCourses.courseNumber[jsonId][entry];
            var course = studentCourses[entry] + " " + courseNumber;
            //chartData is just a sub-object of nodeData to simplify access
            var chartData = nodeData.fg;
            //loop over the chart
            for (rowData of chartData) {
                //collect the subject and index number of current cell
                var cellCourse = rowData.c[0].v;
                var cellNumber = chartData.indexOf(rowData);
                //check if course in current cell matches current course in user data
                if (course == cellCourse) {
                    //get the status of matched course from student data
                    var courseStatus = studentDatabase.registeredCourses.status[jsonId][entry];
                    //set background of cell to orange if course status is completed and green if it is currently registered
                    if (courseStatus == "completed") {
                        nodeData.setRowProperty(cellNumber, "style", "background-color: #FFA834");
                    } else if (courseStatus == "registered") {
                        nodeData.setRowProperty(cellNumber, "style", "background-color: #04F375");
                    }
                }
                //if course is not found in student data, shade the cell grey to set it as "locked"
                if (nodeData.getRowProperty(cellNumber, "style", "background-color") == null) {
                    nodeData.setRowProperty(cellNumber, "style", "background-color: #929292");
                }
                //grab prerequisite of course in current cell by looking at its parent
                var prerequisite = rowData.c[1].v;
                //loop over chart again to find the prerequisite of current cell
                for (var prereqRowData of chartData) {
                    //get index number of cell for this new loop over the chart
                    var prereqCellNumber = chartData.indexOf(prereqRowData);
                    /*once the prerequisite is found in this new loop, check whether
                     its background color indicates that it has the status of a "completed",
                      and if so, shade the child cell in that began this query blue 
                      to indicate it as an "unlocked course" */
                    if (prereqRowData.c[0].v == prerequisite) {
                        if (nodeData.getRowProperty(prereqCellNumber, "style", "background-color") == "background-color: #FFA834" &&
                            /*this second condition prevents the cell being marked as 
                            unlocked if it already has any status other than "locked" 
                            as indicated by grey background color*/
                            nodeData.getRowProperty(cellNumber, "style", "background-color") == "background-color: #929292") {
                            //set background of original cell to blue, indicating it as "unlocked"
                            nodeData.setRowProperty(cellNumber, "style", "background-color: #359FFF");
                        }
                    }
                    //mark as "unlocked" (blue) if cell in question has no prerequisite
                    else if (prerequisite == "" && nodeData.getRowProperty(cellNumber, "style", "background-color") == "background-color: #929292") {
                        nodeData.setRowProperty(cellNumber, "style", "background-color: #359FFF");
                    }
                }
            }
            //set div that chart should be drawn in
            var chart = new google.visualization.OrgChart(document.getElementById("program_chart"));
            //render chart
            chart.draw(nodeData, { "allowHtml": true, "nodeClass": "chart_node" });
        }
    } catch {
        //chartData is just a sub-object of nodeData to simplify access
        var chartData = nodeData.fg;
        //loop over the chart
        for (rowData of chartData) {
            //collect the subject and index number of current cell
            //  var cellCourse = rowData.c[0].v;
            var cellNumber = chartData.indexOf(rowData);
            nodeData.setRowProperty(cellNumber, "style", "background-color: #929292");
            //set div that chart should be drawn in
            var chart = new google.visualization.OrgChart(document.getElementById("program_chart"));
            //render chart
            chart.draw(nodeData, { "allowHtml": true, "nodeClass": "chart_node" });

        }
    }
}
//end unit 7 content