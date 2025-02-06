```javascript
// pages/about.js
import { useEffect, useState } from 'react';

function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
      setAboutData({ message: 'Data fetched successfully!' });
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      {aboutData && <p>{aboutData.message}</p>}
      {aboutData === null && <p>Loading...</p>}
    </div>
  );
}

export default About;
```