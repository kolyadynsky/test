"use strict";
function myFunction() {
  //let text = document.getElementById("word").value;
  let text = "sdfsdfdfg";
  //Палиндро́м — число, буквосочетание, слово или текст, одинаково читающееся в обоих направлениях.
  if (text.lengh < 2) {
    return console.log("Невірний формат даних, мінімум 2 символи");
  }

  let text1 = "";
  let result = "";
  let i = text.leth - 1;
  for (i; i >= 0; --i) {
    text1 += text.substr(i, 1);
  }
  if (text === text1) {
    result = `Так, слово << ${text} >> є паліндромом`;
  } else {
    result = `Ні, слово << ${text} >> не є паліндромом`;
  }

  console.log(result);
}

myFunction();
