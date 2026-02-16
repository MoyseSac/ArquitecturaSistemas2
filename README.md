# Assignment 02 – Pagina web estatica utilizando Doppler y Github Actions en AWS

## 1. Configuración de Doppler
- Creé un **espacio de trabajo** específico para esta actividad.
- Mediante la opción **Config Syncs**, conecté Doppler con mi repositorio de arquitectura en GitHub.
- Ingresé credenciales iniciales con valores de prueba para validar la integración.

## 2. Gestión de credenciales con IAM y Doppler
- Creé un **IAM User** en AWS con permisos adecuados para S3 y CloudFront.
- Agregué las credenciales de este usuario (Access Key y Secret Key) al proyecto en Doppler.
- Incorporé también la información de mi bucket dentro de las variables de Doppler.

## 3. Configuración del Bucket en S3
- Inicialmente configuré el bucket con **acceso público bloqueado**, siguiendo las recomendaciones de seguridad.
- Una vez desplegado el sitio, ajusté la configuración para habilitar el **hosting estático público**, aplicando las restricciones necesarias para una página estática segura.

## 4. Pipeline de GitHub Actions
- Configuré un pipeline en la carpeta `.github/workflows` con los siguientes pasos:
  - **Build:** Ejecuta `npm run build` para generar la carpeta `dist/`.
  - **Upload:** Sincroniza el contenido de `dist/` al bucket S3 usando `aws s3 sync`.
  - **Invalidate:** Invalida la caché de CloudFront para reflejar inmediatamente los cambios.

## 5. Entregables
<img width="1515" height="271" alt="image" src="https://github.com/user-attachments/assets/22b722dc-7fec-4ebe-9cec-064d954deac3" />
<img width="1530" height="515" alt="image" src="https://github.com/user-attachments/assets/bc48f477-c749-47b0-9974-427f11861c44" />
<img width="725" height="561" alt="image" src="https://github.com/user-attachments/assets/1e751b17-025d-4a13-9ff0-e334dde24823" />
<img width="1888" height="1003" alt="image" src="https://github.com/user-attachments/assets/98134812-1490-4d00-b4c0-2307f54235b8" />
https://d3k9n9gk6hkbqs.cloudfront.net/


---

### Resultado
Con esta configuración, la aplicación web estática creada con Vite se despliega automáticamente en **AWS S3** y se distribuye globalmente mediante **CloudFront** cuando hacemos push a la rama `assignment-02`.

