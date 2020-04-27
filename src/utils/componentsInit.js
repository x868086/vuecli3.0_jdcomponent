import Btn from '../components/btn.vue'
import Panel from '../components/panel.vue'
import Slider from '../components/slider.vue'
import Heador from '../layout/header.vue'

export default (Vue) => {
  Vue.component(Btn.name, Btn)
  Vue.component(Panel.name, Panel)
  Vue.component(Slider.name, Slider)
  Vue.component(Heador.name, Heador)
}
