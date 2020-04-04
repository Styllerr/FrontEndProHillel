
document.body.innerHTML = '<header></header><main></main>';
let main = document.body.querySelector('main');
main.innerHTML = `<form action="#" method="post"></form>`;
let form = document.querySelector('form');
//Шапка
let header = document.body.querySelector('header'),
    headerHeader = 'Форма заявки на работу в зоопарке',
    headerText = 'Пожалуйста, заполните форму. Обязательные поля помечены';
header.innerHTML = `<h1>${headerHeader}</h1><p id="header_text">${headerText}</p>`;
//Раздел Контактная информация
let labelName = '<label id="label_name" for="field_name">Имя</label>',
    inputName = '<input type="text" name="contactName" id="field_name" required>',
    labelTelephone = '<label id="label_telephone" for="field_telephone">Телефон</label>',
    inputTelephone = '<input type="tel" name="contactTelephone" id="field_telephone">',
    labelEmail = '<label id="label_email" for="field_email">Email</label>',
    inputEmail = '<input type="email" name="contactEmail" id="field_email" required>';

let wrapContactInfo = document.createElement('div'),
    contactInfoText = document.createElement('span'),
    wrapName = document.createElement('div'),
    wrapTelephone = document.createElement('div'),
    wrapEmail = document.createElement('div');
wrapContactInfo.id = 'wrap_contactInfo';
contactInfoText.id = 'contactInfo_text';
wrapName.id = 'wrap_name';
wrapTelephone.id = 'wrap_telephone';
wrapEmail.id = 'wrap_email';

contactInfoText.innerText = 'Контактная информация';
wrapName.innerHTML = `${labelName}${inputName}`;
wrapTelephone.innerHTML = `${labelTelephone}${inputTelephone}`;
wrapEmail.innerHTML = `${labelEmail}${inputEmail}`;

form.append(wrapContactInfo);
wrapContactInfo.append(contactInfoText);
wrapContactInfo.append(wrapName);
wrapContactInfo.append(wrapTelephone);
wrapContactInfo.append(wrapEmail);
//Раздел Персональная информация
let labelAge = '<label id="label_age" for="field_age">Возраст</label>',
    inputAge = '<input type="number" name="contactAge" id="field_age" required>',
    labelGender = '<label id="label_gender" for="field_gender">Пол</label>',
    selectGender = '<select name="contactGender" id="field_gender">',
    optionFemale = '<option value="female" selected>Женщина</option>',
    optionMale = '<option value="male">Мужчина</option>',
    optionX = '<option value="x">Не определился</option>',
    labelQualities = '<label id="label_qualities" for="field_qualities">Перечислите личные качества</label>',
    textareaQualities = '<textarea cols="60" rows="6" name="contactqualities" id="field_qualities"></textarea>';

let wrapPersonInfo = document.createElement('div'),
    personInfoText = document.createElement('span'),
    wrapAge = document.createElement('div'),
    wrapGender = document.createElement('div'),
    wrapQualities = document.createElement('div');
wrapPersonInfo.id = 'wrap_personInfo';
personInfoText.id = 'personInfo_text';
wrapAge.id = 'wrap_age';
wrapGender.id = 'wrap_gender';
wrapQualities.id = 'wrap_qualities';

personInfoText.innerText = 'Персональная информация';
wrapAge.innerHTML = `${labelAge}${inputAge}`;
wrapGender.innerHTML = `${labelGender}${selectGender}`;
let select = wrapGender.querySelector('select');
select.id = 'field_gender';
select.innerHTML = `${optionFemale}${optionMale}${optionX}`;
wrapQualities.innerHTML = `${labelQualities}${textareaQualities}`;

