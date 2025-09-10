<!-- <template>
  <div class="">
    <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2 rounded-borders">
      <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : ''">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Conociendo un poco de Vue 3</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable :to="menuItem.to" active-class="text-primary" exact v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <router-view/>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuList = [
  {
    label: 'Que es Vue 3',
    separator: true,
    to: '/'
  },
  {
    label: 'Requisitos',
    separator: false,
    to: '/requisitos'
  },
  {
    label: 'Creacion del proyecto',
    separator: false,
    to: '/creacion-proyecto'
  },
  {
    label: 'Interpolacion',
    separator: false,
    to: '/interpolacion'
  },
  {
    label: 'Directivas de vue',
    separator: false,
    to: '/directivas'
  },
  {
    label: 'Options Api',
    separator: false,
    to: '/optiones-api'
  },
  {
    label: 'Composition Api',
    separator: false,
    to: '/composition-api'
  },
  {
    label: 'Ciclo de vida de Vue',
    separator: false,
    to: '/ciclo-de-vida'
  },
  {
    label: 'Componentes importación',
    separator: false,
    to: '/componentes-importacion'
  },
  {
    label: 'Componetización Props',
    separator: true,
    to: '/componetizacion-props'
  },
  {
    label: 'Creación de un proyecto template Quasar',
    separator: false,
    to: '/creacion-proyecto-template-quasar'
  },
  {
    label: 'Instalar Quasar en un proyecto ya creado',
    separator: true,
    to: '/instalar-quasar-proyecto-creado'
  },
  {
    label: 'Vue router',
    separator: true,
    to: '/vue-router'
  },
  {
    label: 'Pinia',
    separator: false,
    to: '/pinia'
  },
  {
    label: 'Pinia-plugin-presistedstate',
    separator: true,
    to: '/pinia-plugin-presistedstate'
  },
]

  const drawer = ref(false)

</script> -->

<template>
  <div class="app-container">
    <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2 rounded-borders">
      <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-primary'">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title class="text-weight-bold">Conociendo un poco de Vue 3</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="250"
        :breakpoint="500"
        bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-1'"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item 
                clickable 
                :to="menuItem.to" 
                active-class="bg-primary text-white" 
                exact 
                v-ripple
                class="q-mb-xs"
              >
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" size="sm" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator 
                :key="'sep' + index"  
                v-if="menuItem.separator" 
                spaced
                :inset="menuItem.separatorInset || false"
              />
            </template>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuList = [
  {
    label: '¿Qué es Vue 3?',
    separator: true,
    separatorInset: true,
    to: '/',
    icon: 'home'
  },
  {
    label: 'Requisitos',
    separator: false,
    to: '/requisitos',
    icon: 'list'
  },
  {
    label: 'Creación del proyecto',
    separator: false,
    to: '/creacion-proyecto',
    icon: 'construction'
  },
  {
    label: 'Interpolación',
    separator: false,
    to: '/interpolacion',
    icon: 'functions'
  },
  {
    label: 'Directivas de Vue',
    separator: false,
    to: '/directivas',
    icon: 'code'
  },
  {
    label: 'Options API',
    separator: false,
    to: '/optiones-api',
    icon: 'settings_applications'
  },
  {
    label: 'Composition API',
    separator: false,
    to: '/composition-api',
    icon: 'api'
  },
  {
    label: 'Ciclo de vida de Vue',
    separator: false,
    to: '/ciclo-de-vida',
    icon: 'loop'
  },
  {
    label: 'Componentes: Importación',
    separator: false,
    to: '/componentes-importacion',
    icon: 'input'
  },
  {
    label: 'Componentización y Props',
    separator: true,
    separatorInset: true,
    to: '/componetizacion-props',
    icon: 'widgets'
  },
  {
    label: 'Crear proyecto con Quasar',
    separator: false,
    to: '/creacion-proyecto-template-quasar',
    icon: 'folder_special'
  },
  {
    label: 'Instalar Quasar en proyecto',
    separator: true,
    separatorInset: true,
    to: '/instalar-quasar-proyecto-creado',
    icon: 'install_desktop'
  },
  {
    label: 'Vue Router',
    separator: false,
    to: '/vue-router',
    icon: 'route'
  },
  {
    label: 'Pinia',
    separator: false,
    to: '/pinia',
    icon: 'storage'
  },
  {
    label: 'Pinia Plugin Persistedstate',
    separator: true,
    separatorInset: true,
    to: '/pinia-plugin-presistedstate',
    icon: 'save'
  },
]

const drawer = ref(false)
</script>

<style lang="scss" scoped>
.app-container {
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  
  :deep(.q-layout-container) {
    border-radius: 8px;
    overflow: hidden;
  }
}

:deep(.q-toolbar) {
  min-height: 64px;
}

:deep(.q-toolbar__title) {
  font-size: 1.25rem;
}

:deep(.q-drawer) {
  border-right: 1px solid rgba(0,0,0,0.12);
}

:deep(.q-item) {
  border-radius: 0 24px 24px 0;
  margin-right: 12px;
}

:deep(.q-item:hover) {
  background-color: rgba(0,0,0,0.04);
}

:deep(.q-item__section--avatar) {
  min-width: 40px;
}

:deep(.q-item__section--main) {
  font-size: 0.9rem;
}

:deep(.q-separator--spaced) {
  margin: 12px 0;
}

:deep(.q-page-container) {
  padding: 0;
}

:deep(.q-page) {
  background: transparent;
}
</style>