function showSalary(users, age) {
  let filterUsers = users.filter((user)=>user.age <= age)
  .map((user)=>{return `${user.name}, ${user.balance}`})
  .join('\n');
  
  return filterUsers;
}
