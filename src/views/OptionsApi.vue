<template>
    <q-page padding class="documentation-page">
        <div class="container">
        <h1 class="text-h4 text-center text-primary q-mb-md">Options API</h1>
        
        <div class="paragraph-container q-mb-lg">
            <p class="text-body1">La Options API es la forma tradicional de definir componentes en Vue. Agrupa el código por opciones como data, methods, computed, mounted, etc.</p>
        </div>

        <div class="structure-section q-mb-xl">
            <h4 class="text-h6 text-primary q-mb-sm">Estructura básica</h4>
            <q-card class="code-card" flat bordered>
            <q-card-section>
                <pre class="text-caption bg-grey-10 text-green q-pa-md rounded-borders overflow-auto">{{ estructuraBasica }}</pre>
            </q-card-section>
            </q-card>
        </div>

        <div class="advantages-section q-mb-xl">
            <h4 class="text-h6 text-primary q-mb-sm">Ventajas:</h4>
            <q-list bordered separator class="feature-list">
            <q-item>
                <q-item-section>
                <q-item-label>Fácil de entender para principiantes</q-item-label>
                </q-item-section>
            </q-item>
            <q-item>
                <q-item-section>
                <q-item-label>Estructura clara y predecible</q-item-label>
                </q-item-section>
            </q-item>
            <q-item>
                <q-item-section>
                <q-item-label>Ideal para componentes simples</q-item-label>
                </q-item-section>
            </q-item>
            </q-list>
        </div>

        <div class="disadvantages-section q-mb-xl">
            <h4 class="text-h6 text-primary q-mb-sm">Desventajas:</h4>
            <q-list bordered separator class="feature-list">
            <q-item>
                <q-item-section>
                <q-item-label>En componentes grandes, la lógica queda fragmentada</q-item-label>
                </q-item-section>
            </q-item>
            <q-item>
                <q-item-section>
                <q-item-label>Difícil reutilizar lógica entre componentes</q-item-label>
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
            💡 Es perfecta para proyectos pequeños o equipos que están empezando con Vue.
            </p>
        </q-alert>
        </div>
    </q-page>
</template>

<script setup>
const estructuraBasica = 
`export default {
    data() {
        return {
        contador: 0
        }
    },
    methods: {
        incrementar() {
        this.contador++
        }
    },
    computed: {
        doble() {
        return this.contador * 2
        }
    },
    mounted() {
        console.log('Componente montado')
    }
}`;
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