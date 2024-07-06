<template>
    <div>
      <canvas ref="chart"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  
  export default {
    props: {
      chartData: {
        type: String,
        required: true
      },
      chartType: {
        type: String,
        required: true,
        validator: value => ['bar', 'line', 'pie', 'doughnut',].includes(value)  // Validate chart type
      }
    },
    data() {
      return {
        chart: null,
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      };
    },
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        this.chart = new Chart(this.$refs.chart.getContext('2d'), {
          type: this.chartType,
          data: this.chartData,
          options: this.options
        });
      }
    },
    watch: {
      // Watch for changes in chartData and re-render the chart
      chartData: {
        handler() {
          // Destroy the old chart before rendering a new one
          if (this.chart) {
            this.chart.destroy();
          }
          this.renderChart();
        },
        deep: true
      },
      // Watch for changes in chartType and re-render the chart
      chartType() {
        // Destroy the old chart before rendering a new one
        if (this.chart) {
          this.chart.destroy();
        }
        this.renderChart();
      }
    },
    unmounted() {
      // Destroy the chart instance when the component is destroyed
      if (this.chart) {
        this.chart.destroy();
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  