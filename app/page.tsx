import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Facebook, Instagram, Twitter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 items-center px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="/">
          <span className="sr-only">Core Clinics</span>
          <span className="ml-2 text-xl font-bold">Core Clinic</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#about"
          >
            About Us
          </Link>

          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#contact"
          >
            Contact Us
          </Link>

          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="/login"
          >
            Login
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section
          className="relative flex h-[80vh] items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/physiotherapy-session.jpg')", // Replace with your image path
          }}
        >
          <div className="absolute inset-0 bg-blue-600 bg-opacity-60"></div>{" "}
          {/* Overlay for better text visibility */}
          <div className="relative z-10 px-6 text-center text-white">
            <h1 className="mb-4 text-5xl font-bold leading-tight">
              Heal, Recover, and Thrive
            </h1>
            <p className="mb-6 text-lg">
              Providing expert physiotherapy care to help you live pain-free.
            </p>
            <Button className="bg-white px-6 py-3 text-blue-600 hover:bg-gray-100">
              Book an Appointment
            </Button>
          </div>
        </section>

        {/* About Us Section */}
        <section className="bg-white py-16" id="about">
          <div className="container mx-auto px-6">
            <h2 className="mb-8 text-center text-3xl font-bold">About Us</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>10+ Years of Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We’ve been providing top-notch physiotherapy care for over a
                    decade.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Certified Physiotherapists</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our team consists of licensed and experienced professionals
                    dedicated to your recovery.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Patient-Centered Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We prioritize your well-being with tailored treatment plans
                    for lasting results.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <img
                src="/images/clinic-team.jpg" // Replace with an appropriate image path
                alt="Clinic Team"
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Features
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Intuitive Dashboard",
                "Real-time Analytics",
                "Team Collaboration",
                "Task Management",
                "Customizable Workflows",
                "Secure Data Storage",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="text-green-500" />
                  <span className="text-xl font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-blue-600 py-16 text-white" id="services">
          <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-lg">
              <h1 className="mb-4 text-4xl font-bold leading-tight">
                Heal, Recover, and Thrive
              </h1>
              <p className="mb-6 text-lg">
                Providing expert physiotherapy care to help you live pain-free.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Book an Appointment
              </Button>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                src="/images/physiotherapy-session-02.jpg" // Replace with an appropriate image path
                alt="Physiotherapy session"
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="bg-gray-50 py-16" id="contact">
          <div className="container mx-auto px-6">
            <h2 className="mb-8 text-center text-3xl font-bold">Contact Us</h2>
            <form className="mx-auto max-w-lg space-y-6">
              <Input type="text" placeholder="Name" required />
              <Input type="tel" placeholder="Phone Number" required />
              <Input type="email" placeholder="Email" required />
              <Textarea placeholder="Message" rows={4} required />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-blue-600 pt-8 text-white">
        <div className="container mx-auto grid gap-6 px-6 md:grid-cols-3">
          {/* Address */}
          <div>
            <h3 className="mb-2 text-lg font-bold">Address</h3>
            <p>1234 Wellness Street</p>
            <p>Health City, HC 56789</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-2 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-2 text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-4 py-4 text-center">
          © 2024 Core Clinics. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
