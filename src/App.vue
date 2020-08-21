<template>
  <div id="map">
    <img src="http://water.hnfsu.com/roadmap/{z}/{x}/{y}.png" alt="">
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$nextTick(() => {
      this._initMap();
    });
  },
  methods: {
    _initMap() {
      const mymap = this.$L.map("map").setView([112, 27], 13);
      console.log('this.$L: ', this.$L);

      this.$L
        .tileLayer("http://water.hnfsu.com/roadmap/{z}/{x}/{y}.png", {
          maxZoom: 18,
          tileSize: 512,
          zoomOffset: -1,
        })
        .addTo(mymap);

      // this.$L
      //   .tileLayer(
      //     "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGFiOTE2MjIiLCJhIjoiY2tlMnZrbDIyMGQ3MzJ2bjd2b3ljbHg2biJ9.-P22Orc9MBYTUlwAOCwjvw",
      //     {
      //       attribution:
      //         'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      //       maxZoom: 18,
      //       id: "mapbox/streets-v11",
      //       tileSize: 512,
      //       zoomOffset: -1,
      //       accessToken: "your.mapbox.access.token",
      //     }
      //   )
      //   .addTo(mymap);

      // var marker = this.$L.marker([51.5, -0.09]).addTo(mymap);

      // var circle = this.$L
      //   .circle([51.508, -0.11], {
      //     color: "red",
      //     fillColor: "#f03",
      //     fillOpacity: 0.5,
      //     radius: 500,
      //   })
      //   .addTo(mymap);

      // var polygon = this.$L
      //   .polygon([
      //     [51.509, -0.08],
      //     [51.503, -0.06],
      //     [51.51, -0.047],
      //   ])
      //   .addTo(mymap);

      // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
      // circle.bindPopup("I am a circle.");
      // polygon.bindPopup("I am a polygon.");

      // var popup = this.$L.popup();

      // function onMapClick(e) {
      //   popup
      //     .setLatLng(e.latlng)
      //     .setContent("You clicked the map at " + e.latlng.toString())
      //     .openOn(mymap);
      // }

      // mymap.on("click", onMapClick);
    },
  },
};
</script>

<style>
#map {
  height: 500px;
}
</style>
