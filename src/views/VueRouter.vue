<template>
    <q-page padding class="documentation-page">
        <div class="container">
        <h1 class="text-h4 text-center text-green-14 q-mb-md">Vue Router</h1>
        
        <div class="paragraph-container q-mb-lg">
            <p class="text-body1">Vue Router es el enrutador oficial de Vue para crear aplicaciones de una sola página (SPA) con navegación sin recargar.</p>
        </div>

        <div class="steps-container">
            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Instalación:</div>
                <q-card class="code-card" flat bordered>
                    <q-card-section class="q-pa-md">
                    <code class="text-caption">npm install vue-router@4</code>
                    </q-card-section>
                </q-card>
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Paso 2: Configuramos el archivo de rutas. Pero primero creamos ese archivo dentro de una carpeta llamada routes dentro de la carpeta src</div>
                <q-img 
                    src="../assets/configuracionRutas.png" 
                    alt="Configuración de las rutas"
                    class="step-image enhanced-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Paso 3: Configuramos el main.js con la libreria de la ruta</div>
                <q-img 
                    src="../assets/configuracionRutaMain.png" 
                    alt="Configuración ruta en main.js"
                    class="step-image enhanced-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Paso 4: Implementamos <strong>routerView</strong> en el archivo App.js</div>
                <q-img 
                    src="../assets/configuracionRutaApp.png" 
                    alt="Configuracion en el App.js"
                    class="step-image enhanced-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Paso 5: Implementamos <strong>router-link</strong> en la etiqueta que queramos enlazar a las rutas</div>
                <q-img 
                    src="../assets/implementamosRouterLink.png" 
                    alt="Implementamos Router Link"
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
