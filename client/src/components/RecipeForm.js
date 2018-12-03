import React from "react";

const RecipeForm = () => (
    <div>
        <h2 className="py-16 text-4xl py-8">Add Recipe</h2>
        <form>
            <div className="mb-4">
                <label className="block mb-1" htmlFor="name">
                    Recipe name
                </label>
                <input
                    className="block appearance-none border w-full py-2 px-2 focus:outline-none focus:border-teal"
                    type="text"
                    id="name"
                    placeholder="Lasagne"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-1" htmlFor="category">
                    Recipe category
                </label>
                <div className="relative">
                    <select
                        id="category"
                        className="block appearance-none border w-full py-2 px-2 focus:outline-none focus:border-teal"
                    >
                        <option value="">Categ1</option>
                        <option value="">Categ2</option>
                        <option value="">Categ3</option>
                    </select>
                    <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <label className="block mb-1" htmlFor="prep-time">
                    Prep time (in minutes)
                </label>
                <input
                    className="block appearance-none border w-full py-2 px-2 focus:outline-none focus:border-teal"
                    type="number"
                    id="prep-time"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-1" htmlFor="kcal">
                    Calories (kcal)
                </label>
                <input
                    className="block appearance-none border w-full py-2 px-2 focus:outline-none focus:border-teal"
                    type="number"
                    id="kcal"
                />
            </div>

            <div className="mb-4">
                <fieldset>
                    <legend className="block mb-1">Tags</legend>
                    <div className="custom-control flex items-center">
                        <input type="checkbox" id="tags--vegan" className="custom-control__checkbox mr-1" />
                        <label className="custom-control__label" htmlFor="tags--vegan">Vegan</label>
                    </div>

                    <div className="custom-control flex items-center">
                        <input type="checkbox" id="tags--diabetic" className="custom-control__checkbox mr-1" />
                        <label className="custom-control__label" htmlFor="tags--diabetic">Diabetic friendly</label>
                    </div>

                    <div className="custom-control flex items-center">
                        <input type="checkbox" id="tags--gluten-free" className="custom-control__checkbox mr-1" />
                        <label className="custom-control__label" htmlFor="tags--gluten-free">Gluten-free</label>
                    </div>

                    <div className="custom-control flex items-center">
                        <input type="checkbox" id="tags--lactose-free" className="custom-control__checkbox mr-1" />
                        <label className="custom-control__label" htmlFor="tags--lactose-free">Lactose-free</label>
                    </div>

                    <div className="mt-2">
                        <div className="mb-1">Add your own custom tags in a comma separated list</div>
                        <input className="block appearance-none border w-full py-2 px-2 focus:outline-none focus:border-teal" id="tags--custom" type="text" placeholder="spicy, greasy, bitter" />
                    </div>
                </fieldset>
            </div>
        </form>
    </div>
);

export default RecipeForm;

// title: { type: String, required: true },
// category: { type: [String], required: true },
// prepTime: { type: Number, required: true },
// kcal: Number,
// tags: [String],
// images: [String],
// description: String,
// instructions: String,
// ingredients: {
//     type: [{
//         amount: String,
//         ingredient: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Ingredient",
//             required: true
//         }
//     }],
//     required: true
// },
// createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
// isPublic: { type: Boolean, default: true, required: true }
