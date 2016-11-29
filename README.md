## SCROLLTO
A simple jQuery plugin to perform an action (function) when an element is scrolled into view

## USE:
### Basic:
```js
$('#target').scrollTo(function() {
    console.log("Target element has been scrolled into view!");
});
```

### With options:
```js
$('#target').scrollTo({
    offset: 200,
    scrollUp: function() { console.log("scrollUp triggered!"); },
    scrollDown: function() { console.log("scrollDown triggered!"); }
}, function() {
    console.log("This will only function will only fire once!");
});
```

## OPTIONS:
### offset:   0
How many pixels above the fold the element is before the action is performed

### scrollUp:  function(){}
Function to perform each time the element has been scrolled up past

### scrollDown:   function(){}
Function to perform each time the element has been scrolled into view (as opposed to the main function passed - as its own argument - which is only executed once)


## NOTES:
The main function, passed as its own argument is only executed once. To perform an action each time the element is scrolled into view (for example, when a user scrolls back up, then down again) use `scrollDown`. 
