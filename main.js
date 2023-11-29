document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let randNum = Math.random();
  let input = document.getElementById("search-in").value;
  let output = document.getElementById("output");

  if (input.value.trim() === "") {
    output.innerHTML = "Please ask a question...";
  } else if (
    input.value.toLowerCase() === "does a magic 8 ball actually work?"
  ) {
    output.innerHTML = "How dare you doubt me!";
  } else if (input.value.toLowerCase() === "is javascript awesome?") {
    output.innerHTML = "Of course!";
  } else {
    if (randNum < 0.2) {
      output.innerHTML = "Outlook not so good.";
    } else if (randNum < 0.4) {
      output.innerHTML = "Without a doubt, yes";
    } else if (randNum < 0.6) {
      output.innerHTML = "Don't count on it.";
    } else if (randNum < 0.8) {
      output.innerHTML = "As I see it, yes.";
    } else {
      output.innerHTML = "Concentrate and ask again";
    }
  }
}
