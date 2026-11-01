# 1. Usamos Node 22 LTS en su variante 'slim' (mucho más liviana y estable)
FROM node:22-slim

# 2. Activamos Corepack para que Docker use automáticamente pnpm@11.25.0
#    (lee la versión exacta desde tu package.json)
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# 3. Definimos la carpeta de trabajo dentro del contenedor
WORKDIR /app

# 4. Copiamos los archivos de configuración de dependencias primero.
#    Incluimos pnpm-workspace.yaml porque ahí tienes los permisos 'allowBuilds' (sharp, swc, msw)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# 5. Instalamos todas las dependencias (incluyendo devDependencies necesarias para el build).
#    --frozen-lockfile asegura que instale exactamente lo que dice pnpm-lock.yaml sin modificarlo.
RUN pnpm install --frozen-lockfile

# 6. Ahora copiamos el resto del código fuente de la aplicación
COPY . .

# 7. Variables de entorno necesarias para el momento del build y ejecución
ENV NODE_ENV=production
ENV NEXT_PUBLIC_ENABLE_MSW=true
ENV NEXT_PUBLIC_IS_E2E=true
ENV PAYLOAD_SECRET="secret-para-build"

# 8. Tu lógica para eliminar el worker de MSW si está deshabilitado
RUN if [ "$NEXT_PUBLIC_ENABLE_MSW" = "false" ]; then rm -rf /app/public/mockServiceWorker.js; fi

# 9. Compilamos la aplicación de Next.js con pnpm
RUN pnpm run build

# 10. Exponemos el puerto 3000 y arrancamos el servidor de producción
EXPOSE 3000

CMD ["pnpm", "run", "start"]