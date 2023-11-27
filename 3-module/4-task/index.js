function showSalary(users, age) {
  let arrBalanceOfUsers = [];
  
  for (let i = 0; i < users.length; i++){
     user = users[i];
     
     if (user.age <= age)
     {
      arrBalanceOfUsers.push(`${user.name}, ${user.balance}`) // при вставке с телегу обратные кавычки теряются. всё что в скобках в обратных кавычках
  }
  }

  let stringUserBalance = '';
  for (j = 0; j < arrBalanceOfUsers.length; j++){
  
  if (j == 0){
      stringUserBalance += `${arrBalanceOfUsers[j]}` 
  }else{stringUserBalance += `\n${arrBalanceOfUsers[j]}`}
  } 
return stringUserBalance;
}
