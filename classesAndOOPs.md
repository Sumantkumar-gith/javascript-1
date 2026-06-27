#javascript and classes  
##OOP:-  it is a programming paradigm => it is a style of writing programs

#object => collection of properties and methods
- toLowerCase, toUpperCase, etc

##why use OOP
-object literal
-constructor function
-prototype
-classes
-instances(new, this)

#4 PILLARS OF OOPs
Abstraction =>hides the unecesaary methods by its call inside the required function
Encapsulation =>bundles all the required functions together =>hasan constructor to initialize an object first 
Inheritance => one class uses another class properties eg. class 'child' extend 'parent' //the properties/methods of parent doesn't copy to the child
Polymorphism => one interface many form =>same method can behave differently for different object //use inheritance and polymorphism together //the child and parent overrides same method but js find the method in child first before going to the parent(prototype) thats why it takes childs method

- nothing is copied everything is shared through prototype

Encapsulation => 
- constructor helps to create a new object everytime from the class with the keyword 'new'
eg. new className('Lucky')
- two types of calls- constructor call and method call
- constructor is called with the new keyword itself

//new keyword is a constructor function which creates multiple instances from one literal object
//new keyword creates an empty object everytime =>instance
1. new object is created
2. constructor function is called because of the new keyword
3. arguments are injected in the constructor
4. object is created completely 