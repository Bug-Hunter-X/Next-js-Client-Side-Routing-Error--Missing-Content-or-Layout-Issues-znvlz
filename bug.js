```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
function About() {
  return (
    <div>
      <h1>About Page</h1>
      {/* This is where the error occurs if you use client-side routing */}
      <p>This is some text on the about page.</p>
    </div>
  );
}

export default About;
```