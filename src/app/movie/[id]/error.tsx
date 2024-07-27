'use client';

import Link from "next/link";

export default function ErrorDetailMovie(){
  return(
    <div>
      <h1 style={{ color: '#F0B90B', textAlign: 'center', fontSize: '18px', margin: '30px 0' }}>Error loading movie details</h1>

      <Link href='/' style={{
        color: '#F0B90B',
        textAlign: 'center',
        fontSize: '18px',
        marginTop: '30px',
        display: 'block',
        textDecoration: 'none',
        backgroundColor: '#1F2937',
        width: 'fit-content',
        padding: '10px',
        borderRadius: '5px',
        margin: 'auto',
      }}>
        Go back to the home page
      </Link>
    </div>
  )
}