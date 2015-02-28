(function () {
    'use strict';

    /**
     * The ButtonAlignImageLeft class provides functionality for aligning an image on left.
     *
     * @class ButtonAlignImageLeft
     */
    var ButtonAlignImageLeft = React.createClass({
        mixins: [global.ButtonStyle, global.ButtonStateClasses, global.ButtonActionStyle],

        /**
         * Lifecycle. Provides static properties to the widget.
         * - key: The name which will be used as an alias of the button in the configuration.
         */
        statics: {
            key: 'imageLeft'
        },

        /**
         * Lifecycle. Returns the default values of the properties used in the widget.
         */
        getDefaultProps: function() {
            return {
                style: {
                    element: 'img',
                    styles: {
                        float: 'left'
                    }
                }
            };
        },

        /**
         * Lifecycle. Renders the UI of the button.
         *
         * @return {Object} The content which should be rendered.
         */
        render: function() {
            return (
                <button className="alloy-editor-button" data-type="button-align-left" onClick={this.handleClick}>
                    <span className="alloy-editor-icon-align-left"></span>
                </button>
            );
        }
    });

    global.AlloyEditor.Buttons[ButtonAlignImageLeft.key] = global.AlloyEditor.ButtonAlignImageLeft = ButtonAlignImageLeft;
}());