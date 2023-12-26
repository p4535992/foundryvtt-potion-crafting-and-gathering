// =======================
// Mastercrafted models
// =======================

/**
 * @typedef {Object} ComponentMasterCrafted
 * @property {string} id -
 * @property {string} uuid -
 * @property {number} quantity -
 * @property {string} name -
 */

/**
 * @typedef {Object} IngredientMasterCrafted
 * @property {string} id -
 * @property {string} name -
 * @property {RecipeMasterCrafted} recipe -
 * @property {ComponentMasterCrafted[]} components -
 */

/**
 * @typedef {Object} ProductMasterCrafted
 * @property {string} id -
 * @property {string} name -
 * @property {ComponentMasterCrafted[]} components -
 */

// =======================
// Beaver Crafting models
// =======================

/**
 * @typedef {Object} IngredientBeaverCrafting
 * @property {string} id -
 * @property {string} uuid -
 * @property {string} type -
 * @property {string} name -
 * @property {string} image -
 * @property {number} quantity -
 * @property {Object} getEntity -
 * @property {Object} isSame -
 */

/**
 * @typedef {Object} RecipeBeaverCrafting
 * @property {Object.<string, IngredientBeaverCrafting>} ingredients -
 * @property {Object.<string, IngredientBeaverCrafting>} results -
 * @property {value:number, name: string} currency -
 * @property {Object} attendants -
 * @property {fails:number, consume: boolean, ands: {[k: string|number]: {hits:string|number, ors: {[k: string|number]:{ check:string, type:string, uuid:string}}}}} tests -
 * @property {string} macro -
 */

// =======================
// Macros for conversion models
// =======================

/**
 * @param {Object} [recipeMasterCrafted={}]
 * @param {string} [recipeMasterCrafted.id=null] (default null)
 * @param {RecipeBook} [recipeMasterCrafted.recipeBook=null] (default null)
 * @param {string} [recipeMasterCrafted.sound=""] (default "")
 * @param {number} [recipeMasterCrafted.time=null] (default null)
 * @param {string} [recipeMasterCrafted.name=""] (default "")
 * @param {string} [recipeMasterCrafted.macroName=""] (default "")
 * @param {description} [recipeMasterCrafted.description=""] (default "")
 * @param {Object} [recipeMasterCrafted.ownership={}] (default {})
 * @param {IngredientMasterCrafted[]} [recipeMasterCrafted.ingredients=[]] (default [])
 * @param {ProductMasterCrafted[]} [recipeMasterCrafted.products=[]] (default [])
 * @param {string[]} [recipeMasterCrafted.tools=[]] (default [])
 * @param {(0|1)} [recipeMasterCrafted.ingredientsInspection=0] (default 0)
 * @param {(0|1)} [recipeMasterCrafted.productInspection=0] (default 0)
 * @param {string} [recipeMasterCrafted.img="icons/sundries/documents/document-bound-white-tan.webp"] (default "icons/sundries/documents/document-bound-white-tan.webp")
 *
 * @returns {RecipeBeaverCrafting} recipeBeaverCrafting
 */
export function convertJsonRecipeGathererToJsonRecipeBeaverCrafting(recipeMasterCrafted) {
  const [
    id,
    recipeBook,
    sound,
    time,
    name,
    macroName,
    description,
    ownership,
    ingredients,
    products,
    tools,
    ingredientsInspection,
    productInspection,
    img,
  ] = recipeMasterCrafted;
  let recipeBeaverCrafting = null;
  // TODO SOMETHING
  return recipeBeaverCrafting;
}
