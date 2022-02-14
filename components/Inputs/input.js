// chips input.
const userInp = document.querySelector(".inp");
const li = document.querySelector(".items");
const ulEl = document.querySelector(".all-items");

userInp.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    let isThere = userInp.value;
    if (isThere.length > 0) {
      ulEl.innerHTML += ` <li class="chip-items"><i class="fas fa-dot-circle"></i>${isThere}<i class="fas fa-times"></i></li>`;
      userInp.value = "";
    }
  }
});

ulEl.addEventListener("click", (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName === "I") {
    e.target.parentElement.classList.toggle("hide-chips");
  }
});

// Radio button
// Phone form.
const ringtoneForm = document.querySelector("#handleRingtone");

ringtoneForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formValue = document.querySelector(
    "input[name = 'set-ringtone']:checked"
  );
  let result = document.querySelector(".chosen-ringtone");
  result.style.display = "block";
  result.textContent = formValue.value + " is your new ringtone";
  setTimeout(() => (result.style.display = "none"), 4000);
});

// event managing.
const mainEvent = document.querySelector(".main-event-input");
const eventForm = document.querySelector(".event-form");
const emailOpt = document.querySelectorAll(".email-opt");
const emailList = document.querySelector("#email-list");
const emailHead = document.querySelector(".email-head");
const timeAll = document.querySelector(".time-all");
const timeList = document.querySelectorAll(".time-list");
const timezoneHead = document.querySelector(".timezone-head");
const startDate = document.querySelector(".start-date");
const endDate = document.querySelector(".end-date");
const startDateHead = document.querySelector(".start-date-head");
const endDateHead = document.querySelector(".end-date-head");

let timeZoneChecker = false;
eventForm.addEventListener("submit", (e) => {
  e.preventDefault();
  timeZoneChecker = true;
  // Handeling email conflicts.
  let decide = true;
  let inpValue = mainEvent.value;
  for (let i = 0; i < emailOpt.length; i++) {
    if (emailOpt[i].value === inpValue) {
      decide = false;
      break;
    }
  }
  if (
    decide &&
    inpValue.includes("@") &&
    (inpValue.includes("1") ||
      inpValue.includes("2") ||
      inpValue.includes("3") ||
      inpValue.includes("4") ||
      inpValue.includes("5") ||
      inpValue.includes("6") ||
      inpValue.includes("7") ||
      inpValue.includes("8") ||
      inpValue.includes("9") ||
      inpValue.includes("0"))
  ) {
    emailList.innerHTML += `<option value="${mainEvent.value}" class="email-opt"></option>`;
    change(emailHead, mainEvent);
    emailHead.textContent = "Email";
  } else {
    alter(emailHead, mainEvent);
    emailHead.textContent = "Email should include @ and a number";
  }

  // Handeling date conflicts.
  const date = new Date();
  let startDateValue = startDate.value.split("-");
  let endDateValue = endDate.value.split("-");
  let dayNow = date.getDate();
  let monthNow = date.getMonth() + 1;
  let curYear = date.getFullYear();
  let startDateDay = Number(startDateValue[2]);
  let startDateMonth = Number(startDateValue[1]);
  let startDateYear = Number(startDateValue[0]);
  let endDateDay = Number(endDateValue[2]);
  let endDateMonth = Number(endDateValue[1]);
  let endDateYear = Number(endDateValue[0]);
  if (startDateValue[0] === "" && endDateValue[0] === "") {
    changeHeaderAlert(startDateHead);
    alter(startDateHead, startDate);
    changeHeaderAlert(endDateHead);
    alter(endDateHead, endDate);
  } else if (startDateValue[0] === "") {
    changeHeaderAlert(startDateHead);
    alter(startDateHead, startDate);
  } else if (endDateValue[0] === "") {
    changeHeaderAlert(endDateHead);
    alter(endDateHead, endDate);
  } else if (startDateYear < curYear) {
    startDateHead.textContent = "We are in year " + curYear;
    alter(startDateHead, startDate);
  } else if (monthNow === startDateMonth && dayNow > startDateDay) {
    startDateHead.textContent =
      "We are in day " + dayNow + " of month " + monthNow;
    alter(startDateHead, startDate);
  } else if (curYear === startDateYear && monthNow > startDateMonth) {
    startDateHead.textContent =
      "We are in month " + monthNow + " of year " + curYear;
    alter(startDateHead, startDate);
  } else if (endDateYear < startDateYear) {
    endDateHead.textContent = "End-date year is less than start-date year";
    alter(endDateHead, endDate);
  } else if (endDateMonth === startDateMonth && endDateDay < startDateDay) {
    endDateHead.textContent = "End-date day is less than start-date day";
    alter(endDateHead, endDate);
  } else if (endDateYear === startDateYear && endDateMonth < startDateMonth) {
    endDateHead.textContent = "End-date month is less than start-date month";
    alter(endDateHead, endDate);
  }
  for (let i = 0; i < e.target.length; i++) {
    if (
      e.target[i].classList.contains("reset-inp") &&
      e.target[i].previousElementSibling.classList.contains("reset-head") &&
      e.target[i].value === ""
    ) {
      changeHeaderAlert(e.target[i].previousElementSibling);
      alter(e.target[i].previousElementSibling, e.target[i]);
    }
  }
});

