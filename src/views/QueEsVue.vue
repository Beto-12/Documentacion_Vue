<template>
    <q-page padding class="documentation-page">
        <div class="container">
        <div>
            <h1 class="text-h4 text-center text-primary text-weight-bold q-mb-md">¿Qué es Vue 3?</h1>
        </div>

        <div class="description-container q-mb-lg">
            <q-card class="description-card" flat bordered>
            <q-card-section>
                <p class="text-body1">
                Vue.js (pronunciado como "view") es un framework progresivo de JavaScript para construir interfaces de usuario. A diferencia de otros frameworks monolíticos, Vue está diseñado desde cero para ser incrementalmente adoptable. Esto significa que puedes comenzar con una pequeña parte (como un componente) y escalar a una aplicación completa con rutas, estado global y más.
                </p>
            </q-card-section>
            </q-card>
        </div>

        <div class="features-container q-mb-lg">
            <q-card class="features-card" flat bordered>
            <q-card-section>
                <h4 class="text-h6 text-primary q-mb-sm">Características Principales</h4>
                <q-list separator>
                <q-item v-for="(feature, index) in features" :key="index">
                    <q-item-section>
                    <q-item-label v-html="feature" />
                    </q-item-section>
                </q-item>
                </q-list>
            </q-card-section>
            </q-card>
        </div>

        <div class="why-use-container">
            <q-card class="why-use-card" flat bordered>
            <q-card-section>
                <h4 class="text-h6 text-primary q-mb-sm">¿Por qué usar Vue?</h4>
                <q-list separator>
                <q-item v-for="(reason, index) in reasons" :key="index">
                    <q-item-section>
                    <q-item-label>{{ reason }}</q-item-label>
                    </q-item-section>
                </q-item>
                </q-list>
            </q-card-section>
            </q-card>
        </div>
        </div>
    </q-page>
</template>

<script setup>
const features = [
    '<strong>Reactividad:</strong> Vue detecta automáticamente cuándo cambian los datos y actualiza solo las partes necesarias del DOM.',
    '<strong>Sintaxis declarativa:</strong> Usa plantillas basadas en HTML con enlaces de datos <strong>(v-model, v-if, etc.)</strong>.',
    '<strong>Componentes reutilizables:</strong> Todo en Vue se construye con componentes, lo que facilita la organización y reutilización del código.',
    '<strong>Virtual DOM:</strong> Mejora el rendimiento al actualizar solo lo que cambia.',
    '<strong>Dos estilos de API:</strong> Options API (tradicional) y Composition API (moderno).',
    '<strong>Gran ecosistema:</strong> Incluye Vue Router, Pinia, Vite, Nuxt, Quasar, etc.'
];

const reasons = [
    'Fácil de aprender',
    'Excelente documentación oficial',
    'Integración progresiva (puedes usarlo en solo una parte de tu app)',
    'Alto rendimiento',
    'Comunidad activa y creciente'
];
</script>

<style lang="scss" scoped>
.documentation-page {
    max-width: 900px;
    margin: 0 auto;
}

.description-card {
    background: #fafafa;
    border-radius: 8px;
    
    :deep(.q-card__section) {
        padding: 20px;
    }
    
    p {
        line-height: 1.6;
        color: #424242;
    }
}

.features-card, .why-use-card {
    background: #fafafa;
    border-radius: 8px;
    
    :deep(.q-card__section) {
        padding: 20px;
    }
}

:deep(.q-list) {
    border-radius: 4px;
    overflow: hidden;
}

:deep(.q-item) {
    min-height: 48px;
    padding: 12px 16px;
}

:deep(.q-item__label) {
    line-height: 1.5;
}
</style>