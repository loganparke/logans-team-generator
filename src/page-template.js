const Engineer = require("../lib/engineer");
const Manager = require("../lib/manager");

// generate each team memeber's card
let cards = ``;

const generateCards = teamArr => {
  console.log(teamArr + 'sTRING');
  var teamObject = JSON.parse(teamArr);
  console.log(teamObject);
  console.log(teamObject.length);
  for(let i=0; i < teamObject.length; i++){
    if (teamObject[i].type === 'manager') {
      generateManager(teamObject[i]);
    } else if(teamObject[i].type === 'engineer') {
      generateEngineer(teamObject[i]);
    } else if(teamObject[i].type === 'intern') {
      generateIntern(teamObject[i]);
    }
  }
  return cards;
}

const generateManager = manager => {
  console.log('Generate manager');
  console.log(manager);
    cards += `  
    <div class="w-1/3 max-w-sm rounded overflow-hidden shadow-2xl m-4">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Manager</div>
        <p class="text-gray-700 text-base">Name: ${manager.id}</p>
        <p class="text-gray-700 text-base">ID: ${manager.id}</p>
        <p class="text-gray-700 text-base">Email: ${manager.email}</p>
        <p class="text-gray-700 text-base">Office Number: ${manager.officeNumber}</p>
      </div>
    </div>`;
	return cards;
}
const generateEngineer = engineer => {
  console.log('Generate engineer');
  console.log(engineer);
    cards += `  
    <div class="w-1/3 max-w-sm rounded overflow-hidden shadow-2xl m-4">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Engineer</div>
        <p class="text-gray-700 text-base">Name: ${engineer.id}</p>
        <p class="text-gray-700 text-base">ID: ${engineer.id}</p>
        <p class="text-gray-700 text-base">Email: ${engineer.email}</p>
        <p class="text-gray-700 text-base">GitHub: ${engineer.github}</p>
      </div>
    </div>`;
	return cards;
}
const generateIntern = intern => {
  console.log('Generate intern');
  console.log(intern);
    cards += `  
    <div class="w-1/3 max-w-sm rounded overflow-hidden shadow-2xl m-4">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Intern</div>
        <p class="text-gray-700 text-base">name: ${intern.name}</p>
        <p class="text-gray-700 text-base">ID: ${intern.id}</p>
        <p class="text-gray-700 text-base">Email: ${intern.email}</p>
        <p class="text-gray-700 text-base">School: ${intern.school}</p>
      </div>
    </div>`;
	return cards;
}

const generatePage = teamArr => {
	console.log('generatePage function')
  return `
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="https://cdn.tailwindcss.com"></script>
  <title>My Team</title>
</head>

<body>
  <h1 class="bg-purple-600 bg-opacity-75 text-2xl font-extrabold text-center p-4">MY TEAM</h1>
  <div class="flex flex-wrap justify-center" > 
	  ${generateCards(teamArr)}
    </div>
</body>
</html>
  `
}
//console.log(generatePage());
module.exports = generatePage;