var rightNow = $('#currentDay');
var timePast = $('past');
var timePresent = $('present');
var timeFuture = $('future');
var am9 = $('#hour-9');
var am10 = $('#hour-10');
var am11 = $('#hour-11');
var am12 = $('#hour-12');
var pm1 = $('#hour-1');
var pm2 = $('#hour-2');
var pm3 = $('#hour-3');
var pm4 = $('#hour-4');
var pm5 = $('#hour-5');
var hourX = dayjs().format('H');

// These variables are meant to try and condense all the separated functions into one, concise function.

// var time9 = hourX[9];
// var time10 = hourX[10];
// var time11 = hourX[11];
// var time12 = hourX[12];
// var time1 = hourX[1];
// var time2 = hourX[2];
// var time3 = hourX[3];
// var time4 = hourX[4];
// var time5 = hourX[5];
// var newHourEvent = `hour${hour}Event`
// var hour = 0

$(function () {

// This code is meant to try and condense all the separated functions into one, concise function.

  // for(i = 9; i <= 17; i++) {
  //   console.log(`hour${hour + i}Event`);
  //   var event = document.getElementById(`hour${hour + i}Event`);
  //   var display = document.getElementById(`displayHour${hour + i}Events`);
  //   var saveHrBtn = document.getElementById(`hour${hour + i}Btn`);
  //   saveHrBtn.addEventListener('click', function () {
  //     window.localStorage.setItem(i++ + 'oclock', display.value);
  //   });
  //   var storedEvent = localStorage.getItem(i++ + 'oclock');
  //   var eventInput = event;
  //   eventInput.value = storedEvent;

  //   // event.value = "test";
  //   console.log(event)
  // }


  // Hour 9 input
  var displayHour9Events = document.getElementById('hour9Event');
  document.getElementById('hour9Btn').addEventListener('click', function () {
    window.localStorage.setItem('9 oclock', displayHour9Events.value);
  });
  var storedEvent = localStorage.getItem('9 oclock');
  var eventInput = document.getElementById('hour9Event');
  eventInput.value = storedEvent;

  // Hour 10 input
  var displayHour10Events = document.getElementById('hour10Event');
  document.getElementById('hour10Btn').addEventListener('click', function () {
    window.localStorage.setItem('10 oclock', displayHour10Events.value);
  });
  var storedEvent = localStorage.getItem('10 oclock');
  var eventInput = document.getElementById('hour10Event');
  eventInput.value = storedEvent;

  // Hour 11 input
  var displayHour11Events = document.getElementById('hour11Event');
  document.getElementById('hour11Btn').addEventListener('click', function () {
    window.localStorage.setItem('11 oclock', displayHour11Events.value);
  });
  var storedEvent = localStorage.getItem('11 oclock');
  var eventInput = document.getElementById('hour11Event');
  eventInput.value = storedEvent;

  // Hour 12 input
  var displayHour12Events = document.getElementById('hour12Event');
  document.getElementById('hour12Btn').addEventListener('click', function () {
    window.localStorage.setItem('12 oclock', displayHour12Events.value);
  });
  var storedEvent = localStorage.getItem('12 oclock');
  var eventInput = document.getElementById('hour12Event');
  eventInput.value = storedEvent;

  // Hour 13 input
  var displayHour13Events = document.getElementById('hour13Event');
  document.getElementById('hour13Btn').addEventListener('click', function () {
    window.localStorage.setItem('1pm oclock', displayHour13Events.value);
  });
  var storedEvent = localStorage.getItem('1pm oclock');
  var eventInput = document.getElementById('hour13Event');
  eventInput.value = storedEvent;

  // Hour 14 input
  var displayHour14Events = document.getElementById('hour14Event');
  document.getElementById('hour14Btn').addEventListener('click', function () {
    window.localStorage.setItem('2pm oclock', displayHour14Events.value);
  });
  var storedEvent = localStorage.getItem('2pm oclock');
  var eventInput = document.getElementById('hour14Event');
  eventInput.value = storedEvent;

  // Hour 15 input
  var displayHour15Events = document.getElementById('hour15Event');
  document.getElementById('hour15Btn').addEventListener('click', function () {
    window.localStorage.setItem('3pm oclock', displayHour15Events.value);
  });
  var storedEvent = localStorage.getItem('3pm oclock');
  var eventInput = document.getElementById('hour15Event');
  eventInput.value = storedEvent;

  // Hour 16 input
  var displayHour16Events = document.getElementById('hour16Event');
  document.getElementById('hour16Btn').addEventListener('click', function () {
    window.localStorage.setItem('4pm oclock', displayHour16Events.value);
  });
  var storedEvent = localStorage.getItem('4pm oclock');
  var eventInput = document.getElementById('hour16Event');
  eventInput.value = storedEvent;

  // Hour 17 input
  var displayHour17Events = document.getElementById('hour17Event');
  document.getElementById('hour17Btn').addEventListener('click', function () {
    window.localStorage.setItem('5pm oclock', displayHour17Events.value);
  });
  var storedEvent = localStorage.getItem('5pm oclock');
  var eventInput = document.getElementById('hour17Event');
  eventInput.value = storedEvent;



  // This code is meant to test extra hours. Used to verify the time slot i was working in during the build of this app

  // // Hour 18 input
  // var displayHour18Events = document.getElementById('hour18Event');
  // document.getElementById('hour18Btn').addEventListener('click', function () {
  //   window.localStorage.setItem('6pm oclock', displayHour18Events.value);
  // });
  // var storedEvent = localStorage.getItem('6pm oclock');
  // var eventInput = document.getElementById('hour18Event');
  // eventInput.value = storedEvent;

  // // Hour 19 input
  // var displayHour19Events = document.getElementById('hour19Event');
  // document.getElementById('hour19Btn').addEventListener('click', function () {
  //   window.localStorage.setItem('7pm oclock', displayHour19Events.value);
  // });
  // var storedEvent = localStorage.getItem('7pm oclock');
  // var eventInput = document.getElementById('hour19Event');
  // eventInput.value = storedEvent;

  // // Hour 20 input
  // var displayHour20Events = document.getElementById('hour20Event');
  // document.getElementById('hour20Btn').addEventListener('click', function () {
  //   window.localStorage.setItem('8pm oclock', displayHour20Events.value);
  // });
  // var storedEvent = localStorage.getItem('8pm oclock');
  // var eventInput = document.getElementById('hour20Event');
  // eventInput.value = storedEvent;

  // // Hour 21 input
  // var displayHour21Events = document.getElementById('hour21Event');
  // document.getElementById('hour21Btn').addEventListener('click', function () {
  //   window.localStorage.setItem('9pm oclock', displayHour21Events.value);
  // });
  // var storedEvent = localStorage.getItem('9pm oclock');
  // var eventInput = document.getElementById('hour21Event');
  // eventInput.value = storedEvent;

  // // Hour 22 input
  // var displayHour22Events = document.getElementById('hour22Event');
  // document.getElementById('hour22Btn').addEventListener('click', function () {
  //   window.localStorage.setItem('10pm oclock', displayHour22Events.value);
  // });
  // var storedEvent = localStorage.getItem('10pm oclock');
  // var eventInput = document.getElementById('hour22Event');
  // eventInput.value = storedEvent;

  // // Hour 23 input
  // var displayHour23Events = document.getElementById('hour23Event');
  // document.getElementById('hour23Btn').addEventListener('click', function () {
  //   window.localStorage.setItem('11pm oclock', displayHour23Events.value);
  // });
  // var storedEvent = localStorage.getItem('11pm oclock');
  // var eventInput = document.getElementById('hour23Event');
  // eventInput.value = storedEvent;



  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
  if (hourX > 9) {
    $('#hour-9').addClass('past')
    console.log("It's past 9")
  } else if (hourX == 9) {
    $('#hour-9').addClass('present')
    console.log("It's 9!")
  } else {
    $('#hour-9').addClass('future')
    console.log("It's before 9")
  }

  if (hourX > 10) {
    $('#hour-10').addClass('past')
    console.log("It's past 10")
  } else if (hourX == 10) {
    $('#hour-10').addClass('present')
    console.log("It's 10!")
  } else {
    $('#hour-10').addClass('future')
    console.log("It's before 10")
  }

  if (hourX > 11) {
    $('#hour-11').addClass('past')
    console.log("It's past 11")
  } else if (hourX == 11) {
    $('#hour-11').addClass('present')
    console.log("It's 11!")
  } else {
    $('#hour-11').addClass('future')
    console.log("It's before 11")
  }

  if (hourX > 12) {
    $('#hour-12').addClass('past')
    console.log("It's past 12")
  } else if (hourX == 12) {
    $('#hour-12').addClass('present')
    console.log("It's 12!")
  } else {
    $('#hour-12').addClass('future')
    console.log("It's before 12")
  }

  if (hourX > 13) {
    $('#hour-13').addClass('past')
    console.log("It's past 1")
  } else if (hourX == 13) {
    $('#hour-13').addClass('present')
    console.log("It's 1!")
  } else {
    $('#hour-13').addClass('future')
    console.log("It's before 1")
  }

  if (hourX > 14) {
    $('#hour-14').addClass('past')
    console.log("It's past 2")
  } else if (hourX == 14) {
    $('#hour-14').addClass('present')
    console.log("It's 2!")
  } else {
    $('#hour-14').addClass('future')
    console.log("It's past 2")
  }

  if (hourX > 15) {
    $('#hour-15').addClass('past')
    console.log("It's past 3")
  } else if (hourX == 15) {
    $('#hour-15').addClass('present')
    console.log("It's 3!")
  } else {
    $('#hour-15').addClass('future')
    console.log("It's before 3")
  }

  if (hourX > 16) {
    $('#hour-16').addClass('past')
    console.log("It's past 4")
  } else if (hourX == 16) {
    $('#hour-16').addClass('present')
    console.log("It's 4!")
  } else {
    $('#hour-16').addClass('future')
    console.log("It's before 4")
  }

  if (hourX > 17) {
    $('#hour-17').addClass('past')
    console.log("It's past 5")
  } else if (hourX == 17) {
    $('#hour-17').addClass('present')
    console.log("It's 5!")
  } else {
    $('#hour-17').addClass('future')
    console.log("It's before 5")
  }


// This code is meant to test extra hours. Used to verify the time slot i was working in during the build of this app

  // if (hourX > 18) {
  //   $('#hour-18').addClass('past')
  //   console.log("It's past 6")
  // } else if (hourX == 18) {
  //   $('#hour-18').addClass('present')
  //   console.log("It's 6!")
  // } else {
  //   $('#hour-18').addClass('future')
  //   console.log("It's before 6")
  // }

  // if (hourX > 19) {
  //   $('#hour-19').addClass('past')
  //   console.log("It's past 7")
  // } else if (hourX == 19) {
  //   $('#hour-19').addClass('present')
  //   console.log("It's 7!")
  // } else {
  //   $('#hour-19').addClass('future')
  //   console.log("It's before 7")
  // }

  // if (hourX > 20) {
  //   $('#hour-20').addClass('past')
  //   console.log("It's past 8")
  // } else if (hourX == 20) {
  //   $('#hour-20').addClass('present')
  //   console.log("It's 8!")
  // } else {
  //   $('#hour-20').addClass('future')
  //   console.log("It's before 8")
  // }

  // if (hourX > 21) {
  //   $('#hour-21').addClass('past')
  //   console.log("It's past 9")
  // } else if (hourX == 21) {
  //   $('#hour-21').addClass('present')
  //   console.log("It's 9!")
  // } else {
  //   $('#hour-21').addClass('future')
  //   console.log("It's before 9")
  // }

  // if (hourX > 22) {
  //   $('#hour-22').addClass('past')
  //   console.log("It's past 10")
  // } else if (hourX == 22) {
  //   $('#hour-22').addClass('present')
  //   console.log("It's 10!")
  // } else {
  //   $('#hour-22').addClass('future')
  //   console.log("It's before 10")
  // }

  // if (hourX > 23) {
  //   $('#hour-23').addClass('past')
  //   console.log("It's past 11")
  // } else if (hourX == 23) {
  //   $('#hour-23').addClass('present')
  //   console.log("It's 11!")
  // } else {
  //   $('#hour-23').addClass('future')
  //   console.log("It's before 11")
  // }

  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?

  // TODO: Add code to display the current date in the header of the page.
  function displayTime() {
    var currentTime = dayjs().format('MMM DD, YYYY [at] hh:mm a');
    rightNow.text(currentTime);
  }

  console.log("It's within " + dayjs().format('H') + "00 in 24hr time")

  displayTime();
  setInterval(displayTime, 1000);


  // Code to refresh the page every hour to ensure the current hour is highlighted
  function refreshPage() {
    location.reload();
  }

  function scheduleRefresh() {
    const now = dayjs();
    const nextHour = now.startOf('hour').add(1, 'hour');
    const millisecondsToNextHour = nextHour.diff(now);

    setTimeout(function () {
      refreshPage();
      scheduleRefresh();
    }, millisecondsToNextHour);
  }


  // Call the function to schedule the first refresh
  scheduleRefresh();
});

document.querySelector("#clearBtn").addEventListener("click", clearPage)

function clearPage() {
  localStorage.clear();
  location.reload();
}
