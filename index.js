function receivesAFunction(callbackFunction) {
    callbackFunction();
  }

function returnsANamedFunction() {
    return function fn(){

    }
}

function returnsAnAnonymousFunction() {
    return function(){
        
    }
}