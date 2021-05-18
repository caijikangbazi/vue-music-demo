<template>
  <div class="recommend" v-loading:[loadingText]="loading">
    <scroll class="recommend-recommend">
      <div>
        <div class="slider-wrapper">
          <div class="slider-content">
            <slide v-if="sliders.length" :sliders="sliders"></slide>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title" v-show="!loading">热门歌单推荐</h1>
          <ul>
            <li
                v-for="item of albums"
                :key="item.id"
                class="item"
            >
              <div class="icon">
                <img v-lazy="item.pic" width="60" height="60">
              </div>
              <div class="text">
                <h2 class="name">
                  {{ item.username }}
                </h2>
                <p class="title">
                  {{ item.title }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import { getRecommend } from '@/service/recommend'
import Slide from '@/components/base/slider/slider'
import Scroll from '@/components/base/scroll/scroll'

export default {
  name: 'recommend',
  async created () {
    const result = await getRecommend()
    this.sliders = result.sliders
    this.albums = result.albums
  },
  computed: {
    loading () {
      return !this.sliders.length && !this.albums.length
    }
  },
  data () {
    return {
      sliders: [],
      albums: [],
      loadingText: '请给我一点时间'
    }
  },
  components: {
    Slide,
    Scroll
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  position: fixed;
  top: 88px;
  width: 100%;
  bottom: 0;

  .recommend-recommend {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      height: 0;
      width: 100%;
      padding-top: 40%;
      overflow: hidden;

      .slider-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }

    .recommend-list {
      .list-title {
        line-height: 65px;
        height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;
        }

        .name {
          margin-bottom: 10px;
          color: $color-text;
        }

        .title {
          color: $color-text-d;
        }
      }
    }
  }
}
</style>
