import React, { Component } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}
interface State {
  hasError: boolean;
  errorInfo: React.ErrorInfo;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  state = { hasError: false, errorInfo: {} };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error in component:", error, errorInfo);
    this.state.errorInfo = errorInfo;
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
