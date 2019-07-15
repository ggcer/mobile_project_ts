// 确保在声明补充的类型之前导入 'vue'
import Vue from 'vue'
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  // 3. 声明为 Vue 补充的东西
    interface Vue {
      $eventBus: any
      GlobalCode: {
        [key: string]: any[]
      },
      GlobalConfig: {
        [key: string]: any
      },
      Utils: Utils,
      Interfaces: {
        [key: string]: any
      }
    }
  }
