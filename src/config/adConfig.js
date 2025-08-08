// STRATEGIC ADVERTISEMENT CONFIGURATION
// Genius placement strategy for maximum conversion

export const adConfigurations = {
  // LAUNCH PHASE ADS (Pre-August 30, 2025)
  launchPhase: {
    heroOverlay: {
      title: 'EARLY BIRD SPECIAL',
      description: 'Get 50% off your first 3 months when you sign up for early access!',
      cta: 'Claim Early Bird Deal',
      link: '/early-access',
      icon: 'flash',
      priority: 'high'
    },
    
    floatingCorner: [
      {
        title: 'PWA Coming Soon',
        description: 'Native app experience without the app store',
        cta: 'Get Notified',
        link: '/early-access',
        icon: 'mobile'
      },
      {
        title: 'AI-Powered Jobs',
        description: 'Smart matching technology finds your perfect role',
        cta: 'Learn More',
        link: '/about',
        icon: 'target'
      },
      {
        title: 'Premium Features',
        description: 'Advanced analytics & personalized insights',
        cta: 'View Plans',
        link: '/pricing',
        icon: 'crown'
      }
    ],

    mobileBanner: {
      title: 'Launch Countdown: Only R8/month!',
      description: 'Reserve your spot with 3-day free trial',
      cta: 'Reserve Now',
      link: '/pricing',
      icon: 'clock'
    }
  },

  // POST-LAUNCH PHASE ADS
  postLaunch: {
    heroOverlay: {
      title: 'WE\'RE LIVE!',
      description: 'Download the AI Job Chommie PWA now and find your dream job today',
      cta: 'Download PWA',
      link: '/app-download',
      icon: 'phone',
      priority: 'critical'
    },

    floatingCorner: [
      {
        title: 'Trending Jobs',
        description: 'See the hottest opportunities in your area',
        cta: 'Browse Jobs',
        link: '/jobs',
        icon: 'trending-up'
      },
      {
        title: 'Career Boost',
        description: 'Premium features for serious job seekers',
        cta: 'Upgrade Now',
        link: '/pricing',
        icon: 'briefcase'
      }
    ],

    mobileBanner: {
      title: 'Add to Home Screen',
      description: 'Install our PWA for the best experience',
      cta: 'Install Now',
      link: '#pwa-install',
      icon: 'download'
    }
  },

  // PARTNERSHIP & SPONSOR ADS
  partnerships: {
    // Corporate training programs
    corporateTraining: {
      title: 'Corporate Training',
      description: 'Upskill your team with our AI-powered career development',
      cta: 'Contact Sales',
      link: '/enterprise',
      icon: 'building',
      priority: 'medium'
    },

    // University partnerships
    universityPartnership: {
      title: 'Student Special',
      description: 'Free 6-month access for verified students',
      cta: 'Verify Student Status',
      link: '/student-discount',
      icon: 'graduation-cap',
      priority: 'high'
    },

    // Recruitment agency partnerships
    recruitmentAgencies: {
      title: 'Recruiter Tools',
      description: 'Advanced candidate matching for recruitment professionals',
      cta: 'Partner With Us',
      link: '/recruiter-partnership',
      icon: 'search',
      priority: 'medium'
    }
  },

  // SEASONAL & EVENT-BASED ADS
  seasonal: {
    // New Year career resolutions
    newYear: {
      title: 'New Year, New Career',
      description: 'Start 2025 with your dream job - Limited time offer!',
      cta: 'Transform Your Career',
      link: '/new-year-special',
      icon: 'star',
      priority: 'high',
      validPeriod: { start: '2025-01-01', end: '2025-01-31' }
    },

    // Mid-year career boost
    midYear: {
      title: 'Mid-Year Career Boost',
      description: 'Don\'t wait for January - upgrade your career now!',
      cta: 'Boost Your Career',
      link: '/mid-year-boost',
      icon: 'trending-up',
      priority: 'medium',
      validPeriod: { start: '2025-06-01', end: '2025-07-31' }
    }
  },

  // CONTENT SECTION ADS (Inline placements)
  contentSection: {
    betweenFeatures: {
      title: 'Pro Tip',
      description: 'Upgrade to Premium for AI-powered interview prep and salary negotiation tips',
      cta: 'Unlock Pro Features',
      link: '/pricing',
      icon: 'lightbulb',
      priority: 'low'
    },

    beforeTestimonials: {
      title: 'Join Success Stories',
      description: 'Thousands of South Africans have found their dream jobs with us',
      cta: 'Start Your Journey',
      link: '/success-stories',
      icon: 'trophy',
      priority: 'medium'
    },

    beforePricing: {
      title: 'Value Calculator',
      description: 'See how much your career could be worth with our AI matching',
      cta: 'Calculate Value',
      link: '/career-calculator',
      icon: 'calculator',
      priority: 'high'
    }
  }
};

