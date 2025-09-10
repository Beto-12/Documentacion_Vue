<template>
    <q-page padding class="documentation-page">
        <div class="container">
        <h1 class="text-h4 text-center text-green-14 q-mb-md">Crear Proyecto con Template Quasar</h1>

        <div class="paragraph-container q-mb-lg">
            <p class="text-body1">Quasar Framework es un framework basado en Vue que permite crear aplicaciones para múltiples plataformas: SPA, PWA, móviles (Android/iOS), escritorio (Electron), y más.</p>
        </div>

        <div class="create-section q-mb-xl">
            <h4 class="text-h6 text-green-14 q-mb-sm">Crear proyecto con Quasar CLI</h4>
            <q-card class="code-card" flat bordered>
            <q-card-section class="q-pa-md">
                <code class="text-caption">npm create quasar@latest mi-app-quasar</code>
            </q-card-section>
            </q-card>
        </div>

        <div class="steps-container">
            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Paso 1: Selecciona App with Quasar CLI</div>
                <q-img 
                    src="../assets/createQuasar.png" 
                    alt="Create Quasar"
                    class="step-image enhanced-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Paso 2: Selecciona la variante del script</div>
                <q-img 
                    src="../assets/seleccionarVarianteQuasar.png" 
                    alt="Seleccionar Variante del script Quasar"
                    class="step-image enhanced-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Paso 3: Selecciona la variante CLI</div>
                <q-img 
                    src="../assets/varianteCLI.png" 
                    alt="Variante CLI"
                    class="step-image enhanced-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Paso 4: Nombra el Package</div>
                <q-img 
                    src="../assets/nombrePackage.png" 
                    alt="Nombrar el package"
                    class="step-image enhanced-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Paso 5: Dale nombre al proyecto</div>
                <q-img 
                    src="../assets/nombreProject.png" 
                    alt="Nombrar el proyecto"
                    class="step-image enhanced-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Paso 6: Descripción del proyecto (opcional)</div>
                <q-img 
                    src="../assets/descripcionProject.png" 
                    alt="Descripción del proyecto"
                    class="step-image enhanced-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Paso 7: Selecciona el estilo del componente Vue</div>
                <q-img 
                    src="../assets/componentStyle.png" 
                    alt="Estilos del componente"
                    class="step-image enhanced-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Paso 8: Selecciona el preprocessor de CSS</div>
                <q-img 
                    src="../assets/preprocessorCSS.png" 
                    alt="Preprocessor de CSS"
                    class="step-image enhanced-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Paso 9: Selecciona las características del proyecto</div>
                <q-img 
                    src="../assets/featuresProject.png" 
                    alt="Caracteristicas del proyecto"
                    class="step-image enhanced-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Paso 10: Instalar dependencias</div>
                <q-img 
                    src="../assets/instalarDependenciasProject.png" 
                    alt="Instalar dependencias del proyecto"
                    class="step-image enhanced-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>
        </div>

        <div class="advantages-section q-mt-xl">
            <h4 class="text-h6 text-green-14 q-mb-sm">Ventajas de Quasar:</h4>
            <q-list bordered separator class="feature-list">
            <q-item>
                <q-item-section>
                <q-item-label>+70 componentes Material Design listos</q-item-label>
                </q-item-section>
            </q-item>
            <q-item>
                <q-item-section>
                <q-item-label>Soporte multiplataforma</q-item-label>
                </q-item-section>
            </q-item>
            <q-item>
                <q-item-section>
                <q-item-label>SSR, PWA, SSR con Nuxt</q-item-label>
                </q-item-section>
            </q-item>
            <q-item>
                <q-item-section>
                <q-item-label>Documentación excelente</q-item-label>
                </q-item-section>
            </q-item>
            </q-list>
        </div>
        </div>
    </q-page>
</template>

<script setup>
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
    background: #f5f5f5;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    
    :deep(.q-card__section) {
        padding: 16px;
    }
}

.step-card {
    :deep(.q-card) {
        border-radius: 8px;
        background: #fafafa;
    }
}

.step-image {
    max-width: 100%;
    height: auto;
}

.enhanced-image {
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    border: 1px solid rgba(0,0,0,0.1);
    margin-top: 16px;
    transition: all 0.3s ease;
    
    &:hover {
        box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        transform: translateY(-2px);
    }
}

.feature-list {
    border-radius: 8px;
    overflow: hidden;
    
    :deep(.q-item) {
        min-height: 48px;
    }
}
</style>