type questionType = "radio" | "checkbox"
interface QuestionType {
    code: string;
    question: string;
    type: questionType;
    goodAnswers: Array<string | number>;
    badAnswers: Array<string | number>;
}

const questions:  QuestionType[]= [
    {
        code:`

        function counter() {
            let count=0;
            this.count++
        }
        counter.count = 0;
        for (var i=0; i <10;i++) {
            counter()
        }
        console.log(counter.count)
        
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: [0],
        badAnswers: [10],
    },
    {
        code: `
        function counter() {
            let count=0
            counter.count++
        }
          
        counter.count = 0;
          
        for (var i=0; i <10;i++) {
          counter()
        }
        console.log(counter.count)
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: [10],
        badAnswers: [0],
    },
    {
        code: `
        function hello(){
            var text = "hey";
            this.sayHello()
        }
        
        function sayHello(){
            console.log(this.text);
        }
          
        hello()
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["ReferenceError: text is not defined"],
        badAnswers: ["hello"],
    },
    {
        code: `
        var counter=()=> {
            let count=0;
            counter.count++;
        }
          
        counter= {
            count: 0
        }
          
        for (var i=0; i <10;i++) {
            counter()
        }
          
        console.log(counter.count)
          
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["ReferenceError: conunter is not a function"],
        badAnswers: ["10"],
    },
    {
        code: `
            A: Is function's context - depended where function was called.
            B: Is a reference to the function’s lexical scope.
            C: Is a reference to the function itself.
            D: In a method, this refers to the owner object.
            E: In a function, in strict mode, this refers to the global object.
        `,
        question: "Which sentences are true about this",
        type: "checkbox",
        goodAnswers: ["A", "D"],
        badAnswers: ["B", "C", "E"],
    },
    {
        code: `
        function sayHello(){
            console.log(this.a);
          }
          
        var a = "hey";
          
        sayHello()
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["hey"],
        badAnswers: ["this.a is undefined", "reference error: a was not defined"],
    },
    {
        code: `

        function sayHello(){
            console.log(this.text);
        }
          
          
        var text = "hey";
        'use sctrict'

        sayHello()
          
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["hey"],
        badAnswers: ["this.a is undefined", "reference error: a was not defined"],
    },
    {
        code: `
        'use strict';

        function sayHello() {
            console.log(this.a);
        }

        var a = 'hey';

        sayHello();

        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["TypeError: Cannot read property 'a' of undefined"],
        badAnswers: ["hey", "undefined"],
    },
    {
        code: `
        function sayHello() {
            console.log(this.a);
        }
          
        var a = 'hey';
          
        (function() {
            'use strict';
            sayHello()
        })();
          
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["hey"],
        badAnswers: ["hey", "undefined", "TypeError: Cannot read property 'a' of undefined"],
    },
    {
        code: `
        function sayHello() {
            console.log(this.text);
        }
          
        var hello ={
            text: "hello",
            sayHello: sayHello()
        }
        hello.sayHello()
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["Uncaught TypeError: hello.sayHello is not a function"],
        badAnswers: ["hello", "undefined"],
    },
    {
        code: `
        function sayHello() {
            console.log(this.text);
        }
          
        var hello ={
            text: "hello",
            sayHello: sayHello
        }
        hello.sayHello()
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["hello"],
        badAnswers: ["undefined", "Uncaught TypeError: hello.sayHello is not a function"],
    },
    {
        code: `
        function sayHello() {
            console.log(this.text);
          }
              
          var hello ={
            text: "hello",
            sayHello: sayHello
          }
          var text="hi";
          hello.sayHello()
    
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["hello"],
        badAnswers: ["hi", "undentified"],
    },
    {
        code: `
        function introduce() {
            console.log("hello, my name is " + this.name);
          }
          
        var person1 = {
            name: "Anna",
            show: introduce,
        };

        var person2 = {
            name: "Kate",
            person1: person1,
        };
          
        person2.person1.show()
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["hello, my name is Anna"],
        badAnswers: ["TypeError: person2.person1.show is not a function", "hello, my name is Kate", "undefined"],
    },
    {
        code: `
        function introduce() {
            console.log("hello, my name is " + this.name);
          }
          
        var person1 = {
            name: "Anna",
            show: introduce,
        };

        var person2 = {
            name: "Kate",
            person1: person1,
        };
          
        person2.person1.show()
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["hello, my name is Anna"],
        badAnswers: ["TypeError: person2.person1.show is not a function", "hello, my name is Kate", "undefined", "hello, my name is undefined"],
    },
    {
        code: `
        function introduce() {
            console.log("hello, my name is " + this.name);
          }
          
        var person = {
            name: "Anna"
        };
          
        introduce.call(person)
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["hello, my name is Anna"],
        badAnswers: ["hello, my name is undefined"],
    },
    {
        code: `
        function calculator(number) { 
            console.log( this.value, number );
            return this.value + number;
          }
          var num= 1
          
          var sum = function() {
            return calculator.apply( num, arguments );
          };
          var result = sum( 5 );
          console.log( result );          
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["undefined 5; NaN"],
        badAnswers: ["1 5; 6"],
    },
    {
        code: `
        function calculator(number) { 
            console.log( this.value, number );
            return this.value + number;
          }
          var num= {
            value: 1
          }
          
          var sum = function() {
            return calculator.apply( num, arguments );
          };
          var result = sum( 5 );
          console.log( result );
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["1 5; 6"],
        badAnswers: ["undefined 5; NaN"],
    },
    {
        code: `
        var greeter = "hey";
        let count = 5;
    
        if (count > 3) {
            var greeter = "hello; 
        }
        
        console.log(greeter)
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["hello"],
        badAnswers: ["hey"],
    },
    {
        code: `
        let greeter = "hey";
        let count = 5;
    
        if (count > 3) {
            greeter = "hello; 
        }
        
        console.log(greeter)
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["hey"],
        badAnswers: ["hello"],
    },
    {
        code: `
        console.log(greeter);
        let greeter = "say hello"
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["Reference Error"],
        badAnswers: ["say hello"],
    }, {
        code: `
        var x = 20 
        const myObj = {
            x: 50,
            foo: ()=> {
               console.log(this.x)
            }
          }
          
          myObj.foo()
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["20"],
        badAnswers: ["50"],
    },
    {
        code: `
        var x = 20 
        const myObj = {
            x: 50,
            foo: function() {
                console.log(this.x)
            }
        }

        myObj.foo()
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["50"],
        badAnswers: ["20"],
    }, 
    {
        code: `
        function Tree(){
            this.age=0;
            
            setTimeout(function printAge(){
                this.age++
                console.log("Tree is " +  this.age + " years old");
            }, 1000);
        }
        
        const tree = new Tree();
            
        console.log(tree)
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["Tree is NaN years old"],
        badAnswers: ["Tree is 1 years old"],
    },
    {
        code: `
        function Tree(){
            this.age=0;
            
            setTimeout(printAge=()=>{
                this.age++
                console.log("Tree is " +  this.age + " years old");
            }, 1000);
        }
        
        const tree = new Tree();
            
        console.log(tree)
        `,
        question: "What will the code below output to the console?",
        type: "radio",
        goodAnswers: ["Tree is 1 years old"],
        badAnswers: ["Tree is NaN years old"],
    }
]

export default questions;