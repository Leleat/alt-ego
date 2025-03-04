---
layout: "../../layouts/DevelopLayout.astro"
title: Introduction
---

This page introduces you to GNOME Shell extensions and provides guidance on how to start developing your own.

## What are GNOME Shell Extensions?

GNOME extensions are small pieces of software that customize the functionality of GNOME Shell, the "desktop" of the GNOME desktop environment. Extensions enable you to modify the behavior and appearance of GNOME Shell by adding new features or adjusting existing ones. The possibilities are vast — extensions can range from simple changes like adding a button to the panel or quick settings, to more complex modifications like implementing a tiling window manager.

## Who is this for?

This documentation is focused solely on teaching you how to develop GNOME Shell extensions. You'll need a basic understanding of JavaScript, as extensions are written in GNOME JavaScript (GJS). Unlike JavaScript in the browser, GJS runs on your desktop, so it doesn't have access to typical web or browser APIs. Instead, you'll interact with the GNOME platform APIs.

This documentation won't cover the GNOME platform itself, which is a collection of many components. Most developers only need to focus on a small subset of these components, depending on the functionality their extension requires. Each GNOME component and library provides their own documentation. In the [Additional Resources](#additional-resources) section below are links to other sites, that will be helpful to most extension developers.

## Getting Help

If you run into issues while developing extensions, you can reach out for help. But keep in mind that the GNOME community is relatively small. Many contributors are volunteers, and your questions may not always receive answers — especially if it requires specialized knowledge. But don't be discouraged. Open Source offers you a chance to dig into documentation and source code on your own, learning and becoming an expert in a specific area. The next time someone has your question, you could be the one to answer!

With that said, here you can find helpful people:

- [GNOME extensions matrix](https://matrix.to/#/#extensions:gnome.org) or [IRC](irc://irc.gimpnet.org/shell-extensions): A great place for real-time discussions about GNOME extensions.
- [GNOME's dicourse](https://discourse.gnome.org/): Another excellent resource for asking questions, especially if you're looking for broader community engagement. Use the `extensions` tag to narrow down your focus.

## Additional Resources

Here are some additional resources to help you with extension development:

- [gjs.guide](https://gjs.guide/): Learn about GJS, the JavaScript runtime for GNOME. It's an essential resource for using JavaScript within GNOME and introduces basic concepts like GObject.
- [gjs-docs](https://gjs-docs.gnome.org/): Provides API documentation for GNOME libraries used in GJS. You can explore the specific components you need by enabling them in the sidebar.
- [GNOME Shell Source Code](https://gitlab.gnome.org/GNOME/gnome-shell/-/tree/main/js?ref_type=heads): Since extensions often modify GNOME Shell itself, reviewing its source code will help you understand its internal workings.
- GNOME Component Documentations: Depending on your extension's requirements, you may need to use other GNOME components, all of which have their own documentation.

## Contribute

This documentation is maintained by the community. If you spot any errors or have suggestions for improvements, feel free to contribute! You can find a link to the source code for this documentation [here]() or in the Navbar.

## Next Steps

Now that you understand what GNOME Shell extensions are, you can start writing your first extension by following the [Quick Start](/getting-started/quick-start) Guide. It will walk you through the basic steps needed to create an extension. If you want to dive deeper into the concepts behind GNOME Shell extensions, skip the Quick Start and begin with the [Core Concepts](/development/core-concepts) Guide.