form.append(wrapPersonInfo);
wrapPersonInfo.append(personInfoText);
wrapPersonInfo.append(wrapAge);
wrapPersonInfo.append(wrapGender);
wrapPersonInfo.append(wrapQualities);
//Раздел выбор животных
let inputZebra = '<input id="zebra" type="checkbox" name="belovedAnimal" value="zebra">',
    labelZebra = '<label for="zebra">Зебра</label>',
    inputCat = '<input id="cat" type="checkbox" name="belovedAnimal" value="cat">',
    labelCat = '<label for="cat">Кошак</label>',
    inputAnaconda = '<input id="anaconda" type="checkbox" name="belovedAnimal" value="anaconda">',
    labelAnaconda = '<label for="anaconda">Анаконда</label>',
    inputHuman = '<input id="human" type="checkbox" name="belovedAnimal" value="human">',
    labelHuman = '<label for="human">Человек</label>',
    inputElephant = '<input id="elephant" type="checkbox" name="belovedAnimal" value="elephant">',
    labelElephant = '<label for="elephant">Слон</label>',
    inputAntelope = '<input id="antelope" type="checkbox" name="belovedAnimal" value="antelope">',
    labelAntelope = '<label for="antelope">Антилопа</label>',
    inputDove = '<input id="dove" type="checkbox" name="belovedAnimal" value="dove">',
    labelDove = '<label for="dove">Голубь</label>',
    inputCrab = '<input id="crab" type="checkbox" name="belovedAnimal" value="crab">',
    labelCrab = '<label for="crab">Краб</label>';

let wrapBelovedAnimal = document.createElement('div'),
    belovedAnimalText = document.createElement('span'),
    wrapZebra = document.createElement('div'),
    wrapCat = document.createElement('div'),
    wrapAnaconda = document.createElement('div'),
    wrapHuman = document.createElement('div'),
    wrapElephant = document.createElement('div'),
    wrapAntelope = document.createElement('div'),
    wrapDove = document.createElement('div'),
    wrapCrab = document.createElement('div');


wrapBelovedAnimal.id = 'wrap_belovedAnimal';
belovedAnimalText.id = 'belovedAnimal_text';
wrapZebra.id = 'wrap_zebra';
wrapZebra.className = 'belovedAnimal';
wrapCat.id = 'wrap_cat';
wrapCat.className = 'belovedAnimal';  
wrapAnaconda.id = 'wrap_anaconda';
wrapAnaconda.className = 'belovedAnimal';                           
wrapHuman.id = 'wrap_human';
wrapHuman.className = 'belovedAnimal';                        
wrapElephant.id = 'wrap_elephant';
wrapElephant.className = 'belovedAnimal';
wrapAntelope.id = 'wrap_antelope';
wrapAntelope.className = 'belovedAnimal';
wrapDove.id = 'wrap_dove';
wrapDove.className = 'belovedAnimal';
wrapCrab.id = 'wrap_crab';
wrapCrab.className = 'belovedAnimal';

wrapZebra.innerHTML = `${inputZebra}${labelZebra}`;
wrapCat.innerHTML = `${inputCat}${labelCat}`;
wrapAnaconda.innerHTML = `${inputAnaconda}${labelAnaconda}`;
wrapHuman.innerHTML = `${inputHuman}${labelHuman}`;
wrapElephant.innerHTML = `${inputElephant}${labelElephant}`;
wrapAntelope.innerHTML = `${inputAntelope}${labelAntelope}`;
wrapDove.innerHTML = `${inputDove}${labelDove}`;
wrapCrab.innerHTML = `${inputCrab}${labelCrab}`;

belovedAnimalText.innerText = 'Выберите ваших любимых животных';
form.append(wrapBelovedAnimal);
wrapBelovedAnimal.append(belovedAnimalText);
wrapBelovedAnimal.append(wrapZebra);
wrapBelovedAnimal.append(wrapCat);
wrapBelovedAnimal.append(wrapAnaconda);
wrapBelovedAnimal.append(wrapHuman);
wrapBelovedAnimal.append(wrapElephant);
wrapBelovedAnimal.append(wrapAntelope);
wrapBelovedAnimal.append(wrapDove);
wrapBelovedAnimal.append(wrapCrab);

submitButtom = document.createElement('input');
submitButtom.type = 'submit';
submitButtom.value = 'Отправить информацию';
submitButtom.id = 'sendForm';
form.append(submitButtom);