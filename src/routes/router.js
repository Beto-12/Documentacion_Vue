// Importaciones de las vistas
import QueEsVue from "../views/QueEsVue.vue";
import Requisitos from "../views/Requisitos.vue";
import CreacionProyecto from "../views/CreacionProyecto.vue";
import Interpolacion from "../views/Interpolacion.vue";
import Directivas from "../views/Directivas.vue";
import OptionsApi from "../views/OptionsApi.vue";
import CompositionApi from "../views/CompositionApi.vue";
import CicloDeVida from "../views/CicloDeVida.vue";
import ComponentesImportacion from "../views/ComponentesImportacion.vue";
import ComponetizacionProps from "../views/ComponetizacionProps.vue";
import CreacionProyectoTemplateQuasar from "../views/CreacionProyectoTemplateQuasar.vue";
import InstalarQuasarProyectoYaCreado from "../views/InstalarQuasarProyectoYaCreado.vue";
import VueRouter from "../views/VueRouter.vue";
import Pinia from "../views/Pinia.vue";
import PiniaPluginPresistedstate from "../views/PiniaPluginPresistedstate.vue";

// Importamos createRouter y createWebHashHistory de vue-router
import { createRouter, createWebHashHistory } from 'vue-router'

// Direcciones de las vistas
const routes = [
    {path: '/', component:QueEsVue},
    {path: '/requisitos', component:Requisitos},
    {path: '/creacion-proyecto', component:CreacionProyecto},
    {path: '/interpolacion', component:Interpolacion},
    {path: '/directivas', component:Directivas},
    {path: '/optiones-api', component:OptionsApi},
    {path: '/composition-api', component:CompositionApi},
    {path: '/ciclo-de-vida', component:CicloDeVida},
    {path: '/componentes-importacion', component:ComponentesImportacion},
    {path: '/componetizacion-props', component:ComponetizacionProps},
    {path: '/creacion-proyecto-template-quasar', component:CreacionProyectoTemplateQuasar},
    {path: '/instalar-quasar-proyecto-creado', component:InstalarQuasarProyectoYaCreado},
    {path: '/vue-router', component:VueRouter},
    {path: '/pinia', component:Pinia},
    {path: '/pinia-plugin-presistedstate', component:PiniaPluginPresistedstate}
]

// Exportamos las rutas
export const router = createRouter({
    history: createWebHashHistory(),
    routes
})