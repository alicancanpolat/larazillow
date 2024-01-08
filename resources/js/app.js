import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { ZiggyVue } from 'ziggy'
import MainLayout from '@/Pages/Layouts/MainLayout.vue'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        createApp({
            render: () => h(MainLayout, {}, [h(App, props)])
        })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el)
    },
})
