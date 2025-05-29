export default function PersonalInfoPage() {
    return (
        <>
            <div>
                <h3 className="text-2xl font-semibold">
                    Name
                </h3>
                <h3 className="pb-2 text-muted-foreground">Hector Alejandro Zea Sanchez</h3>
            </div>
            <div>
                <h3 className="text-2xl font-semibold">
                    Email
                </h3>
                <h3 className="pb-2 text-muted-foreground">zea3471@gmail.com</h3>
            </div>
            <div>
                <h3 className="text-2xl font-semibold">
                    Nationality
                </h3>
                <h3 className="pb-2 text-muted-foreground">Argentina</h3>
            </div>
            <div>
                <h3 className="text-2xl font-semibold">
                    Current Address
                </h3>
                <h3 className="pb-2 text-muted-foreground">Berlin, Germany</h3>
            </div>
            <div>
                <h3 className="text-2xl font-semibold mb-2">
                    Portfolio / Website / LinkedIn
                </h3>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li><a className={'font-medium text-blue-600 dark:text-blue-500 hover:underline '} rel="noreferrer" href="https://www.linkedin.com/in/hectorazea" target="_blank" >LinkedIN</a></li>
                    <li><a className={'font-medium text-blue-600 dark:text-blue-500 hover:underline '} rel="noreferrer" href="https://github.com/hectorzea" target="_blank" >GitHub</a></li>
                </ul>
            </div>
        </>
    );
}