<template>
    <q-page padding class="documentation-page">
        <div class="container">
        <h1 class="text-h4 text-center text-green-14 q-mb-md">Creación De Un Proyecto</h1>

        <div class="paragraph-container q-mb-lg">
            <p class="text-body1">La forma más rápida y recomendada de crear un proyecto Vue 3 es usando Vite, una herramienta de construcción moderna que ofrece tiempos de arranque ultra rápidos.</p>
        </div>

        <div class="steps-container">
            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Paso 1: Crear el proyecto</div>
                <q-card class="code-card q-mb-sm" flat bordered>
                    <q-card-section class="q-pa-md">
                    <code class="text-caption">npm create vite@latest mi-proyecto -- --template vue</code>
                    </q-card-section>
                </q-card>
                
                <div class="text-subtitle2 q-mb-sm">Este comando:</div>
                <ul class="q-mb-md">
                    <li class="text-body2">Crea una carpeta llamada mi-proyecto.</li>
                    <li class="text-body2">Usa la plantilla oficial de Vue.</li>
                    <li class="text-body2">Configura Vite como bundler</li>
                </ul>
                <p class="text-body2 q-mb-md">Después de que se cree la carpeta mi-proyecto. Se debe escoger el Framework</p>
                <q-img 
                    src="../assets/seleccionarFramework.png" 
                    alt="Seleccionar Framework"
                    class="step-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Paso 2: Seleccionar la variante del lenguaje</div>
                <q-img 
                    src="../assets/seleccionarVariante.png" 
                    alt="Seleccionar Variante"
                    class="step-image"
                    spinner-color="primary"
                />
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Paso 3: Entramos a la carpeta que se creo.</div>
                <q-card class="code-card" flat bordered>
                    <q-card-section class="q-pa-md">
                    <code class="text-caption">cd mi-proyecto</code>
                    </q-card-section>
                </q-card>
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Paso 4: Instalamos las dependencias.</div>
                <q-card class="code-card" flat bordered>
                    <q-card-section class="q-pa-md">
                    <code class="text-caption">npm install</code>
                    </q-card-section>
                </q-card>
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card q-mb-md">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Paso 5: Corremos el servidor.</div>
                <q-card class="code-card q-mb-sm" flat bordered>
                    <q-card-section class="q-pa-md">
                    <code class="text-caption">npm run dev</code>
                    </q-card-section>
                </q-card>
                <p class="text-body2">El proyecto se ejecutará en http://localhost:5173</p>
                </q-card-section>
            </q-card>
            </div>

            <div class="step-card">
            <q-card flat bordered>
                <q-card-section>
                <div class="text-h6 text-green-14 q-mb-sm">Estructura básica del proyecto.</div>
                <q-img 
                    src="../assets/estructuraBasica.png" 
                    alt="Estructura Basica"
                    class="structure-image"
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
    
    code {
    margin: 0;
    line-height: 1.5;
    }
}

.step-image, .structure-image {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

ul {
    padding-left: 20px;
    
    li {
        margin-bottom: 8px;
        line-height: 1.4;
    }
}

.steps-container {
    & > div:last-child {
        .q-card {
        background: #f0f7ff;
        }
    }
}
</style>