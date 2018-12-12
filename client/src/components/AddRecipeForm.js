import React, { Component } from "react";
import CreatableSelect from "react-select/lib/Creatable";

class AddRecipeForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            category: "categ1",
            prepTime: 0,
            kcal: 0,
            predefinedTags: {
                vegan: false,
                diabetic: false,
                "gluten-free": false,
                "lactose-free": false
            },
            customTags: "",
            description: "",
            instructions: "",
            isPublic: false
        };

        // this bindings
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handlePrepTimeChange = this.handlePrepTimeChange.bind(this);
        this.handleCalChange = this.handleCalChange.bind(this);
        this.handlePredefinedTagsChange = this.handlePredefinedTagsChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleIsPublicChange = this.handleIsPublicChange.bind(this);
        this.handleCustomTagsChange = this.handleCustomTagsChange.bind(this);
        this.handleInstructionsChange = this.handleInstructionsChange.bind(this);
    }

    // input onChange methods
    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleCategoryChange(e) {
        this.setState({ category: e.target.value });
    }

    handlePrepTimeChange(e) {
        this.setState({ prepTime: e.target.value });
    }

    handleCalChange(e) {
        this.setState({ kcal: e.target.value });
    }

    handlePredefinedTagsChange(e) {
        const [name, value] = [e.target.name, e.target.checked];
        const copy = Object.assign({}, this.state.predefinedTags);
        copy[name] = value;
        this.setState({ predefinedTags: copy });
    }

    handleDescriptionChange(e) {
        this.setState({ description: e.target.value });
    }

    handleIsPublicChange(e) {
        this.setState({ isPublic: e.target.checked });
    }

    handleCustomTagsChange(e) {
        this.setState({ customTags: e.target.value });
    }

    handleInstructionsChange(e) {
        this.setState({ instructions: e.target.value });
    }

    render() {
        return (
            <div>
                <h2 className="py-16 text-4xl py-8">Add Recipe</h2>
                <form>
                    {/* Name input */}
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="name">
                            Recipe name
                        </label>
                        <input
                            className="block appearance-none border w-full py-2 px-2 focus:outline-none focus:border-teal"
                            type="text"
                            id="name"
                            placeholder="Lasagne"
                            onChange={this.handleNameChange}
                        />
                    </div>

                    {/* Category select */}
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="category">
                            Recipe category
                        </label>
                        <div className="relative">
                            <select
                                id="category"
                                className="block appearance-none border w-full py-2 px-2 focus:outline-none focus:border-teal"
                                onChange={this.handleCategoryChange}
                                value={this.state.category}
                            >
                                <option value="categ1">Categ1</option>
                                <option value="categ2">Categ2</option>
                                <option value="categ3">Categ3</option>
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

                    {/* Prep time input */}
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="prep-time">
                            Prep time (in minutes)
                        </label>
                        <input
                            className="block appearance-none border w-full py-2 px-2 focus:outline-none focus:border-teal"
                            type="number"
                            id="prep-time"
                            onChange={this.handlePrepTimeChange}
                        />
                    </div>

                    {/* Calories input */}
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="kcal">
                            Calories (kcal)
                        </label>
                        <input
                            className="block appearance-none border w-full py-2 px-2 focus:outline-none focus:border-teal"
                            type="number"
                            id="kcal"
                            onChange={this.handleCalChange}
                        />
                    </div>

                    {/* Tags checkboxes + custom tags */}
                    <div className="mb-4">
                        <fieldset>
                            <legend className="block mb-1">Tags</legend>

                            <div className="custom-control flex items-center">
                                <input
                                    type="checkbox"
                                    id="tags--vegan"
                                    name="vegan"
                                    className="custom-control__checkbox mr-1"
                                    onChange={this.handlePredefinedTagsChange}
                                    checked={this.state.predefinedTags.vegan}
                                />
                                <label
                                    className="custom-control__label"
                                    htmlFor="tags--vegan"
                                >
                                    Vegan
                                </label>
                            </div>

                            <div className="custom-control flex items-center">
                                <input
                                    type="checkbox"
                                    id="tags--diabetic"
                                    name="diabetic"
                                    className="custom-control__checkbox mr-1"
                                    onChange={this.handlePredefinedTagsChange}
                                    checked={this.state.predefinedTags.diabetic}
                                />
                                <label
                                    className="custom-control__label"
                                    htmlFor="tags--diabetic"
                                >
                                    Diabetic friendly
                                </label>
                            </div>

                            <div className="custom-control flex items-center">
                                <input
                                    type="checkbox"
                                    id="tags--gluten-free"
                                    name="gluten-free"
                                    className="custom-control__checkbox mr-1"
                                    onChange={this.handlePredefinedTagsChange}
                                    checked={this.state.predefinedTags["gluten-free"]}
                                />
                                <label
                                    className="custom-control__label"
                                    htmlFor="tags--gluten-free"
                                >
                                    Gluten-free
                                </label>
                            </div>

                            <div className="custom-control flex items-center">
                                <input
                                    type="checkbox"
                                    id="tags--lactose-free"
                                    name="lactose-free"
                                    className="custom-control__checkbox mr-1"
                                    onChange={this.handlePredefinedTagsChange}
                                    checked={this.state.predefinedTags["lactose-free"]}
                                />
                                <label
                                    className="custom-control__label"
                                    htmlFor="tags--lactose-free"
                                >
                                    Lactose-free
                                </label>
                            </div>

                            <div className="mt-2">
                                <div className="mb-1">
                                    Add your own custom tags in a comma
                                    separated list
                                </div>
                                <input
                                    className="block appearance-none border w-full py-2 px-2 focus:outline-none focus:border-teal"
                                    id="tags--custom"
                                    type="text"
                                    placeholder="spicy, greasy, bitter"
                                    value={this.state.customTags}
                                    onChange={this.handleCustomTagsChange}
                                />
                            </div>
                        </fieldset>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="images">
                            Upload images
                        </label>
                        <input
                            className="block appearance-none border w-full py-2 px-2 focus:outline-none focus:border-teal"
                            type="file"
                            id="images"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            className="block appearance-none border w-full py-2 px-2 focus:outline-none focus:border-teal"
                            id="description"
                            placeholder="Grandma's secret recipe."
                            onChange={this.handleDescriptionChange}
                            value={this.state.description}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="instructions">
                            Instructions
                        </label>
                        <textarea
                            className="block appearance-none border w-full py-2 px-2 focus:outline-none focus:border-teal"
                            id="instructions"
                            placeholder="Do this, do that. That kind of stuff."
                            value={this.state.instructions}
                            onChange={this.handleInstructionsChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="ingredients">
                            Ingredients
                        </label>
                        <div>
                            <CreatableSelect
                                isMulti
                                options={[
                                    {
                                        value: "ocean",
                                        label: "Ocean",
                                        color: "#00B8D9",
                                        isFixed: true
                                    },
                                    {
                                        value: "blue",
                                        label: "Blue",
                                        color: "#0052CC",
                                        disabled: true
                                    },
                                    {
                                        value: "purple",
                                        label: "Purple",
                                        color: "#5243AA"
                                    },
                                    {
                                        value: "red",
                                        label: "Red",
                                        color: "#FF5630",
                                        isFixed: true
                                    },
                                    {
                                        value: "orange",
                                        label: "Orange",
                                        color: "#FF8B00"
                                    },
                                    {
                                        value: "yellow",
                                        label: "Yellow",
                                        color: "#FFC400"
                                    },
                                    {
                                        value: "green",
                                        label: "Green",
                                        color: "#36B37E"
                                    },
                                    {
                                        value: "forest",
                                        label: "Forest",
                                        color: "#00875A"
                                    },
                                    {
                                        value: "slate",
                                        label: "Slate",
                                        color: "#253858"
                                    },
                                    {
                                        value: "silver",
                                        label: "Silver",
                                        color: "#666666"
                                    }
                                ]}
                                theme={theme => ({
                                    ...theme,
                                    borderRadius: 0,
                                    colors: {
                                        ...theme.colors,
                                        primary25: "#a1ded8",
                                        primary: "#4dc0b5"
                                    }
                                })}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="is-public">
                            Is this recipe public?
                        </label>
                        <div className="custom-control flex items-center">
                            <input
                                type="checkbox"
                                id="is-public--public"
                                className="custom-control__checkbox mr-1"
                                onChange={this.handleIsPublicChange}
                                checked={this.state.isPublic}
                            />
                            <label
                                className="custom-control__label"
                                htmlFor="is-public--public"
                            >
                                Make public
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddRecipeForm;

// DONE
// - Refactor component to class based stateful component
// - Store input field values in local state (mostly done)

// TODO
// - Store images and ingredients values in local state
// - Concat predefined and custom tags + do validation on form submit
// - Add react-router as a dependency to
//   1. have this component appear on its own route
//   2. redirect user upon form submission (to all recipes, user profile or to the homepage maybe)
