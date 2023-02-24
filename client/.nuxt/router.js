import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c9473296 = () => interopDefault(import('../pages/recipes/index.vue' /* webpackChunkName: "pages/recipes/index" */))
const _73da6478 = () => interopDefault(import('../pages/recipes/add.vue' /* webpackChunkName: "pages/recipes/add" */))
const _a8edc1c0 = () => interopDefault(import('../pages/recipes/_id/index.vue' /* webpackChunkName: "pages/recipes/_id/index" */))
const _6682a02c = () => interopDefault(import('../pages/recipes/_id/edit.vue' /* webpackChunkName: "pages/recipes/_id/edit" */))
const _2c9f149f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/recipes",
    component: _c9473296,
    name: "recipes"
  }, {
    path: "/recipes/add",
    component: _73da6478,
    name: "recipes-add"
  }, {
    path: "/recipes/:id",
    component: _a8edc1c0,
    name: "recipes-id"
  }, {
    path: "/recipes/:id/edit",
    component: _6682a02c,
    name: "recipes-id-edit"
  }, {
    path: "/",
    component: _2c9f149f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
