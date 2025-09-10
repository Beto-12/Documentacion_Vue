<template>
    <q-page padding class="documentation-page">
        <div class="container">
        <h1 class="text-h4 text-center text-primary q-mb-md">Componentización y Props</h1>

        <div class="paragraph-container q-mb-lg">
            <p class="text-body1">La componentización es el proceso de dividir una interfaz en partes independientes y reutilizables.</p>
            
            <h4 class="text-h6 text-primary q-mb-sm">¿Qué son las props?</h4>
            <p class="text-body1">Las props (abreviatura de "properties") son datos que se pasan de un componente padre a un componente hijo.</p>
        </div>

        <div class="declare-props-section q-mb-xl">
            <h4 class="text-h6 text-primary q-mb-sm">Paso 1: Declarar props</h4>
            <q-card class="code-card" flat bordered>
            <q-card-section>
                <pre class="text-caption bg-grey-10 text-green q-pa-md rounded-borders overflow-auto">{{ declararProps }}</pre>
            </q-card-section>
            </q-card>
        </div>

        <div class="pass-props-section q-mb-xl">
            <h4 class="text-h6 text-primary q-mb-sm">Paso 2: Pasar props desde el padre</h4>
            <q-card class="code-card" flat bordered>
            <q-card-section>
                <pre class="text-caption bg-grey-10 text-green q-pa-md rounded-borders overflow-auto">{{ propsPadre }}</pre>
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
            💡 Las props son de solo lectura. Si necesitas modificarlas, usa v-model o emite eventos con defineEmits().
            </p>
        </q-alert>
        </div>
    </q-page>
</template>

<script setup>
const declararProps = 
`<script setup>
// Forma simple
defineProps(['titulo', 'activo'])

// Forma avanzada (recomendada)
defineProps({
    titulo: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        default: false
    }
})
<\/script>`;

const propsPadre = 
`<MiComponente
    titulo="Mi Aplicación"
    :activo="true"
    :usuarios="listaUsuarios"
/>`;
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
    
    h4 {
        margin-top: 16px;
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