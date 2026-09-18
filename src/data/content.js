// All site content lives here. Pages are rendered from this data.

export const platform = [
  {
    slug: 'menu-knowledge-garden',
    icon: 'BookOpen',
    name: 'Menu Knowledge Garden',
    tagline: 'One connected brain for your menu, recipes, prices and suppliers.',
    intro:
      'Every item, modifier, recipe, allergen, GST rate and supplier price lives in one governed graph, so every outlet, POS terminal and app tells the same truth.',
    features: [
      ['Unified catalog', 'Menu items, variants, combos, modifiers and retail SKUs with barcodes in one place.'],
      ['Recipe & costing graph', 'Ingredient-level recipes roll up to live plate cost and margin.'],
      ['Multi-outlet pricing', 'Outlet, channel and time-of-day price lists with approval workflows.'],
      ['Allergen & compliance tags', 'FSSAI, allergen and tax metadata attached to every item.'],
      ['Supplier connectors', 'Pull rates from vendors and flag price changes automatically.'],
      ['Version history', 'Every price or recipe change is tracked and reversible.'],
    ],
  },
  {
    slug: 'appzet-gpt',
    icon: 'MessageSquare',
    name: 'AppzetGPT',
    tagline: 'Ask your business anything in plain language.',
    intro:
      '“What was my best-selling dish last Friday night?” “Which SKUs will stock out this week?” AppzetGPT answers from your live billing and inventory data — with sources.',
    features: [
      ['Conversational analytics', 'Sales, margin, wastage and staff questions answered instantly.'],
      ['Voice & WhatsApp', 'Owners ask on the go through WhatsApp or voice notes.'],
      ['Cited answers', 'Every number links back to the bills and reports behind it.'],
      ['Role-aware', 'Cashiers, managers and owners only see what they are allowed to.'],
      ['Multi-language', 'English, Hindi and regional languages supported.'],
      ['Action prompts', '“Create a PO for low-stock items” — and it drafts it for approval.'],
    ],
  },
  {
    slug: 'digital-experts',
    icon: 'Bot',
    name: 'Digital Experts',
    tagline: 'AI agents that run the back-office while you serve customers.',
    intro:
      'Purpose-built agents for purchasing, inventory, GST filing, staffing and customer care — each versioned, benchmarked and supervised.',
    features: [
      ['Purchase Agent', 'Predicts demand and drafts purchase orders to your suppliers.'],
      ['Inventory Agent', 'Detects wastage, theft patterns and expiry risk.'],
      ['Accounts Agent', 'Reconciles bills, settles payment gateways and preps GST returns.'],
      ['Guest Care Agent', 'Answers reservations, feedback and order-status queries 24/7.'],
      ['Human-in-the-loop', 'Approvals required for anything touching money or stock.'],
      ['Agent versioning', 'Test, promote and roll back agents like software releases.'],
    ],
  },
  {
    slug: 'optimization-hub',
    icon: 'Sparkles',
    name: 'Menu & Pricing Optimization Hub',
    tagline: 'Engineer the menu that earns the most per seat and per shelf.',
    intro:
      'Combine sales velocity, food cost and customer behaviour to recommend what to promote, reprice, bundle or retire.',
    features: [
      ['Menu engineering matrix', 'Stars, plowhorses, puzzles and dogs, refreshed daily.'],
      ['Dynamic pricing suggestions', 'Happy hours, festival and delivery-channel pricing.'],
      ['Combo builder', 'AI-suggested combos and upsells at the billing counter.'],
      ['Retail shelf analytics', 'Fast/slow movers, margin per shelf and reorder points.'],
      ['Offer simulator', 'Predict the impact of a discount before running it.'],
      ['A/B testing', 'Test menus and offers across outlets.'],
    ],
  },
  {
    slug: 'governance',
    icon: 'ShieldCheck',
    name: 'Business Governance',
    tagline: 'Control, audit and trust across every outlet and staff member.',
    intro:
      'Role-based access, discount limits, void approvals and a tamper-proof audit trail — so owners sleep well even when they are not on site.',
    features: [
      ['Role & permission matrix', 'Cashier, captain, chef, manager, owner and accountant roles.'],
      ['Discount & void controls', 'Limits, reasons and approval flows on every exception.'],
      ['Audit trail', 'Every bill edit, price change and stock adjustment logged.'],
      ['Fraud alerts', 'AI flags unusual voids, refunds and cash variances.'],
      ['Data ownership', 'Your data stays yours — never used to train models.'],
      ['Kill switch', 'Instantly pause an agent, terminal or integration.'],
    ],
  },
]

