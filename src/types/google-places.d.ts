declare namespace google.maps.places {
  interface Autocomplete {
    addListener(eventName: string, handler: () => void): void;
    getPlace(): {
      formatted_address?: string;
    };
  }
  
  interface AutocompleteOptions {
    componentRestrictions?: {
      country: string;
    };
    fields?: string[];
    types?: string[];
  }
}

declare global {
  interface Window {
    google: {
      maps: {
        places: {
          Autocomplete: new (
            input: HTMLInputElement,
            opts?: google.maps.places.AutocompleteOptions
          ) => google.maps.places.Autocomplete;
        };
      };
    };
  }
} 