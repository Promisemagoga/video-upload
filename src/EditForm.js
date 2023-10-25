import React, { useState } from 'react'

export default function EditForm() {
    const [contentTitle, setContentTitle] = useState("")
    const [contentDescription, setContentDescription] = useState("")
    const [contentLinks, setContentLinks] = useState("")
    const [contentDocuments, setContentDocuments] = useState("")
    const [lessonNumber, setLessonNumber] = useState("")






    return (
        <div className='EditForm'>
            <input placeholder='Enter title...' onChange={(event) => setContentTitle(event.target.value)} />
            <input placeholder='Enter description...' onChange={(event) => setContentDescription(event.target.value)} />
            <input placeholder='Enter links...' onChange={(event) => setContentLinks(event.target.value)} />
            <input type="file" accept=".pdf, .doc, .docx, .txt" onChange={(event) => setContentDocuments(event.target.value)} />
            <input placeholder='Enter Section number...'  type="number" onChange={(event) => setLessonNumber(event.target.value)} />
            <button>Update</button>
        </div>
    )
}
