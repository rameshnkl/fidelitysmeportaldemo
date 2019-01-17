

var ctx = document.getElementById('myChart').getContext('2d');
var now = new Date();
now = new Date(now.getFullYear(), now.getMonth(), 0);
var month = now.getDate();
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: randomDate(month, now),
    datasets: [{
      label: 'Business Directories',
      data: randomNum(month, 35),
      borderColor: "#76A4F2",
      borderWidth: 1.5,
      fill: false
    }, {
      label: 'Business Ad Postings',
      data: randomNum(month, 20),
      borderColor: "#76F27E",
      borderWidth: 1.5,
      fill: false
    }, {
      label: 'E-Learning Center',
      data: randomNum(month, 25),
      borderColor: "#F27693",
      borderWidth: 1.5,
      fill: false
    }]
  }
});

document.getElementById("myChart").onclick = function (e, item) {
  const activePoints = myChart.getElementsAtEvent(e);
  if (activePoints.length > 0) {
    const ds = myChart.getDatasetAtEvent(e);
    const index = ds[0]._datasetIndex;
    const clickedElementIndex = activePoints[index]._index;
    const label = myChart.data.labels[clickedElementIndex];
    const bdvalue = myChart.data.datasets[0].data[clickedElementIndex];
    const advalue = myChart.data.datasets[1].data[clickedElementIndex];
    const elvalue = myChart.data.datasets[2].data[clickedElementIndex];

    $("#modal1 .date").text(`${label} ${now.toLocaleString("en-US", { month: "long" })}  ${now.getFullYear()}`);
    $("#bdVisit").text(bdvalue);
    $("#adVisit").text(advalue);
    $("#elVisit").text(elvalue);
    switch (index) {
      case 0: {
        $('#collapseBD').addClass('show');
        $('#collapseAD,#collapseEL').removeClass('show');
        break;
      }
      case 1: {
        $('#collapseAD').addClass('show');
        $('#collapseBD,#collapseEL').removeClass('show');
        break;
      }
      case 2: {
        $('#collapseEL').addClass('show');
        $('#collapseAD,#collapseBD').removeClass('show');
        break;
      }

    }

    $("#modal1").modal('show');
  }
};

var ctxxx = document.getElementById('barChart');

var myChart2 = new Chart(ctxxx, {
  type: 'bar',
  data: {
    labels: ["Skyscraper", "Banner", "LeaderBoard", "Square"],

    datasets: [
      {
        label: 'Views',
        data: [9000, 8000, 7000, 8000],
        backgroundColor: '#66acde',
      },
      {
        label: 'Clicks',
        data: [7000, 7000, 5000, 5000],
        backgroundColor: '#ffc166',
      },
      {
        label: 'Conversion',
        data: [4500, 4600, 4200, 6000],
        backgroundColor: '#7eca8f',
      }
    ]

  },
  options: {
    scales: {
      xAxes: [{
        stacked: false,
        barPercentage: 0.9,
        categoryPercentage: 0.4,
        gridLines:
        {
          display: false,
          zeroLineWidth: 4,
        }
      }],
      yAxes: [{
        stacked: false,
        gridLines: {
          display: false,
          zeroLineWidth: 4,
        },
        ticks: {
          min: 0,
          max: 10000,
          stepSize: 2000,
          beginAtZero: true,
          callback: function (label, index, labels) {
            return label / 1000 + 'k';
          }
        }
      }]
    }
  }
});

var ctxxx = document.getElementById('myverticalChart');

var myChart1 = new Chart(ctxxx, {
  type: 'bar',
  data: {
    labels: ["Business Directory Services", "Business Registration", "Investment", "Toolkits ", "E-Learning"],

    datasets: [
      {
        label: 'Unique Visits',
        data: [50, 52, 53, 55, 66, 40],
        backgroundColor: '#C8EBAD',
      },
      {
        label: 'Sales',
        data: [40, 38, 23, 35, 52, 26],
        backgroundColor: '#FDCEA8',
      },
    ]

  },
  options: {
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: false }]
    }
  }
});




function randomDate(month, date) {
  document.querySelector("#categoryDate").innerHTML = `${date.toLocaleString("en-US", { month: "long" })}  ${date.getFullYear()}`;
  return Array.from({ length: month }, (_, i) => i + 1);
}
function randomNum(size, range) {
  return Array.from({ length: size }, () => Math.floor(10 + Math.random() * range));
}
