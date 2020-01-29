var userName,
    firstSpaceIndex,
    userShotName;
userName = prompt("Пожалуйста введите Фамилию, Имя и Отчество");    
firstSpaceIndex = userName.indexOf(" ");
userShotName = userName.substring(0,firstSpaceIndex) + userName.substring(firstSpaceIndex,(firstSpaceIndex+2)) + ".";

alert(userShotName);