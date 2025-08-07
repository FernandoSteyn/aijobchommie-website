import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: 'var(--space-4xl)', 
          textAlign: 'center',
          minHeight: '50vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            background: 'rgba(255, 0, 0, 0.1)',
            border: '2px solid #ff4444',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-4xl)',
            maxWidth: '600px'
          }}>
            <h2 style={{ color: '#ff4444', marginBottom: 'var(--space-lg)' }}>
              🛠️ Something went wrong
            </h2>
            <p style={{ marginBottom: 'var(--space-lg)' }}>
              We apologize for the inconvenience. The page encountered an error while loading.
            </p>
            <button 
              onClick={() => window.location.reload()}
              style={{
                background: 'var(--primary-cyan)',
                color: 'var(--bg-primary)',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-md) var(--space-xl)',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                marginRight: 'var(--space-md)'
              }}
            >
              🔄 Reload Page
            </button>
            <button 
              onClick={() => window.location.href = '/'}
              style={{
                background: 'transparent',
                color: 'var(--primary-cyan)',
                border: '2px solid var(--primary-cyan)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-md) var(--space-xl)',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              🏠 Go Home
            </button>
          </div>
          
          {process.env.NODE_ENV === 'development' && (
            <details style={{ 
              marginTop: 'var(--space-xl)', 
              maxWidth: '800px',
              background: 'rgba(0, 0, 0, 0.5)',
              padding: 'var(--space-md)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-secondary)',
              fontSize: '0.9rem'
            }}>
              <summary style={{ cursor: 'pointer', marginBottom: 'var(--space-md)' }}>
                🔍 Technical Details (Development Only)
              </summary>
              <pre style={{ whiteSpace: 'pre-wrap', fontSize: '0.8rem' }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
