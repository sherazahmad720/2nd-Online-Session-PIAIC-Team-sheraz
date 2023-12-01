
import inquirer from "inquirer";
// console.log(`Current balance: ${balance}`);

// let fruits: string[] = ["Apple", "Orange", "Banana",1];
// let numbers: number[] = [1, 2, 3, 4, 5,"Apple"];
// let mixed: any[] = ["Apple", 1, "Orange", 2, "Banana", 3,true];

let packages: any[] = [
    {
        name: "Basic",
        price: 1000,
        description: "Basic package",
        feature: []
    },

    {
        name: "Standard",
        price: 2000,
        description: "Standard package",
        feature: []

    },
    {
        name: "Premium",
        price: 3000,
        description: "Premium package",
        feature: []
    }
];



let balance: number = 5000;

// showMeAllPackages(true);
console.log(`your current balance is ${balance}`);
balance = deposit(balance, 100,);
console.log(`your new balance is ${balance}`);

function deposit(balance: number, amount: number): number {
    // return 0;
    if (balance > 3000) {
        showMeAllPackages(false);
        return balance += amount;
    }
    else {

        return balance;
    }
}

function withdraw(amount: number): number {
    return amount -= amount;
}

function showMeAllPackages(showFeature: boolean): void {
    for (let i = 0; i < packages.length; i++) {

        console.log(packages[i].name);
        if (showFeature) {

            for (let j = 0; j < packages[i].feature.length; j++) {

                console.log(`This package has ${packages[i].feature[j]} Feature`);
            }
        }
    }
    console.log("====================================");
}


// let userInput: number = 1;

// while (userInput != -1) {
//     // ask user to enter a number
//     console.log("Do some operation");
// }
// console.log("Thank you for using our service");

// // this function only add balance for premium users 
// function addBalance(balance: number, depositAmount: number) {

// }



