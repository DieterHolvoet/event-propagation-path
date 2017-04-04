# event-propagation-path
Polyfill for the JavaScript Event path/composedPath property ([related Stack Overflow thread](http://stackoverflow.com/a/39245638/2637528))

## Usage
Call the `propagationPath` method on any Event object.

## Example
```
window.addEventListener('click', (event) => {
  if (!event.propagationPath().includes(this.container)) {
      this.container.classList.remove('expanded');
  }

  return false;
};);
```
