<template>
  <div id="app">
      <Header />
      <CustomCursor />
      <router-view></router-view>
  </div>
</template>

<script>
    import Header from './components/Header';
    import CustomCursor from './components/CustomCursor';

    export default {
      components: {
          Header, CustomCursor,
      }
    }
</script>
