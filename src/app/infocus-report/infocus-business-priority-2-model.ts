export class InfocusBusinessPriority2Model {
    public placeholder: string = null;
    public options: string = null;
    public optionSelected;

    constructor(placeholder: string, options: string, optionSelected) {
        this.placeholder = placeholder;
        this.options = options;
        this.optionSelected = optionSelected;
    }

}