export const solutions = [
  {
    slug: 'restaurant-management',
    icon: 'UtensilsCrossed',
    name: 'Restaurant Management',
    tagline: 'From table to kitchen to cash — one system for restaurants, cafés and QSRs.',
    intro:
      'Dine-in, takeaway and delivery on one platform: table maps, captain apps, KOT routing, aggregator sync and shift-wise reports.',
    features: [
      ['Table & reservation management', 'Live floor map, merges, splits, waitlist and reservations.'],
      ['KOT & Kitchen Display', 'Orders routed to the right station with prep-time tracking.'],
      ['QR ordering', 'Guests scan, order and pay from their phones.'],
      ['Aggregator integration', 'Zomato, Swiggy and your own website orders in one queue.'],
      ['Recipe-level inventory', 'Auto-deduct ingredients on every sale.'],
      ['Staff & shift management', 'Attendance, tips and performance.'],
    ],
    metrics: [['30%', 'faster table turns'], ['18%', 'lower food cost'], ['0', 'lost KOTs']],
  },
  {
    slug: 'billing-pos',
    icon: 'Receipt',
    name: 'Billing & POS',
    tagline: 'Lightning-fast, GST-ready billing that works even offline.',
    intro:
      'A touch-first POS for counters, tables and mobile billing with split payments, thermal printing and automatic tax compliance.',
    features: [
      ['GST-compliant invoices', 'CGST/SGST/IGST, e-invoice and e-way bill ready.'],
      ['Split & multi-mode payments', 'UPI, cards, wallets, cash and credit — on one bill.'],
      ['Offline mode', 'Keep billing without internet; sync automatically later.'],
      ['Hardware ready', 'Thermal printers, barcode scanners, cash drawers, weighing scales.'],
      ['Loyalty & coupons', 'Points, vouchers and customer-specific pricing.'],
      ['Day-end & Z-reports', 'Cash reconciliation and settlement in a tap.'],
    ],
    metrics: [['<3s', 'to complete a bill'], ['100%', 'GST compliant'], ['24/7', 'offline resilience']],
  },
  {
    slug: 'retail-shop',
    icon: 'Store',
    name: 'Retail & Shop Management',
    tagline: 'Barcode billing, stock, and suppliers for grocery, apparel and general stores.',
    intro:
      'Manage thousands of SKUs, batches and expiries, run multi-store transfers and know exactly what to reorder — before you run out.',
    features: [
      ['Barcode & batch tracking', 'Batch, expiry, serial and MRP-variant handling.'],
      ['Purchase & GRN', 'PO to goods receipt to supplier payment.'],
      ['Multi-store stock transfer', 'Move stock between outlets and warehouses.'],
      ['Customer credit (khata)', 'Track dues, reminders and payments.'],
      ['Returns & exchanges', 'Credit notes with full audit trail.'],
      ['Auto-reorder', 'AI suggests what and how much to order.'],
    ],
    metrics: [['40%', 'fewer stock-outs'], ['25%', 'less dead stock'], ['1 min', 'to onboard a SKU']],
  },
  {
    slug: 'inventory-procurement',
    icon: 'Boxes',
    name: 'Inventory & Procurement',
    tagline: 'Know every gram and every rupee — from supplier to plate.',
    intro:
      'Real-time stock across kitchens, godowns and shelves with wastage tracking, indent management and vendor scorecards.',
    features: [
      ['Real-time stock ledger', 'Every purchase, sale, transfer and wastage entry.'],
      ['Indent & requisition', 'Outlet-to-central-kitchen requests with approvals.'],
      ['Wastage analytics', 'Find what is being thrown away and why.'],
      ['Vendor scorecards', 'Rate, delivery and quality performance.'],
      ['Stock audit', 'Mobile-based cycle counts with variance reports.'],
      ['Price alerts', 'Alerts when supplier rates spike.'],
    ],
    metrics: [['22%', 'less wastage'], ['5x', 'faster stock audits'], ['Live', 'variance alerts']],
  },
  {
    slug: 'analytics-accounting',
    icon: 'BarChart3',
    name: 'Analytics & Accounting',
    tagline: 'Owner-ready insight and books that close themselves.',
    intro:
      'Sales, profit, tax and cash flow dashboards with automatic ledger posting to Tally, Zoho Books and QuickBooks.',
    features: [
      ['Outlet-wise P&L', 'Daily profit by outlet, category, item and channel.'],
      ['Tally / Zoho export', 'One-click ledger and voucher sync.'],
      ['GST returns prep', 'GSTR-1 and 3B data ready to file.'],
      ['Cash flow forecasts', 'Predict cash position for the next 30 days.'],
      ['Scheduled reports', 'Reports to WhatsApp and email at your chosen time.'],
      ['Benchmarking', 'Compare outlets and periods.'],
    ],
    metrics: [['1 tap', 'GST-ready reports'], ['8 hrs', 'saved per week'], ['Daily', 'P&L']],
  },
  {
    slug: 'customer-loyalty',
    icon: 'HeartHandshake',
    name: 'CRM & Loyalty',
    tagline: 'Turn one-time guests into regulars.',
    intro:
      'Capture every customer at billing, segment them automatically, and win them back with the right offer at the right moment.',
    features: [
      ['Customer 360', 'Order history, preferences and lifetime value.'],
      ['Smart segments', 'Lapsed, high-value and birthday audiences.'],
      ['WhatsApp & SMS campaigns', 'Automated offers and feedback requests.'],
      ['Points & tiers', 'Configurable loyalty across outlets.'],
      ['Feedback & reviews', 'Catch complaints before they reach Google.'],
      ['Membership & gift cards', 'Prepaid and stored value.'],
    ],
    metrics: [['2.4x', 'repeat visits'], ['35%', 'campaign conversion'], ['4.7★', 'avg. feedback']],
  },
]

