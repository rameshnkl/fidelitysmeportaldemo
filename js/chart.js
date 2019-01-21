

var ctx = document.getElementById('myChart').getContext('2d');
var names = [
  "Beatrice Emmanuel",
  "Sandra Daneil",
  "Al Lalji",
  "Nigel Piling",
  "Brad Rickman",
  "Savitri Sarangi",
  "Azhaguraja Krishnamoorthy",
  "Ramesh Lingampalli",
  "Ramesh Perumal",
  "Apratim Vyas",
  "Santosh Rai",
  "Krishna Chaitanya",
  "Balaji Thiruvengadanathan",
  "Thanigaivel Elangovan",
  "Vignesh Babu",
  "Prem Kumar",
  "Karthe Kanthimani",
  "Barbara David",
  "Linda Benjamin",
  "Doris Joseph",
  "Cecilia James",
  "Maame Philip",
  "Gifty Francis",
  "Janet Bright",
  "Rita Alhassan",
  "Rose Henry",
  "Wendy Maxwell",
  "Tracy Collins",
  "Christable Evans",
  "Lisa William",
  "Mohammed Josephine",
  "Anita Joel",
  "Sandy Owusu",
  "Vida Clement",
  "Ansar Nii",
  "Mimi Osei",
  "Tilly Augustine",
  "Rosy Desmond",
  "Bridget Rauf",
  "Yvonne Theophilus",
  "Ayeeshatu Kwame",
  "Sadia Junior",
  "Aisha Seidu",
  "Cosyln Dominic",
  "Thomisia Fringpong"
]
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
    const date=new Date(now.getFullYear(),now.getMonth(),label);
    $("#modal1 .date").text(`${label} ${now.toLocaleString("en-US", { month: "long" })}  ${now.getFullYear()}`);
    $("#bdVisit").text(bdvalue);
    $("#adVisit").text(advalue);
    $("#elVisit").text(elvalue);

    $("#bdTable").html(generateTable(bdvalue,date));
    $("#adTable").html(generateTable(advalue,date));
    $("#elTable").html(generateTable(elvalue,date));
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
function generateTable(size,now) {
  var value = names.slice();
  var table = "<table class='table table-striped'><thead class='thead-dark'><th>Full Name</th><th>Visited Time</th></thead>";
  var options={weekday:'long',year:'numeric',month:'short',day:'numeric',hour:'numeric',minute:'numeric',second:'numeric'}
  for (var i = 0; i < size; i++) {
    var val = value.splice(Math.floor(Math.random() * value.length), 1)[0];
    var newDate=new Date(now);
    newDate.setHours(now.getHours()+ Math.random()*24);
    newDate.setMinutes(now.getMinutes()+Math.random()*60)
    //var newDate=now;
    table += `<tr><td>${val}</td><td>${newDate.toLocaleString('en-US',options)}</td></tr>`;
  }
  table += "</table>";
  return table;
}
