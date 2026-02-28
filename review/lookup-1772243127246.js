(function(window, undefined) {
  var dictionary = {
    "3ddafdf6-a9e9-4dd8-b046-edb25ef5d8ed": "Activities",
    "968fd3ef-e3ec-4ce1-a3c5-daafc4d74c1a": "Lodging",
    "a65db0f1-64f7-4df4-80b5-ec786f07be5f": "FAQ",
    "6a369cc9-a9e6-48be-8c9b-e8632a0a180c": "Transportationn",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Homepage",
    "ca4a1100-0462-4043-be0e-32e7bcf8513a": "Template 2",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "583fe023-f6c3-4f4d-b7e9-02eb84cca072": "CTA ",
    "e1e0d7b6-308c-4145-9582-1dec36fc8b62": "Menu",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);