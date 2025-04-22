export default function NotFound() {
    return (
      <div
        style={{
          backgroundColor: '#0a192f',
          color: '#6cffda',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          textAlign: 'center',
          padding: '1rem',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404 - Page Not Found</h1>
        <p style={{ fontSize: '1.25rem' }}>
          The page you’re looking for doesn’t exist.
        </p>
      </div>
    );
  }  