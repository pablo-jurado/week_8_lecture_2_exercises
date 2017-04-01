var checkboxes = document.querySelectorAll('input')

// Pass in the event object
var customAlert = function (event) {
  // Alert the event target's value
  alert(event.target.value)
}

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', customAlert)
})
