<template>
    <q-page padding class="documentation-page">
        <div class="container">
        <h1 class="text-h4 text-center text-green-14 q-mb-md">Ciclo de vida de Vue</h1>

        <div class="paragraph-container q-mb-lg">
            <p class="text-body1">Cada componente en Vue pasa por una serie de etapas desde su creación hasta su eliminación. Estas etapas se conocen como el ciclo de vida del componente.</p>
        </div>

        <div class="lifecycle-hooks q-mb-xl">
            <h4 class="text-h6 text-green-14 q-mb-sm">Principales hooks</h4>
            <div class="hooks-grid">
            <q-card class="hook-card" flat bordered v-for="(hook, index) in lifecycleHooks" :key="index">
                <q-card-section>
                <div class="text-subtitle1 text-green-14 q-mb-xs">{{ hook.name }}</div>
                <p class="text-body2 q-mb-none">{{ hook.description }}</p>
                </q-card-section>
            </q-card>
            </div>
        </div>

        <div class="common-usage q-mb-xl">
            <h4 class="text-h6 text-green-14 q-mb-sm">Uso común:</h4>
            <q-card class="code-card" flat bordered>
            <q-card-section>
                <pre class="text-caption bg-grey-10 text-green q-pa-md rounded-borders overflow-auto">{{ usoComun }}</pre>
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
            💡 En Composition API, se usan onMounted, onUpdated, onUnmounted, etc.
            </p>
        </q-alert>
        </div>
    </q-page>
</template>

<script setup>
const usoComun = 
`onMounted(() => {
    fetch('/api/data').then(res => res.json()).then(data => {
        // Actualizar estado
    })
})

onUnmounted(() => {
  // Limpiar temporizadores, event listeners, etc.
})`;

const lifecycleHooks = [
    {
        name: 'beforeCreate',
        description: 'Antes de que se cree la instancia (datos no reactivos aún)'
    },
    {
        name: 'created',
        description: 'Instancia creada, datos reactivos listos'
    },
    {
        name: 'beforeMount',
        description: 'Antes de insertar en el DOM'
    },
    {
        name: 'mounted',
        description: 'Componente insertado en el DOM (ideal para peticiones HTTP)'
    },
    {
        name: 'beforeUpdate',
        description: 'Antes de que el DOM se actualice por cambios de datos'
    },
    {
        name: 'updated',
        description: 'Después de la actualización del DOM'
    },
    {
        name: 'beforeUnmount',
        description: 'Antes de destruir el componente'
    },
    {
        name: 'unmounted',
        description: 'Componente eliminado del DOM (limpieza de event listeners)'
    }
];
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

.hooks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    margin-top: 16px;
}

.hook-card {
    background: #fafafa;
    border-radius: 8px;
    
    :deep(.q-card__section) {
        padding: 16px;
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
</style>