// =======================
// Mastercrafted models (version 2.0)
// =======================

/**
 * @typedef {Object} RecipeBookMasterCrafted
 * @property {string} [id=null]
 * @property {string} [name=""]
 * @property {string} [description=""]
 * @property {RecipeMasterCrafted[]} [recipes=RecipeMasterCrafted[]]
 * @property {string[]} [tools=[]]
 * @property {string} [sound=""]
 * @property {Object} [ownership={}]
 * @param {(0|1)} [ingredientsInspection=0] (default 0)
 * @param {(0|1)} [productInspection=0] (default 0)
 * @property {string} [img=MASTERCRAFTED_CONST.RECIPE_BOOK.IMG]
 */

/**
 * @typedef {Object} RecipeMasterCrafted
 * @property {string} [id=null]
 * @property {string} [name=""]
 * @property {string} [description=""]
 * @property {number} [time=null]
 * @property {string} [macroName=""]
 * @property {RecipeBookMasterCrafted} [recipeBook=null]
 * @property {IngredientMasterCrafted[]} [ingredients=[]]
 * @property {ProductMasterCrafted[]} [products=[]]
 * @property {string[]} [tools=[]]
 * @property {string} [sound=""]
 * @property {Object} [ownership={}]
 * @param {(0|1)} [ingredientsInspection=0] (default 0)
 * @param {(0|1)} [productInspection=0] (default 0)
 * @property {string} [img=MASTERCRAFTED_CONST.RECIPE_BOOK.IMG]
 */

/**
 * @typedef {Object} ComponentMasterCrafted
 * @property {string} [id=undefined]
 * @property {string} [uuid=undefined]
 * @property {number} [quantity=undefined]
 * @property {string} [name=undefined]
 */

/**
 * @typedef {Object} IngredientMasterCrafted
 * @property {string} id
 * @property {string} [name=null]
 * @property {ComponentMasterCrafted[]} [components=[]]
 * @property {RecipeMasterCrafted} [recipe=null]
 */

/**
 * @typedef {Object} ProductMasterCrafted
 * @property {string} id
 * @property {string} name
 * @property {ComponentMasterCrafted[]} components
 */

// =======================
// Beaver Crafting models (version 3.5.2)
// =======================

/**
 * @typedef {Object} ResultDataBeaverCrafting
 * @property {Object.<string, string>}  _actorUpdate
 * @property {boolean} _hasException
 * @property {{required: ComponentResultsDataBeaverCrafting,consumed: ComponentResultsDataBeaverCrafting,produced: ComponentResultsDataBeaverCrafting}} _components
 * @property {{name: string,dc: number,total: number}|undefined} [_skill=undefined]
 * @property {{hits: number,fails: number,maxFails:number,maxHits: number}|undefined} [_tests=undefined]
 * @property {CurrencyResultDataBeaverCrafting|undefined} [_currencyResult=undefined]
 * @property {Object.<string, ComponentChatDataBeaverCrafting>} _chatAddition
 * @property {RecipeDataBeaverCrafting} _recipe
 */

/**
 * @typedef {Object} CraftingDataBeaverCrafting
 * @property {string|undefined} [uuid=undefined]
 * @property {string} name
 * @property {string} img
 * @property {number} startAt
 * @property {number} lastAt
 * @property {number} endAt
 * @property {ResultDataBeaverCrafting} result
 * @property {RecipeDataBeaverCrafting} recipe
 * @property {Boolean|undefined} [isFinished=undefined]
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
 * @property {string|undefined} [itemType=undefined] if it is of type item there is an itemType
 * @property {string|undefined} [jsonData=undefined] to store a component completely
 * @property {Object.<string, Object>|undefined} [flags=undefined] module specific flags (the key is the module id )
 */

/**
 * @typedef {Object} RecipeDataBeaverCrafting
 * @property {Object.<string, Object.<string, ComponentDataBeaverCraftingBeaverCrafting>>} input
 * @property {Object.<string, Object.<string, ComponentDataBeaverCraftingBeaverCrafting>>} output
 * @property {Object.<string, Object.<string, ComponentDataBeaverCraftingBeaverCrafting>>} required
 * @property {Object.<string, ComponentDataBeaverCrafting>|undefined} [ingredients=undefined]
 * @property {Object.<string, ComponentDataBeaverCrafting>|undefined} [results=undefined]
 * @property {Object.<string, ComponentDataBeaverCrafting>|undefined} [attendants=undefined]
 * @property {TestsBeaverCrafting|undefined} [tests=undefined]
 * @property {SkillBeaverCrafting|undefined} [skill=undefined]
 * @property {CurrencyBeaverCrafting|undefined} [currency=undefined]
 * @property {string|undefined} [tool=undefined]
 * @property {string|undefined} [macro=undefined]
 * @property {string|undefined} [folder=undefined]
 * @property {string|undefined} [instruction=undefined]
}

// =======================
// Macros for conversion models
// =======================

/**
 * @param {RecipeMasterCrafted} recipeMasterCrafted
 * @returns {RecipeDataBeaverCrafting} recipeBeaverCrafting
 */
export function convertJsonRecipeGathererToJsonRecipeBeaverCrafting(recipeMasterCrafted) {
  const {
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
  } = recipeMasterCrafted;
  let recipeBeaverCrafting = null;
  // TODO SOMETHING
  return recipeBeaverCrafting;
}

/**
 *
 * @param {RecipeDataBeaverCrafting} recipeBeaverCrafting
 * @returns {RecipeMasterCrafted} recipeMasterCrafted
 */
export function convertJsonRecipeBeaverCraftingToJsonRecipeGatherer(recipeBeaverCrafting) {
  const {
    input,
    output,
    required,
    ingredients,
    results,
    attendants,
    tests,
    skill,
    currency,
    tool,
    macro,
    folder,
    instruction,
  } = recipeBeaverCrafting;
  let recipeMasterCrafted = null;
  // TODO SOMETHING
  return recipeMasterCrafted;
}
