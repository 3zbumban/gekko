<template lang='pug'>
  footer.p2.bg--off-black
    .contain
      p
        em Use Gekko at your own risk.
      p Using Gekko v{{ version.gekko }} and Gekko UI v{{ version.ui }}.
</template>

<script>
const gekkoPackage = require('../../../../../package.json');
const uiPackage = require('../../../package.json');

export default {
  data: () => {
    return {
      version: {
        gekko: gekkoPackage.version,
        ui: uiPackage.version
      }
    }
  }
}
</script>

<style>
footer {
  flex-shrink: 1;
}
</style>
