export const MENU_ITEMS = {
  categories: [
    {
      id: 'Home',
      name: 'Home',
      href: '/'
    },
    {
      name: 'Sleeping Pills', href: '/sleeping-pills',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' }
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' }
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' }
          ],
        },
      ],
    },
    { name: 'Anxiety Medication', href: '/anti-anxiety' },
    { name: 'Painkillers', href: '/painkillers' },
    { name: 'Nootropics', href: '/nootropics' },
    { name: 'Blog', href: '/blog' },
    { name: 'Faqs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
  ]
}
export const MENU_ITEMS_OLD = [
  {
    label: 'Home',
    pathname: '/'
  },
  {
    label: 'Sleeping Pills',
    pathname: '/sleeping-pills'
  },
  {
    label: 'Anxiety Medication',
    pathname: '/anti-anxiety'
  },
  {
    label: 'Painkillers',
    pathname: '/painkillers'
  },
  {
    label: 'Nootropics',
    pathname: '/nootropics'
  },
  {
    label: 'Blog',
    pathname: '/blog'
  },
  {
    label: 'Faq',
    pathname: '/faqs'
  },
  {
    label: 'Contact',
    pathname: '/contact'
  }
]

