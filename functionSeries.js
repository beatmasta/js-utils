var series = function(functions, callback) {
  var functionIndex = 0;
  var next = function() {
    functionIndex++;
    if (functionIndex < functions.length) {
        functions[functionIndex].call(functions[functionIndex], next);
    } else {
        if (typeof callback === 'function') {
            callback();
        }
    }
  };
  for (var i in functions) {
    functions[i].bind(functions[i], next);
  }
  functions[functionIndex].call(functions[functionIndex], next);
};

series([
  function(next) {
    console.log('function 1 called');
    next();
  }, 
  function(next) {
    window.setTimeout(function() {
      console.log('function 2 called');
      next();
    }, 1000);
  }, 
  function(next) {
    window.setTimeout(function() {
      console.log('function 3 called');
      next();
    }, 1000);
  }
], function() {
    alert('all functions complete');
});
