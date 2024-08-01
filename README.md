Minimal repo to show a vite bug when using pnpm9 with https dependency
======================================================================

This is a minimal repo to illustrate https://github.com/vitejs/vite/issues/17805

You can view the pb with `./test.sh 9` (or `./install.sh 9` then `vite` or `vite build --debug`). 

It's ok installing dependencies with pnpm8 (`./test.sh 8` or `./install.sh 8` then `vite` or `vite build --debug`)

It seems to happen when a dependency is declared with its repo url (not in the official npm repo nor github) and has also a dependency is declared with its repo url (see sampleOk branch to have this kind of dependency but not importing anything else).
