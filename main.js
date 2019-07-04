searchItem = function(word){
  var query = word.selectionText;

  // https://so.szlcsc.com/global.html?k=esp8266ex
  // var tmallSearchParam = '&type=p&vmarket=&spm=875.7931836%2FB.a2227oh.d100';
  var tmallTargetUrl = "http://www.aastocks.com/tc/stocks/quote/quick-quote.aspx?symbol=" + query;
  console.log(tmallTargetUrl);
  chrome.tabs.create({url: tmallTargetUrl});

};

chrome.contextMenus.create({
  title: "Search in aastock",
  contexts:["selection"],
  onclick: searchItem
});
