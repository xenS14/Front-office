document.addEventListener('DOMContentLoaded', function () {

  var ctx = document.getElementById('myChart').getContext('2d');

  // Températures relevées
  var temperatures = [20, 25, 18, 30, 22, 28];

  // Config du Graph
  var config = {
    type: 'line',
    data: {
      labels: ['Jour 1', 'Jour 2', 'Jour 3', 'Jour 4', 'Jour 5', 'Jour 6'],
      datasets: [{
        label: 'Températures',
        data: temperatures,
        borderColor: 'rgba(75, 192, 192, 1)', // Couleur de la ligne
        borderWidth: 2, // Largeur de la ligne
        fill: false, // Remplissage en-dessous de la ligne
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    }
  };

  var myChart = new Chart(ctx, config);
});
