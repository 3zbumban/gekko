<template lang='pug'>
    nav.bg--light-black
      .menu.contain
        router-link(to='/home').py1 Home
        router-link(to='/live-gekkos').py1 Live Gekkos
        router-link(to='/backtest').py1 Backtest
        router-link(to='/data').py1 Local data
        router-link(to='/config').py1 Config
        a(href='https://gekko.wizb.it/docs/introduction/about_gekko.html', target='_blank').py1 Documentation

</template>

<script>
export default {}
</script>

<style>
.menu {
  display: flex;
  flex-direction: row;
  margin-top: 0;
  /* margin-bottom: 2rem; */
}

.menu a {
  flex: 1 1 100%;
  display: block;
  text-align: center;
  text-decoration: none;
  color: inherit;
}

.menu .router-link-active {
  background-color: rgba(133, 204, 74, 0.99);
}

.menu a:hover {
  /* text-decoration: underline; */
  background-color: rgba(14, 105, 165, 0.99);
}

</style>
