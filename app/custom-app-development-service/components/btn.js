"use client";

import React from 'react';

export default function Btn() {
  return (
    <div className="d-flex flex-column flex-sm-row gap-3 w-100">
      
      {/* Button 1: View Our Portfolio */}
      <button
        className="btn text-black fw-bold d-flex align-items-center justify-content-center border-0 rounded w-100 w-sm-auto"
        style={{
          backgroundColor: '#EFFF00',
          fontSize: '12px',
          padding: '0.625rem 1.25rem',
          transition: 'all 0.2s'
        }}
      >
        View Our Portfolio <span className="ms-2">→</span>
      </button>

      {/* Button 2: Work With Us */}
      <button
        className="btn text-black fw-bold d-flex align-items-center justify-content-center border-0 rounded w-100 w-sm-auto"
        style={{
          backgroundColor: '#EFFF00',
          fontSize: '12px',
          padding: '0.625rem 1.25rem',
          transition: 'all 0.2s'
        }}
        onClick={() => window.location.href = "/solutionservice"}
      >
        Work With Us <span className="ms-2">→</span>
      </button>

    </div>
  );
}