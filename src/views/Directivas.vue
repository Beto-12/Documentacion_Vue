<template>
    <q-page padding class="documentation-page">
        <div class="container">
        <h1 class="text-h4 text-center text-primary q-mb-md">Directivas de Vue</h1>

        <div class="paragraph-container q-mb-lg">
            <p class="text-body1">Las directivas son atributos especiales que comienzan con v- y añaden comportamientos reactivos al DOM.</p>
        </div>

        <div class="directives-grid q-mb-xl">
            <!-- Dirección v-if -->
            <q-card class="directive-card" flat bordered>
            <q-card-section>
                <div class="text-subtitle1 text-primary q-mb-sm">Directiva:</div>
                <q-list dense class="q-mb-sm">
                <q-item v-for="(item, idx) in ['v-if', 'v-else', 'v-else-if']" :key="idx">
                    <q-item-section>
                    <q-item-label class="text-weight-medium">{{ item }}</q-item-label>
                    </q-item-section>
                </q-item>
                </q-list>
                
                <div class="text-subtitle1 text-primary q-mb-xs">Uso:</div>
                <p class="text-body2 q-mb-sm">Renderizado condicional</p>
                
                <div class="text-subtitle1 text-primary q-mb-xs">Ejemplo:</div>
                <q-card class="example-card" flat bordered>
                <q-card-section class="q-pa-sm">
                    <pre class="text-caption q-ma-none overflow-x-auto">{{ ejemplo1 }}</pre>
                </q-card-section>
                </q-card>
            </q-card-section>
            </q-card>

            <!-- Dirección v-show -->
            <q-card class="directive-card" flat bordered>
            <q-card-section>
                <div class="text-subtitle1 text-primary q-mb-sm">Directiva:</div>
                <q-list dense class="q-mb-sm">
                <q-item>
                    <q-item-section>
                    <q-item-label class="text-weight-medium">v-show</q-item-label>
                    </q-item-section>
                </q-item>
                </q-list>
                
                <div class="text-subtitle1 text-primary q-mb-xs">Uso:</div>
                <p class="text-body2 q-mb-sm">Muestra/oculta con CSS</p>
                
                <div class="text-subtitle1 text-primary q-mb-xs">Ejemplo:</div>
                <q-card class="example-card" flat bordered>
                <q-card-section class="q-pa-sm">
                    <pre class="text-caption q-ma-none overflow-x-auto">{{ ejemplo2 }}</pre>
                </q-card-section>
                </q-card>
            </q-card-section>
            </q-card>

            <!-- Dirección v-for -->
            <q-card class="directive-card" flat bordered>
            <q-card-section>
                <div class="text-subtitle1 text-primary q-mb-sm">Directiva:</div>
                <q-list dense class="q-mb-sm">
                <q-item>
                    <q-item-section>
                    <q-item-label class="text-weight-medium">v-for</q-item-label>
                    </q-item-section>
                </q-item>
                </q-list>
                
                <div class="text-subtitle1 text-primary q-mb-xs">Uso:</div>
                <p class="text-body2 q-mb-sm">Iteración</p>
                
                <div class="text-subtitle1 text-primary q-mb-xs">Ejemplo:</div>
                <q-card class="example-card" flat bordered>
                <q-card-section class="q-pa-sm">
                    <pre class="text-caption q-ma-none overflow-x-auto">{{ ejemplo3 }}</pre>
                </q-card-section>
                </q-card>
                
                <div class="note-section q-mt-sm">
                <div class="text-subtitle2 text-primary">Nota:</div>
                <p class="text-caption q-mb-none">💡 :key en v-for es obligatorio para que Vue pueda rastrear los elementos correctamente.</p>
                </div>
            </q-card-section>
            </q-card>

            <!-- v-model -->
            <q-card class="directive-card" flat bordered>
            <q-card-section>
                <div class="text-subtitle1 text-primary q-mb-sm">Directiva:</div>
                <q-list dense class="q-mb-sm">
                <q-item>
                    <q-item-section>
                    <q-item-label class="text-weight-medium">v-model</q-item-label>
                    </q-item-section>
                </q-item>
                </q-list>
                
                <div class="text-subtitle1 text-primary q-mb-xs">Uso:</div>
                <p class="text-body2 q-mb-sm">Enlace bidireccional (formularios)</p>
                
                <div class="text-subtitle1 text-primary q-mb-xs">Ejemplo:</div>
                <q-card class="example-card" flat bordered>
                <q-card-section class="q-pa-sm">
                    <pre class="text-caption q-ma-none overflow-x-auto">{{ ejemplo4 }}</pre>
                </q-card-section>
                </q-card>
            </q-card-section>
            </q-card>

            <!-- v-on -->
            <q-card class="directive-card" flat bordered>
            <q-card-section>
                <div class="text-subtitle1 text-primary q-mb-sm">Directiva:</div>
                <q-list dense class="q-mb-sm">
                <q-item>
                    <q-item-section>
                    <q-item-label class="text-weight-medium">v-on (@)</q-item-label>
                    </q-item-section>
                </q-item>
                </q-list>
                
                <div class="text-subtitle1 text-primary q-mb-xs">Uso:</div>
                <p class="text-body2 q-mb-sm">Escucha eventos</p>
                
                <div class="text-subtitle1 text-primary q-mb-xs">Ejemplo:</div>
                <q-card class="example-card" flat bordered>
                <q-card-section class="q-pa-sm">
                    <pre class="text-caption q-ma-none overflow-x-auto">{{ ejemplo5 }}</pre>
                </q-card-section>
                </q-card>
            </q-card-section>
            </q-card>

            <!-- v-bind -->
            <q-card class="directive-card" flat bordered>
            <q-card-section>
                <div class="text-subtitle1 text-primary q-mb-sm">Directiva:</div>
                <q-list dense class="q-mb-sm">
                <q-item>
                    <q-item-section>
                    <q-item-label class="text-weight-medium">v-bind (:) </q-item-label>
                    </q-item-section>
                </q-item>
                </q-list>
                
                <div class="text-subtitle1 text-primary q-mb-xs">Uso:</div>
                <p class="text-body2 q-mb-sm">Enlaza atributos dinámicamente</p>
                
                <div class="text-subtitle1 text-primary q-mb-xs">Ejemplo:</div>
                <q-card class="example-card" flat bordered>
                <q-card-section class="q-pa-sm">
                    <pre class="text-caption q-ma-none overflow-x-auto">{{ ejemplo6 }}</pre>
                </q-card-section>
                </q-card>
            </q-card-section>
            </q-card>
        </div>

        <!-- Ejemplo combinado -->
        <div class="combined-example">
            <h4 class="text-h6 text-primary q-mb-sm">Ejemplo Combinado</h4>
            <q-card class="code-card" flat bordered>
            <q-card-section>
                <pre class="text-caption bg-grey-10 text-green q-pa-md rounded-borders overflow-x-auto">{{ ejemploConvinado }}</pre>
            </q-card-section>
            </q-card>
        </div>
        </div>
    </q-page>
