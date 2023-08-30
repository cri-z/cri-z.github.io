const outputElement = document.getElementById("output");
let index = 0;


const textSequence = [
    "c", "cr", "cri", "cris", "crist", "cristo", "cristob", "cristoba",
    "cristobal", "cristobal ", "cristobal r", "cristobal ro", "cristobal rod",
    "cristobal rodr", "cristobal rodri", "cristobal rodri", "cristobal rodrig",
    "cristobal rodrigu", "cristobal rodrigue", "cristobal rodriguez","cristobal rodriguz",
    "cristobal rodrigz","cristobal rodriz",
    "cristobal rodrz",
    "cristobal rodz",
    "cristobal roz",
    "cristobal rz",
    "cristobal z",
    "cristobalz",
    "cristobaz",
    "cristobz",
    "cristoz",
    "cristz",
    "crisz",
    "cri-z"
];

function typeText() {
  const isLastOr19 = index === textSequence.length - 1 || index === 19;
  const delay = isLastOr19 ? 1500 : 100;

  outputElement.textContent = textSequence[index];
  index = (index + 1) % textSequence.length;

  setTimeout(typeText, delay);
}

typeText();











