# Assignment 02 – Static Website Hosting with AWS & Doppler

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

<img width="871" height="1003" alt="image" src="https://github.com/user-attachments/assets/341b2d12-02c7-4b11-a8c0-cb448ce6f999" />
<img width="871" height="1003" alt="image" src="https://github.com/user-attachments/assets/fee57044-ce65-4cb5-8876-5de469b8cbaf" />
<img width="871" height="1003" alt="image" src="https://github.com/user-attachments/assets/0aa1c1d2-b3af-4fa6-8f94-38e81921b48d" />
<img width="923" height="995" alt="image" src="https://github.com/user-attachments/assets/b8bb9491-4b4b-4ffe-aee0-6e8a3ceca3d2" />
http://amzn-s3-bucket-implementation.s3-website.us-east-2.amazonaws.com/


---

### Resultado
Con esta configuración, la aplicación web estática creada con Vite se despliega automáticamente en AWS S3 



