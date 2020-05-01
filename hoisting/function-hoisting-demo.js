/*
 * JavaScript Function Hoisting Demo    
 */

const colors = require('colors'); // remove this line and copy paste the rest if you plan to run the function in browser console.
(function main(){
    console.log('JavaScript Function Hoisting Demo!');
    /*
     * The code below works because the function is defined before it is called
     * you may define the function in any way
     * i.e. create a named function,
     * create a function using function expression
     * create a function using arrow notation
     */
    function definedBeforeCall(){
        console.log('In definedBeforeCall()'.green);
    }
    definedBeforeCall();
    /* The code below works without an error
     * because when the js runtime parses the program
     * before executing it identifies function definitions
     * and moves them to the top of the scope they are defined in (hoisted)
     * because of this the function can the called from anywhere inside that scope.
     */
    calledBeforeDefining();
    function calledBeforeDefining(){
        console.log('In calledBeforeDefining()'.green);
    }
    /*
     * The code below will give you errors when you try
     * to call the functions before they are defined because
     * functions created using function expressions and arrow notation
     * are not hoisted (arrow functions are just a syntatic sugar so if function expressions
     * give an error arrow functions will too).
     */
    try{
        arrowFunctionCalledBeforeDefining();
        var arrowFunctionCalledBeforeDefining = ()=>{
            console.log('In arrowFunctionCalledBeforeDefining()');
        };
    }
    catch(err){
        console.error(err.message.red);
        console.error('You are getting this error because you are trying to call the function before defining it.'.red);
    }
    try{
        functionAssignedToVariableCalledBeforeDefining();
        var functionAssignedToVariableCalledBeforeDefining = function(){
            console.log('In functionAssignedToVariableCalledBeforeDefining()');
        }
    }
    catch(err){
        console.error(err.message.red);
        console.error('You are getting this error because you are trying to call the function before defining it.'.red);
    }

    /*
     * So now that we have seen what function hoisting is and when functions are not hoisted
     * let us try to understand why functions created using function expressions aren't hosted.
     * The reason becomes obvious if we understand when to use function expressions(or arrow functions).
     * function expressions are mostly used whenever the function definition is supposed to be written inline.
     * i.e. in cases where you won't be explicitly calling the functions(mostly the case with callback functions.
     * Also these functions are mostly called only once and do not have use more than once.
     * So it becomes unnecessary to hoist these functions.
     * And it is because of this reason only named functions are hoisted.
     */
})();
/*
 * If you have any queries,issues with the content or feedback
 * feel free to contact me on the email in my profile.
 */