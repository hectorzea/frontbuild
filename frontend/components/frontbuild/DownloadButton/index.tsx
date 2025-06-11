"use client"
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import React from 'react'

const DownloadCVButton = () => {
    return (
        <Button size={'lg'} data-testid={'add-task-button'} className="w-full sm:w-auto mt-2 sm:mt-0">
            <Download />
            <a
                href="/files/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >Download My CV</a>
        </Button>
    )
}

export default DownloadCVButton