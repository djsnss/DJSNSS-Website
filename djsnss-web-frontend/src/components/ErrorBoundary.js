import React, { Component } from 'react';
import ErrorPage from './ErrorPage';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render error page
      return <ErrorPage />;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
