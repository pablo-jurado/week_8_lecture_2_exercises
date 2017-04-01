var div = document.querySelector('div'),
    alertEvent = new Event('alert')

var callout = function (event) {
  console.log(event)
}

// Listen for the event.
div.addEventListener('alert', callout)

// Dispatch the event.
div.dispatchEvent(alertEvent)
