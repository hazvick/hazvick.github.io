//Global variables
const ageLimit = 20;
welcome = "Välkommen ";
let age = document.querySelector(".age");
let named = document.querySelector(".named");

//IIFE
(function () {
  const inputIdEl = document.querySelector(".inputId");
  inputIdEl.addEventListener("change", (element) => {
    if (element.target.value == "yes") {
      document.querySelector(".container").innerHTML = `
         <h2>Vänligen ange dina uppgifter nedan.</h2>
         <h3>För- samt Efternamn.</h3>
         <input class="name">
         <h3> Ange din ålder. </h3>
         <input class="age" type="number"> <br>
         <button class="controlBtn">Gå vidare</button>
         `;
      const nextButton = document.querySelector(".controlBtn");
      nextButton.addEventListener("click", () => {
        personName = document.querySelector(".name");
        personAge = document.querySelector(".age");
        let costumerAge = personAge.valueAsNumber;
        if (costumerAge > ageLimit) {
          document.querySelector(".container").innerHTML = `
                    <h1>Ding ding!</h1>
                    `;
          personConfirmed(personName);
        }
        else {
            document.querySelector(".young").innerHTML = `
                    <h2 style="color: red;">Du är för ung för att köpa ''godis''</h2>
                    `;
        }
      });
    }
  });
  named.addEventListener("welcomeIn", function (e) {
    named.textContent = welcome + e.detail.text + ", vänligen sitt ner så kommer ''godiset'' snart ut.";
    document.querySelector(".young").innerHTML = `
                    <h2 style="color: red;"></h2>
                    `;
  });

  function personConfirmed(personName) {
    const event = new CustomEvent("welcomeIn", {
      detail: {
        text: personName.value,
      },
    });
    named.dispatchEvent(event);
  }
})();
