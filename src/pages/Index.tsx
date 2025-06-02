import { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Clock, Shield, Zap, HeartHandshake, Users, TrendingUp, Star, ChevronDown, Play, Heart, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const stats = [
    { value: "10,000+", label: "Hours Saved", icon: Clock },
    { value: "39%", label: "Average Efficiency Boost", icon: TrendingUp },
    { value: "35+", label: "Brands Helped", icon: Users }
  ];

  const services = [
    {
      title: "Qualified Lead Generation Automation",
      subtitle: "Qualified leads while you sleep",
      description: "Turn every form, calendar, and click into a highly optimized conversion funnel",
      features: [
        "Auto-collect and filter leads",
        "Score and segment leads quickly", 
        "Send personalized intro emails in minutes"
      ]
    },
    {
      title: "Newsletter Automation",
      subtitle: "Weekly newsletters",
      description: "Auto-write, auto-design, and auto-send your newsletters",
      features: [
        "Pulls from your blog, custom repo or updates automatically",
        "Designed and sent on schedule",
        "You just approve and binge cat videos"
      ]
    },
    {
      title: "Social Media Automation",
      subtitle: "Creates and posts actually good content",
      description: "Create a month's worth of quality social content in one go",
      features: [
        "Content generation using AI",
        "Visuals matched with brand style",
        "Scheduled across all platforms"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "We cut our manual work by half. OTH3L came in and took over the boring stuff like it was nothing.",
      author: "Jen L",
      role: "Marketing Lead @ Kinsta"
    },
    {
      quote: "It's like having a robot team that never sleeps. And they're funny too.",
      author: "Alex P",
      role: "PartnerStack"
    },
    {
      quote: "Zero stress, zero delay, zero BS. Just results. That's what OTH3L gave us.",
      author: "Clara D",
      role: "Claspo"
    }
  ];

  const faqs = [
    {
      question: "What is a free demo?",
      answer: "We get on a quick call, understand your entire work process you want to automate, and build an automation within 24h. You get to see our speed and quality in action."
    },
    {
      question: "Can my work be automated?",
      answer: "Yes. Hell yes."
    },
    {
      question: "Who do we work with?",
      answer: "Mostly established brands. But even if you're just starting out, we've got your back."
    },
    {
      question: "What if we don't like the demo?",
      answer: "Not gonna happen. Period."
    },
    {
      question: "What is your pricing?",
      answer: "Let's talk first, see our work and quality. We can always talk about pricing later."
    },
    {
      question: "What is a 30-day money back guarantee?",
      answer: "If our automation doesn't improve your work, you get your money back."
    },
    {
      question: "How many brands have you worked with?",
      answer: "35+ and counting. We've fixed, scaled, and upgraded their entire work processes."
    },
    {
      question: "Do you provide workflow fixes?",
      answer: "Yes, we do."
    },
    {
      question: "Do you provide after deployment support?",
      answer: "Yes, we do."
    },
    {
      question: "What's the average turnaround time?",
      answer: "Under 24 hours."
    },
    {
      question: "Will I have a single point of contact?",
      answer: "Yes. One person who knows your project inside out."
    },
    {
      question: "How will we communicate?",
      answer: "Emails and WhatsApp. Easy."
    }
  ];

  const brands = [
    { name: "Kinsta", color: "#5333ED" },
    { name: "PartnerStack", color: "#00A7E5" },
    { name: "Weglot", color: "#3EA1DB" },
    { name: "Hattrick", color: "#FF6B6B" },
    { name: "Claspo", color: "#7C3AED" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src="/OTH3L Transparent.png" alt="OTH3L" className="h-8" />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('qa')} className="text-gray-700 hover:text-primary transition-colors">Q&A</button>
              <button onClick={() => scrollToSection('tidbits')} className="text-gray-700 hover:text-primary transition-colors">Tidbits</button>
              <button onClick={() => scrollToSection('love')} className="text-gray-700 hover:text-primary transition-colors">Love</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors">Say Hi</button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-lg rounded-lg shadow-lg mt-2 p-4">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('qa')} className="text-left text-gray-700 hover:text-primary transition-colors">Q&A</button>
                <button onClick={() => scrollToSection('tidbits')} className="text-left text-gray-700 hover:text-primary transition-colors">Tidbits</button>
                <button onClick={() => scrollToSection('love')} className="text-left text-gray-700 hover:text-primary transition-colors">Love</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-primary transition-colors">Say Hi</button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-up">
            Make more money with <span className="text-primary">less time</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-up" style={{animationDelay: '0.2s'}}>
            We automate and get your work done faster, better and beautiful.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up" style={{animationDelay: '0.4s'}}>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center gap-2 hover:scale-105 transition-transform">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">100% Money Back Guarantee</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center gap-2 hover:scale-105 transition-transform">
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">24h Turnaround Time</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center gap-2 hover:scale-105 transition-transform">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Fastest AI Automations</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center gap-2 hover:scale-105 transition-transform">
              <HeartHandshake className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Dedicated Support</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{animationDelay: '0.6s'}}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg animate-pulse-glow"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => scrollToSection('testimonials')}
            >
              See Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            What We've Achieved So Far
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="bg-gradient-to-br from-primary to-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-in-left" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trusted By Section */}
          <div className="mt-20 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-8">Trusted By</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="group relative p-4 rounded-lg transition-all duration-300 hover:scale-110"
                  style={{
                    background: `linear-gradient(45deg, ${brand.color}15, ${brand.color}05)`,
                  }}
                >
                  <div className="text-lg font-semibold" style={{ color: brand.color }}>
                    {brand.name}
                  </div>
                  <div
                    className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: `0 0 20px ${brand.color}30`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Tidbits */}
      <section id="tidbits" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Automations We've Built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-up" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <div className="text-primary font-semibold mb-3">{service.subtitle}</div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-600 italic">
            And that's not it. We have made hundreds of automations; all for different parts of work functions.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="qa" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Q&A</h2>
            <p className="text-xl text-gray-600">Why Us?</p>
            <p className="text-lg font-semibold text-primary">"It's simple. We are damn good at what we do."</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-sm transition-all duration-300 transform perspective-1000 ${
                  activeCard === index ? 'scale-105 rotate-x-10' : ''
                }`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setActiveCard(activeCard === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        activeCard === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <div
                    className={`mt-2 text-gray-600 transition-all duration-300 ${
                      activeCard === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
                {/* Floating particles */}
                {activeCard === index && (
                  <>
                    <div className="absolute -top-2 -right-2 w-2 h-2 bg-primary rounded-full animate-particle-float" />
                    <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-secondary rounded-full animate-particle-float" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute -top-2 -left-2 w-2 h-2 bg-accent rounded-full animate-particle-float" style={{ animationDelay: '1s' }} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Love */}
      <section id="love" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Love</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another automation company. We're your partners in making work less boring and life more exciting.
            </p>
          </div>
          
          {/* Main Story Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-primary to-secondary w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We Started</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  We know you hate boring work. We hated it too. So we built OTH3L to make boring work disappear.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We didn't just want to automate stuff. We wanted to free people.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-50 to-emerald-50 border-0">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-accent to-secondary w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Believe</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  More time for pets, kids, PS5, or just doing nothing. Doing nothing feels out of the world btw.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  But it's not just about time off. It's about using your time better.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mission Statement */}
          <Card className="mb-16 bg-gradient-to-br from-primary to-secondary text-white border-0">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-xl leading-relaxed mb-6 max-w-4xl mx-auto">
                We wanted brands to do more, people to do more - ship faster, scale bigger, make more money, without burning out.
              </p>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                We love watching you win. And we love being part of your success journey. Because when you grow, we grow.
              </p>
            </CardContent>
          </Card>

          {/* Company Name Story */}
          <Card className="mb-16 bg-gradient-to-br from-yellow-50 to-orange-50 border-0">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                  Why the name OTH3L?
                </h3>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-6">
                  <p className="text-xl font-semibold text-primary mb-2 text-center">
                    Off The Hook, Hey Hey Look
                  </p>
                  <p className="text-gray-600 text-center italic">
                    (Yeah, it's a unique name. But so are we.)
                  </p>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
                  Remember how we talk when something exciting happens? Like, "hey hey look, there's a rainbow!" or "hey hey look, there's a shooting star!"
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-center font-medium">
                  And we built a company that is that exciting thing.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Team Description */}
          <Card className="mb-16 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Who We Are</h3>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                A bunch of wild, happy, damn good automation experts with fire in the heart and shine in the eyes.
              </p>
            </CardContent>
          </Card>

          {/* Video Testimonials Section */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Video Testimonials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-gray-50 to-slate-100 border-0">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-4 group-hover:from-gray-300 group-hover:to-gray-400 transition-all duration-300">
                    <div className="text-center">
                      <div className="bg-white/90 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Play className="w-8 h-8 text-primary ml-1" />
                      </div>
                      <p className="text-gray-600 font-medium">Client Success Story</p>
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium">See how we transformed their workflow</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-gray-50 to-slate-100 border-0">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-4 group-hover:from-gray-300 group-hover:to-gray-400 transition-all duration-300">
                    <div className="text-center">
                      <div className="bg-white/90 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Play className="w-8 h-8 text-primary ml-1" />
                      </div>
                      <p className="text-gray-600 font-medium">Behind the Scenes</p>
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium">Meet the team behind the magic</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Say Hi */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Say Hi</h2>
          <p className="text-xl mb-12 opacity-90">Book a call. Don't overthink it.</p>
          
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold animate-bounce-subtle"
            onClick={() => window.open('https://calendly.com/hie-yashraj', '_blank')}
          >
            Book a Call <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Floating CTA */}
      {isScrolled && (
        <div className="fixed bottom-6 right-6 z-40">
          <Button 
            className="bg-primary hover:bg-primary/90 text-white shadow-lg animate-pulse-glow"
            onClick={() => scrollToSection('contact')}
          >
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Index;