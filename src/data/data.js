// data.js
const chartData = {
    labels: [
      "Boudh", "Karaikal", "Ramanathapuram", "Chamba", "West Tripura", "North Goa", "Mysore",
      "Kanchipuram", "Thanjavur", "Salem", "Coimbatore", "Nagapattinam", "Madurai", "Trichy",
      "Tirunelveli", "Dindigul", "Erode", "Theni", "Namakkal", "Cuddalore", "Thoothukudi",
      "Tiruvarur", "Pudukkottai", "Tiruppur", "Ariyalur", "Perambalur", "Virudhunagar"
    ],
    datasets: [
      {
        label: "Advisor Count",
        data: [
          210, 180, 150, 130, 120, 100, 170, 140, 110, 90, 200, 160, 130, 120,
          115, 180, 175, 145, 135, 125, 95, 85, 155, 165, 140, 125, 190
        ],
        backgroundColor: "#005eb8",
      },
    ],
    xAxisLabels: [0, 50, 100, 150, 200, 250], // Dynamic x-axis labels
    maxCapacity: 250, // Maximum capacity for each district
  };
  
  export default chartData;
  