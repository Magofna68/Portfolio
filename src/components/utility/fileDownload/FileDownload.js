import React from 'react'

export default function FileDownload() {
  const resumeButtonStyles = {
    textDecoration: 'none',
    padding: '0.5em 1em',
    borderRadius: '5px',
    color: 'white',
    background: '#2832C2'
  }

  const handleDownloadClick = () => {
    const fileURL = process.env.PUBLIC_URL + '/Brandon_Resume.pdf';
    // const fileURL = {Resume}
    const fileName = 'Brandon_Resume.pdf';

    const link = document.createElement('a');
    link.href = fileURL;
    link.download = fileName;
    link.click();
    console.log("File: ", fileURL)
  }


  return (
    <button style={resumeButtonStyles} onClick={handleDownloadClick} className='onHover'>
      Download Resume
    </button>
  )
}
