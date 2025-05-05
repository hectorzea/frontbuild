
import Box from "ui-box";

export default function SkillsPage() {
    return (
        <>
            <Box>
                <h3 className="mt-10 scroll-m-20  pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
                    Software Engineer at FRIDAY Insurance
                </h3>
                <h3 className="border-b pb-2 font-semibold tracking-tight transition-colors first:mt-0">Berlin, Germany | 2022-2025</h3>
                <Box className="mt-2">Frontend engineer focused on maintaining and enhancing two React applications using
                    Next.js, Redux Toolkit, TypeScript, and CSS. Ensured quality through unit, UI, and end-
                    to-end testing with Playwright, utilizing MSW for mock management in tests.
                    Collaborated closely with designers and product teams to create and improve the UX,
                    contributing ideas and defining the implementation path.</Box>
            </Box>
            <Box className="mt-10">
                <h3 className="mt-10 scroll-m-20  pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
                    Software Engineer at Eventbrite (Remote)
                </h3>
                <h3 className="border-b pb-2 font-semibold tracking-tight transition-colors">San Francisco, California | 2021-2022</h3>
                <Box className="mt-2"> Responsible for empowering users to create events through advanced frontend
                    solutions, utilizing modern technologies such as React, TypeScript, and Redux.
                    Implemented various React and Redux practices, focusing on maintainable and
                    scalable code. Applied TDD principles with Jest and React Testing Library to enhance
                    code quality. Estimated new development timelines and mentored junior developers in
                    their technical growth. </Box>
            </Box>
            <Box className="mt-10">
                <h3 className="mt-10 scroll-m-20  pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
                    Software Engineer Frontend at CamonApp
                </h3>
                <h3 className="border-b pb-2 font-semibold tracking-tight transition-colors">Buenos Aires, Argentina | 2020-2021</h3>
                <Box className="mt-2"> Developed views and interfaces to enhance monitoring of user experiences using
                    React, Redux, and Context. Integrated backend services built in AWS with Express and
                    provided feedback to designers to refine user experience in new feature development. </Box>
            </Box>
            <Box className="mt-10">
                <h3 className="mt-10 scroll-m-20  pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
                    Frontend Developer at Inclusion Cloud
                </h3>
                <h3 className="border-b pb-2 font-semibold tracking-tight transition-colors">Buenos Aires, Argentina | 2016-2020</h3>
                <Box className="mt-2"> Developed views and interfaces to enhance monitoring of user experiences using
                    React, Redux, and Context. Integrated backend services built in AWS with Express and
                    provided feedback to designers to refine user experience in new feature development. </Box>
            </Box>
        </>
    );
}