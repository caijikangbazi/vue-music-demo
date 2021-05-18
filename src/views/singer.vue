<template>
  <div>
    歌手
  </div>
</template>

<script>
import { getSingerList } from '@/service/singer'

export default {
  async created () {
    const result = await getSingerList()
    console.log(result)
  }
}

</script>

<style lang="scss" scoped>

</style>
