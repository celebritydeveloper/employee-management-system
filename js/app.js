function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}

const employees = document.querySelector('.employees__single');
const img = document.querySelector('.employees--img');
const name = document.querySelector('.employees--name');
const title = document.querySelector('.employees--title');
const followers = document.querySelector('.success');




const url = "https://api.github.com/users?since=135 rel='next'";
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
let employees = data;
return employees.map(function(employee) {
  img.src = employee.avatar_url;
  name.textContent = `${employee.login}`;
  title.textContent = `${employee.type}`;
  followers.textContent = `${employee.site_admin}`;
  
  append(img, employees);
  append(name, employees);
  append(title, employees);
})
})
.catch(function(error) {
console.log(error);
});   