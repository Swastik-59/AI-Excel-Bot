import React from 'react'
import Navbar from '../components/Navbar'

function NoPage() {
    return (
        <>
        <Navbar />
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">404</h1>
                    <p className="py-6">
                        Page Not Found
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default NoPage