eventForm.addEventListener("input", (e) => {
  e.preventDefault();
  let previousEl = e.target.previousElementSibling.classList;
  let previousElTxt = e.target.previousElementSibling;
  if (
    e.target.classList.contains("reset-inp") &&
    previousEl.contains("reset-head")
  ) {
    !e.target.classList.contains("time-all")
      ? change(e.target.previousElementSibling, e.target)
      : "";
    if (previousEl.contains("email-head")) {
      previousElTxt.textContent = "Email";
    } else if (previousEl.contains("event-name-head")) {
      previousElTxt.textContent = "Event name";
    } else if (previousEl.contains("location-head")) {
      previousElTxt.textContent = "Location";
    } else if (previousEl.contains("start-date-head")) {
      previousElTxt.textContent = "From";
    } else if (previousEl.contains("end-date-head")) {
      previousElTxt.textContent = "To";
    } else if (previousEl.contains("timezone-head") && timeZoneChecker) {
      previousElTxt.textContent = "Timezone";
      change(e.target.previousElementSibling, e.target);
    }
  }
  timeZoneChecker = false;
});

timeAll.addEventListener("input", (e) => {
  e.preventDefault();

  let headOfTimeZoneList = timeAll.value.toUpperCase();
  let notInList = true;
  for (let i = 0; i < timeList.length; i++) {
    let listOfTimeZone = timeList[i].value.toUpperCase();
    if (listOfTimeZone.includes(headOfTimeZoneList)) {
      notInList = false;
      break;
    }
  }
  if (notInList) {
    alter(timezoneHead, timeAll);
    timezoneHead.textContent = "Enter valid input";
  } else {
    change(timezoneHead, timeAll);
    timezoneHead.textContent = "Timezone";
  }
});

function alter(changeHeaderText, changeInputColor) {
  changeHeaderText.style.fontSize = "10px";
  changeHeaderText.style.color = "red";
  changeInputColor.style.color = "red";
  changeInputColor.style.border = "0.7px solid red";
}

function change(changeHeaderText, changeInputColor) {
  changeHeaderText.style.fontSize = "16px";
  changeHeaderText.style.color = "black";
  changeInputColor.style.color = "black";
  changeInputColor.style.border = "none";
  changeInputColor.style.borderBottom = "0.7px solid grey";
}

function changeHeaderAlert(head) {
  head.textContent = "This field should'nt be empty.";
}

function redirect() {
  console.log("Redirected");
}

const inpValidField = document.querySelector(".user-input-validation");
const inpValidPlaceholder = document.querySelector(".input-placeholder");
inpValidField.addEventListener("input", () => {
  let len = inpValidField.value.length;
  let num = 10;
  if (num - len === 10) {
    inpValidField.style.border = "3px solid white";
    inpValidPlaceholder.textContent = "Enter your text";
    inpValidPlaceholder.style.color = "var(--grey400)";
  } else if (num - len < 0) {
    inpValidField.style.border = "3px solid var(--pure-red)";
    inpValidPlaceholder.textContent = "10 charcters input only";
    inpValidPlaceholder.style.color = " var(--pure-red)";
  } else if (num - len >= 0) {
    inpValidField.style.border = "3px solid var(--blue800)";
    inpValidPlaceholder.textContent = "Enter your text";
    inpValidPlaceholder.style.color = " var(--blue800)";
  }
});
