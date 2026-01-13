export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T; // The actual data (user, project, list, etc.)
  statusCode: number;
  error?: any; // Optional error details for debugging
}
