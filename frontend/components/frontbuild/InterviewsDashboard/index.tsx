interface IInterviewsDashboard {
    title: string
}

export const InterviewsDashboard: React.FC<IInterviewsDashboard> = ({ title }) => {
    return (
        <>{title}</>
    )
}
