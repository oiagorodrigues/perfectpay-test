import TheButton from '@/components/common/Button.vue'
import TheInput from '@/components/common/Input.vue'
import TheNavbar from '@/components/layout/Navbar.vue'
import TheFooter from '@/components/layout/Footer.vue'

const components = {
  install(Vue) {
    Vue.component(TheButton.name, TheButton)
    Vue.component(TheInput.name, TheInput)
    Vue.component(TheNavbar.name, TheNavbar)
    Vue.component(TheFooter.name, TheFooter)
  },
}

export default components
