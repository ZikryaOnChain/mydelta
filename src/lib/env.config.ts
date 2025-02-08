const requiredEnvVars = [
  'GOOGLE_SHEETS_PRIVATE_KEY',
  'GOOGLE_SHEETS_CLIENT_EMAIL',
  'GOOGLE_SHEETS_SPREADSHEET_ID',
  'EMAIL_HOST',
  'EMAIL_PORT',
  'EMAIL_USER',
  'EMAIL_PASSWORD',
  'EMAIL_FROM',
  'EMAIL_TO',
  'NEXT_PUBLIC_SITE_URL',
  'NEXT_PUBLIC_COMPANY_PHONE',
  'NEXT_PUBLIC_COMPANY_EMAIL',
  'NEXT_PUBLIC_GOOGLE_MAPS_API_KEY',
] as const;

export function validateEnv() {
  const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);

  if (missingEnvVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingEnvVars.join(', ')}`
    );
  }
} 