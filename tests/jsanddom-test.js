/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/
test( "Reverse String", function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverse string function' );
    // Make sure the result from the divide function is valid
    equal( reverseString('reverseString'), 'gnirtSesrever' , 'input: reverseString,  expectedOutPut: gnirtSesrever,  output: ' + reverseString('reverseString') );
});

test( "min", function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a min function' );
    // Make sure the result from the divide function is valid
    equal( findMinValue([1, 2, 0, 3, 4 , 5]), 0 , 'input: [1, 2, 0, 3, 4 , 5],  expectedOutPut: 0,  output: ' + findMinValue([1, 2, 0, 3, 4 , 5]) );
});

test( "unique", function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a unique function' );
    // Make sure the result from the divide function is valid
    //equal( findDistinctValues([1, 2, 0, 3, 4 , 5, 1, 1, 2, 2, 6, 6]), true, 'input: [1, 2, 0, 3, 4 , 5, 1, 1, 2, 2, 6, 6,],  expectedOutPut: [1, 2, 0, 3, 4, 5, 6],  output: ' + findDistinctValues([1, 2, 0, 3, 4 , 5, 1, 1, 2, 2, 6, 6]) );
     deepEqual( findDistinctValues([1, 2, 0, 3, 4 , 5, 1, 1, 2, 2, 6, 6]), [1, 2, 0, 3, 4, 5, 6]);
});

test( "doFizzBuzz", function() {
    // Verify the method exists
    equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' );
    // Make sure the result from the divide function is valid
    equal( doFizzBuzz(), true );
});

test( "removeFruits", function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );
    // Make sure the result from the divide function is valid
    equal( removeFruits(['apple', 'banana', 'cherry', 'grapes', 'pineapple'], ['banana', 'grapes']), true );
});

test( "pushOntoArray", function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );
    // Make sure the result from the divide function is valid
    equal( pushOntoArray(['apple', 'cherry', 'pineapple'], ['banana', 'grapes']), true );
    equal( pushOntoArray('test', ['banana', 'grapes']), true );
    equal( pushOntoArray({'test': 'working'}, ['banana', 'grapes']), true );
});

test( "splitListStrUsingComma", function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' );
    // Make sure the result from the divide function is valid
    equal( splitListStrUsingComma('grapes'), true );
});

test( "sum", function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' );
    // Make sure the result from the divide function is valid
    equal( sum(1, 2, 3), 6 );
});

test( "isOnlyWhitespace", function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain a isOnlyWhitespace function' );
    // Make sure the result from the divide function is valid
    equal( isOnlyWhitespace("testing code"), true);
});