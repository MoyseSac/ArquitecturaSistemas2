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

<img width="788" height="774" alt="image" src="https://github.com/user-attachments/assets/2220bcb3-21c9-4489-b3e6-926fa793744a" />


[Aplicación desplegada en Elastic Beanstalk](http://web-env.eba-5nkppuft.us-east-2.elasticbeanstalk.com/)
### Configuracion Elastic Beanstalk
<img width="921" height="250" alt="image" src="https://github.com/user-attachments/assets/b88361cd-a4cf-41e3-b043-c16cfac22da4" />
<img width="921" height="158" alt="image" src="https://github.com/user-attachments/assets/75693b50-85a3-4d31-a976-dca9378345bb" />
<img width="921" height="276" alt="image" src="https://github.com/user-attachments/assets/3914ce88-1dca-4f53-9f93-bda853e00448" />
<img width="921" height="320" alt="image" src="https://github.com/user-attachments/assets/251ec1e8-f735-4790-b1db-e3fce46e9137" />
<img width="921" height="610" alt="image" src="https://github.com/user-attachments/assets/bfbc78b4-4e8b-403c-b9e5-4e6a3ff59e94" />
<img width="921" height="587" alt="image" src="https://github.com/user-attachments/assets/cbb9e444-1088-4139-99d0-cf593d634232" />





