<template>
    <q-page padding class="documentation-page">
        <div class="container">
        <h1 class="text-h4 text-center text-green-14 q-mb-md">Requisitos</h1>

        <div class="paragraph-container q-mb-lg">
            <p class="text-body1">Para comenzar a desarrollar con Vue 3, necesitas tener instaladas algunas herramientas básicas en tu sistema.</p>
        </div>

        <div class="q-mb-xl">
            <h3 class="text-h6 q-mb-sm">Requisitos mínimos</h3>
            <div class="requirements-grid">
            <q-card class="requirement-card" flat bordered>
                <q-card-section>
                <div class="text-caption text-uppercase text-weight-bold text-grey-7">Herramienta</div>
                <div class="text-subtitle1 q-mb-sm">Node.js</div>
                <div class="text-caption text-uppercase text-weight-bold text-grey-7">Versión mínima</div>
                <div class="text-subtitle1 q-mb-sm">16.x o superior</div>
                <div class="text-caption text-uppercase text-weight-bold text-grey-7">Descripción</div>
                <div class="text-subtitle1">Entorno de ejecución de JavaScript</div>
                </q-card-section>
            </q-card>

            <q-card class="requirement-card" flat bordered>
                <q-card-section>
                <div class="text-caption text-uppercase text-weight-bold text-grey-7">Herramienta</div>
                <div class="text-subtitle1 q-mb-sm">Npm</div>
                <div class="text-caption text-uppercase text-weight-bold text-grey-7">Versión mínima</div>
                <div class="text-subtitle1 q-mb-sm">npm 8+</div>
                <div class="text-caption text-uppercase text-weight-bold text-grey-7">Descripción</div>
                <div class="text-subtitle1">Gestor de paquetes</div>
                </q-card-section>
            </q-card>

            <q-card class="requirement-card" flat bordered>
                <q-card-section>
                <div class="text-caption text-uppercase text-weight-bold text-grey-7">Herramienta</div>
                <div class="text-subtitle1 q-mb-sm">Editor de código</div>
                <div class="text-caption text-uppercase text-weight-bold text-grey-7">Versión mínima</div>
                <div class="text-subtitle1 q-mb-sm">-</div>
                <div class="text-caption text-uppercase text-weight-bold text-grey-7">Descripción</div>
                <div class="text-subtitle1">Recomendado: (VS Code)</div>
                </q-card-section>
            </q-card>

            <q-card class="requirement-card" flat bordered>
                <q-card-section>
                <div class="text-caption text-uppercase text-weight-bold text-grey-7">Herramienta</div>
                <div class="text-subtitle1 q-mb-sm">Navegador moderno</div>
                <div class="text-caption text-uppercase text-weight-bold text-grey-7">Versión mínima</div>
                <div class="text-subtitle1 q-mb-sm">Chrome, Firefox, Edge</div>
                <div class="text-caption text-uppercase text-weight-bold text-grey-7">Descripción</div>
                <div class="text-subtitle1">Para pruebas</div>
                </q-card-section>
            </q-card>
            </div>
        </div>

        <div class="verification-section q-mb-xl">
            <h3 class="text-h6 q-mb-sm">¿Cómo verificar?</h3>
            <p class="text-body1 q-mb-sm">Abre tu terminal y ejecuta:</p>
            <q-card class="code-card" flat bordered>
            <q-card-section class="q-pa-md">
                <pre class="text-caption">node --version<br>npm --version</pre>
            </q-card-section>
            </q-card>
        </div>

        <div class="download-section">
            <q-alert class="q-mb-md" color="info" icon="info">
            <h6 class="text-body1 q-mb-none">
                Si no tienes Node.js, descárgalo desde:
                <a href="https://nodejs.org" target="_blank" class="text-green-10">https://nodejs.org</a>
                (elige la versión LTS)
            </h6>
            </q-alert>
        </div>
        </div>
    </q-page>
</template>

<style lang="scss" scoped>
.documentation-page {
    max-width: 900px;
    margin: 0 auto;
    }

    .requirements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    margin-top: 16px;
    }

    .requirement-card {
    background: #f8f9fa;
    border-radius: 8px;
    }

    .code-card {
    background: #f5f5f5;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    }

    .paragraph-container {
    p {
        line-height: 1.6;
    }
    }

    .verification-section {
    pre {
        margin: 0;
        line-height: 1.5;
    }
    }

    .download-section {
    a {
        text-decoration: underline;
    }
}
</style>