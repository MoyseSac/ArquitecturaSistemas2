## Husky (validaciones antes de commitear)

Se configuró **Husky** para aplicar reglas de estilo y asegurar una estructura correcta de commits antes de subir cambios al repositorio.

### Herramientas usadas
- **ESLint**: valida reglas de código y evita warnings (`--max-warnings=0`).
- **Prettier**: formatea archivos de forma consistente.
- **lint-staged**: ejecuta las validaciones solo sobre archivos *staged* (los que van en el commit).
- **commit-msg**: valida que el mensaje cumpla la convención definida (estructura del commit).

### Hooks configurados
- **pre-commit**
  - Ejecuta `lint-staged` para verificar y corregir estilo automáticamente antes de crear el commit.
- **commit-msg**
  - Valida el formato del mensaje de commit para cumplir con la estructura requerida.

### Configuración en `package.json`
Se agregó la configuración de `lint-staged` para aplicar ESLint/Prettier únicamente en los archivos afectados:

```json
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx}": [
    "eslint --max-warnings=0 --fix",
    "prettier --write"
  ],
  "src/**/*.{json,md,css,scss,html,yml,yaml}": [
    "prettier --write"
  ]
}
