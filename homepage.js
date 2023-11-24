document.addEventListener('DOMContentLoaded', function () {
    // Récupérez le contexte du canvas
    var ctx = document.getElementById('myChart').getContext('2d');

    // Fonction pour afficher le graphique en fonction du type (temperature ou humidite)
    function afficherGraphique(type) {
      // Données d'exemple pour les températures et l'humidité
      var temperatures = [20, 25, 18, 30, 22, 28];
      var humidite = [50, 60, 45, 70, 55, 65];

      // Choisissez les données en fonction du type
      var data;
      if (type === 'temperature') {
        data = temperatures;
      } else if (type === 'humidite') {
        data = humidite;
      }

      // Créez un objet de configuration du graphique
      var config = {
        type: 'line',
        data: {
          labels: ['Jour 1', 'Jour 2', 'Jour 3', 'Jour 4', 'Jour 5', 'Jour 6'],
          datasets: [{
            label: type.charAt(0).toUpperCase() + type.slice(1), // Première lettre en majuscule
            data: data,
            borderColor: type === 'temperature' ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: false,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        }
      };

      // Détruisez le graphique existant s'il y en a un
      if (window.myChart) {
        window.myChart.destroy();
      }

      // Créez le nouveau graphique en utilisant le contexte du canvas et la configuration
      window.myChart = new Chart(ctx, config);
    }
  });