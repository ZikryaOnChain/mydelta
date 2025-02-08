declare global {
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

export {} 