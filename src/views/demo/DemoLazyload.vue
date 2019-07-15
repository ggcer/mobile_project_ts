<template>
  <page class="demo-lazy-load">
    <h4 class="content-header">lazy-load 替换图片的src为v-lazy指令</h4>
    <div class="img-wrap">
      <img
        v-for="(item, index) of lazyloadImgSrcList"
        :key="index"
        v-lazy="item"
      />
    </div>
  </page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class DemoLazyload extends Vue {
  // 懒加载图片src列表
  public lazyloadImgSrcList: string[] = [
    'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3220585992,1098625497&fm=26&gp=0.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556764737&di=13273352f8d9f2d755acef1f0dc2e88c&imgtype=jpg&er=1&src=http%3A%2F%2Fpic25.nipic.com%2F20121110%2F6647776_120809433144_2.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556764795&di=cafd724d326db5491a805d0fc3266793&imgtype=jpg&er=1&src=http%3A%2F%2Fpic31.nipic.com%2F20130713%2F4826724_225329401184_2.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556764827&di=08018583980f75bf510839545ab4d132&imgtype=jpg&er=1&src=http%3A%2F%2Fpic2.cxtuku.com%2F00%2F00%2F27%2Fb9095311836b.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556764851&di=aa4cc4150ca82ae0ba9f8340e477412f&imgtype=jpg&er=1&src=http%3A%2F%2Fpic72.nipic.com%2Ffile%2F20150715%2F9448607_192612583000_2.jpg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/404040404040404',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556170394202&di=b64529f96d9502159b797b52b4cd2914&imgtype=0&src=http%3A%2F%2Fpic51.nipic.com%2Ffile%2F20141021%2F2501606_144853382000_2.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556170414198&di=f8b5d03c5c857850a01fc6cd3f8fbc9c&imgtype=0&src=http%3A%2F%2Fpic1.zhimg.com%2F50%2Fv2-66e8467eea513e702a610570d1aa8ae1_b.jpg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3254700114,453229179&fm=26&gp=0.jpg'
  ]
}
</script>

<style lang="scss" scoped>
.demo-lazy-load {
  padding: 20px;
  .content-header {
    font-size: 13px;
    margin-bottom: 10px;
    font-weight: normal;
  }
  .img-wrap {
    img {
      width: 100%;
      height: auto;
      margin-bottom: 20px;
    }
  }
}
</style>
