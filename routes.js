module.exports = () => {
  return {
    '/': { page: '/' },
    '/products': { page: '/products' },
    '/checkout/customer': { page: '/checkout', query: { stage: 'customer' }  },
    '/checkout/shipping': { page: '/checkout', query: { stage: 'shipping' } },
    '/checkout/payment': { page: '/checkout', query: { stage: 'payment' } },
    '/cart': { page: '/cart' },
    '/coveclub': { page: '/coveclub' },
    '/account': { page: '/account' },
    '/account/equipment': { page: '/equipment', query: {} },
    '/account/addequipment': { page: '/addequipment' },
  };
}
