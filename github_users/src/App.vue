<template>
  <div id="app">

    <div class="container">
      <Search/>
      <List/>
    </div>
  </div>
</template>

<script>
import List from './components/List'
import Search from './components/Search'
export default {
  name: 'App',
  components: {
    List,
    Search,
},
}
</script>


