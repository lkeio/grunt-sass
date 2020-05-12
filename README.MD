# Grunt WorkFlow with SASS/SCSS
Configuration to automise SASS workflow using Grunt.

# Features:
- Processing SASS
- Creation a Virtual Host
- Watch all Sass files inside ```src/``` for updates
- Cross Browser Compatibility with ```autoprefixer```

# Requirments
- First let's install ruby and sass: ```sudo apt-get install ruby sass``` OR ```gem install sass```
- Then let's install Grant CLI: ``` npm install -g grunt-cli  ```
- For auto browser refresh, install LiveReload extension in your browser of choice [LiveReload for chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en), [LiveReload for Firefox](https://addons.mozilla.org/it/firefox/addon/livereload-web-extension/)

NOTE: make sure to set the option "this can read and change site data -> on 127.0.0.1", otherwise the browser does not refresh.

# Install
- ``` git clone https://github.com/lkeio/grunt-sass.git && cd grunt-sass ```
- ``` npm install ```

# Usage 
- run ``` grunt ``` in the root of your folder
- visite [http://localhost:8000](http://localhost:8000) Or [http://127.0.0.1:8000](http://127.0.0.1:8000)
- Ready to go
