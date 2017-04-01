// Add en event listener to each checkbox element and pass
// the "change" event and customAlert function as arguments.

var checkboxes = document.querySelectorAll('input')

var customAlert = function (event) {
  alert(event.target.value)
}

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', customAlert)
})
