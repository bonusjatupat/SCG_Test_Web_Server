import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/views/Resume'
import MathPattern from '@/views/MathPattern'
import MathEquation from '@/views/MathEquation'
import GoogleApi from '@/views/GoogleApi'
import LineBot from '@/views/LineBot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/math/pattern',
      name: 'MathPattern',
      component: MathPattern
    },
    {
      path: '/math/equation',
      name: 'MathEquation',
      component: MathEquation
    },
    {
      path: '/google/api',
      name: 'GoogleApi',
      component: GoogleApi
    },
    {
      path: '/linebot',
      name: 'LineBot',
      component: LineBot
    }
  ]
})
