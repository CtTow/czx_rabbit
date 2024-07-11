import XtxSku from './XtxSku/index.vue'
import img from './img/index.vue'
export const XtxPlugit = {
  install(app){
    app.component('XtxSku',XtxSku)
    app.component('Xtximg',img)
  }
}