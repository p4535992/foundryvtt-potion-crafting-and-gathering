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

/**
 * @param {Object} recipeMasterCrafted
 * @param {string} recipe.id (default null)
 * @param {RecipeBook} recipe.recipeBook (default null)
 * @param {string} recipe.sound (default "")
 * @param {number} recipe.time (default null)
 * @param {string} recipe.name (default "")
 * @param {string} recipe.macroName (default "")
 * @param {description} recipe.description (default "")
 * @param {Object} recipe.ownership (default {})
 * @param {IngredientMasterCrafted[]} recipe.ingredients (default [])
 * @param {ProductMasterCrafted[]} recipe.products (default [])
 * @param {string[]} recipe.tools (default [])
 * @param {(0|1)} recipe.ingredientsInspection (default 0)
 * @param {(0|1)} recipe.productInspection (default 0)
 * @param {string} recipe.img (default "icons/sundries/documents/document-bound-white-tan.webp")
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
  return recipeBeaverCrafting;
}
