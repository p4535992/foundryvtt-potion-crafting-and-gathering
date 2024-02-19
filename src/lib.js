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
// Beaver Crafting models (version 3.5.2)
// =======================

/**
 * @typedef {Object} ResultDataBeaverCrafting
 * @property {Object.<string, string>}  _actorUpdate
 * @property {boolean} _hasException
 * @property {{required: ComponentResultsDataBeaverCrafting,consumed: ComponentResultsDataBeaverCrafting,produced: ComponentResultsDataBeaverCrafting}} _components
 * @property {{name: string,dc: number,total: number}|undefined} _skill
 * @property {{hits: number,fails: number,maxFails:number,maxHits: number}|undefined} _tests
 * @property {CurrencyResultDataBeaverCrafting|undefined} _currencyResult
 * @property {Object.<string, ComponentChatDataBeaverCrafting>} _chatAddition
 * @property {RecipeDataBeaverCrafting} _recipe
 */

/**
 * @typedef {Object} CraftingDataBeaverCrafting
 * @property {string|undefined} uuid
 * @property {string} name
 * @property {string} img
 * @property {number} startAt
 * @property {number} lastAt
 * @property {number} endAt
 * @property {ResultDataBeaverCrafting} result
 * @property {RecipeDataBeaverCrafting} recipe
 * @property {Boolean|undefined} isFinished
 * @property {Object[]} restore
}

/**
 * @typedef {Object} ComponentResultsDataBeaverCrafting
 * @property {ComponentResultDataBeaverCrafting[]} _data
 */

/**
 * @typedef {Object} ComponentResultDataBeaverCrafting
 * @property {ComponentDataBeaverCrafting} component
 * @property {Boolean} isProcessed
 * @property {number} originalQuantity
 * @property {UserInteractionBeaverCrafting} userInteraction
 */

/**
 * @typedef {"always" | "never" | "onSuccess"} UserInteractionBeaverCrafting
 */
/**
 * @typedef {"consumed" | "required" | "produced"}  ComponentTypeBeaverCrafting
 */

/**
 * @typedef {"required" | "input" | "output"} DataTypeBeaverCrafting
 */

/**
 * @typedef {"skill" | "tool" | "ability" | "hit"} TestTypeBeaverCrafting
 */

/**
 * @typedef {"success"|"error"|"locked"|"undefined"|"unknown"} ComponentStatusBeaverCrafting
 */

/**
 * @typedef {Object} ComponentChatDataBeaverCrafting
 * @property {ComponentDataBeaverCrafting} component
 * @property {ComponentTypeBeaverCrafting} type
 * @property {ComponentStatusBeaverCrafting} status
 * @property {Boolean} isProcessed
 */

/**
 * @typedef {Object} TestsBeaverCrafting
 * @property {number} fails
 * @property {Boolean} consume
 * @property {Object.<number, TestOrBeaverCrafting>} ands
 */

/**
 * @typedef {Object} TestAndBeaverCrafting
 * @property {number} hits
 * @property {Object.<number, TestOrBeaverCrafting>} ors
 */

/**
 * @typedef {Object} TestOrBeaverCrafting
 * @property {number} check
 * @property {TestTypeBeaverCrafting} type
 * @property {string} uuid
 */

/**
 * @typedef {Object} SkillBeaverCrafting
 * @property {string} name
 * @property {number} dc
 * @property {Boolean} consume
 */

/**
 * @typedef {Object} CurrencyBeaverCrafting
 * @property {string} name
 * @property {number} value
 */

/**
 * @typedef {Object} ComponentDataBeaverCrafting
 * @property {string} id
 * @property {string} uuid
 * @property {string} type
 * @property {string} name
 * @property {string} img
 * @property {number} quantity
 * @property {string|undefined} itemType if it is of type item there is an itemType
 * @property {string|undefined} jsonData to store a component completely
 * @property {Object.<string, Object>|undefined} flags module specific flags (the key is the module id )
 */

/**
 * @typedef {Object} RecipeDataBeaverCrafting
 * @property {Object.<string, Object.<string, ComponentDataBeaverCraftingBeaverCrafting>>} input
 * @property {Object.<string, Object.<string, ComponentDataBeaverCraftingBeaverCrafting>>} output
 * @property {Object.<string, Object.<string, ComponentDataBeaverCraftingBeaverCrafting>>} required
 * @property {Object.<string, ComponentDataBeaverCrafting>|undefined} ingredients
 * @property {Object.<string, ComponentDataBeaverCrafting>|undefined} results
 * @property {Object.<string, ComponentDataBeaverCrafting>|undefined} attendants
 * @property {TestsBeaverCrafting|undefined} tests
 * @property {SkillBeaverCrafting|undefined} skill
 * @property {CurrencyBeaverCrafting|undefined} currency
 * @property {string|undefined} tool
 * @property {string|undefined} macro
 * @property {string|undefined} folder
 * @property {string|undefined} instruction
}

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
