searchTaobao = function(word){
  var query = word.selectionText;

  var taobaoTargetUrl = "https://s.taobao.com/search?q=" + query;
  console.log(taobaoTargetUrl);
  chrome.tabs.create({url: taobaoTargetUrl});

};

chrome.contextMenus.create({
  title: "Search in Taobao",
  contexts:["selection"],
  onclick: searchTaobao
});
