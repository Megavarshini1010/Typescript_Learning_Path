// ========================================
// Example 1: JavaScript vs TypeScript
// ========================================

// JavaScript

let age = 20;

// age = "Twenty"; // Allowed in JavaScript


// TypeScript

let studentAge: number = 20;

// studentAge = "Twenty"; // Error

console.log(studentAge);


// ========================================
// Example 2: String
// ========================================

let username: string = "Mega";

console.log(username.toUpperCase());


// ========================================
// Example 3: Function
// ========================================

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20));


// ========================================
// Example 4: Boolean
// ========================================

let isLoggedIn: boolean = true;

console.log(isLoggedIn);


// ========================================
// Example 5: Object
// ========================================

let employee = {
    id: 1,
    name: "Mega",
    department: "IT"
};

console.log(employee);


// ========================================
// Example 6: Array
// ========================================

let numbers: number[] = [10, 20, 30, 40];

console.log(numbers);


// ========================================
// Example 7: Compile-Time Error
// ========================================

let salary: number = 25000;

// salary = "25000"; // TypeScript Error
