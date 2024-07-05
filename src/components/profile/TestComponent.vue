<template>
    <div class="container bar-chart">
        <div class="bar" v-for="(data, index) in chartData" :key="index"
            :style="{ height: data.value + 'px', backgroundColor: data.color }">
            <span class="label">{{ data.label }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "BarChart",
    data() {
        return {
            chartData: [
                { label: 'A', value: 120, color: '#f44336' },
                { label: 'B', value: 100, color: '#2196f3' },
                { label: 'C', value: 200, color: '#4caf50' },
                { label: 'D', value: 80, color: '#ffeb3b' },
            ],
        };
    },
};
</script>

<style scoped>
.bar-chart {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    height: 300px;
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 20px;
}

.bar {
    width: 40px;
    text-align: center;
    color: #fff;
    position: relative;
}

.label {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
}
</style>