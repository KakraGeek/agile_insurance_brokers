"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, AlertCircle, CheckCircle } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Validation types
interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  insuranceType?: string;
  preferredContact?: string;
  message?: string;
}

// Validation functions
const validateEmail = (email: string): string | undefined => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Email address is required - please enter your email";
  if (!emailRegex.test(email)) return "Please enter a valid email address (e.g., john.doe@example.com)";
  return undefined;
};

const validatePhone = (phone: string): string | undefined => {
  const phoneRegex = /^(\+233|0)?[0-9]{9}$/;
  if (!phone) return "Phone number is required - please enter your contact number";
  if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
    return "Please enter a valid Ghanaian phone number (e.g., +233244104087 or 0244104087)";
  }
  return undefined;
};

const validateRequired = (value: string, fieldName: string): string | undefined => {
  if (!value.trim()) return `${fieldName} is required - please fill in this field`;
  return undefined;
};

const validateMessage = (message: string): string | undefined => {
  if (!message.trim()) return "Message is required - please tell us about your insurance needs";
  if (message.trim().length < 10) return "Message is too short - please provide at least 10 characters describing your needs";
  if (message.trim().length > 1000) return "Message is too long - please keep it under 1000 characters";
  return undefined;
};

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animation variants
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5, 
      rotate: -180 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 200
      }
    }
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    insuranceType: '',
    preferredContact: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleBlur = (fieldName: string) => {
    setTouched(prev => ({
      ...prev,
      [fieldName]: true
    }));

    // Validate field on blur
    let fieldError: string | undefined;
    
    switch (fieldName) {
      case 'firstName':
        fieldError = validateRequired(formData.firstName, 'First name');
        break;
      case 'lastName':
        fieldError = validateRequired(formData.lastName, 'Last name');
        break;
      case 'email':
        fieldError = validateEmail(formData.email);
        break;
      case 'phone':
        fieldError = validatePhone(formData.phone);
        break;
      case 'insuranceType':
        fieldError = validateRequired(formData.insuranceType, 'Insurance type');
        break;
      case 'preferredContact':
        fieldError = validateRequired(formData.preferredContact, 'Preferred contact method');
        break;
      case 'message':
        fieldError = validateMessage(formData.message);
        break;
    }

    if (fieldError) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: fieldError
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate all fields
    newErrors.firstName = validateRequired(formData.firstName, 'First name');
    newErrors.lastName = validateRequired(formData.lastName, 'Last name');
    newErrors.email = validateEmail(formData.email);
    newErrors.phone = validatePhone(formData.phone);
    newErrors.insuranceType = validateRequired(formData.insuranceType, 'Insurance type');
    newErrors.preferredContact = validateRequired(formData.preferredContact, 'Preferred contact method');
    newErrors.message = validateMessage(formData.message);

    // Remove undefined errors
    const filteredErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([, value]) => value !== undefined)
    ) as FormErrors;

    setErrors(filteredErrors);
    return Object.keys(filteredErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      insuranceType: true,
      preferredContact: true,
      message: true
    });

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link with form data
      const subject = `Insurance Inquiry from ${formData.firstName} ${formData.lastName}`;
      const body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Insurance Type: ${formData.insuranceType}
Preferred Contact Method: ${formData.preferredContact}

