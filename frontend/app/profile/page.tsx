import { BookCheck, Brain, Bug, Computer, Cuboid, HardHat } from "lucide-react";

export default async function InterviewsPage() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row gap-10 mt-0 sm:mt-10">
                <div className="flex flex-col items-center w-96 space-y-4">
                    <Brain width={100} height={100} />
                    <p className="text-center">I am a highly adaptable problem-solver with a strong technical skillset, capable of quickly learning and contributing in new environments.</p>
                </div>
                <div className="flex flex-col items-center w-96 space-y-4">
                    <Cuboid width={100} height={100} />
                    <p className="text-center">I'm always curious to understand and learn new things, i like to code and to build things working in team</p>
                </div>
                <div className="flex flex-col items-center w-96 space-y-4">
                    <Computer width={100} height={100} />
                    <p className="text-center">I have interest interest in building front-end and deliver a nice UX</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-10 mt-0 sm:mt-20">
                <div className="flex flex-col items-center w-96 space-y-4">
                    <BookCheck width={100} height={100} />
                    <p className="text-center">I enjoy researching all aspects of testing and frontend best practices.</p>
                </div>
                <div className="flex flex-col items-center w-96 space-y-4">
                    <HardHat width={100} height={100} />
                    <p className="text-center">I am passionate about working hard and giving my best to help the team succeed.</p>
                </div>
                <div className="flex flex-col items-center w-96 space-y-4">
                    <Bug width={100} height={100} />
                    <p className="text-center">I like to help to solve any frontend problems that may appear in the daily basis.</p>
                </div>
            </div>



            {/* <div className="flex flex-wrap space-y-20 space-x-10">

                <div className="flex flex-col items-center w-96 space-y-2">
                    <BookCheck width={100} height={100} />
                    <p className="text-center">I'm always curious to understand and learn new things, i like to code and to build things working in team</p>
                </div>
                <div className="flex flex-col items-center w-96 space-y-2">
                    <HardHat width={100} height={100} />
                    <p className="text-center">I'm always curious to understand and learn new things, i like to code and to build things working in team</p>
                </div>
                <div className="flex flex-col items-center w-96 space-y-2">
                    <Bug width={100} height={100} />
                    <p className="text-center">I'm always curious to understand and learn new things, i like to code and to build things working in team</p>
                </div>
            </div> */}
        </div>
    );
}