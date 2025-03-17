import { useState, useCallback } from 'react';

interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

export const useApiErrorHandler = () => {
  const [error, setError] = useState<ApiError | null>(null);
  const [loading, setLoading] = useState(false);

  const handleApiCall = useCallback(async <T,>(
    apiCall: () => Promise<T>,
    onSuccess?: (data: T) => void
  ): Promise<T | null> => {
    setLoading(true);
    setError(null);

    try {
      const result = await apiCall();
      if (onSuccess) {
        onSuccess(result);
      }
      return result;
    } catch (err) {
      const apiError: ApiError = {
        message: err instanceof Error ? err.message : 'An unknown error occurred'
      };

      // Add more error handling logic if needed
      if (err instanceof Response) {
        apiError.status = err.status;
      }

      setError(apiError);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    error,
    loading,
    handleApiCall,
    clearError: () => setError(null)
  };
};