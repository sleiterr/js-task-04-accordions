/* 

----- Udskriv acoordions via JS: -----
- lav et array med objekter (et objekt for hver accordion)
    - Hvert object skal have følgende keys: title og bodytext 

- for at få dem udskrevet, skal der forEach'es over array'et med objekter
- i forEach'en udskrives html'en hver accordion (inde i ``)




----- Funktionalitet (åbn & lukke): -----
- Hver accordion har class'en .accordion. gem dem ned i en variabel ( brug querySelectorAll), og foreach over dem, så hver enkel kan trykkes på
    - brug e.currentTarget
- husk 'classList.toggle' istedet for 'add'

*/

const accordionPanel = document.querySelector(".container");

const accordionContent = [
  {
    title: "Accordion Title 1",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque illum quisquam facilis accusamus minus tenetur modi, laboriosam excepturi sunt officia dolores quidem eos dolore aliquid numquam voluptates! Eveniet, doloribus minus?",
    list: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    ],
  },
  {
    title: "Accordion Title 2",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque illum quisquam facilis accusamus minus tenetur modi, laboriosam excepturi sunt officia dolores quidem eos dolore aliquid numquam voluptates! Eveniet, doloribus minus?",
    list: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    ],
  },
  {
    title: "Accordion Title 3",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque illum quisquam facilis accusamus minus tenetur modi, laboriosam excepturi sunt officia dolores quidem eos dolore aliquid numquam voluptates! Eveniet, doloribus minus?",
    list: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    ],
  },
];

accordionContent.forEach((item, index) => {
  const accordionIndex = (index + 1).toString().padStart(2, "0");

  accordionPanel.innerHTML += `
    <div class="accordion">
      <div class='content-container'>
        <p class=num-title>${accordionIndex}</p>
        <h4 class='acc-title'>${item.title}</>
      </div>
      <div class="panel">
        <p class='acc-content'>${item.subtitle}</p>
        <ul>
         ${item.list.map((item) => `<li>${item}</li>`).join("")}
            
        </ul>
      </div>
    </div>
    `;
});

// Accordions, funktionalitet:

const accOutput = document.querySelectorAll(".accordion");

accOutput.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
  });
});
