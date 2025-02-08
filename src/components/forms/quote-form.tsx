"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { services } from "@/data/services";

export function QuoteForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    preferredDate: "",
  });

  // Handle initial service parameter after component mounts
  useEffect(() => {
    const initialService = searchParams.get("service");
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
    setMounted(true);
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

  // Don't render until after client-side hydration
  if (!mounted) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Service Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Service Required *
        </label>
        <select
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
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
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <Input
          label="Email *"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Phone Number *"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
        <Input
          label="Preferred Date"
          type="date"
          value={formData.preferredDate}
          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
        />
      </div>

      {/* Property Details */}
      <Input
        label="Property Address *"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        required
      />

      {/* Additional Information */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Details
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          placeholder="Any specific requirements or concerns..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full md:w-auto">
        Request Quote
      </Button>
    </form>
  );
} 