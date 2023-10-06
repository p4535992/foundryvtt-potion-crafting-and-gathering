# Potion Crafting & Gathering

![Latest Release Download Count](https://img.shields.io/github/downloads/p4535992/foundryvtt-potion-crafting-and-gathering/latest/module.zip?color=2b82fc&label=DOWNLOADS&style=for-the-badge)

[![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fpotion-crafting-and-gathering&colorB=006400&style=for-the-badge)](https://forge-vtt.com/bazaar#package=potion-crafting-and-gathering)

![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fp4535992%2Ffoundryvtt-potion-crafting-and-gathering%2Fmaster%2Fmodule.json&label=Foundry%20Version&query=$.compatibleCoreVersion&colorB=orange&style=for-the-badge)

![Latest Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fp4535992%2Ffoundryvtt-potion-crafting-and-gathering%2Fmaster%2Fmodule.json&label=Latest%20Release&prefix=v&query=$.version&colorB=red&style=for-the-badge)

[![Foundry Hub Endorsements](https://img.shields.io/endpoint?logoColor=white&url=https%3A%2F%2Fwww.foundryvtt-hub.com%2Fwp-json%2Fhubapi%2Fv1%2Fpackage%2Fpotion-crafting-and-gathering%2Fshield%2Fendorsements&style=for-the-badge)](https://www.foundryvtt-hub.com/package/potion-crafting-and-gathering/)

![GitHub all releases](https://img.shields.io/github/downloads/p4535992/foundryvtt-potion-crafting-and-gathering/total?style=for-the-badge)

[![Translation status](https://weblate.foundryvtt-hub.com/widgets/potion-crafting-and-gathering/-/287x66-black.png)](https://weblate.foundryvtt-hub.com/engage/potion-crafting-and-gathering/)

Most of the original work was done by [action-jay](https://github.com/action-jay/) if you are feeling generous buy him a coffee [![alt-text](https://img.shields.io/badge/-Patreon-%23ff424d?style=for-the-badge)](https://www.patreon.com/user/membership?u=78783518) and if you are feeling even more generous one for me too [![alt-text](https://img.shields.io/badge/-Patreon-%23ff424d?style=for-the-badge)](https://www.patreon.com/p4535992)


This contains compendium db files and roll tables for gathering materials and crafting items using an Herbalism, Alchemist, and Poisoner kits.

The material referenced here comes from "Potion Brewing and Ingredient Gathering for DnD 5e" by piccolo917 available free on GM Binder at [Potion Brewing and Ingredient Gathering for DnD 5e](https://www.gmbinder.com/share/-MNG6P6I8-1tJM3aroaV) or here on the project [Potion Brewing and Ingredient Gathering for DnD 5e (Local)](https://raw.githubusercontent.com/p4535992/foundryvtt-potion-crafting-and-gathering/master/wiki/docs/Potion%20Brewing%20and%20Ingredient%20Gathering%20for%20DnD%205e%20_%20GM%20Binder.pdf)

The Gathering Journal entry and Recipe books require theripper93's **Gatherer and Mastercrafted premium modules**. More information on those at https://theripper93.com/

## Installation

It's always easiest to install modules from the in game add-on browser.

To install this module manually:
1.  Inside the Foundry "Configuration and Setup" screen, click "Add-on Modules"
2.  Click "Install Module"
3.  In the "Manifest URL" field, paste the following url:
`https://raw.githubusercontent.com/p4535992/foundryvtt-potion-crafting-and-gathering/master/src/module.json`
4.  Click 'Install' and wait for installation to complete
5.  Don't forget to enable the module in game using the "Manage Module" button

## Issues

Any issues, bugs, or feature requests are always welcome to be reported directly to the [Issue Tracker](https://github.com/p4535992/foundryvtt-potion-crafting-and-gathering/issues ), or using the [Bug Reporter Module](https://foundryvtt.com/packages/bug-reporter/).

## Api

# Build

## Install all packages

```bash
npm install
```

### dev

`dev` will let you develop you own code with hot reloading on the browser

```bash
npm run dev
```

## npm build scripts

### build

`build` will build and set up a symlink between `dist` and your `dataPath`.

```bash
npm run build
```

### build-watch

`build-watch` will build and watch for changes, rebuilding automatically.

```bash
npm run build-watch
```

### prettier-format

`prettier-format` launch the prettier plugin based on the configuration [here](./.prettierrc)

```bash
npm run-script prettier-format
```

## [Changelog](./CHANGELOG.md)

## Issues

Any issues, bugs, or feature requests are always welcome to be reported directly to the [Issue Tracker](https://github.com/p4535992/foundryvtt-potion-crafting-and-gathering/issues ), or using the [Bug Reporter Module](https://foundryvtt.com/packages/bug-reporter/).

## License

This package is under an [MIT license](LICENSE) and the [Foundry Virtual Tabletop Limited License Agreement for module development](https://foundryvtt.com/article/license/).

## Credit

Thanks to anyone who helps me with this code! I appreciate the user community's feedback on this project!
