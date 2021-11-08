let ctx = document.getElementById("pics_chart").getContext("2d");
let myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "NewYork",
      "California",
      "Florida",
      "Texas",
      "Illinois",
      "Louisiana",
      "Arizona",
    ],
    datasets: [
      {
        labels: "Cases on march 7 2021 for  states in United States",
        data: [1681169, 3501394, 1909209, 2686818, 1198335, 433785, 826454],
        fill: true,

        backgroundColor: [
          "#9C5DED",
          "#00D6F2",
          "#F1F388",
          "#EF6B82",
          "#80D15B",

          "#DB3737",
          "#00283C",
          ,
        ],
        pointBackgroundColor: "black",
      },
    ],
  },
  options: {
    responsive: false,
    layout: {
      margin: {
        top: 50,
      },

      padding: {
        left: 250,
      },
    },
  },
});

const button = document.getElementById("enter");
let userData = document.getElementById("search_input").value;

button.addEventListener("click", look());

async function look() {
  const response = await fetch(
    "https://api.covidactnow.org/v2/states.json?apiKey=126060a4cb8344189ce0b9a6d84c5173"
  );
  const sheet = await response.json();
  const info = sheet
    .filter((x) => x.state === "TX")
    .map((x) => [
      x.actuals.deaths,
      x.actuals.cases,
      x.actuals.positiveTests,
      x.actuals.vaccinationsCompleted,
    ]);
  console.log(info);

  var ice = document.getElementById("donut_chart").getContext("2d");
  const ghee = new Chart(ice, {
    type: "pie",
    data: {
      labels: [],
      datasets: [
        {
          labels: "state and its covid status",
          data: [72235, 4212832, 4460119, 15565536],
          fill: true,

          backgroundColor: [
            "#00D6F2",
            "#FF0069",
            "#A2EF7F",
            "#F06D6D",

            "#DB3737",

            ,
          ],
          pointBackgroundColor: "black",
        },
      ],
    },
    options: {
      responsive: false,
      layout: {
        margin: {
          top: 50,
        },

        padding: {
          left: 30,
        },
      },
    },
  });
}
