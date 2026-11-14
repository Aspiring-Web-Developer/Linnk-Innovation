import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, PhoneCall, Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import ContactModal from '@/components/common/ContactModal';
import { cn } from '@/utils/cn';

const NAV_LINKS = [
  {
    name: 'SERVICES',
    href: '/services/',
    subItems: [
      { name: 'Managed Quality Assurance', href: '/services/managed-qa-services' },
      { name: 'Managed AI & Workflow Automation', href: '/services/ai-managed-services' },
      { name: 'Managed Application Engineering', href: '/services/application-engineering' },
      { name: 'Managed Cloud & DevSecOps', href: '/services/cloud-devsecops' },
      { name: 'Managed Software Development', href: '/services/software-development' },
      { name: 'Managed Data & Analytics', href: '/services/data-analytics' },
    ],
  },
  { name: 'WORK', href: '/case-studies/' },
  {
    name: 'COMPANY',
    href: '#',
    subItems: [
      { name: 'About Us', href: '/about-us/' },
      { name: 'Contact Us', href: '/contact-us/' },
    ],
  },
  { name: 'RESOURCES', href: '/blog/' },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Lets any button on the site open the modal:
  // onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
  useEffect(() => {
    const open = () => setIsContactOpen(true);
    window.addEventListener('open-contact-modal', open);
    return () => window.removeEventListener('open-contact-modal', open);
  }, []);

  return (
    <>
      {/* Not sticky: scrolls away with the page */}
      <header className="relative z-50 w-full bg-white border-b border-black/5">
        <div className="w-full pl-6 pr-6 sm:pl-8 sm:pr-8 lg:pl-10 lg:pr-20 xl:pl-10 xl:pr-40 h-16 sm:h-20 lg:h-[100px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="Linnk Innovation Hub"
              className="h-12 sm:h-16 lg:h-[88px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-14 xl:gap-28 lg:ml-auto lg:mr-16 xl:mr-36">
            {NAV_LINKS.map((link) => {
              const isActive = activeDropdown === link.name;

              if (link.subItems) {
                return (
                  <div
                    key={link.name}
                    className="relative py-8"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href={link.href}
                      className={cn(
                        'inline-flex items-center gap-1.5 pb-1 text-[14px] xl:text-[16px] font-heading font-medium uppercase border-b-2 transition-colors',
                        isActive
                          ? 'text-black/60 border-black/40'
                          : 'text-black border-transparent'
                      )}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={cn(
                          'w-3 h-3 transition-transform duration-200 stroke-[2.5]',
                          isActive ? 'rotate-180' : ''
                        )}
                      />
                    </a>

                    {/* Dropdown */}
                    <div
                      className={cn(
                        'absolute top-full left-0 w-[310px] bg-[#111] text-white shadow-2xl transition-all duration-200 z-50',
                        isActive
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 translate-y-1 pointer-events-none'
                      )}
                    >
                      <div className="py-6 flex flex-col">
                        {link.subItems.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="block w-full px-8 py-3 text-[16px] font-heading font-medium text-white leading-snug whitespace-normal break-words hover:text-brand-mint transition-colors"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="inline-flex items-center pb-1 border-b-2 border-transparent text-[14px] xl:text-[16px] font-heading font-semibold uppercase text-black hover:text-black/60 transition-colors"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Partner button: opens the contact modal */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-1 rounded-full border border-black text-black text-[13px] xl:text-[14px] font-light hover:bg-brand-mint transition-colors duration-300"
            >
              <PhoneCall className="w-4 h-8 stroke-[1.5]" />
              <span>Partner with us</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile navigation menu"
            className="lg:hidden p-2 rounded-lg text-black hover:bg-black/5 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
        onPartnerClick={() => {
          setIsMobileMenuOpen(false);
          setIsContactOpen(true);
        }}
      />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}