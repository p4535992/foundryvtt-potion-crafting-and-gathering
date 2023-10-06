import { setApi } from "../module";
import API from "./API/api";
import CONSTANTS from "./constants/constants";
export const initHooks = () => {
  // warn("Init Hooks processing");
  // setup all the hooks
  //   Hooks.once("socketlib.ready", registerSocket);
  //   registerSocket();
};

export const setupHooks = () => {
  // warn("Setup Hooks processing");
  setApi(API);
};

export const readyHooks = async () => {
  if (!game.user.isGM || !game.settings.get(CONSTS.MODULE_ID, 'booksImported')){
    return;
  }

  async function importAll() {
    const ROOT = CONSTANTS.MODULE_FOLDER;
    const BOOKS = (await FilePicker.browse("user", ROOT)).files.filter((f) => f.endsWith(".json"));
    for (let book of BOOKS) {
      const bookData = await fetch(book).then((r) => r.json());
      const bookObj = new ui.RecipeApp.RecipeBook(bookData);
      await bookObj.saveData();
    }
    ui.notifications.notify("Potion Crafting & Gathering - Recipe Books Imported");
    await game.packs.get(CONSTANTS.PACK_UUID_ROLLTABLES).importAll({ keepId: true });
    await game.packs.get(CONSTANTS.PACK_UUID_JOURNALS).importAll({ keepId: true });
    new ui.RecipeApp().render(true);
    await game.settings.set(CONSTANTS.MODULE_ID, "booksImported", false);
  }

  Dialog.confirm({
    title: game.modules.get(CONSTANTS.MODULE_ID).title, // "Potion Crafting & Gathering",
    content: "Do you want to import all tables, journals and recipes?",
    yes: () => {
      importAll();
    },
    no: () => {
      game.settings.set(CONSTANTS.MODULE_ID, "booksImported", false);
    },
    defaultYes: true,
  });
};
