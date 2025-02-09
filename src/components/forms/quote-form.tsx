"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { services } from "@/data/services";

interface GoogleWindow {
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

export function QuoteForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    preferredDate: "",
  });

  // Handle initial service parameter and initialize autocomplete after mount
  useEffect(() => {
    const initialService = searchParams.get("service");
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
    setMounted(true);

    // Initialize autocomplete after component mounts
    if (addressInputRef.current && !autocompleteRef.current && typeof window !== 'undefined') {
      const googleWindow = window as unknown as GoogleWindow;
      if (googleWindow.google?.maps?.places) {
        autocompleteRef.current = new googleWindow.google.maps.places.Autocomplete(
          addressInputRef.current,
          {
            componentRestrictions: { country: "ca" },
            fields: ["formatted_address"],
            types: ["address"],
          }
        );

        autocompleteRef.current.addListener("place_changed", () => {
          const place = autocompleteRef.current?.getPlace();
          const address = place?.formatted_address || "";
          setFormData(prev => ({ ...prev, address }));
        });
      }
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      router.push(`/quote/confirmation?name=${encodeURIComponent(formData.name)}`);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Service Selection */}
      <div>
        <label className="block text-sm font-medium text-black mb-2">
          Service Required *
        </label>
        <select
          value={formData.service}
          onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-black"
          required
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      {/* Contact Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Full Name *"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          required
          className="text-black"
        />
        <Input
          label="Email *"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
          className="text-black"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Phone Number *"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          required
          className="text-black"
        />
        <Input
          label="Preferred Date"
          type="date"
          value={formData.preferredDate}
          onChange={(e) => setFormData(prev => ({ ...prev, preferredDate: e.target.value }))}
          className="text-black"
        />
      </div>

      {/* Property Details */}
      <Input
        label="Property Address *"
        value={formData.address}
        onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
        required
        className="text-black"
        ref={addressInputRef}
      />

      {/* Additional Information */}
      <div>
        <label className="block text-sm font-medium text-black mb-2">
          Additional Details
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          rows={4}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-black"
          placeholder="Any specific requirements or concerns..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full md:w-auto">
        Request Quote
      </Button>
    </form>
  );
} 