const url = "https://icanhazdadjoke.com/";
const jokeDiv = document.querySelector(".joke");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  jokeDiv.textContent = "Loading...";
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });
    if (!response.ok) {
      throw new Error(" error");
    }
    const data = await response.json();

    jokeDiv.textContent = data.joke;
  } catch (error) {
    console.log(error.message);
    jokeDiv.textContent = "There was an error...";
  }
};

fetchDadJoke();
