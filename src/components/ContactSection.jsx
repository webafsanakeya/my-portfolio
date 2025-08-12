import {
  InstagramIcon,
  LinkedinIcon,
  Mail,
  MapPin,
  Phone,
  Send,
  TwitterIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I’m always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-8">
                {[
                  {
                    icon: <Mail className="h-6 w-6 text-primary" />,
                    title: "Email",
                    info: (
                      <a
                        href="mailto:webafsanakeya@gmail.com"
                        className="hover:text-primary transition-colors"
                      >
                        webafsanakeya@gmail.com
                      </a>
                    ),
                  },
                  {
                    icon: <Phone className="h-6 w-6 text-primary" />,
                    title: "Phone",
                    info: (
                      <a
                        href="tel:+880099876543"
                        className="hover:text-primary transition-colors"
                      >
                        +880099876543
                      </a>
                    ),
                  },
                  {
                    icon: <MapPin className="h-6 w-6 text-primary" />,
                    title: "Location",
                    info: <span>Dhaka, Bangladesh</span>,
                  },
                ].map(({ icon, title, info }, idx) => (
                  <div key={idx} className="flex items-start space-x-5">
                    <div className="p-4 rounded-full bg-primary/10">{icon}</div>
                    <div>
                      <h4 className="font-semibold text-lg">{title}</h4>
                      <p className="text-muted-foreground mt-1">{info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Connect With Me</h4>
              <div className="flex space-x-6 text-foreground/80">
                <a
                  href="https://www.linkedin.com/in/web-afsana-noor-keya-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://x.com/afsana_web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/webafsanakeya/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-3"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-5 py-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="Your name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-3"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-3"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-5 py-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none transition"
                  placeholder="Hello, I’d like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-3 text-lg font-semibold",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