export const engage = [
  {
    slug: 'ai-services',
    icon: 'Wrench',
    name: 'AI Services',
    tagline: 'Our team implements AppzetAi with you — from menu upload to go-live.',
    intro: 'Hands-on onboarding, data migration and custom agent development for chains and franchises.',
    features: [
      ['Onboarding & migration', 'Move from your old POS without losing history.'],
      ['Custom integrations', 'ERP, aggregators, payment gateways and hardware.'],
      ['Custom digital experts', 'Agents tuned to your workflows.'],
      ['Staff training', 'On-site and remote training for every role.'],
      ['Go-live support', 'Dedicated engineer during your first week.'],
      ['Managed success', 'Quarterly reviews and optimisation.'],
    ],
  },
  {
    slug: 'bootcamps',
    icon: 'Rocket',
    name: 'Bootcamps',
    tagline: 'Two-day intensives to digitise and automate your outlets.',
    intro: 'Hands-on workshops for owners and managers: set up menu, billing, inventory and your first AI agent.',
    features: [
      ['Owner Bootcamp', 'Numbers every owner should watch, and how to act on them.'],
      ['Manager Bootcamp', 'Daily operations, approvals and shift closing.'],
      ['Retail Bootcamp', 'Barcode, batches, purchase and reorder.'],
      ['Franchise Bootcamp', 'Standardise menus and controls across outlets.'],
      ['Live labs', 'Practice on a sandbox restaurant.'],
      ['Certificate', 'Certification for your team.'],
    ],
  },
  {
    slug: 'academy',
    icon: 'GraduationCap',
    name: 'AI Academy',
    tagline: 'Self-paced learning for every role in your business.',
    intro: 'Short video lessons, guides and quizzes for cashiers, captains, chefs, managers and accountants.',
    features: [
      ['Role-based paths', 'Structured tracks per job role.'],
      ['Video library', 'Short, practical, multilingual lessons.'],
      ['Quizzes & badges', 'Track staff progress.'],
      ['Playbooks', 'Templates for menu launch, festival prep and audits.'],
      ['Release notes', 'Stay current on new features.'],
      ['Free for customers', 'Included with every subscription.'],
    ],
  },
  {
    slug: 'community',
    icon: 'Users',
    name: 'Appzet Community',
    tagline: 'Learn from restaurateurs and retailers like you.',
    intro: 'A private community of owners, chefs and shop managers sharing playbooks, templates and questions.',
    features: [
      ['Peer forums', 'Ask, answer and share what works.'],
      ['Template exchange', 'Menus, recipes and offer templates.'],
      ['City meetups', 'Regular in-person events.'],
      ['Product feedback', 'Vote on the roadmap.'],
      ['Expert AMAs', 'Monthly sessions with chefs and retail experts.'],
      ['Job board', 'Hire trained POS staff.'],
    ],
  },
]

