<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-green">
        <q-btn
          flat
          dense
          round
          icon="delete_sweep"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Basuralytics {{$route.path}}
        </q-toolbar-title>

        <div>v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <!-- <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        /> -->

        <q-item clickable @click="$router.push('/')" :active="$route.path === '/'">
          <q-item-section top avatar>
            <!-- <q-avatar color="primary" text-color="white" icon="bluetooth" /> -->
            <q-icon name="map" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Map</q-item-label>
            <q-item-label caption lines="1">Collection Points</q-item-label>
          </q-item-section>

          <q-item-section side top class="row q-gutter-xs">
            <q-badge color="negative">
              3 <q-icon name="warning" color="white" class="q-ml-xs" />
            </q-badge>
            <q-badge color="red">
              69 <q-icon name="warning" color="white" class="q-ml-xs" />
            </q-badge>
          </q-item-section>
        </q-item>

        <q-item clickable to="/analytics">
          <q-item-section top avatar>
            <!-- <q-avatar color="primary" text-color="white" icon="bluetooth" /> -->
            <q-icon name="addchart" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Analytics</q-item-label>
            <q-item-label caption lines="1">Trends and Insights</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section top avatar>
            <!-- <q-avatar color="primary" text-color="white" icon="bluetooth" /> -->
            <q-icon name="local_shipping" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Vehicles</q-item-label>
            <q-item-label caption lines="1">Routes</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section top avatar>
            <!-- <q-avatar color="primary" text-color="white" icon="bluetooth" /> -->
            <q-icon name="factory" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Dumping Sites</q-item-label>
            <q-item-label caption lines="1">Dumping rates</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
