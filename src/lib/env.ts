export function validateEnv() {
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
  ];

  const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);

  if (missingEnvVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingEnvVars.join(', ')}`
    );
  }
}

// Type definitions for environment variables
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_SHEETS_PRIVATE_KEY: string;
      GOOGLE_SHEETS_CLIENT_EMAIL: string;
      GOOGLE_SHEETS_SPREADSHEET_ID: string;
      EMAIL_HOST: string;
      EMAIL_PORT: string;
      EMAIL_USER: string;
      EMAIL_PASSWORD: string;
      EMAIL_FROM: string;
      EMAIL_TO: string;
      NEXT_PUBLIC_SITE_URL: string;
      NEXT_PUBLIC_COMPANY_PHONE: string;
      NEXT_PUBLIC_COMPANY_EMAIL: string;
      NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: string;
    }
  }
}

export type Env = {
  GOOGLE_SHEETS_PRIVATE_KEY: string;
  GOOGLE_SHEETS_CLIENT_EMAIL: string;
  GOOGLE_SHEETS_SPREADSHEET_ID: string;
};

export const env: Env = {
  GOOGLE_SHEETS_PRIVATE_KEY: process.env.GOOGLE_SHEETS_PRIVATE_KEY!,
  GOOGLE_SHEETS_CLIENT_EMAIL: process.env.GOOGLE_SHEETS_CLIENT_EMAIL!,
  GOOGLE_SHEETS_SPREADSHEET_ID: process.env.GOOGLE_SHEETS_SPREADSHEET_ID!,
}; 