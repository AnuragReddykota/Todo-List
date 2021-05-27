// getting element of input box buttom and a list
const btn = document.getElementById("submit");
const listheader = document.getElementById("todo-list");
const inputvalue = document.getElementById("text");

// taking input value through input event
inputvalue.addEventListener("input", function (event) {
  currentInputValue = event.target.value;
});

// apping list element when enterkey is pressed
inputvalue.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addElement();
  }
});

// for list id number
var count = 0;

function addElement() {
  var list = document.createElement("li");
  // checking whether input box is empty or not
  if (
    currentInputValue !== null &&
    currentInputValue !== undefined &&
    currentInputValue !== " "
  ) {
    list.id = "list " + count++;
    list.innerHTML = currentInputValue;
    listheader.append(list);
    // after submitting the input field is reset and as well as currentINputValue
    inputvalue.value = " ";
    currentInputValue = " ";
  } else {
    alert("Enter value in input field");
  }
}

// on submit the list is appended
btn.addEventListener("click", addElement);
