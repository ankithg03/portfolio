// src/app/resume.tsx

import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
// @ts-ignore
import { Document, Page, pdfjs } from "react-pdf";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
// @ts-ignore
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import './ResumeComponent.css'
// import pdf from '../../../public/images/Assets/Ankith.pdf'

// Set up the worker for pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = "/images/Assets/Ankith.pdf"; // Direct link to the PDF

const ResumeComponent = ({ isMobile }: { isMobile: boolean }) => {
    const [width, setWidth] = useState<number>(1200);
    const [isLoading, setIsLoading] = useState(false);

    function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
    
    
    const [numPages, setNumPages] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // useEffect(() => {
    //     const handleResize = () => setWidth(window.innerWidth);
    //     window.addEventListener("resize", handleResize);
        
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);
    useEffect(()=>{

        if (isMobile) {
            setWidth(window.innerWidth - 30)
        }
    },[isMobile]
    )

    const onLoadSuccess = (pdf: any) => {
        setNumPages(pdf.numPages);
        setLoading(false);
    };

    const onLoadError = (error: any) => {
        setError(error.message);
        setLoading(false);
    };

    return (
        <div>
            <div className="resume-section">
                <div className="resume-download" style={{ justifyContent: "center", position: "relative" }}>
                    <a
                        href={resumeLink}  // Use <a> for downloading
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download CV"
                        style={{ maxWidth: "250px", display: "flex", alignItems: "center" }}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </a>
                </div>

                <div className="resume-download">
                <div className="resume-loader"><Skeleton height={30} width={'100%'}/></div>
                    <Document
                        file={resumeLink}
                        onLoadSuccess={onLoadSuccess}
                        onLoadError={onLoadError}
                        className="d-flex justify-content-center"
                        loading={<div><Skeleton height={30} /></div>}
                    >
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>

                </div>
            </div>
        </div>
    );
}

export default ResumeComponent;
