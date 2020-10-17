// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



  chrome.storage.local.get('signed_in', function(data) {
    if (data.signed_in) {
      chrome.browserAction.setPopup({popup: 'popup.html'});
    } else {
      chrome.browserAction.setPopup({popup: 'popup.html'});
    }
  });

chrome.browserAction.setBadgeText({text: ''});
chrome.browserAction.setBadgeBackgroundColor({color: '#4688F1'});
