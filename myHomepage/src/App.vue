<template>
  <div id="app">
    <barType/>
    <demoOverview/>
    <!-- Footer -->
    <footBottom/>
    <!-- This section is for Splash Screen -->
    <beforeLoaded/>
  </div>
</template>

<script>
import barType from './components/barType'
import demoOverview from './components/demoOverview'
import footBottom from './components/footBottom'
import beforeLoaded from './components/beforeLoaded'

export default {
  name: 'App',
  components: {
    barType,demoOverview,footBottom,beforeLoaded
  }
}
</script>

<style>

</style>
