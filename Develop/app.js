const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees = [];


class Start {
    prompt1() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "managersName",
                    message: "What's your manager's name?"
                },
                {
                    type: "input",
                    name: "managersId",
                    message: "What is your manager's Id?"
                },
                {
                    type: "input",
                    name: "managersEmail",
                    message: "What is your manager's email?"
                },
                {
                    type: "input",
                    name: "managersOffice",
                    message: "What is your manager's office number?"
                },
                {
                    type: "list",
                    name: "specificRoles",
                    message: "What type of team member would you like to add?",
                    choices: [
                        
                        "Intern",
                        "Engineer",
                        
                        "I am done adding team members"
                    ]
                },

            ])
            .then(answer => {
                const manager = new Manager(answer.managersName, answer.managersId, answer.managersEmail, answer.managersOffice)
                 employees.push(manager)
                console.log(employees)
                if(answer.specificRoles === "Intern"){
                    this.prompt2();
                } else if (answer.specificRoles === "Engineer"){
                    this.prompt3();
                
                } 
              

                // if (answer.choice === choice[0])
             
            })
            .catch(err => {
                console.log("error")
            })



    }

    prompt2(){
        return inquirer
        .prompt ([
            {
                type: "input",
                name : "internsName",
                message: "what's your intern's name?"
            },
            {
                type: "input",
                name: "intersId",
                message: "what's your intern's ID?"
            },
            {
                type:"input",
                name:"internsEmail",
                message: "What's your inter's email?"

            },
            {
                type:"input",
                name: "internsSchool",
                message: "What's the name of your inter's university"

            },
            {
                type: "list",
                name: "specificRoles",
                message: "WHat type of team member would you like to add next?",
                choices: [
                    "Engineer",
                    
                    "Intern",
                    "I am done adding team members"
                ]
            },

        ])
        .then (answer => {
            const intern = new Intern (answer.internsName, answer.internsId, answer.internsEmail, answer.internsSchool)
            employees.push(intern)
            console.log(employees)
            if (answer.specificRoles === "Engineer"){
                this.prompt3();
           
            } else if (answer.specificRoles === "Intern"){
                this.prompt2();
            } 
        })
        .catch (err => {
            console.log(err)
        })
    }
prompt3(){
    return inquirer
    .prompt ([
        {
            type: "input",
            name: "engineersName",
            message: "what's your engineer's name"

        },
        {
            type: "input",
            name: "engineersId",
            message: "what's your engineer's ID"
        },
        {
            type: "input",
            name: "engineersEmail",
            message: "What's your engineer's email"
        },
        {
            type: "input",
            name: "engineersGithub",
            message: "what's your engineer's github account?"
        },
        {
            type: "list",
            name: "specificRoles",
            message: "what type of team member would you liek to add next?",
            choices: [
               
                "Intern",
                "Engineer",
                "I am done adding team members"
            ]
        }
    ])
    .then (answer => {
        const engineer = new Engineer (answer.engineersName, answer.engineersId, answer.engineersEmail, answer.engineersGithub)
        employees.push(engineer)
        console.log(employees)
       
          if (answer.specificRoles === "Intern"){
            this.prompt2();
        } else if (answer.specificRoles === "Engineer"){
            this.prompt3();
        } 
    })
    .catch (err =>{
        console.log(err)
    })
}
}



const generator = new Start

generator.prompt1()


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! 
