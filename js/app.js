const employees = document.querySelector('.employees__single');
const img = document.querySelector('.employees--img');
const name = document.querySelector('.employees--name');
const title = document.querySelector('.employees--title');
const admin = document.querySelector('.success');



const url = 'https://api.github.com/users';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
let employees = data;
return employees.map(function(employee) {
  img.src = employee.avatar_url;
  name.textContent = `${employee.login}`;
  title.textContent = `${employee.type}`;
  admin.textContent = `${employee.site_admin}`;
  
})
})
.catch(function(error) {
console.log(error);
});   