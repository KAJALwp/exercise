# OPRY

WordPress Theme

### Requirements

`opry` requires the following dependencies:

- [Node.js](https://nodejs.org/)
- [NVM](https://github.com/nvm-sh/nvm)

### Quick Start

**Manually**

Clone or download this repository, change its name to something else (like, say, `test`), and then you'll need to do a nine-step find and replace on the name in all the templates. **Please make sure to on capslock before start search and replace.**

1. Search for `opry` the text replace with: `test` .
2. Search for `opry` the text replace with: `test` .
3. Search for `OPRY` the text replace with: `TEST` .
4. Search for `OPRY` the text replace with: `TEST` .
5. Search for `Opry` the text replace with: `Test` .
6. Search for `opry` the text replace with: `Test` .
7. Delete `phpcbf.xml`, `phpcs.xml` and `composer.json` file from theme root directory.
8. Rename class file `opry-theme/includes/classes/class-opry.php` to `opry-theme/includes/classes/class-test.php` .
9. Rename theme folder `opry-theme` to `test` .

## Build Process

**Install**

Check for Proper node version

```bash
cd assets
nvm use
```

Install Dependency

```bash
npm install
```

**During development**

```bash
npm run start
```

**Production**

```bash
npm run build
```

**Scaffold a Block**

```bash
npm run scaffold
```

You will be asked a few questions and get the base files for a block.

Steps to follow:

1. Scaffold a new block with `npm run scaffold`
2. Supply block name, eg. `Prime Demo`
3. Supply a block slug. The slug will be the name slugified, eg. `prime-demo`
4. Supply an optional description.
5. Select or search for a dashicon from provided options. eg. `smiley`.
6. Look in assets/src/blocks/prime-demo/