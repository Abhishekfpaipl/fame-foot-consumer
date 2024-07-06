<template>
    <div>
        <TopNav />
        <div class="pb-5 mb-5" style="padding-top: 80px;">

            <div class="container ">
                <h2>Monitor health of your business</h2>
                <InfoSection />
                <div class="row mt-4">
                    <!-- Stats Cards -->
                    <div class="col-md-4 mb-3">
                        <div class="card shadow" style="background-color: #D2D5FD;">
                            <div class="card-body">
                                <h5 class="card-title">Views</h5>
                                <h2 class="card-text">
                                    <AutoCounter :data="31" />
                                </h2>
                                <small class="text-muted">+3 last day</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="card shadow text-dark" style="background-color: #ABE9F2;">
                            <div class="card-body">
                                <h5 class="card-title">Clients</h5>
                                <h2 class="card-text">
                                    <AutoCounter :data="63" />
                                </h2>
                                <small>+1 last day</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div
                            class="card shadow                                                                                                                                                                                                                                                                                                                           text-bg-secondary">
                            <div class="card-body">
                                <h5 class="card-title">Purchases</h5>
                                <h2 class="card-text">
                                    <AutoCounter :data="10" />
                                </h2>
                                <small class="">+1 last day</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-4">
                    <!-- Total Profit Section -->
                    <div class="col-md-8 mb-3">
                        <h3>Total profit</h3>
                        <LineChart :chart-data="chartData" chart-type="bar" />
                    </div>
                    <!-- Property List -->
                    <div class="col-md-4">
                        <h4>Objects</h4>
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Windmills Loft
                                <span class="badge bg-primary rounded-pill">25%</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Seaview Villa
                                <span class="badge bg-primary rounded-pill">18%</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Family Villa
                                <span class="badge bg-primary rounded-pill">12%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <h3>Total Doughnut</h3>
                        <LineChart :chart-data="chartData" chart-type="doughnut" />
                    </div>
                    <div class="col-12 col-md-6">
                        <h3>Total Radar</h3>
                        <LineChart :chart-data="chartData" chart-type="radar" />
                    </div>
                </div>
            </div>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <h3>Total Line</h3>
                        <LineChart :chart-data="chartData" chart-type="line" />
                    </div>
                    <div class="col-12 col-md-6">
                        <h3>Total Mixed</h3>
                        <LineChart :chart-data="mixedChart" />
                    </div>
                </div>
            </div>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <h3>Total Polararea</h3>
                        <LineChart :chart-data="chartData" chart-type="polarArea" />
                    </div>

                </div>
                <TestComponent :value="speedValue" />
                <input type="range" v-model="speedValue" min="0" max="200" step="1" />
                <span>Current Speed: {{ speedValue }} km/h</span>
                <!-- <TestComponent /> -->
            </div>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-3">
                        <LineChart :chart-data="progress25" chart-type="doughnut" />
                    </div>
                    <div class="col-3">
                        <LineChart :chart-data="progress50" chart-type="doughnut" />
                    </div>
                    <div class="col-3">
                        <LineChart :chart-data="progress75" chart-type="doughnut" />
                    </div>
                    <div class="col-3">
                        <LineChart :chart-data="progress100" chart-type="doughnut" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <BottomNav />
</template>
<script>
import BottomNav from "@/components/profile/BottomNav.vue"
import InfoSection from "@/components/digitalcard/InfoSection.vue"
import TopNav from "@/components/profile/TopNav.vue";
import TestComponent from "@/components/profile/TestComponent.vue";
import LineChart from "@/components/profile/LineChart.vue";
import AutoCounter from "@/components/AutoCounter.vue";
export default {
    name: "RewardsDetail",
    components: {
        BottomNav,
        TopNav,
        TestComponent,
        LineChart,
        AutoCounter,
        InfoSection,
    },
    data() {
        return {
            pageName: '',
            speedValue: 100, 
            chartData: {
                labels: [
                    'category 1',
                    'category 2',
                    'category 3',
                    'category 4',
                    'category 5',
                    'category 6',
                    'category 7',
                    'category 8'
                ],
                datasets: [{
                    label: 'growth of business',
                    data: [100, 80, 30, 50, 90, 10, 20, 30,],
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
                    borderWidth: 1,
                    tension: 0.5
                }]
            },
            mixedChart: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        type: 'line',
                        label: 'Line Dataset',
                        data: [3, 2, 3, 5, 4, 3, 5],
                        borderColor: 'rgb(75, 192, 192)',
                        borderWidth: 2,
                        fill: false
                    },
                    {
                        type: 'bar',
                        label: 'Bar Dataset',
                        data: [2, 3, 4, 3, 5, 2, 3],
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        borderWidth: 1
                    }
                ]
            },
            progress25: {
                labels: [
                    'category 1',
                ],
                datasets: [{
                    label: 'growth of business',
                    data: [25, 75],
                    backgroundColor: [
                        'rgba(255, 0, 0, 0.3)',
                        'rgba(0, 0, 0, 0.05)',
                    ],
                    borderWidth: 1,
                }]
            },
            progress50: {
                labels: [
                    'category 1',
                ],
                datasets: [{
                    label: 'growth of business',
                    data: [50, 50],
                    backgroundColor: [
                        'rgba(76, 175, 80, 0.3)',
                        'rgba(0, 0, 0, 0.05)',
                    ],
                    borderWidth: 1,
                }]
            },
            progress75: {
                labels: [
                    'category 1',
                ],
                datasets: [{
                    label: 'growth of business',
                    data: [75, 25],
                    backgroundColor: [
                        'rgba(33, 150, 243, 0.3)',
                        'rgba(0, 0, 0, 0.05)',
                    ],
                    borderWidth: 1,
                }]
            },
            progress100: {
                labels: [
                    'category 1',
                ],
                datasets: [{
                    label: 'growth of business',
                    data: [100],
                    backgroundColor: [
                        'rgba(255, 193, 7, 0.3)',
                        'rgba(0, 0, 0, 0.05)',
                    ],
                    borderWidth: 1,
                }]
            },

        }
    },
    mounted() {
        let path = this.$route.path;

        // Remove leading and trailing slashes
        path = path.replace(/^\/|\/$/g, '');

        // Replace dashes with spaces
        path = path.replace(/-/g, ' ');

        // Optionally, capitalize the first letter of each word
        // path = path.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        this.pageName = path;
        console.log(this.pageName);
    },
    methods: {
        goback() {
            window.history.back()
        },

    }
}
</script>
<style lang="">

</style>