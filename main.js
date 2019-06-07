searchItem = function(word){
  var query = word.selectionText;

  // https://so.szlcsc.com/global.html?k=esp8266ex
  // var tmallSearchParam = '&type=p&vmarket=&spm=875.7931836%2FB.a2227oh.d100';
  var tmallTargetUrl = "https://so.szlcsc.com/global.html?k=" + query;
  console.log(tmallTargetUrl);
  chrome.tabs.create({url: tmallTargetUrl});

  var tmallSearchParam = '&type=p&vmarket=&spm=875.7931836%2FB.a2227oh.d100';
  var tmallTargetUrl = "https://list.tmall.com/search_product.htm?q=" + query+ tmallSearchParam;
  console.log(tmallTargetUrl);
  chrome.tabs.create({url: tmallTargetUrl});

  var taobaoSearchParam = '&sort=sale-desc';
  var taobaoTargetUrl = "https://s.taobao.com/search?q=" + query+ taobaoSearchParam;
  console.log(taobaoTargetUrl);
  chrome.tabs.create({url: taobaoTargetUrl});

};

chrome.contextMenus.create({
  title: "Search in Taobao",
  contexts:["selection"],
  onclick: searchItem
});
