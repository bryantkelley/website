import React from 'react';

export default function Portrait() {
  return (
    <svg viewBox="0 0 100 85">
      <g fill="white">
        <path d="M 10 13 C 10 13 10 10 13 10 L 87 10 C 87 10 90 10 90 13 L 90 60 L 10 60" />
      </g>
      <g fill="var(--background)">
        <path d="M 13 13 L 87 13 L 87 57 L 13 57" />
      </g>
      <g fill="var(--code)">
        <text x="20" y="50">hello</text>
      </g>
      <g fill="var(--code)">
        <path d="M 10 60 L 90 60 L 90 67 C 90 67 90 70 87 70 L 13 70 C 13 70 10 70 10 67" />
        <path d="M 40 71 L 60 71 L 60 83 L 40 83" />
        <path d="M 39 84 L 61 84 L 61 85 L 39 85" />
      </g>
    </svg>
  )
}