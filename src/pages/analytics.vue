<style>
  /* html, body, #map {
    height: 100%;
    width: 100vw;
  } */
</style>
<template>
  <q-page class="column q-pa-md q-gutter-md">
    <div class="text">Collection Points Realtime Level</div>
    <div class="row items-start q-gutter-md">
      <q-card class="bg-negative text-white" flat bordered style="width: 250px">
        <q-card-section horizontal class="column">
          <q-card-section class="q-pt-xs row">
            <div class="text-overline col">
              <q-btn size="lg" flat round icon="warning" />
            </div>
            <div class="text-h3 q-mt-sm q-mb-xs">3</div>
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-space />
          <q-btn flat>
            Overflow
          </q-btn>
        </q-card-actions>
      </q-card>
      <q-card class="bg-red text-white" flat bordered style="width: 250px">
        <q-card-section horizontal class="column">
          <q-card-section class="q-pt-xs row">
            <div class="text-overline col">
              <q-btn size="lg" flat round icon="warning" />
            </div>
            <div class="text-h3 q-mt-sm q-mb-xs">69</div>
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-space />
          <q-btn flat>
            High
          </q-btn>
        </q-card-actions>
      </q-card>
      <q-card class="bg-orange text-white" flat bordered style="width: 250px">
        <q-card-section horizontal class="column">
          <q-card-section class="q-pt-xs row">
            <div class="text-overline col">
              <q-btn size="lg" flat round icon="trending_up" />
            </div>
            <div class="text-h3 q-mt-sm q-mb-xs">24</div>
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-space />
          <q-btn flat>
            Medium
          </q-btn>
        </q-card-actions>
      </q-card>
      <q-card class="bg-secondary text-white" flat bordered style="width: 250px">
        <q-card-section horizontal class="column">
          <q-card-section class="q-pt-xs row">
            <div class="text-overline col">
              <q-btn size="lg" flat round icon="warning" />
            </div>
            <div class="text-h3 q-mt-sm q-mb-xs">103</div>
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-space />
          <q-btn flat>
            Low
          </q-btn>
        </q-card-actions>
      </q-card>
      <div>
        
      </div>
    </div>
    <div class="text q-pt-lg">Weekly Trend</div>
    <div class="row q-gutter-md">
      <div>
        <pie-chart :legend="false" :donut="true" :colors="['#c10015', '#f44336', '#ff9800', '#26a69a']"
        :data="[['Overflow', 3], ['High', 69], ['Medium', 24], ['High', 103]]"
        :library="{
          plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
        }
        }"
        ></pie-chart>
      </div>
      <div class="col" style="max-width: 700px">
        <line-chart :data="[
          { name: 'This Week', data: { 'Sun': 3, 'Mon': 1, 'Tue': 1, 'Wed': 2, 'Thu': 2, 'Fri': 3, 'Sat': 2 }},
          { name: 'Last Week', data: { 'Sun': 2, 'Mon': 1, 'Tue': 2, 'Wed': 2, 'Thu': 2, 'Fri': 3, 'Sat': 2 }},
          { name: 'Last² Week', data: { 'Sun': 2, 'Mon': 2, 'Tue': 1, 'Wed': 1, 'Thu': 2, 'Fri': 3, 'Sat': 2 }}
        ]" />
      </div>
    </div>
    <!-- <div  class="bg-grey"></div> -->
  </q-page>
</template>

<script setup>
import { defineComponent, onMounted, ref } from 'vue'

// export default defineComponent({
//   name: 'IndexPage'
// })
</script>
