import { Deserializable } from 'src/app/core/model/deserializable.interface';

export class ChartData implements Deserializable {
  type: string;
  data: {
    labels: string[];
    datasets: [{
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth: number
    }]
  };
  options: {
    responsive: boolean;
    maintainAspectRation: boolean;
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: boolean;
        }
      }]
    }
  };

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

  createDonut() {
    Object.assign(this, {
      type: 'doughnut',
      data: {
        datasets: [{
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRation: false,
        legend: {
          position: 'left',
        },
      }
    });
    return this;
  }

}
