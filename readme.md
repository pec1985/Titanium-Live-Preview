[Titanium Live Preview] - Test and edit your app while running on device
================================

What is it?
---------------------------------------
This is a concept for editing an app and testing on a device without having to push through iTunes and sync every time.  If you follow the instructions in the code comments you should be able to set it up quickly.  Post any questions you have in Github under 'issues'.

Loosely inspired by Unity's live testing: http://unity3d.com/unity/features/iphone-publishing

Probably the best thing would be to have this integrated in to Titanium Developer using some kind of Bonjour service or something similar.  (would be cool to have an option to toggle in the tiapp.xml file)

Since the JS files get processed at runtime, this will work most the time.  However, there are sometimes when a full re-install / re-build is necessary so depending on what you're actually changing in the code will affect if this works or not.

NOTE:  This is against Apple's TOS so it's only good for TESTING your application on a live device.  If you try to submit your app like this, it will probably get rejected.  Make sure you put your app files from the json file BACK in the local files when you're done testing.

