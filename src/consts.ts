// YourFriendlySEO - Site Configuration

export const SITE_TITLE = 'YourFriendlySEO';
export const SITE_DESCRIPTION = 'Practical, beginner-friendly SEO guides and resources for small business owners. Learn DIY SEO, boost your rankings, and grow your business organically.';
export const SITE_URL = 'https://www.yourfriendlyseo.com';
export const SITE_AUTHOR = 'YourFriendlySEO';

// Brand Colors
export const BRAND_COLORS = {
	primary: '#0F172A',      // Deep Navy
	primaryLight: '#1E293B',
	primaryDark: '#020617',
	accent: '#F59E0B',       // Warm Amber
	accentLight: '#FCD34D',
	accentDark: '#D97706',
};

// Social Links
export const SOCIAL_LINKS = {
	linkedin: 'https://www.linkedin.com/in/emil-mequita/',
	email: 'hello@yourfriendlyseo.com',
};

// Navigation
export const NAV_LINKS = [
	{ label: 'Blog', href: '/blog' },
	{ label: 'Services', href: '/services' },
	{ label: 'Book a Call', href: '/consultation' },
	{ label: 'About', href: '/about' },
];

// Author Info
export const AUTHOR = {
	name: 'Emil Mequita',
	title: 'SEO Strategist',
	experience: '10+ years',
	location: 'Los Angeles',
	linkedin: 'https://www.linkedin.com/in/emil-mequita/',
	email: 'hello@yourfriendlyseo.com',
};

// Checkout links (Stripe). Do not change these without updating Stripe.
export const CHECKOUT_LINKS = {
	// $27 SEO Audit Template Bundle (canonical product page link)
	templateBundle: 'https://buy.stripe.com/fZu14m5N07opcjZa7G8ww03',
	// $197 60-minute Strategy Session
	strategySession: 'https://buy.stripe.com/dRm14mdfs9wxgAf0x68ww02',
};

// Scheduling: paste your Calendly or Cal.com event link here once it exists.
// While this is empty, the consultation page shows the Stripe checkout button
// and a note that scheduling follows payment (no fake scheduler URL is used).
export const SCHEDULING_URL = 'https://calendly.com/emil-mequita-z-uw/1-on-1-seo-strategy-session';
