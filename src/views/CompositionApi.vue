<template>
    <q-page padding class="documentation-page">
        <div class="container">
        <h1 class="text-h4 text-center text-green-14 q-mb-md">Composition API</h1>

        <div class="paragraph-container q-mb-lg">
            <p class="text-body1">La Composition API fue introducida en Vue 3 para organizar el código por lógica en lugar de por opciones. Es especialmente útil en componentes complejos.</p>
        </div>

        <div class="syntax-section q-mb-xl">
            <h4 class="text-h6 text-green-14 q-mb-sm">Sintaxis</h4>
            <q-card class="code-card" flat bordered>
            <q-card-section>
                <pre class="text-caption bg-grey-10 text-green q-pa-md rounded-borders overflow-auto">{{ sintaxis }}</pre>
            </q-card-section>
            </q-card>
        </div>

        <div class="advantages-section q-mb-xl">
            <h4 class="text-h6 text-green-14 q-mb-sm">Ventajas:</h4>
            <q-list bordered separator class="feature-list">
            <q-item>
                <q-item-section>
                <q-item-label>Mejor reutilización de lógica (composables)</q-item-label>
                </q-item-section>
            </q-item>
            <q-item>
                <q-item-section>
                <q-item-label>Código más limpio en componentes grandes</q-item-label>
                </q-item-section>
            </q-item>
            <q-item>
                <q-item-section>
                <q-item-label>Compatible con TypeScript</q-item-label>
                </q-item-section>
            </q-item>
            <q-item>
                <q-item-section>
                <q-item-label>Más flexible</q-item-label>
                </q-item-section>
            </q-item>
            </q-list>
        </div>

        <q-alert 
            class="tip-alert" 
            color="info" 
            icon="lightbulb"
            outlined
        >
            <p class="text-body1 q-mb-none">
            💡 Usa Composition API si planeas escalar tu aplicación o reutilizar lógica.
            </p>
        </q-alert>
        </div>
    </q-page>
</template>

<script setup>
const sintaxis = 
`<script setup>
import { ref, computed, onMounted } from 'vue'

const contador = ref(0)
const doble = computed(() => contador.value * 2)

function incrementar() {
    contador.value++
}

onMounted(() => {
    console.log('Montado')
})
<\/script>

<template>
    <p>Contador: {{ contador }}</p>
    <p>Doble: {{ doble }}</p>
    <button @click="incrementar">+1</button>
</template>`;
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

.feature-list {
    border-radius: 8px;
    overflow: hidden;
    
    :deep(.q-item) {
        min-height: 40px;
    }
}

.tip-alert {
    border-radius: 8px;
    
    :deep(.q-alert__content) {
        padding: 16px;
    }
}
</style>