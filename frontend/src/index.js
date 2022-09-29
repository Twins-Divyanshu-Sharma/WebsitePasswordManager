import {createRouter, createWebHistory} from 'vue-router'
import Get from './views/Get.vue'  
import Update from './views/Update.vue'
import Create from './views/Create.vue'
import Delete from './views/Delete.vue'
import NotFound from './views/NotFound.vue'


const routes = [
    
    {
        path: '/get',
        name: 'Get',
        component: Get,
    },
    {
        path: '/update',
        name: 'Update',
        component: Update
    },
    {
        path: '/create',
        name: 'Create',
        component: Create
    },
    {
        path: '/delete',
        name: 'Delete',
        component: Delete
    },
    // redirects
    {
        path: '',
        redirect: '/get'
    },
    // catch rest
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    },

]


const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'nav_links_selected',
    routes
});



export default router
