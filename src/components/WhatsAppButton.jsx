import React from 'react'


export default function WhatsAppButton(){
const waLink = 'https://wa.me/917892758647'
return (
<a href={waLink} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
className="fixed right-6 bottom-6 z-50 shadow-lg rounded-full p-3 bg-emerald-500 hover:bg-emerald-600 transition">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0 4.97 4.03 9 9 9 1.79 0 3.46-.47 4.92-1.29L22 22l-1.29-5.83A8.96 8.96 0 0021.75 12c0-4.97-4.03-9-9-9S3.75 7.03 3.75 12z" />
</svg>
</a>
)
}