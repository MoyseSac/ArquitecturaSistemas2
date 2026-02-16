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
<img width="1519" height="403" alt="image" src="https://github.com/user-attachments/assets/c3f5ed13-4f93-432b-acb2-3a9a7cd3db90" />
<img width="1519" height="403" alt="image" src="https://github.com/user-attachments/assets/e70b9308-39f7-4358-92b3-58ae26d888f7" />
<img width="631" height="301" alt="image" src="https://github.com/user-attachments/assets/cdadab3d-24f3-4fb6-a5dd-8d6db0a480cb" />
<img width="882" height="856" alt="image" src="https://github.com/user-attachments/assets/46aa3425-c954-4e9f-a81a-4bddff46c8e1" />
http://amzn-s3-bucket-implementation.s3-website.us-east-2.amazonaws.com/


---

### Resultado
Con esta configuración, la aplicación web estática creada con Vite se despliega automáticamente en AWS S3 



