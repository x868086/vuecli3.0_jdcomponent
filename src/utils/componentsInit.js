import Btn from '../components/btn.vue'
import Panel from '../components/panel.vue'
import Slider from '../components/slider.vue'
import Heador from '../layout/header.vue'
import Foot from '../layout/footer.vue'
import Navbar from '../layout/navbar.vue'

export default (Vue) => {
  Vue.component(Btn.name, Btn)
  Vue.component(Panel.name, Panel)
  Vue.component(Slider.name, Slider)
  Vue.component(Heador.name, Heador)
  Vue.component(Foot.name, Foot)
  Vue.component(Navbar.name, Navbar)
}
