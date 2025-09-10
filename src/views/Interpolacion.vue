<template>
    <q-page padding class="documentation-page">
        <div class="container">
        <h1 class="text-h4 text-center text-green-14 q-mb-md">Interpolación</h1>

        <div class="paragraph-container q-mb-lg">
            <p class="text-body1">La interpolación es la forma más básica de mostrar datos en la interfaz de usuario. Se realiza usando la sintaxis de llaves dobles: <code>&#123;&#123;  &#125;&#125;</code>.</p>
        </div>

        <div class="syntax-section q-mb-xl">
            <q-card class="code-card" flat bordered>
            <q-card-section>
                <div class="text-subtitle1 q-mb-sm">Ejemplo básico:</div>
                <pre class="text-caption bg-grey-10 text-green q-pa-md rounded-borders overflow-auto">{{ codigoEjemplo }}</pre>
            </q-card-section>
            </q-card>
        </div>

        <div class="content-section q-mb-xl">
            <h3 class="text-h6 text-green-14 q-mb-sm">¿Qué puedes poner dentro de <code>&#123;&#123;  &#125;&#125;</code>?</h3>
            <q-list bordered separator class="q-mb-md">
            <q-item>
                <q-item-section>
                <q-item-label>Variables</q-item-label>
                </q-item-section>
            </q-item>
            <q-item>
                <q-item-section>
                <q-item-label>Expresiones simples (matemáticas, concatenación, ternarios)</q-item-label>
                </q-item-section>
            </q-item>
            <q-item>
                <q-item-section>
                <q-item-label>Llamadas a métodos (sin parámetros complejos)</q-item-label>
                </q-item-section>
            </q-item>
            </q-list>
        </div>

        <div class="examples-section q-mb-xl">
            <h3 class="text-h6 text-green-14 q-mb-sm">Ejemplos válidos</h3>
            <q-card class="code-card" flat bordered>
            <q-card-section>
                <pre class="text-caption bg-grey-10 text-green q-pa-md rounded-borders overflow-auto">{{ ejemplosValidos }}</pre>
            </q-card-section>
            </q-card>
        </div>

        <div class="restrictions-section q-mb-xl">
            <h3 class="text-h6 text-green-14 q-mb-sm">No permitido:</h3>
            <q-list bordered separator>
            <q-item>
                <q-item-section>
                <q-item-label>Declaraciones (if, for)</q-item-label>
                </q-item-section>
            </q-item>
            <q-item>
                <q-item-section>
                <q-item-label>Flujos de control complejos</q-item-label>
                </q-item-section>
            </q-item>
            <q-item>
                <q-item-section>
                <q-item-label>Asignaciones</q-item-label>
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
            💡 La interpolación es reactiva: si el valor cambia, la interfaz se actualiza automáticamente.
            </p>
        </q-alert>
        </div>
    </q-page>
</template>

<script setup>
const codigoEjemplo =
`<template>
    <h1>{{ "{{ titulo }}" }}</h1>
    <p>{{ "{{ mensaje.toUpperCase() }}" }}</p>
</template>

<script setup>
const titulo = 'Bienvenido a Vue'
const mensaje = 'esto es un ejemplo'
<\/script>`;

const ejemplosValidos = 
`{{ "{{ nombre + ' ' + apellido }}" }}
{{ "{{ precio * 1.16 }}" }} <!-- con IVA -->
{{ "{{ activo ? 'Sí' : 'No' }}" }}`;
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

.content-section, .examples-section, .restrictions-section {
    h3 {
        code {
        background: #ffebee;
        padding: 2px 6px;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        }
    }
}

.tip-alert {
    border-radius: 8px;
    
    :deep(.q-alert__content) {
        padding: 16px;
    }
}

.q-list {
    border-radius: 8px;
    overflow: hidden;
}
</style>