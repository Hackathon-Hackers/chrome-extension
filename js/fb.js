/*
  HH Facebook Filter
  fb.js
  This script is loaded any time a Facebook URL is loaded
*/

(function(){

  var manifest = getManifest();
  var name = manifest.name;
  var version = manifest.version;

  // Log the name and version for reference
  console.log("%c Loaded " + name + " Version " + version, 'color: green;');

  function getManifest() {
    var manifest_url = chrome.extension.getURL("manifest.json")
      var xhr = new XMLHttpRequest();
      xhr.open('GET', manifest_url, false);
      xhr.send(null);
      var manifest = JSON.parse(xhr.responseText);
      return manifest;
    }

})();