export const resources = [
  {
    slug: 'events',
    icon: 'CalendarDays',
    name: 'Events & Webinars',
    tagline: 'Live and on-demand sessions on running a smarter business.',
    intro: 'Join our upcoming webinars or catch up on recordings.',
    events: [
      ['Oct 08', 'Webinar', 'Cutting food cost by 18% with recipe-level inventory'],
      ['Oct 22', 'Workshop', 'GST for restaurants & retailers: e-invoicing made simple'],
      ['Nov 05', 'Expo', 'AppzetAi at the India Restaurant Tech Summit'],
      ['Nov 19', 'Webinar', 'Festive-season stocking: how AI forecasts demand'],
    ],
  },
]

export const posts = [
  ['Guide', 'How AI is reshaping restaurant back-offices', 'Five workflows agents already run better than spreadsheets.'],
  ['Retail', 'The 80/20 of retail inventory', 'Why 20% of your SKUs hide 80% of your dead stock.'],
  ['Billing', 'GST e-invoicing checklist for small shops', 'What to switch on before the next notification.'],
  ['Operations', 'Kitchen display vs printed KOT', 'Real numbers from 40 outlets that switched.'],
  ['Menu', 'Menu engineering in 30 minutes', 'Use the star/dog matrix to reprice your top 10 dishes.'],
  ['Growth', 'Loyalty programs that actually work', 'Design points and tiers that drive repeat visits.'],
]

export const disciplines = [
  ['Data & Integration Engineering', 'Unify POS, aggregators, payment gateways, accounting and suppliers with certified connectors.', 'Database'],
  ['Menu & Catalog Engineering', 'Governed menus, recipes and SKUs with approvals, allergens and tax metadata.', 'BookOpen'],
  ['Digital Expert Engineering', 'Versioned, benchmarked agents for purchasing, inventory, accounts and guest care.', 'Bot'],
  ['Experience Engineering', 'One experience across POS, captain app, kitchen display, QR menu, web and WhatsApp.', 'LayoutDashboard'],
  ['Security Engineering', 'Role-based actions, encrypted data and per-outlet isolation.', 'Lock'],
  ['Governance & Audit Engineering', 'Void, discount and price controls with a tamper-proof audit trail.', 'ShieldCheck'],
  ['Runtime & Operations Engineering', 'Offline-first cells that keep billing running through outages.', 'Cpu'],
  ['FinOps & Value Engineering', 'Track margin, savings and ROI per outlet, agent and campaign.', 'IndianRupee'],
]

export const journey = [
  ['Objective & Scoping', 'We map your outlets, menus, hardware and goals.'],
  ['Design', 'Roles, tax setup, pricing rules and approval flows are agreed up front.'],
  ['Configure & Migrate', 'Menu, inventory and customers move in — with validation.'],
  ['Test', 'Dry-run bills, KOTs and day-end closes against your real scenarios.'],
  ['Go Live', 'Staged rollout, on-site support and one-click rollback.'],
  ['Improve', 'Weekly insights, agent tuning and cost tracking.'],
]

export const apps = [
  ['Appzet Dine', 'Restaurant OS', 'Table-to-kitchen-to-cash for restaurants, cafés and cloud kitchens.', 'UtensilsCrossed', '/solutions/restaurant-management'],
  ['Appzet Bill', 'Billing & POS', 'GST-ready, offline-first billing on any device.', 'Receipt', '/solutions/billing-pos'],
  ['Appzet Shop', 'Retail OS', 'Barcode, batch, stock and supplier management for shops.', 'Store', '/solutions/retail-shop'],
]

export const awards = [
  ['Best AI Product for Hospitality', 'Restaurant Tech Awards, 2026', 'Recognised for recipe-level inventory agents.'],
  ['Retail Innovator of the Year', 'India Retail Summit, 2026', 'For AI-driven auto-reorder and shelf analytics.'],
  ['Top 10 Billing Platforms', 'SMB Software Review, 2026', 'Ranked on speed, reliability and GST compliance.'],
  ['Customer Love Award', 'Appzet Community, 2025', 'Voted by 2,000+ restaurant and shop owners.'],
]

export const partnerBenefits = [
  ['AI-Native & Ready', 'Secure, compliant, scalable platform partners can build on.'],
  ['Domain Expertise', 'Restaurant, retail and billing agents ready to embed.'],
  ['Real Business Impact', 'Proven results across restaurants and shops.'],
]
