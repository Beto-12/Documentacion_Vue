<template>
  <div class="app-container">
    <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2 rounded-borders">
      <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-green-14'">
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
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item 
                clickable 
                :to="menuItem.to" 
                active-class="bg-green-14 text-white" 
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