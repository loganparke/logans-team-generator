const inquirer = require('inquirer');
const pageTemplate = require('./src/page-template');
const writeFile = require('./utils/generate-site');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

let team = [];

const promptManager = () => {
	return inquirer.prompt([
		{
			type: 'input',
			name: 'managerName',
			message: "What is your manager's name?"
		},
		{
			type: 'input',
			name: 'managerId',
			message: "What is your manager's ID?"
		},
		{
			type: 'input',
			name: 'managerEmail',
			message: "What is your manager's Email?"
		},
		{
			type: 'input',
			name: 'managerOffice',
			message: "What is your manager's Office Number?"
		}
	])
};

const promptEngineer = () => {
	console.log('promptEngineer function');
	return inquirer.prompt([
	{
		type: 'input',
		name: 'engineerName',
		message: 'What is your engineeers name?'
	},
	{
		type: 'input',
		name: 'engineerId',
		message: 'What is your engineeers id?'
	},
	{
		type: 'input',
		name: 'engineerEmail',
		message: 'What is your engineeers email?'
	},
	{
		type: 'input',
		name: 'engineerGithub',
		message: 'What is your engineeers GitHub Username?'
	}
	])
	.then(ans => {
		engineer = new Engineer(ans.engineerName, ans.engineerId, ans.engineerEmail, ans.engineerGithub);
		team.push(engineer);
		//writeFile(pageTemplate(JSON.stringify(team)));
		menu();
	});
}

const promptIntern = () => {
	console.log('propmtInters function');
	return inquirer.prompt([
	{
		type: 'input',
		name: 'internName',
		message: 'What is your interns name?'
	},
	{
		type: 'input',
		name: 'internId',
		message: 'What is your interns id?'
	},
	{
		type: 'input',
		name: 'internEmail',
		message: 'What is your interns email?'
	},
	{
		type: 'input',
		name: 'internSchool',
		message: 'What is your interns school?'
	}
	])
	.then(ans => {
		intern = new Intern(ans.internName, ans.internId, ans.internEmail, ans.internSchool);
		console.log(intern);
		team.push(intern);
		console.log(team);
		//writeFile(pageTemplate(JSON.stringify(team)));
		menu();
	});
}

const promptAddTeamMember = () => {
	return inquirer.prompt([
		{
			type: 'list',
			name: 'employeeType',
			message: 'What role is your new team member?',
			choices: ['engineer', 'intern']
		}		
	])
	.then(ans => {
		console.log(ans.employeeType);
		if (ans.employeeType === 'engineer') {
			promptEngineer();
		} else if (ans.employeeType === 'intern'){
			promptIntern();
		}
	});
}

const menu = () => {
	return inquirer.prompt([
		{
			type: 'list',
			name: 'option',
			message: 'Would you like to do?',
			choices: ['add new employee', 'done']
		}
	])
	.then(promptAns => {
		if(promptAns.option === 'add new employee'){
			promptAddTeamMember();
		} else {
			console.log('your team is complete!');
			writeFile(pageTemplate(JSON.stringify(team)));
		}
	});
};

promptManager()
  .then(answer => {
  	console.log(answer);
		manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOffice);
		console.log(manager);
		team.push(manager);
		menu();
	})
	.catch(err => {
		console.log(err);
	});
