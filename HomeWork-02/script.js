var userName,
    firstSpaceIndex,
    secondSpaceIndex,
    userShotName;
userName = prompt("Пожалуйста введите Фамилию, Имя и Отчество");
firstSpaceIndex = userName.indexOf(" ");
secondSpaceIndex = userName.indexOf(" ", firstSpaceIndex + 1);
userShotName = userName.substring(0, firstSpaceIndex) +
    userName.substring(firstSpaceIndex, (firstSpaceIndex + 2)) +
    "." + userName.substring(secondSpaceIndex, (secondSpaceIndex + 2)) + ".";

alert(userShotName);