Message:
${formData.message}
      `;

      const mailtoLink = `mailto:info@agilebrokersgh.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Try to open default email client
      const emailWindow = window.open(mailtoLink, '_blank');
      
      // Check if email client opened successfully
      if (emailWindow) {
        setSubmitStatus('success');
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            insuranceType: '',
            preferredContact: '',
            message: ''
          });
          setErrors({});
          setTouched({});
          setSubmitStatus('idle');
        }, 5000);
      } else {
        throw new Error('Failed to open email client');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className="min-h-screen" ref={containerRef}>
      {/* Hero Section with Enhanced Animations */}
      <motion.section 
        className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20 relative overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Fixed Background Image - Stays in place while text scrolls */}
        <div 
          className="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: "url('/Images/Parallax/New/banner_parallax_02.webp')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-secondary/40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Get in <span className="text-white">Touch</span>
            </h1>
            <motion.p 
              className="text-xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Ready to discuss your insurance needs? Contact us today for expert advice 
              and personalized solutions that protect what matters most.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Information & Form with Enhanced Animations */}
      <motion.section 
        className="py-16 bg-white relative"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Background Pattern with Parallax */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -200])
          }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
            style={{
              backgroundImage: "url('/Images/health insurance.png')"
            }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <motion.p 
                className="text-lg text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Ready to discuss your insurance needs? Contact us today for a free consultation 
                and personalized quote. Our team is here to help you find the perfect coverage.
              </motion.p>

              <div className="space-y-6">
                {/* Office Address */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="border-primary/20 hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-primary flex items-center">
                        <motion.div
                          variants={iconVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 5,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <MapPin className="mr-2 h-5 w-5" />
                        </motion.div>
                        Main Office
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-2">
                        Romick Plaza, Kweku Boi Street, Adenta
                      </p>
                      <p className="text-gray-600">
                        GPS: GD-009-1766
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Phone Numbers */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="border-secondary/20 hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-secondary flex items-center">
                        <motion.div
                          variants={iconVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 5,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <Phone className="mr-2 h-5 w-5" />
                        </motion.div>
                        Phone Numbers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <a 
                          href="tel:+233244104087" 
                          className="block text-gray-600 hover:text-primary transition-colors"
                        >
                          +233 244 104 087
                        </a>
                        <a 
                          href="tel:+233248290188" 
                          className="block text-gray-600 hover:text-primary transition-colors"
                        >
                          +233 248 290 188
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Email */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="border-primary/20 hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-primary flex items-center">
                        <motion.div
                          variants={iconVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 5,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <Mail className="mr-2 h-5 w-5" />
                        </motion.div>
                        Email
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a 
                        href="mailto:info@agilebrokersgh.com" 
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        info@agilebrokersgh.com
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Business Hours */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="border-secondary/20 hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-secondary flex items-center">
                        <motion.div
                          variants={iconVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 5,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <Clock className="mr-2 h-5 w-5" />
                        </motion.div>
                        Business Hours
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-gray-600">
                          <strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM
                        </p>
                        <p className="text-gray-600">
                          <strong>Saturday:</strong> Closed
                        </p>
                        <p className="text-gray-600">
                          <strong>Sunday:</strong> Closed
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.01,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="border-primary/20 hover:shadow-2xl transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center">
                      <motion.div
                        variants={iconVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <MessageSquare className="mr-2 h-5 w-5" />
                      </motion.div>
                      Send Us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-gray-700">
                            First Name *
                          </Label>
                          <Input 
                            id="firstName" 
                            name="firstName"
                            type="text" 
                            value={formData.firstName}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur('firstName')}
                            placeholder="Enter your first name (e.g., John)"
                            className={`mt-1 ${errors.firstName && touched.firstName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                            aria-invalid={errors.firstName ? 'true' : 'false'}
                            aria-describedby={errors.firstName ? 'firstName-error' : ''}
                          />
                          {errors.firstName && touched.firstName && (
                            <p id="firstName-error" className="mt-1 text-sm text-red-600 flex items-center">
                              <AlertCircle className="mr-1 h-4 w-4" />
                              {errors.firstName}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-gray-700">
                            Last Name *
                          </Label>
                          <Input 
                            id="lastName" 
                            name="lastName"
                            type="text" 
                            value={formData.lastName}
                            onChange={handleInputChange}
                            onBlur={() => handleBlur('lastName')}
                            placeholder="Enter your last name (e.g., Doe)"
                            className={`mt-1 ${errors.lastName && touched.lastName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                            aria-invalid={errors.lastName ? 'true' : 'false'}
                            aria-describedby={errors.lastName ? 'lastName-error' : ''}
                          />
                          {errors.lastName && touched.lastName && (
                            <p id="lastName-error" className="mt-1 text-sm text-red-600 flex items-center">
                              <AlertCircle className="mr-1 h-4 w-4" />
                              {errors.lastName}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-gray-700">
                          Email Address *
                        </Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur('email')}
                          placeholder="Enter your email address"
                          className={`mt-1 ${errors.email && touched.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                          aria-invalid={errors.email ? 'true' : 'false'}
                          aria-describedby={errors.email ? 'email-error' : ''}
                        />
                        {errors.email && touched.email && (
                          <p id="email-error" className="mt-1 text-sm text-red-600 flex items-center">
                            <AlertCircle className="mr-1 h-4 w-4" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-gray-700">
                          Phone Number *
                        </Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          type="tel" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur('phone')}
                          placeholder="Enter your phone number (e.g., +233244104087)"
                          className={`mt-1 ${errors.phone && touched.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                          aria-invalid={errors.phone ? 'true' : 'false'}
                          aria-describedby={errors.phone ? 'phone-error' : ''}
                        />
                        {errors.phone && touched.phone && (
                          <p id="phone-error" className="mt-1 text-sm text-red-600 flex items-center">
                            <AlertCircle className="mr-1 h-4 w-4" />
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="insuranceType" className="text-gray-700">
                          Insurance Type *
                        </Label>
                        <select 
                          id="insuranceType" 
                          name="insuranceType"
                          value={formData.insuranceType}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur('insuranceType')}
                          className={`w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${errors.insuranceType && touched.insuranceType ? 'border-red-500 focus:ring-red-500' : ''}`}
                          aria-invalid={errors.insuranceType ? 'true' : 'false'}
                          aria-describedby={errors.insuranceType ? 'insuranceType-error' : ''}
                        >
                          <option value="">Select insurance type</option>
                          <option value="motor">Motor Insurance</option>
                          <option value="health">Health Insurance</option>
                          <option value="life">Life Insurance</option>
                          <option value="commercial">Commercial Insurance</option>
                          <option value="travel">Travel Insurance</option>
                          <option value="property">Property Insurance</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.insuranceType && touched.insuranceType && (
                          <p id="insuranceType-error" className="mt-1 text-sm text-red-600 flex items-center">
                            <AlertCircle className="mr-1 h-4 w-4" />
                            {errors.insuranceType}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="preferredContact" className="text-gray-700">
                          Preferred Contact Method *
                        </Label>
                        <select 
                          id="preferredContact" 
                          name="preferredContact"
                          value={formData.preferredContact}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur('preferredContact')}
                          className={`w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${errors.preferredContact && touched.preferredContact ? 'border-red-500 focus:ring-red-500' : ''}`}
                          aria-invalid={errors.preferredContact ? 'true' : 'false'}
                          aria-describedby={errors.preferredContact ? 'preferredContact-error' : ''}
                        >
                          <option value="">Select preferred contact method</option>
                          <option value="phone">Phone Call</option>
                          <option value="sms">SMS</option>
                          <option value="whatsapp">WhatsApp</option>
                          <option value="email">Email</option>
                        </select>
                        {errors.preferredContact && touched.preferredContact && (
                          <p id="preferredContact-error" className="mt-1 text-sm text-red-600 flex items-center">
                            <AlertCircle className="mr-1 h-4 w-4" />
                            {errors.preferredContact}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-gray-700">
                          Message *
                        </Label>
                        <Textarea 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onBlur={() => handleBlur('message')}
                          placeholder="Tell us about your insurance needs, questions, or requirements... (minimum 10 characters)"
                          className={`mt-1 min-h-[120px] ${errors.message && touched.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                          aria-invalid={errors.message ? 'true' : 'false'}
                          aria-describedby={errors.message ? 'message-error' : ''}
                        />
                        {errors.message && touched.message && (
                          <p id="message-error" className="mt-1 text-sm text-red-600 flex items-center">
                            <AlertCircle className="mr-1 h-4 w-4" />
                            {errors.message}
                          </p>
                        )}
                        <p className="mt-1 text-xs text-gray-500">
                          {formData.message.length}/1000 characters
                        </p>
                      </div>

                      {/* Status Messages */}
                      {submitStatus === 'success' && (
                        <motion.div 
                          className="p-4 bg-green-50 border border-green-200 rounded-md" 
                          role="alert"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-green-800 text-sm flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Thank you! Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
                          </p>
                        </motion.div>
                      )}

                      {submitStatus === 'error' && (
                        <motion.div 
                          className="p-4 bg-red-50 border border-red-200 rounded-md" 
                          role="alert"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-red-800 text-sm flex items-center">
                            <AlertCircle className="mr-2 h-4 w-4" />
                            Unable to send message automatically. Please contact us directly at +233 244 104 087 or email info@agilebrokersgh.com
                          </p>
                        </motion.div>
                      )}

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          type="submit" 
                          disabled={isSubmitting || hasErrors}
                          className="w-full bg-primary hover:bg-primary/90 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                          aria-describedby={hasErrors ? 'form-errors' : ''}
                        >
                          <Send className="mr-2 h-4 w-4" />
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </motion.div>

                      <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-md">
                        <p className="font-medium mb-1">💡 Helpful tips:</p>
                        <ul className="space-y-1">
                          <li>• Include specific details about your insurance needs in your message</li>
                          <li>• Mention any existing policies or coverage requirements</li>
                          <li>• Let us know your preferred contact time if you choose phone/SMS</li>
                          <li>• We&apos;ll respond within 24 hours during business days</li>
                        </ul>
                      </div>

                      {hasErrors && (
                        <motion.div 
                          id="form-errors" 
                          className="p-3 bg-red-50 border border-red-200 rounded-md"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-red-800 text-sm font-medium mb-2">
                            Please fix the following field errors before submitting:
                          </p>
                          <ul className="text-red-700 text-sm space-y-1">
                            {Object.entries(errors).map(([field, error]) => {
                              const fieldLabels: Record<string, string> = {
                                firstName: 'First Name',
                                lastName: 'Last Name',
                                email: 'Email Address',
                                phone: 'Phone Number',
                                insuranceType: 'Insurance Type',
                                preferredContact: 'Preferred Contact Method',
                                message: 'Message'
                              };
                              return (
                                <li key={field} className="flex items-center">
                                  <AlertCircle className="mr-1 h-3 w-3 flex-shrink-0" />
                                  <span><strong>{fieldLabels[field]}:</strong> {error}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Section with Animation */}
      <motion.section 
        className="py-16 bg-gray-50 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Pattern with Parallax */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -150])
          }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
            style={{
              backgroundImage: "url('/Images/marine insurance.png')"
            }}
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">
              Visit our office at Adenta for a face-to-face consultation.
            </p>
          </motion.div>
          
          {/* Google Maps Embed */}
          <motion.div 
            className="rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.962226379537!2d-0.1567539!3d5.7141393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d657dec04e9%3A0xaea9967536950837!2sRomick%20plaza!5e0!3m2!1sen!2sgh!4v1691868482711!5m2!1sen!2sgh" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Agile Insurance Brokers - Romick Plaza, Adenta"
            />
          </motion.div>
          
          {/* View on Google Maps Link */}
          <motion.div 
            className="text-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.a 
              href="https://maps.google.com/maps?q=Romick+Plaza,+Kweku+Boi+Street,+Adenta,+Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="mr-2 h-5 w-5" />
              View on Google Maps
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
} 