// Arrow Function: `this` refers to global scope
const objectWithArrow = {
    message: 'Hello World!',
    getMessage: () => this.message // `this` is NOT the object
}


// Regular Function: `this` refers to the object
const objectWithRegular = {
    message: 'Hello World!',
    getMessage() { // `this` is the object
        return this.message;
    }
}

console.log(objectWithArrow.getMessage()) // Output: undefined
console.log(objectWithRegular.getMessage()) // Output: 'Hello World!'