// GENIUS AD PLACEMENT STRATEGY LOGIC
export class AdPlacementStrategy {
  constructor() {
    this.viewportHeight = window.innerHeight;
    this.scrollPosition = 0;
    this.userEngagement = this.getUserEngagement();
  }

  // Calculate user engagement score
  getUserEngagement() {
    const timeOnSite = Date.now() - (parseInt(sessionStorage.getItem('siteEntryTime')) || Date.now());
    const scrollDepth = this.getScrollDepth();
    const pageViews = parseInt(sessionStorage.getItem('pageViews')) || 1;
    
    return {
      timeOnSite,
      scrollDepth,
      pageViews,
      score: (timeOnSite / 1000 * 0.3) + (scrollDepth * 0.4) + (pageViews * 0.3)
    };
  }

  // Get current scroll depth percentage
  getScrollDepth() {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
  }

  // Determine optimal ad configuration based on current state
  getOptimalAdConfig() {
    const now = new Date();
    const launchDate = new Date('2025-08-30T00:00:00+02:00');
    const isPreLaunch = now < launchDate;
    
    // Base configuration
    let config = isPreLaunch 
      ? adConfigurations.launchPhase 
      : adConfigurations.postLaunch;

    // Add seasonal ads if applicable
    const seasonalAd = this.getActiveSeasonalAd();
    if (seasonalAd) {
      config.heroOverlay = seasonalAd;
    }

    // Modify based on user engagement
    if (this.userEngagement.score > 50) {
      // High engagement - show premium/upgrade ads
      config.floatingCorner = config.floatingCorner?.filter(ad => 
        ad.cta.includes('Upgrade') || ad.cta.includes('Premium')
      ) || config.floatingCorner;
    }

    return config;
  }

  // Check for active seasonal campaigns
  getActiveSeasonalAd() {
    const now = new Date();
    
    for (const [key, ad] of Object.entries(adConfigurations.seasonal)) {
      if (ad.validPeriod) {
        const start = new Date(ad.validPeriod.start);
        const end = new Date(ad.validPeriod.end);
        
        if (now >= start && now <= end) {
          return ad;
        }
      }
    }
    
    return null;
  }

  // A/B testing for ad effectiveness
  getABTestVariant() {
    const userId = localStorage.getItem('userId') || Math.random().toString(36);
    localStorage.setItem('userId', userId);
    
    // Simple hash-based A/B testing
    const hash = userId.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    return Math.abs(hash) % 2 === 0 ? 'A' : 'B';
  }

  // Track ad performance
  trackAdInteraction(adPosition, action, adTitle) {
    const eventData = {
      position: adPosition,
      action: action, // 'view', 'click', 'dismiss'
      title: adTitle,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      engagement: this.userEngagement,
      variant: this.getABTestVariant()
    };

    // Store locally for analytics
    const adEvents = JSON.parse(localStorage.getItem('adEvents') || '[]');
    adEvents.push(eventData);
    
    // Keep only last 100 events to prevent storage bloat
    if (adEvents.length > 100) {
      adEvents.splice(0, adEvents.length - 100);
    }
    
    localStorage.setItem('adEvents', JSON.stringify(adEvents));

    // Send to analytics service (implement your preferred analytics)
    this.sendToAnalytics(eventData);
  }

  // Send event to analytics service
  sendToAnalytics(eventData) {
    // Implement your preferred analytics service here
    // Examples: Google Analytics, Mixpanel, custom endpoint
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'ad_interaction', {
        event_category: 'Advertisement',
        event_label: `${eventData.position}-${eventData.title}`,
        value: eventData.action === 'click' ? 10 : 1
      });
    }

    // Custom analytics endpoint
    fetch('/api/analytics/ad-interaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData)
    }).catch(err => console.log('Analytics error:', err));
  }
}

// AD CONTENT VARIATIONS FOR A/B TESTING
export const adVariations = {
  heroOverlay: {
    A: {
      title: 'Launch Special - 50% Off',
      description: 'Early bird pricing for the first 1000 users',
      cta: 'Get Early Access',
      urgency: 'high'
    },
    B: {
      title: 'Transform Your Career Today',
      description: 'Join thousands finding their dream jobs with AI',
      cta: 'Start Free Trial',
      urgency: 'medium'
    }
  },

  mobileBanner: {
    A: {
      title: 'Only R8/month - Start Free Trial',
      cta: 'Try Free Now',
      style: 'urgency'
    },
    B: {
      title: 'Your Dream Job Awaits',
      cta: 'Find Jobs Now',
      style: 'inspirational'
    }
  }
};

export default adConfigurations;
