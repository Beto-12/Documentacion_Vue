<template>
    <q-page padding class="documentation-page">
        <div class="container">
        <h1 class="text-h4 text-center text-primary q-mb-md">Instalar Quasar En Un Proyecto Ya Creado</h1>

        <div class="paragraph-container q-mb-lg">
            <p class="text-body1">Si ya tienes un proyecto Vue con Vite, puedes agregar Quasar manualmente.</p>
        </div>

        <div class="steps-container">
            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-primary q-mb-sm">Paso 1: Instalar dependencias</div>
                <q-card class="code-card" flat bordered>
                    <q-card-section class="q-pa-md">
                    <code class="text-caption">npm install quasar @quasar/extras<br>npm install -D @quasar/vite-plugin</code>
                    </q-card-section>
                </q-card>
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-primary q-mb-sm">Paso 2: Configurar vite.config.js</div>
                <q-img 
                    src="../assets/configuracionVite.png" 
                    alt="Configuración del archivo vite.config.js"
                    class="step-image enhanced-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-primary q-mb-sm">Paso 3: Configurar el main.js</div>
                <q-img 
                    src="../assets/configurarMain.png" 
                    alt="Configurar Main.js"
                    class="step-image enhanced-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-primary q-mb-sm">Paso 4: Por último creamos el archivo <strong>quasar-variables.sass</strong> dentro de la carpeta src.</div>
                <q-img 
                    src="../assets/variablesScss.png" 
                    alt="Variables scss"
                    class="step-image enhanced-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>
        </div>
        </div>
    </q-page>
</template>

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

.step-card {
    :deep(.q-card) {
        border-radius: 8px;
        background: #fafafa;
    }
}

.code-card {
    background: #f5f5f5;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    
    :deep(.q-card__section) {
        padding: 16px;
    }
    
    code {
        line-height: 1.5;
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
</style>