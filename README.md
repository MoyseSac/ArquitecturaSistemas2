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
<img width="1540" height="377" alt="image" src="https://github.com/user-attachments/assets/3828d81f-5e0d-4c80-ab0b-ecdf1483d2f8" />
<img width="618" height="370" alt="image" src="https://github.com/user-attachments/assets/8bf652e0-e347-461f-af1c-50d0a90778f0" />
<img width="928" height="1009" alt="image" src="https://github.com/user-attachments/assets/f198ba63-ece4-4985-ab69-edbf55525826" />
http://amzn-s3-bucket-implementation.s3-website.us-east-2.amazonaws.com/


---

### Resultado
Con esta configuración, la aplicación web estática creada con Vite se despliega automáticamente en AWS S3 cuando hacemos push a la rama assignment-02

## ⚠️ Disclaimer sobre CloudFront

Mi cuenta de AWS aún no tiene habilitado el uso de CloudFront debido a un proceso de verificación pendiente con AWS Support. En mi cuenta lleve a cabo todas las configuraciones del perfil.
La aplicación ya está disponible mediante el Website endpoint de S3, pero al no tener CloudFront aún, puede sufrir mayor latencia en picos de tráfico y no cuenta con HTTPS.

Este es un problema común reportado por otros usuarios. En [Stack Overflow](https://stackoverflow.com/) existen casos documentados donde la activación se resolvió más rápido para algunos que para otros.

<img width="644" height="143" alt="image" src="https://github.com/user-attachments/assets/7c5ed869-80b8-4b11-b1a7-6e1e0af6287c" />


