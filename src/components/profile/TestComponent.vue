<template>
    <div class="speedometer">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <!-- Outer circle -->
        <circle cx="100" cy="100" r="90" fill="#f0f0f0" />
  
        <!-- Inner circle -->
        <circle cx="100" cy="100" r="80" fill="white" />
  
        <!-- Indicator needle -->
        <line
          :x1="100"
          :y1="100"
          :x2="100 + needleLength * Math.cos(toRadians(needleAngle))"
          :y2="100 + needleLength * Math.sin(toRadians(needleAngle))"
          stroke="#ff4500"
          stroke-width="3"
        />
  
        <!-- Center circle -->
        <circle cx="100" cy="100" r="5" fill="#ff4500" />
  
        <!-- Labels -->
        <text x="100" y="20" text-anchor="middle" font-size="16">Speedometer</text>
        <text x="100" y="180" text-anchor="middle" font-size="16">{{ value }}</text>
        <text x="100" y="195" text-anchor="middle" font-size="10">km/h</text>
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SpeedOmeter',
    props: {
      value: {
        type: Number,
        required: true,
        default: 0,
        validator: (value) => value >= 0 && value <= 200,
      },
    },
    data() {
      return {
        // Configuration
        maxValue: 200,
        minValue: 0,
        maxAngle: 120,
        minAngle: -120,
        needleLength: 70,
      };
    },
    computed: {
      // Calculate the angle of the needle based on the value
      needleAngle() {
        const range = this.maxValue - this.minValue;
        const normalizedValue = (this.value - this.minValue) / range;
        const angleRange = this.maxAngle - this.minAngle;
        return this.minAngle + normalizedValue * angleRange;
      },
    },
    methods: {
      // Utility function to convert degrees to radians
      toRadians(degrees) {
        return degrees * Math.PI / 180;
      },
    },
  };
  </script>
  
  <style scoped>
  .speedometer {
    width: 200px; /* Adjust as needed */
    height: 200px; /* Adjust as needed */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  