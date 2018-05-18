export class InfocusBusinessPriority2Model {
    public placeholder: string = null;
    public options: string = null;
    public optionSelected:Function;

    constructor(placeholder: string, options: string, optionSelected:Function) {
        this.placeholder = placeholder;
        this.options = options;
        this.optionSelected = optionSelected;
    }

}