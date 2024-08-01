'use client';
import React from "react";

function Dashboard() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-black p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-semibold mb-6 text-center">Welcome to the Dashboard</h1>
                <p className="text-center">You have successfully signed in!</p>
            </div>
        </div>
    );
}

export default Dashboard;
