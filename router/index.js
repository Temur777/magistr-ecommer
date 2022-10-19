import Vue from "vue";
import Router from 'vue-router'
import { load } from '@/router/util'
Vue.use(Router)

export function createRouter() {

  function changeChildrenRoute(routes, lang) {
    const newRoutes = []
    if (routes.length) {
      routes.forEach((item) => {
        if (item.meta && item.meta.notChangePath) {
          const nameRoute = item.name ? `${item.name}___${lang}` : undefined
          newRoutes.push({
            name: nameRoute,
            path: item.path,
            component: item.component,
            meta: item.meta,
            children: item.children && item.children.length ? item.children : []
          })
        } else if (lang === 'ru') {
          const nameRoute = item.name ? `${item.name}___${lang}` : undefined
          newRoutes.push({
            name: nameRoute,
            path: item.path,
            component: item.component,
            meta: item.meta,
            children: item.children && item.children.length ? item.children : []
          })
        } else {
          const nameRoute = item.name ? `${item.name}___${lang}` : undefined
          newRoutes.push({
            name: nameRoute,
            path: item.path,
            component: item.component,
            meta: item.meta,
            children: item.children && item.children.length ? item.children : []
          })
        }
      })
    }
    return newRoutes
  }

  function addLocalesToRoutes(routes) {
    const newRoutes = []
    const locales = ['uz', 'ru']
    if (routes?.length) {
      locales.forEach((lang) => {
        routes.forEach((item) => {
          if (item.meta && item.meta.notChangePath) {
            const nameRoute = item.name ? item.name : undefined
            newRoutes.push({
              name: nameRoute,
              path: item.path,
              component: item.component,
              meta: item.meta,
              children: item.children && item.children.length ? changeChildrenRoute(item.children, lang) : []
            })
          } else if (lang === 'ru') {
            const nameRoute = item.name ? `${item.name}___${lang}` : undefined
            newRoutes.push({
              name: nameRoute,
              path: item.path,
              component: item.component,
              meta: item.meta,
              children: item.children && item.children.length ? changeChildrenRoute(item.children, lang) : []
            })
          } else {
            const nameRoute = item.name ? `${item.name}___${lang}` : undefined
            newRoutes.push({
              name: nameRoute,
              path: `/${lang}${item.path}`,
              component: item.component,
              meta: item.meta,
              children: item.children && item.children.length ? changeChildrenRoute(item.children, lang) : []
            })
          }
        })
      })
    }
    return newRoutes
  }

  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: load('index'),
        name: 'HomePage'
      },
      {
        path: '/subscribe',
        component: load('subscribe/index'),
        name: 'Subscribe'
      },
      {
        path: '/book/:id',
        component: load('book/detail'),
        name: 'bookDetail'
      },
      {
        path: '/literature',
        component: load('category/literature'),
        name: 'literature'
      },

    ],
    linkActiveClass: 'nuxt-link-active',
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      } else if (to.hash) {
        return {
          selector: to.hash
        }
      } else if (!to.meta.disableScroll) {
        return { x: 0, y: 0 }
      }
    }
  })
}

