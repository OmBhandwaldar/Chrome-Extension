document.getElementById('fetchTitleButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let currentTab = tabs[0];
      let title = currentTab.title; 
  
      const titleDiv = document.getElementById('title');
      titleDiv.textContent = `Tab Title: ${title}`;
  
      titleDiv.classList.remove('fade-in'); 
      void titleDiv.offsetWidth; 
      titleDiv.classList.add('fade-in');
    });
  });
  