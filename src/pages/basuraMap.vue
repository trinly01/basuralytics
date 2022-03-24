<style>
  /* html, body, #map {
    height: 100%;
    width: 100vw;
  } */
</style>
<template>
  <q-page class="flex flex-center column">
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    > -->
    <div ref="lmap" class="col bg-green-1 full-width">
    </div>
    <!-- <div  class="bg-grey"></div> -->
  </q-page>
</template>

<script setup>
import { defineComponent, onMounted, ref } from 'vue'
import { api } from 'boot/axios'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'


const lmap = ref(null)
let map

onMounted(async () => {
  // console.log('L', lmap)
  map = L.map(lmap.value).fitWorld()

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    setView: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)

  // map.zoom(15)

  const { data: { data: collectionPoints } } = await api.get('collection-points')
  console.log(collectionPoints)

  const markers = []

  L.Routing.control({
    routeWhileDragging: true,
    showAlternatives: true,
    waypoints: collectionPoints.map(c => L.latLng(c.attributes.coordinates.lat, c.attributes.coordinates.lng)).reverse(),
    createMarker: function(i, wp, nWps) {
        markers[i] = L.marker(wp.latLng)
          .bindPopup(collectionPoints[i].attributes.name + '<br />', {autoClose:false})
        return markers[i]
    }
  })
  .on('routeselected', () => {
    document.querySelector('.leaflet-routing-alt > h2').remove()
    // console.log(UI)

    for (const m of markers) {
      m.openPopup()
    }
  })
  .addTo(map)

  map.setView([16.941554075681058, 121.76572061959605], 15)

})

// export default defineComponent({
//   name: 'IndexPage'
// })
</script>
