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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor pariatur fugit cumque maxime consequuntur consectetur, quaerat molestias porro maiores deserunt illum dolorum doloremque, quibusdam recusandae nisi asperiores id accusamus nobis.",
    list: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Repellat hic omnis expedita consectetur esse minus soluta earum,",
      "velit eius illo quia molestiae atque natus, laudantium numquam",
      "velit eius illo quia molestiae atque natus, laudantium numquam",
    ],
  },
  {
    title: "Accordion Title 2",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor pariatur fugit cumque maxime consequuntur consectetur, quaerat molestias porro maiores deserunt illum dolorum doloremque, quibusdam recusandae nisi asperiores id accusamus nobis.",
    list: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Repellat hic omnis expedita consectetur esse minus soluta earum,",
      "velit eius illo quia molestiae atque natus, laudantium numquam",
      "velit eius illo quia molestiae atque natus, laudantium numquam",
    ],
  },
  {
    title: "Accordion Title 3",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor pariatur fugit cumque maxime consequuntur consectetur, quaerat molestias porro maiores deserunt illum dolorum doloremque, quibusdam recusandae nisi asperiores id accusamus nobis.",
    list: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Repellat hic omnis expedita consectetur esse minus soluta earum,",
      "velit eius illo quia molestiae atque natus, laudantium numquam",
      "velit eius illo quia molestiae atque natus, laudantium numquam",
    ],
  },
];

accordionContent.forEach((item, index) => {
  const accordionIndex = (index + 1).toString().padStart(2, "0");

  accordionPanel.innerHTML += `
    <div class="accordion">
     <div class='accordion-icon'>
      <i class='icon-cheveron-right'></i>
     </div>
     <div class='content-container'>
      <p class=num-title>${accordionIndex}</p>
      <h4 class='acc-title'>${item.title}</>
      </div>
      <div class="panel">
        <p class='acc-content'>${item.subtitle}</p>
        <ul class='accordion-list'>
         ${item.list
           .map((item) => `<li class='accordion-item'>${item}</li>`)
           .join("")}
            
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
