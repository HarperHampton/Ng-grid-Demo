Ng-grid Demo
==================

This is a project to show how `ng-grid` works with `AngularJS`, and its performance.

## Getting Started(development)

This project requires stable [Node.js](http://nodejs.org/) versions `>= 0.8.0`, the [Node.js](http://nodejs.org/) package manager as development environment. Please be aware of that.

And all the guide described below are based on windows 7 OS.

### Brief Introduction

<b>[Git](http://git-scm.com/downloads)</b> v1.8.0(or above) as  version control system.

<b>[Gulp](http://gulpjs.com/)</b> v3.5.2(or above) as  the streaming build system.

<b>[Bower](http://bower.io/)</b> v1.2.7(or above) as project dependency manager should be installed via [npm](https://npmjs.org/).

<b>[Livereload](http://livereload.com/)</b> v2.0.8(or above) as debug assistant for each browser.

### Environment setup

#### [Sublime Text2](http://www.sublimetext.com/)(Recommended IDE) configuration

Install [Package Control](https://sublime.wbond.net/), refer to [Installation Guide](https://sublime.wbond.net/installation).

Install [Emmet](http://emmet.io/), refer to [Installation Guide](https://github.com/sergeche/emmet-sublime#how-to-install).

Install [AdvancedNewFile](https://github.com/skuroda/Sublime-AdvancedNewFile), refer to [Installation Guide](https://github.com/skuroda/Sublime-AdvancedNewFile#installation).

Install [jsFormat](https://github.com/jdc0589/JsFormat), refer to [Installation Guide](https://github.com/jdc0589/JsFormat#install).

1. Open sublime text2.
2. Click `Preferences` -> `Settings - User` to open the setting file.
3. Copy following configuration to the opened setting file:

```JSON
{
    "color_scheme": "Packages/Color Scheme - Default/Blackboard.tmTheme",
    "font_size": 13,
    "ignored_packages": [
        "Vintage"
    ],
    "tab_size": 4,
    "translate_tabs_to_spaces": true,
    "use_tab_stops": false,
    "detect_indentation": true,
    "auto_indent": true,
    "smart_indent": true,
    "default_encoding": "UTF-8"
}
```

#### Install Livereload addon for browser

Install [Livereload](http://livereload.com/), refer to [Installation Guide](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-).

#### Git configuration

Run following command in Git Bash and the root folder of Ng-grid-Demo project:

```shell
git config --local user.name "<name>"
git config --local user.email "<email>"
git config --local core.excludesfile $HOME/.gitignore
git config --local core.autocrlf input
git config --local color.ui true
git config --local gui.encoding utf-8
git config --local push.default tracking
git config --local branch.autosetupmerge always
git config --local branch.autosetuprebase always
git config --local alias.co checkout
git config --local alias.st status
git config --local alias.br branch
```

Note: `name` and `email` should be modified manually.

Open `Git` installation directory, find `%Git_home%\etc\git-completion.bash`, append following content:

```Shell
alias ls='ls --show-control-chars --color=auto'
alias ll='ls -all'
alias pull='git pull --release'
alias push='git push'
```

#### Install Gulp globally

Run following command in Git Bash:

```shell
npm install -g gulp
```

##### Install Gulp plugins

Run following command in Git Bash:

```shell
npm install
```

#### Install Bower

Run following command in Git Bash:

```shell
npm install -g bower
```

##### Install project's dependencies

Run following command in Git Bash:

```shell
bower install
```
