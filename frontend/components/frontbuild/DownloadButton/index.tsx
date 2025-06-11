"use client"
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import React from 'react'

const DownloadCVButton = () => {
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/files/CV.pdf'; // Adjust the path to your CV file
        link.download = 'CV_Hector_Zea.pdf'; // The name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <Button size={'lg'} data-testid={'add-task-button'} className="w-full sm:w-auto mt-2 sm:mt-0" onClick={downloadCV}>
            <Download /> Download my CV
        </Button>
    )
}

export default DownloadCVButton