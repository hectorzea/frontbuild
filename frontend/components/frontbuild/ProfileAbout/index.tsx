export function ProfileAbout() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-12 py-20"
    >
      <div className="max-w-4xl">
        <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-8">
          About
        </h3>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Soy un ingeniero de software frontend motivado por la creación de
            soluciones escalables de alta calidad centradas en experiencias de
            usuario impactantes. Mi trabajo combina una dedicación a prácticas
            de codificación sólidas con un enfoque centrado en el usuario,
            aprovechando tecnologías de vanguardia.
          </p>
          <p>
            Desde el comienzo de mi carrera, he perfeccionado mis habilidades a
            través de proyectos impactantes creando y mejorando productos y
            sitios web. De 2022 a 2025, mantuve aplicaciones con Next.js, Redux
            Toolkit y TypeScript, enfatizando pruebas y CI/CD.
          </p>
          <p>
            Antes, en Eventbrite en 2021-2022, innové herramientas de creación
            de eventos. Anteriormente, desarrollé en diversos entornos, desde
            startups argentinas creando vistas/interfaces mejorando la
            monitorización, hasta soluciones en la nube/interfaces responsivas
            con SAP UI5.
          </p>

          {/* <p>
            I'm a designer and developer with a passion for creating accessible,
            pixel-perfect user interfaces that blend thoughtful design with
            robust engineering. My favorite work lies at the intersection of
            design and development, creating experiences that not only look
            great but are meticulously built for performance and usability.
          </p>
          <p>
            Since starting my journey in web development, I've spent years
            honing my skills in algorithm competitions, freelance web design,
            and full-stack development. In 2020, I earned my degree in Computer
            Science and joined a leading tech company where I've been building
            the next generation of developer tools.
          </p>
          <p>
            In the past, I've had the opportunity to develop software across a
            variety of settings — from{" "}
            <span className="text-foreground font-medium">
              advertising agencies
            </span>{" "}
            and{" "}
            <span className="text-foreground font-medium">
              large corporations
            </span>{" "}
            to <span className="text-foreground font-medium">start-ups</span>{" "}
            and{" "}
            <span className="text-foreground font-medium">
              small digital product studios
            </span>
            .
          </p> */}
        </div>
      </div>
    </section>
  );
}
