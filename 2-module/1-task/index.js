function sumSalary(salaries) {
  let allBugget = 0;
    
  for (let key in salaries){
      if (typeof salaries[key] == "number" && salaries[key] != Infinity && salaries[key] != -Infinity && !isNaN(salaries[key])){ 
      allBugget += salaries[key];
  }
  } 

   return allBugget;
}
