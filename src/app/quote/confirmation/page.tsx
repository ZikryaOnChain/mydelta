"use client";

import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function QuoteConfirmationPage() {
  const [firstName, setFirstName] = useState('there');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name') || 'there';
    setFirstName(name.split(' ')[0]);
  }, []);

  return (
    <section className="bg-gray-50 min-h-[60vh] flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="mx-auto w-16 h-16 bg-[#1FB8BF]/10 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-[#1FB8BF]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Thank You {firstName}!
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              We&apos;ve received your quote request and will get back to you within 24
              hours with a detailed quote.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              Have questions in the meantime? Feel free to contact us.
            </p>
            <div className="space-x-4">
              <a 
                href="tel:416-931-3314"
                className={buttonVariants({
                  variant: "default",
                  size: "lg",
                  className: "min-w-[160px]"
                })}
              >
                Call Us
              </a>
              <Link 
                href="/"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "min-w-[160px]"
                })}
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 