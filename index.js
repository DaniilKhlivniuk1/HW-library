const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "p"];
let currentKeyIndex = Math.floor(Math.random() * keys.length);
const keyDisplay = document.getElementById("key");
const newGameButton = document.getElementById("new-game");
const messageDisplay = document.getElementById("message");
const canvas = document.getElementById("sales-chart");

function updateKey() {
  keyDisplay.textContent = `Натисніть: ${keys[currentKeyIndex]}`;
  messageDisplay.textContent = "Натисніть правильну клавішу на клавіатурі!";
}

updateKey();

document.addEventListener("keydown", (event) => {
  if (event.key === keys[currentKeyIndex]) {
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    updateKey();
    PNotify.success({ text: "Правильно!" });
  } else {
    PNotify.error({ text: "Помилка! Спробуйте ще раз." });
  }
});

document.addEventListener("keypress", (event) => {
  event.preventDefault();
});

newGameButton.addEventListener("click", () => {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  updateKey();
  PNotify.info({ text: "Нова гра розпочата!" });
});
const chartData = {
  labels: Array.from({ length: 30 }, (_, i) => (i + 1).toString()),
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "rgba(33, 150, 243, 0.5)",
      borderColor: "#2196f3",
      borderWidth: 1,
      fill: true,
    },
  ],
};
new Chart(canvas, {
  type: "line",
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Дні місяця",
        },
      },
      y: {
        title: {
          display: true,
          text: "Продажі",
        },
      },
    },
  },
});