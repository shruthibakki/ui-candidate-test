     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
        return str.split("").reverse().join("");
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
        return Math.min.apply(null, values)
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // FILL THIS IN
         Array.prototype.contains = function(v) {
            for(var i = 0; i < this.length; i++) {
                if(this[i] === v) return true;
            }
            return false;
        };

        Array.prototype.unique = function() {
            var arr = [];
            for(var i = 0; i < this.length; i++) {
                if(!arr.contains(this[i])) {
                    arr.push(this[i]);
                }
            }
            return arr; 
        }

        return values.unique();

     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         // FILL THIS IN
         for (var i = 1; i <= 100; i++) {
            console.log(i);
            if ( (i % 3) == 0) {
                console.log('Fizz')
            } else if ((i % 5) == 0 ) {
                console.log('Buzz')
            } else {
                console.log('FizzBuzz');
            }
         }
         return true;
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
         console.log(fruits);
         for (var i = 0; i < fruitsToRemove.length; i++) {
            for (var j = 0; j < fruits.length; j++) {
                if (fruits[j] == fruitsToRemove[i]) {
                    fruits.splice(j, 1)
                }
            }
         }
         console.log(fruits);
         return true;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
        console.log(toPush);
        if ($.isArray(array)) {
            toPush = toPush.concat(array);
        } else {
            toPush.push(array);
        }
        console.log(toPush);
        // FILL THIS IN
        return true;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
         console.log(sourceStr.split(''));
         return true;
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
         var k = 0;
         for (var i = 0; i < arguments.length; i++) {
            k = k + arguments[i];
          }
        return k;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
        return (sourceStr.indexOf(' ') > 0)
     }

     // write an example of a javascript closure

     /*
    Answer: please refer to js/main.js its singleton structure is an example for closure.
     */


     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)

     /*
     Answer:
    JSON: feed
    {
        "firstName": "",
        "lastName": "",
        "city": "",
        "state": "",
        "zip": "",
        "phone": [{
            "home": "",
            "work": "",
            "mobile": ""
        }]
    }
     */




     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');


     /*Answer */
     window.DB = window.DB || {}
     DB.info = DB.info || {}
     DB.info = function () {
        //default constructor
     }

     DB.info.prototype = {
        //all properties in this are privite.
        row: [],
        columns: []
     }

    DB.info.addRow = function () {
        var ctx = new DB.info();
        for (var i = 0; i < arguments.length; i++) {
            ctx.row.push(arguments[i]);
        }
    },
    DB.info.addColumns = function () {
        var ctx = new DB.info();
        for (var i = 0; i < arguments.length; i++) {
            ctx.columns.push(arguments[i]);
        }
    },
    DB.info.showValue = function () {
        var ctx = new DB.info();
        console.log(ctx.row);
        console.log(ctx.columns);
    }

     var DataTable = DB.info;
     DataTable.addRow('value1A', 'value1B', 'value1C');
     DataTable.addColumns('column1', 'column2', 'column3');
     DataTable.showValue(); 


     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.

     /*Answer*/
     $(document).ready (function () {
        var div = document.getElementById("dropdown"),
            select = document.createElement('select'),
            options = [
                {'text' : 'one', 'value': '1'},
                {'text' : 'two', 'value': '2'},
                {'text' : 'three', 'value': '3'}
            ],
            btn = document.createElement("input");;
        select.id = "mySelect";
        div.appendChild(select);
        for (var i = 0; i < options.length; i++) {
            option = document.createElement('option');
            option.setAttribute('value', options[i].value);
            option.appendChild(document.createTextNode(options[i].text));
            select.appendChild(option);
        }
        btn.type = "button";
        btn.value = "submit";
        btn.onclick = function () {
            var select = document.getElementById('mySelect');
            console.log(select.options[select.selectedIndex].text);
            console.log(select.options[select.selectedIndex].value);hy
        }
        div.appendChild(btn);
     });
     

    

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

    /*
        Answer:
        no markup provided .
    */

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

     $(document).ready(function () {
        var list = ['one', 'two', 'three'], str = '';
        str = str + '<ul>';
        for (var i = 0; i < list.length; i++) {
            str = str + '<li id="list1">' + list[i] +'</li>';
        }
        str = str + '</ul>';
        $('#list').html(str);
     });

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)

     $(document).ready(function () {
        $('#checkAll').on('click', function () {
            $('input[type="checkbox"]').each(function () {
                $(this).attr('checked', true);
            });
            return false;
        });

        $('#unCheckAll').on('click', function () {
            $('input[type="checkbox"]').each(function () {
                $(this).attr('checked', false);
            });
            return false;
        })        
     })
