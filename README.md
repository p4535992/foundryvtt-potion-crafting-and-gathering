# Potion Crafting & Gathering

![Latest Release Download Count](https://img.shields.io/github/downloads/p4535992/foundryvtt-potion-crafting-and-gathering/latest/module.zip?color=2b82fc&label=DOWNLOADS&style=for-the-badge)

[![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fpotion-crafting-and-gathering&colorB=006400&style=for-the-badge)](https://forge-vtt.com/bazaar#package=potion-crafting-and-gathering)

![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fp4535992%2Ffoundryvtt-potion-crafting-and-gathering%2Fmaster%2Fmodule.json&label=Foundry%20Version&query=$.compatibleCoreVersion&colorB=orange&style=for-the-badge)

![Latest Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Fp4535992%2Ffoundryvtt-potion-crafting-and-gathering%2Fmaster%2Fmodule.json&label=Latest%20Release&prefix=v&query=$.version&colorB=red&style=for-the-badge)

[![Foundry Hub Endorsements](https://img.shields.io/endpoint?logoColor=white&url=https%3A%2F%2Fwww.foundryvtt-hub.com%2Fwp-json%2Fhubapi%2Fv1%2Fpackage%2Fpotion-crafting-and-gathering%2Fshield%2Fendorsements&style=for-the-badge)](https://www.foundryvtt-hub.com/package/potion-crafting-and-gathering/)

![GitHub all releases](https://img.shields.io/github/downloads/p4535992/foundryvtt-potion-crafting-and-gathering/total?style=for-the-badge)

[![Translation status](https://weblate.foundryvtt-hub.com/widgets/potion-crafting-and-gathering/-/287x66-black.png)](https://weblate.foundryvtt-hub.com/engage/potion-crafting-and-gathering/)

Most of the original work was done by [action-jay](https://github.com/action-jay/) if you are feeling generous buy him a coffee [![alt-text](https://img.shields.io/badge/-Patreon-%23ff424d?style=for-the-badge)](https://www.patreon.com/user/membership?u=78783518) and if you are feeling even more generous one for me too [![alt-text](https://img.shields.io/badge/-Patreon-%23ff424d?style=for-the-badge)](https://www.patreon.com/p4535992)

# NOTE: This module is been offcialy transfered to [Potion Crafting and Gathering by theRipper93](https://github.com/theripper93/potion-crafting-and-gathering), but for anyone interested i will keep this fork for my own purpose as developer.

This guide provides expanded rules and details for potion brewing and ingredient gathering in Dungeons & Dragons 5th Edition. It focuses on three main toolkits: alchemist supplies, herbalism kit, and poisoner's kit. The document includes:

1. **Recipes**: Guidelines on how to use, obtain, and price recipes for potions and poisons. Recipes are categorized by rarity (common, uncommon, rare, very rare) and include specific ingredients and crafting times.

2. **Ingredient Gathering**: Rules for finding and harvesting plants, fungi, and animal parts. The difficulty of gathering ingredients is based on the environment and the rarity of the items.

3. **Potion Making Leveling System**: A system for gaining experience in potion making. Players can level up their potion-making abilities, gaining bonuses to their crafting checks.

4. **Alchemist Supplies, Herbalism Kit, and Poisoner's Kit**: Detailed contents and uses for each kit, including common to very rare recipes that can be crafted using these kits.

5. **Gatherable Plants and Fungi, Inorganic Materials, Harvestable Creature Parts**: Lists of ingredients that can be gathered from various environments, along with their uses in crafting potions and poisons.

6. **Crafting Rules**: Specific rules for crafting potions, including required materials, time, costs, and the process for making crafting checks.

## Foundry Integration

This content has been adapted to work with FVTT by [action\_jay](<http://www.actionjay.com/>) with appropriate tables and journals. It's intended to be used with the [Mastercrafted](https://foundryvtt.com/packages/mastercrafted) and [Gatherer](https://foundryvtt.com/packages/gatherer) modules to automate the gathering and crafting process but it can be used without the modules.

The material referenced here comes from "Potion Brewing and Ingredient Gathering for DnD 5e" by piccolo917 available free on GM Binder at [Potion Brewing and Ingredient Gathering for DnD 5e](https://www.gmbinder.com/share/-MNG6P6I8-1tJM3aroaV) or here on the project [Potion Brewing and Ingredient Gathering for DnD 5e (Local)](https://raw.githubusercontent.com/p4535992/foundryvtt-potion-crafting-and-gathering/master/wiki/docs/Potion_Brewing_and_Ingredien_Gathering_for_DnD5e_GM_Binder.pdf)

These [recipes](/src/assets/recipes/) can be imported into theripper93's Mastercrafted module. You'll need to create a placeholder recipe book, then right click and import the desired collection from these files.

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

TODO

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

### build

`build` will build and set up a symlink between `dist` and your `dataPath`.

```bash
npm run build
```

### build:watch

`build:watch` will build and watch for changes, rebuilding automatically.

```bash
npm run build:watch
```

### prettier-format

`prettier-format` launch the prettier plugin based on the configuration [here](./.prettierrc)

```bash
npm run-script prettier-format
```

### lint

`lint` launch the eslint process based on the configuration [here](./.eslintrc.json)

```bash
npm run-script lint
```

### lint:fix

`lint:fix` launch the eslint process with the fix argument

```bash
npm run-script lint:fix
```

### build:json

`build:json` unpack LevelDB pack on `src/packs` to the json db sources in `src/packs/_source`very useful for backup your items and manually fix some hard issue with some text editor

```bash
npm run-script build:json
```

### build:clean

`build:clean` clean packs json sources in `src/packs/_source`. NOTE: usually this command is launched after the command `build:json` and after make some modifications on the json source files with some text editor, but before the `build:db`

```bash
npm run-script build:clean
```

### build:db

`build:db` packs the json db sources in `src/packs/_source` to LevelDB pack on `src/packs` with the new jsons. NOTE: usually this command is launched after the command `build:json` and after make some modifications on the json source files with some text editor

```bash
npm run-script build:db
```
## [Changelog](./CHANGELOG.md)

## Issues

Any issues, bugs, or feature requests are always welcome to be reported directly to the [Issue Tracker](https://github.com/p4535992/foundryvtt-potion-crafting-and-gathering/issues ), or using the [Bug Reporter Module](https://foundryvtt.com/packages/bug-reporter/).

## License

This package is under an [MIT license](LICENSE) and the [Foundry Virtual Tabletop Limited License Agreement for module development](https://foundryvtt.com/article/license/).

## Credit

## Support the original creator of the homebrew

- [Source](https://www.gmbinder.com/share/-MNG6P6I8-1tJM3aroaV)
- [Patreon](https://www.patreon.com/user/membership?u=78783518)
- [Tips](https://www.buymeacoffee.com/piccolo917)

## Credits

- Content is by [piccolo917](<https://www.patreon.com/user/posts?u=78783518>)
- Source: [Potion Brewing and Ingredient Gathering for DnD 5e](<https://www.gmbinder.com/share/-MNG6P6I8-1tJM3aroaV>)
- Nerd work by [action\_jay](<http://www.actionjay.com/>)
- Gatherer and Mastercrafted modules and package management by [theripper93](<https://www.patreon.com/theripper93/posts>)

Thanks to anyone who helps me with this code! I appreciate the user community's feedback on this project!
