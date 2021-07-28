<template>
  <the-header></the-header>
  <router-view></router-view>
  <transition name="modal">
    <add-invoice v-if="getModal"></add-invoice>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';
import TheHeader from './components/TheHeader.vue';
import AddInvoice from './components/AddInvoice.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    AddInvoice,
  },
  computed: {
    ...mapGetters(['getModal']),
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import './variables.scss';

*,
*::before,
*::after,
#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  letter-spacing: -1px;
}

#app {
  background: -webkit-linear-gradient(180deg, rgb(32, 88, 145), rgb(8, 39, 67));
  background: linear-gradient(180deg, rgb(32, 88, 145), rgb(8, 39, 67));
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  position: relative;
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease-in-out;
}

.modal-enter-from,
.modal-leave-to {
  transform: translateX(-800px);
}

.modal-enter-to,
.modal-leave-from {
  transform: translateX(0px);
}
</style>
