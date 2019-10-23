/*
 * @Description: In User Settings Edit
 * @Author: pangyu
 * @Date: 2019-10-18 08:27:58
 * @LastEditors: pangyu
 * @LastEditTime: 2019-10-21 17:04:24
 */
import * as singleSpa from 'single-spa'
import modules from './modules'

window.NProgress.configure({ showSpinner: true })

const { registerApplication, start, navigateToUrl } = singleSpa
const cache = Object.create(null)

const pathPrefix = (prefix) => (location) => {
  return location.hash.startsWith(`#${prefix}`)
}

const loadApplication = async () => {
  const hashStr = window.location.hash

  if (!hashStr) return

  const [, name] = hashStr.split('/')

  if (!name) return
  if (!modules.includes(name)) return
  if (cache[name]) return

  window.NProgress.start()

  const { default: application } = await window.System.import(`./${name}/main.js`)
  cache[name] = application

  window.NProgress.done(true)

  if (typeof application.render === 'function') {
    const app = application.render()
    return app
  }

  return application
}

const navigateToApplication = async (name) => {
  console.log('navigateToApplication', name)

  // if (modules.includes(name) && !cache[name]) {
  //   console.log('await load application', name)
  //   await window.System.import(`/${name}/main.js`)
  // }

  console.log('after load application', name)

  navigateToUrl(`#/${name}`)
}

const routes = [
  {
    path: '/javascript',
    name: 'javascript',
    application: () => loadApplication('javascript')
  },
  {
    path: '/typescript',
    name: 'typescript',
    application: () => loadApplication('typescript')
  }
]

const startSingleSpa = (routes = []) => {
  start() // 启动 single-spa

  routes.forEach(({ path, name, application }) => {
    registerApplication(name, application, pathPrefix(path))
  })
}

startSingleSpa(routes)

window.navigateToApplication = navigateToApplication
window._applications = cache