</template>

<script setup>
const ejemplo1 = `<div v-if="activo">Visible</div>`;
const ejemplo2 = `<div v-show="visible">Hola</div>`;
const ejemplo3 = `<li v-for="item in items" :key="item.id">{{ item.nombre }}</li>`;
const ejemplo4 = `<input v-model="texto">`;
const ejemplo5 = `<button @click="saludar">Click</button>`;
const ejemplo6 = `<img :src="url">`;
const ejemplo7 = `<div v-html="html"></div>`;
const ejemplo8 = `<span v-once>{{ valor }}</span>`;

const ejemploConvinado = 
`<template>
    <input v-model="nuevoItem" @keyup.enter="agregar" placeholder="Nuevo ítem" />
    <ul>
        <li v-for="(item, index) in lista" :key="index">
        {{ item }}
        <button @click="eliminar(index)">Eliminar</button>
        </li>
    </ul>
</template>`;
</script>

<style lang="scss" scoped>
.documentation-page {
    max-width: 1200px;
    margin: 0 auto;
}

.paragraph-container {
    p {
        line-height: 1.6;
    }
}

.directives-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
}

.directive-card {
    background: #fafafa;
    border-radius: 8px;
    
    :deep(.q-card__section) {
        padding: 16px;
    }
}

.example-card {
    background: #f5f5f5;
    border-radius: 4px;
    
    :deep(.q-card__section) {
        padding: 8px;
    }
    
    pre {
        margin: 0;
        line-height: 1.4;
        font-family: 'Courier New', monospace;
        font-size: 0.875rem;
        white-space: pre-wrap;
        word-break: break-all;
        overflow-x: auto;
    }
}

.note-section {
    background: #e3f2fd;
    border-radius: 4px;
    padding: 8px;
    
    p {
        font-style: italic;
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
        overflow-x: auto;
    }
}

.combined-example {
    h4 {
        margin-bottom: 16px;
    }
}
</style>