"use client";

import React from "react";
import { ContactForm } from "./ContactForm";

export const ContactPageContent: React.FC = () => {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div>
    </div>
  );
};
