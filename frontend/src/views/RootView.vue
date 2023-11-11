<script setup>
import TopMenuComponent from '../components/tailwind/TopMenuComponent.vue';
import MapComponent from '../components/MapComponent.vue';
import LeftSlideComponent from '../components/tailwind/LeftSlideComponent.vue';
import StationsListComponent from '../components/tailwind/StationsListComponent.vue';
import { StationService } from '../service/StationService';
import TrainCarListComponent from '../components/tailwind/TrainCarListComponent.vue';
import { TrainService } from '../service/TrainService';
</script>

<template>
    <TopMenuComponent @import="_0"
                        @export="_0"
                        @stations="panels.stations = true"
                        @trains="panels.trainCars = true"/>
    <MapComponent style="width: 100%;" :stations="stations"/>
    <LeftSlideComponent class="side-components" title="Список станций"
        :open="panels.stations"
        name="Stations"
        @close="panels.stations = false">
        <StationsListComponent :stations="stations"/>
    </LeftSlideComponent>
    <LeftSlideComponent class="side-components" title="Список поездов"
        :open="panels.trainCars"
        name="TrainCars"
        @close="panels.trainCars = false">
        <TrainCarListComponent :trainCars="trainCars"/>
    </LeftSlideComponent>
</template>

<script>
import { FrontEndService } from '../service/FrontEndService';

export default {
    name: 'RootView',
    data() {
        return {
            panels: {
                stations: false,
                trainCars: false
            },
            stations: [],
            trainCars: []
        }
    },
    methods: {
        _0() {},
        fetchStations() {
            StationService.getAllStations(data => {
                this.stations = data.stations;
            }, this.handleError);
        },
        fetchTrains() {
            TrainService.getAllTrains(data => {
                this.trainCars = data.trains;
            }, this.handleError);
        },
        handleError(err) {
            FrontEndService.defaultErrorHandler(this.$router, err);
        }
    },
    mounted() {
        this.fetchStations();
        this.fetchTrains();
    }
}
</script>

<style>
.side-components {
    z-index: 999999
}
</style>