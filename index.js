import { question, rl } from "./question.js";
import { request } from "./request.js";
const name = await question("What is your name? ");
const answer = await question(
  `Hi, ${name}  wanna hear some Chuck Norris jokes? [Y/N] `
);
if (answer === "Y" || answer === "y") {
  const categories = await request(
    "https://api.chucknorris.io/jokes/categories"
  );
  categories.forEach(function (cat, index) {
    console.log(`${index + 1}. ${cat}`);
  });
  const number = await question("Please select a category(Enter number) ");
  const index = number - 1;
  const selectedCategory = categories[index];
  const joke = await request(
    `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`
  );
  console.log(joke.value);
  rl.close();
} else {
  rl.close();
}
