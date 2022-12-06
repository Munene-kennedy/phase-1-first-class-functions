const receivesAFunction = function (callback) {
    return(callback);
  };
  receivesAFunction();

  function returnsANamedFunction() {
    return function namedFn() {
      console.log("I am the returned named function");
    };
  }

  function returnsAnAnonymousFunction() {
    return function (callback) {
      console.log("I am the returned anonymous function");
    };
  }