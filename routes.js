module.exports = () => {
  return {
    '/': { page: '/' },
    '/login': { page: '/login' },
    '/products': { page: '/products' },
    '/checkout': { page: '/checkout', query: { stage: 'customer' } },
    '/checkout/customer': { page: '/checkout', query: { stage: 'customer' } },
    '/checkout/shipping': { page: '/checkout', query: { stage: 'shipping' } },
    '/checkout/payment': { page: '/checkout', query: { stage: 'payment' } },
    '/cart': { page: '/cart' },
    '/coveclub': { page: '/coveclub' },
    '/account': { page: '/account' },
    '/account/equipment': { page: '/equipment', query: {} },
    '/account/addequipment': { page: '/addequipment' },
    '/account/cancel': { page: '/cancelmembership' },
    '/account/refer': { page: '/refer' },
    '/account/password': { page: '/password' },
    '/account/payoffbalance': { page: '/payoffbalance' },
    '/account/payment': { page: '/payment' },
    '/account/phone': { page: '/phonenumber' },
    '/account/loyalty': { page: '/loyaltycredits' },
    '/account/email': { page: '/email' },
  };
};
