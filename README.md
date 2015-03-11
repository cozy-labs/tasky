# Description

Tasky is a simple task manager based on tagging. The interface is very reactive
and straightforward. Tagging makes task filtering super easy. Tasky can be
installed on your own server or on your desktop. You decide the way you want to
use it!

# Install

    npm install cozy-tasky -g

# Hack

Clone this repository, install dependencies and run server (it requires Node.js
and Coffee-script)

    npm install -g coffee-script
    git clone git://github.com/cozy-labs/cozy-tasky.git
    cd tasky
    npm install
    npm run dev # starts everything you need

**DISCLAMER**
Windows users, the build system assume that you can run the following UNIX commands:

* cat
* cp
* rm
* sed
* touch
* mkdir

If you have any trouble finding a solution, let me know you are intested, so we can look into it together.

# Contributing
Let me know what you would like to see in the application so we can discuss it. The simplest way to do it is [opening an issue](https://github.com/cozy-labs/tasky/issues/new).

Make sure there is not already an issue discussing the feature or the bug you are about to post about!

# Contributors
* @bnjbvr for the code, precious feedback and ideas machinegun
* @benibur for the thinking on the dynamic tree based on tags
* @frankrousseau for the feedback and ideas

# About Cozy

This app is suited to be deployed on the Cozy platform. Cozy is the personal
server for everyone. It allows you to install your every day web applications
easily on your server, a single place you control. This means you can manage
efficiently your data while protecting your privacy without technical skills.

More informations and hosting services on:
http://cozycloud.cc

# Cozy on IRC
Feel free to check out our IRC channel (#cozycloud at freenode.net) if you have any technical issues/inquiries or simply to speak about Cozy cloud in general.
