

// Function to create a downloadable link to the resume
export function resumeDownload() {
    const resumeUrl = 'path/to/resume.pdf' // UPDATE!

    const downloadLink = document.createElement('a');
    downloadLink.href = resumeUrl;
    downloadLink.download = 'TravisMcDermott_Resume.pdf' // UPDATE and specifi the file name for the file
    downloadLink.textContent = 'Download Resume';

    document.body.appendChild(downloadLink)
}

resumeDownload();