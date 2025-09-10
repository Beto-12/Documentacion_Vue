<template>
    <q-page padding class="documentation-page">
        <div class="container">
        <h1 class="text-h4 text-center text-primary q-mb-md">Componentes: Importación</h1>
        
        <div class="paragraph-container q-mb-lg">
            <p class="text-body1">En Vue, puedes dividir tu interfaz en componentes reutilizables. Cada componente es un archivo <strong>.vue</strong> que contiene <strong>template</strong>, <strong>script</strong> y <strong>style</strong>.</p>
        </div>

        <div class="child-component-section q-mb-xl">
            <h4 class="text-h6 text-primary q-mb-sm">Paso 1: Crear un componente hijo</h4>
            <q-banner class="q-mb-md" dense inline-actions>
            <div class="text-caption">Ojo. Los componentes se crean en la carpeta components</div>
            </q-banner>
            <q-card class="code-card" flat bordered>
            <q-card-section>
                <pre class="text-caption bg-grey-10 text-green q-pa-md rounded-borders overflow-auto">{{ componenteHijo }}</pre>
            </q-card-section>
            </q-card>
        </div>

        <div class="parent-component-section q-mb-xl">
            <h4 class="text-h6 text-primary q-mb-sm">Paso 2: Importar y usar en el padre</h4>
            <q-card class="code-card" flat bordered>
            <q-card-section>
                <pre class="text-caption bg-grey-10 text-green q-pa-md rounded-borders overflow-auto">{{ componentePadre }}</pre>
            </q-card-section>
            </q-card>
        </div>

        <q-alert 
            class="tip-alert" 
            color="info" 
            icon="lightbulb"
            outlined
        >
            <p class="text-body1 q-mb-none">
            💡 En Vue 3 con <strong>script setup</strong>, no necesitas registrar el componente explícitamente.
            </p>
        </q-alert>
        </div>
    </q-page>
</template>

<script setup>
const componenteHijo = 
`<!-- src/components/Mensaje.vue -->
<template>
    <div class="mensaje">
        <p>{{ texto }}</p>
    </div>
</template>

<script setup>
defineProps(['texto'])
<\/script>`;

const componentePadre = 
`<!-- src/App.vue -->
<template>
    <div>
        <Mensaje texto="Hola desde el padre" />
    </div>
</template>

<script setup>
import Mensaje from './components/Mensaje.vue'
<\/script>`;
</script>

<style lang="scss" scoped>
.documentation-page {
    max-width: 900px;
    margin: 0 auto;
}

.paragraph-container {
    p {
        line-height: 1.6;
    }
}

.code-card {
    :deep(.q-card__section) {
        padding: 16px;
    }
    
    pre {
        margin: 0;
        line-height: 1.5;
        font-family: 'Courier New', monospace;
    }
}

.tip-alert {
    border-radius: 8px;
    
    :deep(.q-alert__content) {
        padding: 16px;
    }
}

:deep(.q-banner) {
    background: #fff3e0;
    border: 1px solid #ffcc80;
    border-radius: 8px;
}
</style>