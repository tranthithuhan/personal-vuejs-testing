import Vue from 'vue';
import Router from 'vue-router';
import SlotTesting from '@/components/slot/SlotTesting';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: SlotTesting,
    },
  ],
});
