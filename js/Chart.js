

var ctx = document.getElementById('myChart').getContext('2d');
var now=new Date();
now=new Date(now.getFullYear(), now.getMonth(), 0);
var month=now.getDate();
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: randomDate(month,now),
    datasets: [{
      label: 'Business Directories',
      data: randomNum(month,35),
      borderColor: "#76A4F2",
      borderWidth:1.5,
      fill:false
    }, {
      label: 'Business Ad Postings',
      data: randomNum(month,20),
      borderColor: "#76F27E",
      borderWidth:1.5,
      fill:false
    }, {
      label: 'E-Learning Center',
      data: randomNum(month,25),
      borderColor: "#F27693",
      borderWidth:1.5,
      fill:false
    }]
  }
});




var ctxxx = document.getElementById('myverticalChart');

var myChart = new Chart(ctxxx, {
  type: 'bar',
  data: {
    labels:["Current Account", "Saving Account", "Investment", "Borrowing", "Other Services", "Account Opening"],

    datasets: [
      {
        label: 'Actual',
        data: [50,52,53,55,66,40],
        backgroundColor: '#C8EBAD',
      },
      {
        label: 'Buy',
        data: [40,38,23,35,52,26],
        backgroundColor: '#FDCEA8',
      },
    ]

  },
  options: {
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: false}]
    }
  }
});




function randomDate(month,date){
  document.querySelector("#categoryDate").innerHTML=`${date.toLocaleString("en-US", { month: "long" })}  ${date.getFullYear()}`;
  return Array.from({length:month},(_,i)=>i+1);
}
function randomNum(size,range){
  return Array.from({length: size}, () => Math.floor(10+Math.random() * range));
}
