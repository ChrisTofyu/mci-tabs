export const trackPageViewAnalytics = (
  pageName: string,
  environment: string
) => {
  // Get previous page details
  const previousPageName = localStorage.getItem('previouspagename') || '';
  const previousURL = localStorage.getItem('prevpageURL') || '';
  const browser = navigator.userAgent.toLowerCase();
  const orientation =
    browser.includes('safari') && browser.includes('chrome')
      ? window.screen.orientation?.type || ''
      : '';

  const pageHierarchyArr = window.location.pathname
    .split('/')
    .filter(Boolean)
    .map(segment => segment.replace('.html', ''));

  const pageHierarchy = Object.fromEntries(
    Array.from({ length: 5 }, (_, i) => [
      `hierarchy${i + 1}`,
      pageHierarchyArr[i] || '',
    ])
  );
  if (!window.adobeDataLayer) window.adobeDataLayer = [];
  window.adobeDataLayer.push({
    event: 'pageview',
    event_details: 'page load',
    page: {
      browser_info: {
        dimensions: window.screen.width + 'X' + window.screen.height,
        orientation: orientation,
      },
      creation_date: '',
      environment,
      hostname: window.location.hostname,
      language: document.documentElement.lang,
      login_status:
        localStorage.getItem('wvc-profile-data') === null ? 'false' : 'true',
      modification_date: '',
      page_hierarchy: pageHierarchy,
      page_name: pageName,
      page_title: document.title.toLocaleLowerCase(),
      page_type: 'generic',
      page_url: window.location.href,
      page_url_without_parameters: window.location.href
        .split('?')[0]
        .replace('.html', ''),
      path_name: window.location.pathname,
      previous_pagename: previousPageName,
      previous_url: previousURL,
      user_agent: window.navigator.userAgent,
    },
  });
};
