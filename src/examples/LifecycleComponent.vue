<template>
  <div class="component">
    <h1>Jernbanetorget T</h1>
    <p v-if="loading">Laster data...</p>
    <p v-else-if="error">{{ error }}</p>
    <p v-else-if="!data">Ingen data å vise!</p>
    <p v-else>{{ data[0] | formatDeparture }}</p>
  </div>
</template>

<script>
import axios from 'axios';

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default {
  data() {
    return {
      loading: false,
      error: null,
      data: null,
    };
  },
  async mounted() {
    await this.loadData();
  },
  async activated() {
    // We're only using activated() because this component
    //    is wrapped in a keep-alive, and thus cached
    await this.loadData();
  },
  methods: {
    async loadData() {
      this.loading = true;
      this.error = null;

      try {
        var result = await axios.get('http://reisapi.ruter.no/StopVisit/GetDepartures/3010011');
        this.data = result.data;
        await sleep(5000);
        this.loading = false;
      } catch (err) {
        this.error = err;
        this.loading = false;
      }
    },
  },
  filters: {
    formatDeparture(departure) {
      const display = departure.MonitoredVehicleJourney.MonitoredCall;
      const expectedDepartureTime = new Date(display.ExpectedDepartureTime);
      const now = new Date();
      const delta = ((now - expectedDepartureTime) / 1000) + 60;
      let humanizedDepartureTime = '';
      if (delta < 60) {
        humanizedDepartureTime = `${Math.floor(delta)} sekunder`;
      } else {
        humanizedDepartureTime = `${Math.floor(delta/60)} minutter`;
      }
      return `Neste avgang: ${display.DestinationDisplay} om ${humanizedDepartureTime}`;
    },
  },
};
</script>