import React, { Component } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Unhandled UI Error caught by ErrorBoundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#18181B] px-4">
          <div className="text-center max-w-md bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-xl">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-500 rounded-2xl mx-auto flex items-center justify-center mb-5">
              <AlertTriangle size={32} />
            </div>
            <h2 className="text-2xl font-black text-zinc-900 dark:text-zinc-100 mb-2">Something went wrong</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
              An unexpected error occurred. Don&apos;t worry, your progress is saved safely.
            </p>
            <button
              onClick={this.handleReset}
              className="flex items-center justify-center gap-2 w-full bg-[#00E599] hover:bg-[#00c885] text-zinc-900 font-bold px-6 py-3 rounded-full text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#00E599]"
            >
              <RefreshCw size={18} />
              <span>Reload Application</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
