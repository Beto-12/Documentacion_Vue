<template>
    <q-page padding class="documentation-page">
        <div class="container">
        <h1 class="text-h4 text-center text-primary q-mb-md">Pinia</h1>

        <div class="paragraph-container q-mb-lg">
            <p class="text-body1">Pinia es la biblioteca oficial de gestión de estado para Vue 3. Reemplaza a Vuex con una API más simple y moderna.</p>
        </div>

        <div class="steps-container">
            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-primary q-mb-sm">Paso 1: Instalación</div>
                <q-card class="code-card" flat bordered>
                    <q-card-section class="q-pa-md">
                    <code class="text-caption">npm install pinia</code>
                    </q-card-section>
                </q-card>
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-primary q-mb-sm">Paso 2: Configuramos pinia en main.js para usarlo en toda la app</div>
                <q-img 
                    src="../assets/configuracionPiniaMain.png" 
                    alt="Configuracion Pinia Main"
                    class="step-image enhanced-image smaller-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>
            
            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-primary q-mb-sm">Paso 3: Creamos una carpeta llamada stores en src y dentro de esa carpeta creamos un archivo user.js (o el que se le sea necesario en tu proyecto)</div>
                <q-img 
                    src="../assets/configuracionPiniaStore.png" 
                    alt="Configuracion Pinia Store"
                    class="step-image enhanced-image smaller-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-primary q-mb-sm">Paso 4: Ahora ya podemos usar esa store en cualquier componente</div>
                <q-img 
                    src="../assets/usandoPiniaEnComponente.png" 
                    alt="Usando Pinia En Un Componente"
                    class="step-image enhanced-image smaller-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>
        </div>

        <q-alert 
            class="tip-alert" 
            color="info" 
            icon="lightbulb"
            outlined
        >
            <p class="text-body1 q-mb-none">
            💡 Pinia es modular, reactivo y compatible con TypeScript.
            </p>
        </q-alert>
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

.tip-alert {
    border-radius: 8px;
    
    :deep(.q-alert__content) {
        padding: 16px;
    }
}
</style>