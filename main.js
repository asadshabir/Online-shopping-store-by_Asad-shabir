#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.bold.yellowBright("_________________________________________________________________"));
console.log(chalk.bold.magentaBright(">>> (:😎💕 ") + chalk.bold.cyan.underline("WelCome ") + chalk.bold.blue.underline("To ") + chalk.bold.redBright.underline("✨ Asad-Shabir ✨") + chalk.bold.greenBright.underline(" Online 💻 ") + chalk.bold.cyan.underline(" Store 🏛") + chalk.bold.magentaBright(" :) <<<"));
console.log(chalk.bold.yellowBright("_________________________________________________________________\n"));
let userInformation = [];
let foodAndBeverages = ["Rice", "Glasses", "Shoes", "Watch", "Wheat Bread", "White Bread", "Pasta", "Tomato", "Onion", "Potato", "Carrot", "Banana", "Apple", "Orange", "Milk", "Eggs", "Butter", "Cheese", "Honey", "Salt", "Sugar", "Coffee", "Tea", "Chocolate Chips", "Almond Bites", "Granola Bars", "Cereal Bars", "Yogurt", "Greek Yogurt", "Oatmeal", "Quaker Oats", "Kellogg's Cornflakes", "Kellogg's Rice Krispies", "Nestle Crunch Bars", "Nestle Butterfinger Bars", "Women's T-shirts", "Levi's Jeans", "Nike Sneakers", "Adidas Watches", "Coca-Cola Bottles", "Pepsi Cola Bottles", "Dove Shampoo", "Head & Shoulders Shampoo", "L'Oreal Conditioner", "Garnier Face Cream", "Nivea Lip Balm", "Olay Moisturizer", "Gilette Razors", "Schick Razors", "PlayStation Games", "Xbox Games", "Samsung Smartphones", "Apple iPads", "Asus Laptops", "HP Printers", "Canon Cameras", "Sony Headphones", "Bose Speakers", "JBL Speakers", "Sony TVs", "LG TVs", "Whirlpool Refrigerators", "Samsung Washing Machines", "LG Air Conditioners", "Bosch Microwave Ovens", "Toshiba Laptops", "HP Desktops", "Apple MacBooks", "Dell Laptops", "Aviators", "Round Frames", "Cat Eyes", "Wayfarers", "Oversized Sunglasses", "Spectacles", "Reading Glasses", "Designer Glasses", "Sunglasses-Fashion ", "Glasses-Rimless", "Glasses-Trendy", "Vintage Glasses", "Cateye Glasses", "Semi-Rimless Glasses", "Square Frames", "Circle Frames", "Hoop Earrings", "Drop Earrings", "Stud Earrings", "Dangle Earrings", "Chandelier Earrings", "Beaded Earrings", "Pearl Earrings", "Tassel Earrings"];
console.log(chalk.bold.magentaBright(`      Please ${chalk.bold.greenBright("SignUp")} Your Account |🤑`));
console.log("");
const user_Data = await inquirer.prompt([
    {
        name: "uName",
        type: "input",
        message: chalk.cyanBright.bold("Enter Your Name :")
    },
    {
        name: "uGmail",
        type: "input",
        message: chalk.bold.magentaBright("Enter Your Email :"),
    },
    {
        name: "uPassword",
        type: "number",
        message: chalk.bold.yellowBright("Enter Your Password : "),
        validate: (pass) => {
            if (isNaN(pass)) {
                return chalk.bold.redBright("Please Enter Password In Numbers :)...");
            }
            else {
                return true;
            }
        }
    }
]);
userInformation.push(user_Data.uName);
userInformation.push(user_Data.uGmail);
userInformation.push(user_Data.uPassword);
class userDetails {
    name;
    gmail;
    password;
    constructor(name, gmail, password) {
        this.name = name;
        this.gmail = gmail;
        this.password = password;
    }
}
const Data = new userDetails(user_Data.uName, user_Data.uGmail, user_Data.uPassword);
if (user_Data.uName == Data.name && user_Data.uGmail == Data.gmail && user_Data.uPassword == Data.password) {
    console.log("");
    let againCondition = true;
    console.log(chalk.bold.greenBright(`           { 😍 Welcome Mr'${chalk.bold.yellowBright(user_Data.uName)} 👑✨ }`));
    console.log(chalk.bold.yellowBright("___________________________________________________\n"));
    console.log(chalk.bold.cyanBright("           💎💸| Available ") + chalk.bold.magentaBright(" Products |👓🥼"));
    console.log(chalk.bold.yellowBright("___________________________________________________\n"));
    const productsList = await inquirer.prompt([
        {
            name: "catageries",
            type: "rawlist",
            message: chalk.bold.greenBright(`What ${chalk.bold.redBright("would you")} like to ${chalk.bold.magentaBright(" buy")} .🌞🌏?`),
            choices: [chalk.bold.yellowBright("Food and Beverages"), chalk.bold.blueBright("Household Items"), chalk.bold.magentaBright("Personal Care"), chalk.bold.cyanBright("Electronics"), chalk.bold.yellowBright("Clothing and Accessories"), chalk.bold.blueBright("Beauty and Wellness"), chalk.bold.magentaBright("Pet Care"), chalk.bold.cyanBright("Baby Care"), chalk.bold.yellowBright("Gardening"), chalk.bold.blueBright("Sports and Fitness"), chalk.bold.magentaBright("Home Appliances"), chalk.bold.cyanBright("Office Supplies"), chalk.bold.magentaBright("Other Options :")]
        }
    ]);
    if (productsList.catageries === chalk.bold.yellowBright("Food and Beverages") || chalk.bold.blueBright("Household Items") || chalk.bold.magentaBright("Personal Care") || chalk.bold.cyanBright("Electronics") || chalk.bold.yellowBright("Clothing and Accessories") || chalk.bold.blueBright("Beauty and Wellness") || chalk.bold.magentaBright("Pet Care") || chalk.bold.cyanBright("Baby Care") || chalk.bold.yellowBright("Gardening") || chalk.bold.blueBright("Sports and Fitness") || chalk.bold.magentaBright("Home Appliances") || chalk.bold.cyanBright("Office Supplies"), productsList.catageries !== chalk.bold.magentaBright("Other Options :")) {
        const pro1 = await inquirer.prompt([
            {
                name: "name1",
                type: "input",
                message: chalk.bold.yellowBright("Search Product Here :")
            }
        ]);
        const getElem = foodAndBeverages.filter((elem) => {
            return elem == pro1.name1;
        });
        if (getElem == pro1.name1) {
            let getPro1 = getElem;
            console.log("");
            console.log(chalk.bold.magentaBright(`{ "${chalk.bold.cyanBright(getPro1)}" Is Available In Stock .}`));
            console.log("");
            if (getPro1) {
                const amountOfPro = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "number",
                        message: chalk.bold.blueBright("Please Enter the amount of products :"),
                        validate: (pass) => {
                            if (isNaN(pass)) {
                                return chalk.bold.redBright("Please Enter Product Amount In Numbers :)...");
                            }
                            else {
                                return true;
                            }
                        }
                    }
                ]);
                console.log("");
                console.log(chalk.bold.magentaBright(`The Quantity Of "${chalk.bold.greenBright(getPro1)}" is ${chalk.bold.greenBright(amountOfPro.amount)}`));
                let randomMoney = Math.floor(Math.random() * 1000 - 100);
                console.log(chalk.bold.cyanBright(`The Price💸 Of ${chalk.bold.greenBright(amountOfPro.amount)} ${chalk.bold.magenta(getPro1)} is ${chalk.bold.yellow(randomMoney)} 💎`));
                console.log("");
                const buy1 = await inquirer.prompt([
                    {
                        name: "confirmitaion",
                        type: "confirm",
                        message: chalk.bold.cyanBright("Do yo want to buy this product .?"),
                        default: (true)
                    },
                ]);
                if (buy1.confirmitaion === true) {
                    console.log("");
                    console.log(chalk.bold.redBright("___________________________________________________"));
                    console.log(chalk.bold.magentaBright(`Mr' 😎 ${chalk.bold.yellowBright(user_Data.uName)} please set delavery detail's 🏡|`));
                    console.log(chalk.bold.redBright("___________________________________________________"));
                    console.log("");
                    let condition = true;
                    while (condition) {
                        console.log("");
                        const billing = await inquirer.prompt([
                            {
                                name: "address",
                                type: "input",
                                message: chalk.bold.greenBright("Please Provide Your Home Address :")
                            },
                            {
                                name: "mobileNum",
                                type: "number",
                                message: chalk.bold.magentaBright("Enter Your Contact Number :"),
                                validate: (pass) => {
                                    if (isNaN(pass)) {
                                        return chalk.bold.redBright("Please Enter Contact In Numbers :)...");
                                    }
                                    else {
                                        return true;
                                    }
                                }
                            },
                        ]);
                        console.log("");
                        const confirm_Data = await inquirer.prompt([
                            {
                                name: "confirmitaion",
                                type: "list",
                                message: chalk.bold.redBright(`Are You Sure, ${chalk.bold.cyanBright("Your Provided Address is")}  "${chalk.bold.greenBright(billing.address)}" And ${chalk.bold.yellowBright("Contact Number Is")} " ${chalk.bold.magentaBright(billing.mobileNum)}" :`),
                                choices: [chalk.bold.greenBright("Yes"), chalk.bold.magentaBright("No")],
                            }
                        ]);
                        if (confirm_Data.confirmitaion == chalk.bold.magentaBright("No")) {
                            console.log("");
                            console.log(chalk.bold.cyanBright(`Oops, 😳 ${chalk.bold.yellowBright(user_Data.uName)} ${chalk.bold.magentaBright("Please provide correct address at this time ")},${chalk.bold.greenBright("& 🙂 try again .!")}`));
                        }
                        if (confirm_Data.confirmitaion == chalk.bold.greenBright("Yes")) {
                            condition = false;
                        }
                    }
                    let anotherCondition = true;
                    while (anotherCondition) {
                        const payment = await inquirer.prompt([
                            {
                                name: "method",
                                type: "list",
                                message: chalk.cyanBright.bold("Select Payment Method :"),
                                choices: [chalk.bold.yellowBright("AS-Wallet"), chalk.bold.magentaBright("Cash On Delivery")]
                            }
                        ]);
                        console.log("");
                        if (payment.method === chalk.bold.yellowBright("AS-Wallet")) {
                            console.log("");
                            console.log(chalk.bold.redBright("         <<<<________________________>>>>"));
                            console.log(chalk.bold.blueBright(`Oops ,😪 Dear ${chalk.bold.yellowBright(Data.name)} there is no cash 💸 available in your wallet 😥`));
                            console.log(chalk.bold.greenBright("😎 Try another payment method .!"));
                            console.log(chalk.bold.redBright("         <<<<________________________>>>>"));
                            console.log("");
                            const buy3 = await inquirer.prompt([
                                {
                                    name: "confirmitaion",
                                    type: "confirm",
                                    message: chalk.bold.cyanBright("Do You Want To Set Another Payment Method .?"),
                                    default: (true)
                                },
                            ]);
                        }
                        else {
                            console.log("");
                            anotherCondition = false;
                            console.log(chalk.bold.greenBright(`${chalk.bold.cyanBright("Order is in panding")} , Please wait ....`));
                            setTimeout(() => {
                                console.log("");
                                console.log(chalk.bold.yellowBright("____________________________________________________________"));
                                console.log(chalk.bold.magentaBright(`🤑 Dear User, < ${chalk.bold.yellowBright(Data.name)} > 😎 ${chalk.bold.greenBright("Your Order Confirmed Successfully ,")}🎉 \n\n${chalk.bold.yellowBright("You Will recieve Your Order")} 🎁 Between ${chalk.bold.whiteBright("3/4")} ${chalk.bold.blueBright("working days" + " 📫")} `));
                                console.log(chalk.bold.yellowBright("____________________________________________________________"));
                                console.log("");
                                console.log(chalk.bold.magentaBright(">>> (:😎💕 ") + chalk.bold.cyan.underline("Stay ") + chalk.bold.blue.underline("With ") + chalk.bold.redBright.underline("✨ Asad-Shabir ✨") + chalk.bold.greenBright.underline(" Community 💻🏩 ") + chalk.bold.magentaBright(" :) <<<"));
                                console.log();
                            }, 2000);
                        }
                    }
                }
                else {
                    console.log(chalk.bold.cyanBright(`Dear User,${chalk.bold.yellowBright(user_Data.uName)} ${chalk.bold.redBright("your order has been canceled")},${chalk.bold.greenBright("try again .!")}`));
                    process.exit();
                }
            }
        }
        else {
            console.log(chalk.bold.cyanBright(`${chalk.bold.yellowBright("Oop's,' 🤕 ")}, "${chalk.bold.blueBright(pro1.name1)}" is not available in stock ,${chalk.bold.greenBright("Try later")} .😪`));
        }
    }
    else if (productsList.catageries === chalk.bold.magentaBright("Other Options :")) {
        const products_list = await inquirer.prompt({
            name: "plist",
            type: "confirm",
            message: chalk.bold.greenBright("Do You Want The List Of All Products ...?"),
            default: (true)
        });
        if (products_list.plist == true) {
            const product = await inquirer.prompt([
                {
                    name: "select",
                    type: "list",
                    message: chalk.bold.yellowBright("Select Your Product :"),
                    choices: foodAndBeverages.map((elem) => elem)
                }
            ]);
            const amountOfPro = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: chalk.bold.blueBright("Please Enter the amount of products :"),
                    validate: (pass) => {
                        if (isNaN(pass)) {
                            return chalk.bold.redBright("Please Enter Product Amount In Numbers :)...");
                        }
                        else {
                            return true;
                        }
                    }
                }
            ]);
            console.log("");
            console.log(chalk.bold.magentaBright(`The Quantity Of "${chalk.bold.greenBright(product.select)}" is ${chalk.bold.greenBright(amountOfPro.amount)}`));
            let randomMoney = Math.floor(Math.random() * 1000 / 3);
            console.log(chalk.bold.cyanBright(`The Price💸 Of ${chalk.bold.greenBright(amountOfPro.amount)} ${chalk.bold.magenta(product.select)} is ${chalk.bold.yellow(randomMoney)} 💎`));
            console.log("");
            const buy2 = await inquirer.prompt([
                {
                    name: "confirmitaion",
                    type: "confirm",
                    message: chalk.bold.cyanBright("Do yo want to buy this product .?"),
                    default: (true)
                },
            ]);
            if (buy2.confirmitaion == true) {
                console.log("");
                console.log(chalk.bold.redBright("___________________________________________________"));
                console.log(chalk.bold.magentaBright(`Mr' 😎 ${chalk.bold.yellowBright(user_Data.uName)} please set delavery detail's 🏡|`));
                console.log(chalk.bold.redBright("___________________________________________________"));
                console.log("");
                let condition = true;
                while (condition) {
                    console.log("");
                    const billing = await inquirer.prompt([
                        {
                            name: "address",
                            type: "input",
                            message: chalk.bold.greenBright("Please Provide Your Home Address :")
                        },
                        {
                            name: "mobileNum",
                            type: "number",
                            message: chalk.bold.magentaBright("Enter Your Contact Number :"),
                            validate: (pass) => {
                                if (isNaN(pass)) {
                                    return chalk.bold.redBright("Please Enter Contact In Numbers :)...");
                                }
                                else {
                                    return true;
                                }
                            }
                        },
                    ]);
                    console.log("");
                    const confirm_Data = await inquirer.prompt([
                        {
                            name: "confirmitaion",
                            type: "list",
                            message: chalk.bold.redBright(`Are You Sure, ${chalk.bold.cyanBright("Your Provided Address is")}  "${chalk.bold.greenBright(billing.address)}" And ${chalk.bold.yellowBright("Contact Number Is")} " ${chalk.bold.magentaBright(billing.mobileNum)}" :`),
                            choices: [chalk.bold.greenBright("Yes"), chalk.bold.magentaBright("No")],
                        }
                    ]);
                    if (confirm_Data.confirmitaion == chalk.bold.magentaBright("No")) {
                        console.log("");
                        console.log(chalk.bold.cyanBright(`Oops, 😳 ${chalk.bold.yellowBright(user_Data.uName)} ${chalk.bold.magentaBright("Please provide correct address this time & ")},${chalk.bold.greenBright("😉 try again .!")}`));
                    }
                    if (confirm_Data.confirmitaion == chalk.bold.greenBright("Yes")) {
                        console.log("");
                        condition = false;
                    }
                }
                let anotherCondition = true;
                console.log("");
                while (anotherCondition) {
                    const payment = await inquirer.prompt([
                        {
                            name: "method",
                            type: "list",
                            message: chalk.cyanBright.bold("Select Payment Method :"),
                            choices: [chalk.bold.yellowBright("AS-Wallet"), chalk.bold.magentaBright("Cash On Delivery")]
                        }
                    ]);
                    console.log("");
                    if (payment.method === chalk.bold.yellowBright("AS-Wallet")) {
                        console.log("");
                        console.log(chalk.bold.redBright("         <<<<________________________>>>>"));
                        console.log(chalk.bold.blueBright(`Oops ,😪 Dear ${chalk.bold.yellowBright(Data.name)} there is no cash 💸 available in your wallet 😥`));
                        console.log(chalk.bold.greenBright("😎 Try another payment method .!"));
                        console.log(chalk.bold.redBright("         <<<<________________________>>>>"));
                        console.log("");
                        const buy3 = await inquirer.prompt([
                            {
                                name: "confirmitaion",
                                type: "confirm",
                                message: chalk.bold.cyanBright("Do You Want To Set Another Payment Method .?"),
                                default: (true)
                            },
                        ]);
                    }
                    else {
                        anotherCondition = false;
                        console.log(chalk.bold.greenBright(`${chalk.bold.cyanBright("Order is in panding")} , Please wait ....`));
                        setTimeout(() => {
                            console.log("");
                            console.log(chalk.bold.yellowBright("____________________________________________________________"));
                            console.log(chalk.bold.magentaBright(`🤑 Dear User, < ${chalk.bold.yellowBright(Data.name)} > 😎 ${chalk.bold.greenBright("Your Order Confirmed Successfully ,")}🎉 \n\n${chalk.bold.yellowBright("You Will recieve Your Order")} 🎁 Between ${chalk.bold.whiteBright("3/4")} ${chalk.bold.blueBright("working days" + " 📫")} `));
                            console.log(chalk.bold.yellowBright("____________________________________________________________"));
                            console.log("");
                            console.log(chalk.bold.magentaBright(">>> (:😎💕 ") + chalk.bold.cyan.underline("Stay ") + chalk.bold.blue.underline("With ") + chalk.bold.redBright.underline("✨ Asad-Shabir ✨") + chalk.bold.greenBright.underline(" Community 💻🏩 ") + chalk.bold.magentaBright(" :) <<<"));
                            console.log();
                        }, 2000);
                    }
                }
            }
            else {
                console.log(chalk.bold.cyanBright(`Dear User,${chalk.bold.yellowBright(user_Data.uName)} ${chalk.bold.redBright("your order has been canceled")},${chalk.bold.greenBright("try again .!")}`));
                process.exit();
            }
        }
        else {
            console.log(chalk.bold.redBright(`something went wrong, ${chalk.bold.greenBright("try again.!!")}`));
        }
    }
}
