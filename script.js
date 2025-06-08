function showTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.style.backgroundColor = '#333';
    });

    document.getElementById(tabId).style.display = 'block';

    const activeTab = document.querySelector(`button[onclick="showTab('${tabId}')"]`);
    activeTab.style.backgroundColor = '#555';
}

      if (navigator.serviceWorker) {
        navigator.serviceWorker.register (
          '/github-page-pwa/sw.js',
          {scope: '/github-page-pwa/'}
        )
      }
